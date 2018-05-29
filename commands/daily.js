const Discord = require('discord.js');
const settings = require('../settings.json');
const moment = require('moment');
const fs = require('fs');
let userdata = JSON.parse(fs.readFileSync('./userdata.json', 'utf8'));
const {RichEmbed} = require('discord.js');

exports.run = (client, message, args) => {
    const sender = message.author;

    if (!userdata[sender.id].lastDaily) userdata[sender.id].lastDaily = 'Pas encore récupéré.';

    if (userdata[sender.id].lastDaily != moment().format('L')) {
        userdata[sender.id].lastDaily = moment().format('L')
        const daily = Math.floor(Math.random() * 500) + 500;
        userdata[sender.id].money += daily;
        const embed = new Discord.RichEmbed()
        .setTitle('Récompense journalière :', sender.displayAvatarURL)
        .addField('Argent gagné :', daily + ' €', true)
        .addField('Argent total :', userdata[sender.id].money + ' €', true);
        message.channel.send({embed});
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'daily',
    description: 'Récupérer votre argent.',
    usage: 'daily'
};