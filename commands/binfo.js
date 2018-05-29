const Discord = require("discord.js");
const package = require("../package.json")
exports.run = (client, message) => {
  let guild = message.guild;
  // message.delete(3000);
  var bpmb = client.ping;
  var bpm = bpmb.toFixed()
  let os = require("os");
  var usageMb = process.memoryUsage().heapUsed / 1024 / 1024;
  var usage = usageMb.toFixed(2);

  /*
    Fetch the client info and parse it into an embed
  */
  const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Informations`, client.user.displayAvatarURL)
    .addField(":heart: BPM", bpm, true)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(3118751)
    .addField("Taille", `${usage}Mo`, true)
    .addField("Discord.js", `${Discord.version}`, true)
    .addField("jake", `${package.version}`, true)
    .addField("npm", `${process.version}`, true)
    .addField("Utilisateurs", `${client.users.size.toLocaleString()}`, true)
    // .addField("Bot Platforn:", os.process.platform(), true)
    .addField("Cliquez sur l'emoji", `[🤖](https://www.google.com)`, true)
    .addField("Salons au total", client.channels.size, true)
    .addField("Serveurs au total", client.guilds.size, true);
  message.channel.send({
    embed
  }).catch(e => logger.error(e))
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'binfo',
    description: 'Affiche les informations sur le bot',
    usage: 'binfo'
};
