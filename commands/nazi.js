exports.run = (client, message, args) => {
  const {RichEmbed} = require('discord.js');
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setDescription('\`\`\`█████░░░░██████████████\n█████░░░░██████████████\n█████░░░░██████████████\n█████░░░░█████░░░░░░░░░\n█████░░░░█████░░░░░░░░░\n███████████████████████\n███████████████████████\n███████████████████████\n░░░░░░░░░█████░░░░█████\n░░░░░░░░░█████░░░░█████\n██████████████░░░░█████\n██████████████░░░░█████\n██████████████░░░░█████\`\`\`');
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nazi',
  description: 'Affiche le symbole nazi.',
  usage: 'nazi'
};
