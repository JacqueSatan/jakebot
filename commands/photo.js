const Discord = require('discord.js');

exports.run = function (client, message) {
    const fetch = require('snekfetch');
    fetch.get('http://www.splashbase.co/api/v1/images/random').then(photo => {
        const embed = new Discord.RichEmbed()
    .setImage(`${photo.body.url}`);
        message.channel.send({embed})
    .catch(e => logger.error(e));
    }).catch(err => {
        if (err) {
            message.channel.send('Quelque chose n\'a pas marché :jacuqes:');
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['p'],
    permLevel: 0
};
  
  exports.help = {
    name: 'photo',
    description: 'Envoit une photo au hasard.',
    usage: 'photo'
};