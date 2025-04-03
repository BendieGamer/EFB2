const play_sound_block = {
  init: function () {
    this.appendDummyInput()
      .appendField('play sound')
      .appendField(new Blockly.FieldTextInput('sound_name'), 'SOUND');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Plays a sound that you have uploaded');
    this.setHelpUrl('');
    this.setColour(160);
  }
};
Blockly.common.defineBlocks({ play_sound_block: play_sound_block });

javascript.javascriptGenerator.forBlock['play_sound_block'] = function (block) {
  const soundFile = block.getFieldValue('sound_name');
  const code = `ModAPI.util.str(`+ soundfile + `});`;
  return code;
}
