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
    message.channel.send(`Mise à jour: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`La commande a bien été mise à jour: ${command}`);
            console.log(chalk.black.bgBlue(`La commande ${command} a été mise à jour par ${message.author.username}.`))
          })
          .catch(e => {
            m.edit(`La mise à jour de la commande a échoué: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Met à jour le fichier de la commande en question si elle a été modifiée.',
  usage: 'reload <nom de la commande>'
};
