const getAvatarUrl = (user) => {
  if (user?.discordAvatar && user?.discordId) {
    return `https://cdn.discordapp.com/avatars/${user.discordId}/${user.discordAvatar}.png`;
  }

  if (user?.googleAvatar) {
    return user.googleAvatar;
  }

  // Fallback padrão
  return "https://cdn.discordapp.com/embed/avatars/0.png";
};

export default getAvatarUrl;
