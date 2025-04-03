PRIMITIVES["SoundUploader"] = {
    name: "Sounds",
    type: "Sound_maker",
    tags: {
        id: "sound_maker",
        name: "Sound",
        sound_name: "example_name",
        sound: VALUE_ENUMS.SOUND,
    },
    getDependencies: function () {
        return [];
    },
    asJavaScript: function () {
        var soundname = this.tags.sound_name;
        var audioBase64 = this.tags.sound;
        return `(function SoundUploaderDatablock() {
            ModAPI.addEventListener("lib:asyncsink", async () => {
                const filePath = \`resourcepacks/AsyncSinkLib/assets/minecraft/sounds/\`${soundName}`.ogg\`;
                
                AsyncSink.setFile(filePath, await (await fetch(\`data:audio/ogg;base64,\`${audioBase64}`\`)).arrayBuffer());
                
                AsyncSink.Audio.register(\`sounds.\`${soundName}`\`, AsyncSink.Audio.Category.ANIMALS, [
                    {
                        path: \`sounds/\`${soundName}`.ogg\`,
                        pitch: 1,
                        volume: 1,
                        streaming: false
                    }
                ]);
            });
        })();`;
    }
}
