const {RichEmbed} = require('discord.js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user) {
        return message.reply('Veuillez mentionner un utilisateur.');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '/' + (mentioneduser.createdAt.getMonth() + 1) + '/' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'N\'est pas en train de jouer.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'N\'a jamais parlé.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    // Let afk;
    // if (user.presence.data.afk === true) {
    //   afk = "✅"
    // } else {
    //   afk = "❌"
    // }
    let stat;
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    if (user.bot === false) {
        bont = 'n\'est pas un bot.'
    } else if (user.bot === true) {
        bont = 'est un bot.'
    }
    const embed = new Discord.RichEmbed()
  .addField('**Informations :**', `**Pseudo :** ${user.username}#${user.discriminator}\n**A rejoint Discord le :** ${joineddiscord}\n**Dernier message envoyé :** ${messag}\n**Joue à :** ${game}\n**Statut :** ${status}\n**Cet utilisateur ** ${bont}\n`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Rôles :`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``' + '\n')
  .addField('Informations Discord :', `**Tag :** ${user.discriminator}\n**ID :** ${user.id}\n**Pseudo :** ${user.username}`)
  .setAuthor(`Informations sur ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
.catch(e => logger.error(e));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'info',
    description: 'Affiche les informations sur un membre.',
    usage: 'info <mention>'
};