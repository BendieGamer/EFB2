const play_sound_block = {
  init: function () {
    this.appendValueInput('SOUND')
            .appendField('play sound');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Plays a sound that you have uploaded');
    this.setHelpUrl('');
    this.setColour(160);
  }
};
Blockly.common.defineBlocks({ play_sound_block: play_sound_block });

javascript.javascriptGenerator.forBlock['play_sound_block'] = function (block) {
  const soundFile = javascript.javascriptGenerator.valueToCode(this, 'SOUND', javascript.Order.ATOMIC);
  const code = `ModAPI.util.str(${soundFile});`;
  return code;
}
