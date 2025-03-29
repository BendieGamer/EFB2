PRIMITIVES["SoundUploader"] = {
    name: "Sound Uploader",
    type: "SoundUploader",
    tags: {
        id: "sound_uploader",
        name: "Sound Uploader",
    },
    getDependencies: function () {
        return [];
    },
    asJavaScript: function (soundName, audioBase64) {
        return `(function SoundUploaderDatablock() {
            ModAPI.addEventListener("lib:asyncsink", async () => {
                const filePath = \`resourcepacks/AsyncSinkLib/assets/minecraft/sounds/\${soundName}.ogg\`;
                
                // Set the sound file
                AsyncSink.setFile(filePath, await (await fetch(\`data:audio/ogg;base64,\${audioBase64}\`)).arrayBuffer());
                
                // Register the sound
                AsyncSink.Audio.register(\`sounds.\${soundName}\`, AsyncSink.Audio.Category.ANIMALS, [
                    {
                        path: \`sounds/\${soundName}.ogg\`,
                        pitch: 1,
                        volume: 1,
                        streaming: false // use for large audio files
                    }
                ]);
            });
        })();`;
    }
}
