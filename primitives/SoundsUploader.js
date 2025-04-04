PRIMITIVES["SoundsUploader"] = {
    name: "SoundsUploader",
    type: "SoundsUploader",
    tags: {
        id: "sound_maker",
        name: "Sound",
        sound_name: "example_name",
        sound: VALUE_ENUMS.SOUND
    },
    getDependencies: function () {
        return [];
    },
    asJavaScript: function () {
        return `(function SoundUploaderDatablock() {
            ModAPI.addEventListener("lib:asyncsink", async () => {
                const filePath = "resourcepacks/AsyncSinkLib/assets/minecraft/sounds/${this.tags.sound_name}.ogg";
                
                AsyncSink.setFile(filePath, await (await fetch("data:audio/ogg;base64, ${this.tags.sound}")).arrayBuffer());
                
                AsyncSink.Audio.register("/sounds/${this.tags.sound_name}, AsyncSink.Audio.Category.ANIMALS, [
                    {
                        path: "sounds/${this.tags.sound_name}.ogg",
                        pitch: 1,
                        volume: 1,
                        streaming: false
                    }
                ]);
            });
        })();`;
    }
}
