
const items_item = {
    init: function () {
        this.appendDummyInput('ITEM')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('item')
            .appendField(new Blockly.FieldMinecraftItemInput(false, true), 'ITEM');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setTooltip('Returns an Item instance (for comparisons)');
        this.setHelpUrl('https://nurmarvin.github.io/Minecraft-1.8-JavaDocs/net/minecraft/item/Item.html');
        this.setColour(225);
    }
};
Blockly.common.defineBlocks({ items_item: items_item });
javascript.javascriptGenerator.forBlock['items_item'] = function () {
    const item_primitive = this.getFieldValue('ITEM');
    const object = {
        type: item_primitive.split("/")[0],
        id: item_primitive.split("/")[1].split("@")[0]
    }
    if (object.type === "item") {
        return [`(ModAPI.items["${object.id}"]?.getRef() || null)`, javascript.Order.NONE]
    } else {
        return [`ModAPI.util.getItemFromBlock(ModAPI.blocks["${object.id}"]?.getRef() || null)`, javascript.Order.NONE]
    }
}

