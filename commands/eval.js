const fs = require('fs');
const Discord = require('discord.js');
const settings = require('../settings.json')

exports.run = (client, message) => {

    function clean(text) {
        if (typeof (text) === 'string') {
            return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
        }
        return text;
    }
    let args = message.content.split(' ').slice(1);
    let cont = message.content.split(' ').slice(1).join(' ');
    message.channel.send('Evaluation en cours...').then(msg => {
        try {
            let code = args.join(' ');
            let evaled = eval(code);

            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }
            if (evaled.length > 2000) {
                try {
                    let evalcode1 = new Discord.RichEmbed()
            .setAuthor(`Évaluation de ${message.author.tag}`)
            .setDescription(`**Entrée :**\n\n\`\`\`js\n${cont}\`\`\``, true)
            .addField(`\u200b`, `**Sortie :**\n\n\`\`\`Sortie trop longue, enregistrée dans ${__dirname}\\eval.txt\`\`\``, true)
            .setColor(0x00FF00)
            .setFooter(`Node.js - Temps pris : ${Date.now() - message.createdTimestamp} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
                    msg.edit({
                        embed: evalcode1
                    });
                    return fs.writeFile(`eval.txt`, `${clean(evaled)}`);
                } catch (err) {
                    let errorcode1 = new Discord.RichEmbed()
            .setAuthor(`Évaluation de ${message.author.tag}`)
            .setDescription(`**Entrée :**\n\n\`\`\`js\n${cont}\`\`\``, true)
            .addField(`\u200b`, `**Sortie :**\n\n\`\`\`js\nSortie trop longue, enregistrée dans ${__dirname}\\eval.txt\`\`\``, true)
            .setColor(0xFF0000)
            .setFooter(`Node.js - Temps pris : ${Date.now() - message.createdTimestamp} ms `, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
                    msg.edit({
                        embed: errorcode1
                    });
                    return fs.writeFile(`eval.txt`, `${clean(err)}`);
                }
            }
            let evalcode = new Discord.RichEmbed()
        .setAuthor(`Évaluation par ${message.author.tag}`)
        .setDescription(`**Entrée :**\n\n\`\`\`js\n${cont}\`\`\``, true)
        .addField(`\u200b`, `**Sortie :**\n\n\`\`\`js\n${clean(evaled)}\`\`\``, true)
        .setColor(0x00FF00)
        .setFooter(`Node.js - Temps pris : ${Date.now() - message.createdTimestamp} ms`, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
            msg.edit({
                embed: evalcode
            }).catch(e => logger.error(e));
        } catch (err) {
            let errorcode = new Discord.RichEmbed()
        .setAuthor(`Évaluation par ${message.author.tag}`, `https://cdn.discordapp.com/emojis/314405560701419520.png`)
        .setDescription(`**Entrée :**\n\n\`\`\`js\n${cont}\`\`\``, true)
        .addField(`\u200b`, `**Sortie :**\`\`\`js\n${clean(err)}\`\`\``, true)
        .setColor(0xFF0000)
        .setFooter(`Node.js - Temps pris : ${Date.now() - message.createdTimestamp} `, `https://images-ext-2.discordapp.net/eyJ1cmwiOiJodHRwczovL2Euc2FmZS5tb2UvVUJFVWwucG5nIn0.LbWCXwiUul3udoS7s20IJYW8xus`);
            msg.edit({
                embed: errorcode
            }).catch(e => logger.error(e));
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};
  
  exports.help = {
    name: 'eval',
    description: 'Jacques se comprend.',
    usage: 'eval'
};
