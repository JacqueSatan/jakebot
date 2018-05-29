const fs = require('fs');
const gutil = require('gulp-util');
const chalk = require('chalk');

exports.run = (client, message, args) => {
    let command;
    if (client.commands.has(args[0])) {
      command = args[0];
    } else if (client.aliases.has(args[0])) {
      command = client.aliases.get(args[0]);
    }
    if (!command) {
      return message.channel.send(`Je ne trouve pas la commande: ${args[0]}`);
    } else {
      message.channel.send(`Suppression : ${command}`)
      fs.unlink(`./commands/${command}.js`)
      message.channel.send(`La commande a bien été supprimée : ${command}`);
       return console.log(chalk.black.bgBlue(`La commande ${command} a été supprimée par ${message.author.username}.`))
    }
    if (command) {
    message.channel.send(`La suppression de la commande a échoué: ${command}\n\`\`\`${e.stack}\`\`\``);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'supprimerlacommande',
    description: 'Supprime une commande.',
    usage: 'supprimerlacommande <nom de la commande>'
  };  