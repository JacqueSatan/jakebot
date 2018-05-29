const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var reg = message.guild.region;
    if (reg === "eu-west") {
        var reg = "Europe de l'ouest";
    };
    var name = message.guild.name;
    var id = message.guild.id;
    var members = message.guild.members.size;
    var channels = message.guild.channels.size;
    var roles = message.guild.roles.map(r => r.name).join(', ');
    var owner = message.guild.owner;
    var age = message.guild.createdAt.getDate() + 1 + '/' + (message.guild.createdAt.getMonth() + 1) + '/' + message.guild.createdAt.getFullYear() + ' | ' + message.guild.createdAt.getHours() + ':' + message.guild.createdAt.getMinutes() + ':' + message.guild.createdAt.getSeconds();
    const embed = new Discord.RichEmbed()
    .setAuthor('Informations sur ' + name, message.guild.IconURL)
    .addField('Propriétaire du serveur :', `${owner}`, true)
    .addField('Nombre de membres :', `${members} Membres au total`, true)
    .addField('Date de création :', age, true)
    .addField('ID du serveur :', id, true)
    .addField('Tous les rôles du serveur :', roles, true)
    .addField('Nombre de salons sur le serveur :', channels, true)
    .setImage(message.guild.iconURL)
    .addField('Région du serveur :', reg, true)
    .addField('Invitation au serveur :', `[Cliquez ici](https://discord.gg/x67GgdG)`, true);
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['si'],
    permLevel: 0
};
  
  exports.help = {
    name: 'sinfo',
    description: 'Affiche quelques informations sur le serveur.',
    usage: 'si'
};