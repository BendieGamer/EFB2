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
Blockly.common.defineBlocks({ play_sound_block: play_sound_block });
javascript.javascriptGenerator.forBlock['play_sound_block'] = function () {
    const soundFile = this.getFieldValue('SOUND');
    return `var audio = new Audio('${soundFile}'); audio.play();\n`;
};

