'use strict';

/**@type {{[k: string]: ModdedItemData}} */
let BattleItems = {
	//saddle item entry
	"saddle": {
		id: "saddle",
        isNonstandard: true,
		name: "Saddle",
		spritenum: 575,
		//checks whether the holder is a pilot or mount to prevent item removal
		onTakeItem: function (source) {
			if (source.baseTemplate.mount == true || source.baseTemplate.pilot == true) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Pilot or Mount Pokemon, it allows the Pokemon to Mount Up with another in battle.",
	},
};

exports.BattleItems = BattleItems;
