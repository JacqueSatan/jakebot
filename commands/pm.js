const {RichEmbed} = require('discord.js');
const settings = require('../settings.json');
const chalk = require('chalk');
exports.run = (client, message, args) => {
    const terf = message.mentions.users.first();
    const pm = args.splice(1, args.length).join(' ');
    if(pm.lenght < 1) return message.reply('Veuillez fournir un message à envoyer.');
    if(!terf) return message.reply('Veuillez fournir l\'identifiant du destinataire.');
    const embed = new RichEmbed()
    .setTimestamp()
    .setTitle("**Message reçu:**")
    .setDescription(`**De la part de __${message.author.username}__:** \n\n   \"${pm}\"\n\nReçu`);
    terf.send({embed});
    message.channel.send(`Message bien envoyé à ${terf.username}.`);
    console.log(chalk.blue(`Un message privé a été envoyé à ${terf.username} par ${message.author.username}: \"${pm}\".`));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  
 exports.help = {
    name: 'pm',
    description: 'Envoie un message privé à l\'utilisateur de votre choix.',
    usage: 'pm <identifiant> <message>'
};
  