const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const settings = require('../settings.json');
const chalk = require('chalk');
exports.run = (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'mod-log');
  const caseNum = caseNumber(client, modlog);
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muet');
  if (!modlog) return message.reply('Je ne trouve pas de salon mod-log.').catch(console.error);
  if (!muteRole) {
    message.guild.createRole({
      name: 'Muet',
    });
    console.log(chalk.green(`Le rôle \"Muet\" a été créé.`));
  };
  if (message.mentions.users.size < 1) return message.reply('Veuillez mentionner le membre à rendre muet.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Non définie.`;
  console.log(chalk.inverse(`Le membre ${user.username} a été rendu muet par ${message.author.username} pour la raiosn suivante: \"${reason}\".`))

  const embed = new RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Un/mute\n**Membre ciblé:** ${user.tag}\n**Modérateur:** ${message.author.tag}\n**Raison:** ${reason}`)
    .setFooter(`Case ${caseNum}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Vous n\'avez pas la permission d\'utiliser cette commande.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Enlève ou redonne la permission d\'écrire au membre mentionné',
  usage: 'un/mute [mention] [raison]'
};
