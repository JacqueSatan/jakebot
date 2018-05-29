const Discord = require('discord.js');

exports.run = function (client, message) {

    let answers = [
        'face',
        'pile',
        'face',
        'pile',
        'face',
        'pile',
        'face',
        'pile',
        'face',
        'pile'
    ];
    let embed = new Discord.RichEmbed()
  .addField('Pile ou face', `${answers[~~(Math.random() * answers.length)]}`);
    message.channel.send({embed}).catch(e => logger.error(e))
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pf'],
    permLevel: 0
};
  
  exports.help = {
    name: 'pileouface',
    description: 'Pile ou face',
    usage: 'pf'
};