const chalk = require('chalk');
exports.run = (client, message, args) => {
  const messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  console.log(chalk.yellow(`${messagecount} messages ont été supprimés.`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Supprime X messages d\'un salon donné.',
  usage: 'purge <nombre>'
};
