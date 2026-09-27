const getGlyph = (message, name) => {
    return message.guild.emojis.cache.find(
        emoji => emoji.name === name
    );
};

export default getGlyph;