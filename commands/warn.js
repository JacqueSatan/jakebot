const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const settings = require('../settings.json');
const chalk = require('chalk');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'mod-log');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('Je ne trouve pas de channel mod-log.');
  if (message.mentions.users.size < 1) return message.reply('Veuillez mentionner l\'utiliateur à prévenir.').catch(console.error);

  const reason = args.splice(1, args.length).join(' ') || `Veuillez fournir une raison. Utilisez ${settings.prefix}reason ${caseNum} <raison>.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Prévention\n**Membre ciblé:** ${user.tag}\n**Modérateur:** ${message.author.tag}\n**Raison:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
  console.log(chalk.yellow(`L'utilisateur ${user.username} a été prévenu par ${message.author.username}`));
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Prévient un utilisateur.',
  usage: 'warn [mention] [raison]'
};
