const processCommand = async (message, input) => {
    console.log("at processCommand");
    console.log("input: ", input);
    
    const [command, destination] = input.trim().split(/\s+/);

    if (command !== "glyphs") return;
    if (!destination) return;

    if (destination === "alliance") {
        await message.channel.send(
            ":Glyph2::Glyph1::Glyph1::Glyph5::Glyph1::Glyph1::Glyph15::Glyph16::Glyph2::Glyph10::Glyph5::Glyph3:"
        );
    }
}

export default processCommand;