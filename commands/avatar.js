const {RichEmbed} = require('discord.js');

exports.run = (client, message, args) => {
    const odore = message.author.avatarURL
    const embed = new RichEmbed()
    .setColor(51455)
    .setImage(odore)
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['avt'],
    permLevel: 0
};

exports.help = {
    name: 'avatar',
    description: 'Afficeh l\'avatar du membre mentionné.',
    usage: 'avatar <mention>'
};