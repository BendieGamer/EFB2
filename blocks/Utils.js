const logic_a_or_b = {
    init: function () {
        this.appendValueInput('A')
            .setAlign(Blockly.inputs.Align.RIGHT);
        this.appendValueInput('B')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('otherwise');
        this.setInputsInline(true)
        this.setOutput(true, null);
        this.setTooltip('Uses the first value if it exists, otherwise uses the second value. (JavaScript ?? operator)');
        this.setHelpUrl('');
        this.setColour(210);
    }
};
Blockly.common.defineBlocks({ logic_a_or_b: logic_a_or_b });
javascript.javascriptGenerator.forBlock['logic_a_or_b'] = function () {
    const value_a = javascript.javascriptGenerator.valueToCode(this, 'A', javascript.Order.ATOMIC);
    const value_b = javascript.javascriptGenerator.valueToCode(this, 'B', javascript.Order.ATOMIC);
    const code = `((${value_a})??(${value_b}))`;
    return [code, javascript.Order.NONE];
}
const proc_wait = {
    init: function () {
        this.appendValueInput('VALUE')
            .appendField('synchronous wait');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('waits set amount of time');
        this.setHelpUrl('');
        this.setColour(255);
    }
};
Blockly.common.defineBlocks({ proc_wait: proc_wait });

javascript.javascriptGenerator.forBlock['proc_wait'] = function () {
     const value = javascript.javascriptGenerator.valueToCode(this, 'VALUE', javascript.Order.ATOMIC);
     const code = `
        var start = Date.now();
        var current = start;
        while (current - start < (${value} * 1000)) {
            current = Date.now();
        };
     `;
     return code;
}
const list_includes = {
    init: function () {
        this.appendValueInput('LIST')
            .setCheck('Array')
            .appendField('list');
        this.appendValueInput('VALUE')
            .appendField('includes');
        this.setInputsInline(true)
        this.setOutput(true, 'Boolean');
        this.setTooltip('Checks if a list contains an item.');
        this.setHelpUrl('');
        this.setColour(255);
    }
};
Blockly.common.defineBlocks({ list_includes: list_includes });

javascript.javascriptGenerator.forBlock['list_includes'] = function () {
    const value_list = javascript.javascriptGenerator.valueToCode(this, 'LIST', javascript.Order.ATOMIC);
    const value_value = javascript.javascriptGenerator.valueToCode(this, 'VALUE', javascript.Order.ATOMIC);
    const code = `${value_list}.includes(${value_value})`;
    return [code, javascript.Order.NONE];
}
