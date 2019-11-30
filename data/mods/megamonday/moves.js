/*

List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.

Added for SMM Mod:

beak: Power is multiplied by 1.3 when used by a Pokemon with the Honed Beak Ability.
order: Priority +1 with Royal Command
light: Does half damage against Pokemon with the Shining Armor ability

Modified for SMM Mod:

sound: Become Steel type with Silvertongue Ability, 1.3x damage with Cacophany
punch: Can cause Sleep with Knockout Ability
contact: Crits with Piercing Claws

*/
'use strict';

/**@type {{[k: string]: ModdedMoveData}} */ 
let BattleMovedex = {
    // /u/captainfantastic's Improved Malicious Moonsault:https://www.reddit.com/r/stunfisk/comments/76nbiy/muse_monday_improving_special_zmoves/dohwbbl/
    "maliciousmoonsault": {
		inherit: true,
		onHit: function (target, source) {
			target.addVolatile('taunt', source);
		},
    },

    // /u/TheLaughingCat2's Kinglerium Z:https://old.reddit.com/r/stunfisk/comments/8l1iwe/muse_monday_kanto_zmoves/dzc3c09/
    "crushingcrabclobbering": {
		num: 728,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		shortDesc: "Maximises the user's Special Defense and minimises the target's Defense.",
		id: "crushingcrabclobbering",
		name: "Crushing Crab Clobbering",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		selfBoost: {
			boosts: {
				spd: 12,
			},
		},
		isZ: "kingleriumz",
		secondary: {
			chance: 100,
			boosts: {
				def: -12,
			}
		},
		target: "normal",
		type: "Water",
		contestType: "Tough",
    },

    // /u/Sandman4999's Slakingium Z:https://www.reddit.com/r/stunfisk/comments/6wfvv0/muse_monday_hoenn_zmoves/dm7ztzh/
    "youthfulvigor": {
		num: 728,
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Supresses the user's ability and sharply raises its Attack and Speed.",
		id: "youthfulvigor",
		name: "Youthful Vigor",
		pp: 1,
		priority: 0,
		flags: {},
		self: {
			volatileStatus: 'gastroacid',
		},
		selfBoost: {
			boosts: {
				atk: 2,
				spe: 2,
			},
		},
		isZ: "slakingiumz",
		target: "self",
		type: "Normal",
		contestType: "Cute",
    },

    // /u/Vitton's Goodrium Z:https://www.reddit.com/r/stunfisk/comments/7qhewa/muse_monday_kalos_zcrystals/dsp923n/
    "draconiandownpour": {
		num: 728,
		accuracy: true,
		basePower: 160,
		category: "Special",
		shortDesc: "Activates Rain and adds Water type to all adjacent Pokemon.",
		id: "draconiandownpour",
		name: "Draconian Downpour",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "goodriumz",
		secondary: {
			chance: 100,
			onHit: function (target, source) {
				if (target.hasType('Water')) return false;
				if (!target.addType('Water')) return false;
				this.add('-start', target, 'typeadd', 'Water', '[from] move: Draconian Downpour');
				for (const ally of target.side.active) {
					if (ally && this.isAdjacent(target, ally)) {
						if (target.hasType('Water')) return false;
						if (!target.addType('Water')) return false;
						this.add('-start', target, 'typeadd', 'Water', '[from] move: Draconian Downpour');
					}
				}
			},
			self: {
				onHit: function (pokemon, source) {
                    this.setWeather('raindance');
                    if (pokemon.hasType('Water')) return false;
                    if (!pokemon.addType('Water')) return false;
                    this.add('-start', pokemon, 'typeadd', 'Water', '[from] move: Draconian Downpour');
                    for (const ally of pokemon.side.active) {
                        if (ally && this.isAdjacent(pokemon, ally)) {
                            if (pokemon.hasType('Water')) return false;
                            if (!pokemon.addType('Water')) return false;
                            this.add('-start', pokemon, 'typeadd', 'Water', '[from] move: Draconian Downpour');
                        }
                    }
                },
			},
		},
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
    },
    
    // /u/IllogicalMind's Mega Delibird:https://www.reddit.com/r/stunfisk/comments/3xpo6r/mega_monday_delibird_and_stantler/cy6rcws
    "christmasbomb": {
		num: 728,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "christmasbomb",
		isViable: true,
		name: "Christmas Bomb",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMovePower: 160,
		contestType: "Tough",
	},
    "christmaswhip": {
		num: 728,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "christmaswhip",
		isViable: true,
		name: "Christmas Whip",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 190,
		contestType: "Tough",
	},
    "icetempest": {
		num: 728,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		id: "icetempest",
		isViable: true,
		name: "Ice Tempest",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Ice",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	
    // /u/LaserBatman's Mega Zoroark:https://www.reddit.com/r/stunfisk/comments/56q4yh/mostly_mega_monday_beheeyem_and_zoroark/d8mc0ws/
    "smokebomb": {
		num: 728,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
		shortDesc: "User switches out after damaging the target.",
		id: "smokebomb",
		isViable: true,
		name: "Smoke Bomb",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 140,
		contestType: "Cool",
	},
    
	// /u/LaserBatman's Mega Kommo-o:https://www.reddit.com/r/stunfisk/comments/5tq4wn/mega_monday_kommoo_and_goodra/ddodzex/
	"aurorabeam": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"dazzlinggleam": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"flashcannon": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"fleurcannon": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"judgment": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"lightofruin": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"moonblast": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"moongeistbeam": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"prismaticlaser": {
		inherit: true,
		flags: {recharge: 1, protect: 1, mirror: 1, light: 1},
	},
    "signalbeam": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	"solarbeam": {
		inherit: true,
		flags: {charge: 1, protect: 1, mirror: 1, light: 1},
	},
	"technoblast": {
		inherit: true,
		flags: {protect: 1, mirror: 1, light: 1},
	},
	
	// /u/colonelxsuezo's Mega Fearow:https://www.reddit.com/r/stunfisk/comments/4hhrea/mega_monday_fearow_and_slowking/d2pqxok/
	"drillpeck": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, beak: 1},
	},
	"drillrun": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, beak:1},
	},
	"peck": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, beak: 1},
	},
	"pluck": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, beak: 1},
	},
	"hornattack": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, beak: 1},
	},
	"megahorn": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, beak: 1},
	},
	"furyattack": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, beak: 1},
	},
	"leechlife": {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1, beak: 1},
	},
	
	// /u/NebulonsStyle's Mega Vespiquen:https://www.reddit.com/r/stunfisk/comments/4mskyd/mega_monday_vileplume_and_vespiquen/d3y0r78
	"attackorder": {
		inherit: true,
		flags: {protect: 1, mirror: 1, order: 1},
	},
	"defendorder": {
		inherit: true,
		flags: {snatch: 1, order: 1},
	},
	"healorder": {
		inherit: true,
		flags: {snatch: 1, heal: 1, order: 1},
	},
	
	//Pursuit workaround for Tap Out
	"pursuit": {
		inherit: true,
		basePowerCallback: function (pokemon, target, move) {
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack && !target.hasAbility('tapout')) {
				this.debug('Pursuit damage boost');
				return move.basePower * 2;
			}
			return move.basePower;
		},
	},
};

exports.BattleMovedex = BattleMovedex;