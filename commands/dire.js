exports.run = (client, message, args) => {
    const mess = args.splice(0, args.length).join(' ') || `T'as oublié de mettre le message ${message.author.username} sale pd`;
    const chalk = require('chalk');
    message.delete();
    message.channel.send(mess);
    if (mess !== `T'as oublié de mettre le message ${message.author.username} sale pd`) {
        console.log(chalk.black.bgWhite(`Message envoyé par ${message.author.username} : ${mess}`));
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'dire',
    description: 'Répète un message.',
    usage: 'dire <message>'
};