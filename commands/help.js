const {RichEmbed} = require('discord.js')
const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const embed = new RichEmbed()
    .setColor(0150200)
    .setAuthor('Page d\'aide de jake')
    .addBlankField()
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL)
    .addField(' Configuration du bot ', '\
` dda       | Affiche le temps d\'activité du bot.`\n\
` eval      | Teste un code.`\n\
` prefix    | Change le préfixe.`\n\
` reload    | Recharge une commande.`\n\
` suppr     | Supprime une commande.`', true)
    .addBlankField()
    .addField(' Modération ', '\
` ban       | Bannit le membre mentionné.`\n\
` kick      | Expulse le membre mentionné.`\n\
` lockdown  | Bloque tous les messages d\'un salon.`\n\
` mute      | Rend muet l\'utilisateur mentionné.`\n\
` purge     | Supprime un nombre donné de messages.`\n\
` reason    | Change la raison d\'une action.`\n\
` unban     | Débannit un utilisateur.`\n\
` warn      | Prévient un utilisateur.`', true)
    .addBlankField()
    .addField(' Autres ', '\
` avatar     | Affiche l\'avatar du membre mentionné.`\n\
` binfo      | Affiche quelques informations sur le bot.`\n\
` caca       | Affiche une image de caca.`\n\
` dire       | Fait répéter un message.`\n\
` help       | Affiche l\'aide d\'une commande.`\n\
` info       | Affiche quelques informations sur le membre mentionné.`\n\
` nazi       | Affiche le symbole nazi.`\n\
` photo      | Affiche une photo au hasard.`\n\
` pf         | Jouer à pile ou face.`\n\
` pm         | Envoie un message privé à un utilisateur.`\n\
` sinfo      | Affiche quelques informations sur le serveur.`\n\
` yomama     | Affiche une sage citation sur Yo Mama.`')
    .addBlankField()
    .setFooter('Demmandé par ' + message.author.tag, message.author.displayAvatarURL);
    return message.channel.send({embed});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const embed = new RichEmbed()
      .setColor(103420)
      .setThumbnail(client.user.displayAvatarURL)
      .setFooter('Demmandé par ' + message.author.tag, message.author.displayAvatarURL)
      .addField('Aide : ' + command.help.name, true)
      .addBlankField()
      .addField('Description :', command.help.description, true)
      .addBlankField()
      .addField('Utilisation :', settings.prefix + command.help.usage, true)
      .addBlankField();
      return message.channel.send({embed});
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Montre toutes les commandes accessibles à votre niveau.',
  usage: 'help [commande]'
};