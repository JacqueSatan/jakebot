exports.run = (client, message, args) => {
  const fs = require('fs');
  const settings = require("../settings.json");
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  settings.prefix = newPrefix;
  message.channel.send('Préfixe changé en ' + settings.prefix + '.');
  fs.writeFile("../settings.json", JSON.stringify(settings), (err) => console.error)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['np'],
  permLevel: 4
};

exports.help = {
  name: 'prefix',
  description: 'Change le préfixe du bot.',
  usage: 'prefix <nouveau préfixe>'
};
