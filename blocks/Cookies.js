
const var_cookie_edit = {
    init: function () {
        this.appendValueInput('VALUE')
            .appendField('synchronous wait');
        this.appendValueInput('NAME')
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Waits set amount of time. Synchronous: (no frames or otehr code can be run while this is waiting)');
        this.setHelpUrl('');
        this.setColour(990);
    }
};
Blockly.common.defineBlocks({ var_cookie_edit: var_cookie_edit });

javascript.javascriptGenerator.forBlock['var_cookie_edit'] = function () {
    const value = javascript.javascriptGenerator.valueToCode(this, 'VALUE', javascript.Order.ATOMIC);
    const name = javascript.javascriptGenerator.valueToCode(this, 'NAME', javascript.Order.ATOMIC);
    const code = `
        document.cookie = "${name}=${value}; path=/;";
     `;
    return code;
}
