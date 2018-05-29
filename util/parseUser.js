exports.parseUser = (message, user) => {
  const member = message.guild.member(user) || null;
  if (user.id === message.author.id) {
    return message.channel.send('Vous ne pouvez pas vous faire ça.');
  } else if (member) {
    if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('Vous ne pouvez pas faire ça à ce membre.');
  }
  return user;
};