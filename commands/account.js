const fs = require('fs');
const Discord = require('discord.js');
const settings = require('../settings.json')
const {RichEmbed} = require('discord.js');
let userdata = JSON.parse(fs.readFileSync('./userdata.json', 'utf8'));
exports.run = (client, message, args, userdata) => {
    let sender = message.author;
    if (!userdata[message.author.id]) userdata[sender.id] = {}
    if (!userdata[message.author.id].money) userdata[sender.id].money = 1000
    fs.writeFile('../userdata.json', JSON.stringify(userdata), (err) => {
        if (err) console.error(err);
    })

    const embed = new Discord.RichEmbed()
    .setThumbnail(sender.displayAvatarURL)
    .setTitle(':bank: Banque')
    .setColor(0xF1C40F)
    .addField(':bust_in_silhouette: Compte de :', sender.username, true)
    .addField(':moneybag: Argent sur le compte :', userdata[sender.id].money + ' €', true);
    message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bal', 'money'],
    permLevel: 0
};
  
  exports.help = {
    name: 'account',
    description: 'Montre le compte bancaire.',
    usage: 'account, bal, money'
};