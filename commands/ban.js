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
  if (!modlog) return message.reply('Je ne trouve pas de salon mod-log.');
  if (message.mentions.users.size < 1) return message.reply('Veuillez mentionner le membre à bannir.').catch(console.error);
  message.guild.ban(user, 2);
  console.log(chalk.black.bgRed(`Le membre ${user.username} a été banni par ${message.author.username} pour la raison suivante: \.${reason}\".`));

  const reason = args.splice(1, args.length).join(' ') || `Veuillez fournir une raison. Utilisez ${settings.prefix}reason ${caseNum} <raison>.`;

  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Ban\n**Membre ciblé:** ${user.tag}\n**Modérateur:** ${message.author.tag}\n**Raison:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bannit le membre mentionné.',
  usage: 'ban [mention] [reason]'
};
