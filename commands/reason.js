const settings = require('../settings.json');

function embedSan(embed) {
  embed.message ? delete embed.message : null;
  embed.footer ? delete embed.footer.embed : null;
  embed.provider ? delete embed.provider.embed : null;
  embed.thumbnail ? delete embed.thumbnail.embed : null;
  embed.image ? delete embed.image.embed : null;
  embed.author ? delete embed.author.embed : null;
  embed.fields ? embed.fields.forEach(f => {delete f.embed;}) : null;
  return embed;
}

exports.run = (client, message, args) => {
  const modlog = client.channels.find('name', 'mod-log');
  const caseNumber = args.shift();
  const newReason = args.join(' ');

  modlog.fetchMessages({limit:100}).then((messages) => {
    const caseLog = messages.filter(m => m.author.id === client.user.id &&
      m.embeds[0] &&
      m.embeds[0].type === 'rich' &&
      m.embeds[0].footer &&
      m.embeds[0].footer.text.startsWith('Cas') &&
      m.embeds[0].footer.text === `Cas ${caseNumber}`
    ).first();
    modlog.fetchMessage(caseLog.id).then(logMsg => {
      const embed = logMsg.embeds[0];
      embedSan(embed);
      embed.description = embed.description.replace(`Veuillez fournir une raison. Utilisez ${settings.prefix}reason ${caseNumber} <raison>.`, newReason);
      logMsg.edit({embed});
    });
  });
};

exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'reason',
  description: 'Met à jour la raison d\'une action.',
  usage: 'reason <numéro du cas> <nouvelle raison>'
};
