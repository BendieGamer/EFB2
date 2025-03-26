const play_sound_block = {
    init: function () {
        this.appendDummyInput()
            .appendField('play sound')
            .appendField(new Blockly.FieldTextInput('sound.ogg'), 'SOUND');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Plays a sound');
        this.setHelpUrl('');
    }
};
Blockly.defineBlocksWithJsonArray([
    {
        "type": "play_sound_block",
        "message0": "play sound %1",
        "args0": [
            {
                "type": "field_input",
                "name": "SOUND",
                "text": "sound.ogg"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Plays a sound",
        "helpUrl": ""
    }
]);

javascript.javascriptGenerator.forBlock['play_sound_block'] = function (block) {
    const soundFile = block.getFieldValue('SOUND');
    const code = `var audio = new Audio('${soundFile}'); audio.play();\n`;
    return code;
};
