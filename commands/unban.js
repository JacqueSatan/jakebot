const {RichEmbed} = require('discord.js');
exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = args[0];
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Je ne trouve pas de salon mod-log.');
  if (reason.length < 1) return message.reply('Veuillez fournir une raison.');
  if (!user) return message.reply('Veuillez fournir l\'identifiant de l\'utilisateur à débannir.').catch(console.error);
  message.guild.unban(user);

  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Déban\n**Membre ciblé:** ${user.tag}\n**Modérateur:** ${message.author.tag}\n**Raison:** ${reason}`)
  .setFooter(`Cas ${caseNum}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Débannit un utilisateur.',
  usage: 'unban [mention] [raison]'
};
