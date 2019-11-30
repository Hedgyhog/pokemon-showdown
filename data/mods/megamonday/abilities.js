'use strict';

/**@type {{[k: string]: ModdedAbilityData}} */ 
let BattleAbilities = {
	
	"disguise": {
		desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.",
		shortDesc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage.",
		onDamagePriority: 1,
		onDamage: function (damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && ['mimikyu', 'mimikyutotem', 'sudowoodomega', 'froslassmega'].includes(target.template.speciesid) && !target.transformed) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectData.busted = true;
				return 0;
			}
		},
		onEffectiveness: function (typeMod, target, type, move) {
			if (!this.activeTarget) return;
			let pokemon = this.activeTarget;
			if (!['mimikyu', 'mimikyutotem', 'sudowoodomega', 'froslassmega'].includes(pokemon.template.speciesid) || pokemon.transformed || (pokemon.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates))) return;
			if (!pokemon.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate: function (pokemon) {
			if (['mimikyu', 'mimikyutotem', 'sudowoodomega', 'froslassmega'].includes(pokemon.template.speciesid) && this.effectData.busted) {
				let templateid = pokemon.template.speciesid === 'sudowoodomega' ? 'Sudowoodo-Busted-Mega' : 'froslassmega' ? 'Froslass-Busted-Mega' : 'mimikyutotem' ? 'Mimikyu-Busted-Totem' : 'Mimikyu-Busted';
				pokemon.formeChange(templateid, this.effect, true);
			}
		},
		id: "disguise",
		name: "Disguise",
		rating: 4,
		num: 209,
	},
	
	// /u/L0RDR0B's Mega Empoleon:https://www.reddit.com/r/stunfisk/comments/4ihxst/mega_monday_torterra_infernape_and_empoleon/d2ybi63
    "conqueror": {
		shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",
		onModifyDamage: function (damage, source, target, move) {
			if (move.typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(2);
			}
		},
		id: "conqueror",
		isNonstandard: true,
		name: "Conqueror",
		rating: 3.5,
		num: -300,
	},
    
    // /u/PrisonerLeet's Mega Drapion Y:https://www.reddit.com/r/stunfisk/comments/6zfu6v/mega_monday_drapion_and_toxicroak/dmuwpz7/
	"piercingclaws": {
		shortDesc: "This Pokemon's attacks are critical hits if the attack makes contact.",	
		onModifyMove: function (move) {
			if (move.flags['contact']) {
				move.willCrit = true;
			}
		},
		id: "piercingclaws",
        isNonstandard: true,
		name: "Piercing Claws",
		rating: 4,
		num: -301,
    },
        
    // /u/colonelxsuezo's Mega Fearow:https://www.reddit.com/r/stunfisk/comments/4hhrea/mega_monday_fearow_and_slowking/d2pqxok/
	"honedbeak": {
		desc: "This Pokemon's beak-based attacks have their power multiplied by 1.3.",
		shortDesc: "This Pokemon's beak-based attacks have 1.3x power.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags['beak']) {
				return this.chainModify(1.3);
			}
		},
		id: "honedbeak",
        isNonstandard: true,
		name: "Honed Beak",
		rating: 3,
		num: -302,
	},
        
    // /u/awkward____silence's Mega Hitmonchan:https://www.reddit.com/r/stunfisk/comments/49cfsi/mega_monday_hitmonlee_hitmonchan_hitmontop/d0qt6ti
	"knockout": {
		shortDesc: "This Pokemon's punching moves have a 30% chance of putting the opponent to sleep.",
		onModifyMove: function (move) {
			if (!move || !move.flags['punch']) return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'slp',
				ability: this.getAbility('knockout'),
			});
		},
		id: "knockout",
		isNonstandard: true,
        name: "Knockout",
		rating: 5,
		num: -303,
    },
	
	// /u/PrisonerLeet's Mega Chimecho:https://www.reddit.com/r/stunfisk/comments/72cuut/mega_monday_hypno_and_chimecho/dni0nzf/
	"silvertongue": {
		desc: "This Pokemon's sound-based moves become Steel-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Steel type.",	
		onModifyMovePriority: -1,
		onModifyMove: function (move) {	
			if (move.flags['sound']) {
				move.type = 'Steel';
			}
		},
		id: "silvertongue",
        isNonstandard: true,
		name: "Silvertongue",
		rating: 2.5,
		num: -304,
    },
	
	// /u/L0RDRB's Mega Bouffalant:https://www.reddit.com/r/stunfisk/comments/4dauwb/mega_monday_bouffalant_and_hippowdon/d1papat/
    "stampede": {
		shortDesc: "This Pokemon's Speed is raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint: function (target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spe: 1}, source);
			}
		},
		id: "stampede",
        isNonstandard: true,
		name: "Stampede",
		rating: 3.5,
		num: -305,
    },
	
	// /u/L0RDR0B's Mega Kricketune:https://www.reddit.com/r/stunfisk/comments/69vv66/mega_monday_kricketune_and_golisopod/dhahqmq/
    "cacophony": {
		shortDesc: "This Pokemon's sound-based moves have their power multiplied by 1.3.",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {	
			if (move.flags['sound']) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "cacophony",
        isNonstandard: true,
		name: "Cacophany",
		rating: 2.5,
		num: -306,
    },
	
	// /u/Fatalis13's Mega Golurk Y:https://www.reddit.com/r/stunfisk/comments/6p549i/mega_monday_golurk_and_krookodile/dknagx2/
    "poltergize": {
        shortDesc: "This Pokemon's Normal-type moves become Ghost type and have 1.2x power.",
        onModifyMovePriority: -1,
        onModifyMove: function (move, pokemon) {
            if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
                move.type = 'Ghost';
                move.poltergizeBoosted = true;
            }
        },
        onBasePowerPriority: 8,
        onBasePower: function (basePower, pokemon, target, move) {
            if (move.poltergizeBoosted) return this.chainModify([0x1333, 0x1000]);
        },
        id: "poltergize",
        isNonstandard: true,
        name: "Poltergize",
        rating: 4,
        num: -307,
    },
	
	// /u/LaserBatman's Mega Kommo-o:https://www.reddit.com/r/stunfisk/comments/5tq4wn/mega_monday_kommoo_and_goodra/ddodzex/
    "shiningarmor": {
		shortDesc: "This Pokemon takes half damage from light-based moves.",
		onBasePowerPriority: 7,
		onSourceBasePower: function (basePower, attacker, defender, move) {	
			if (move.flags['light']) {
				return this.chainModify(0.5);
			}
		},
		id: "shiningarmor",
        isNonstandard: true,
		name: "Shining Armor",
		rating: 2,
		num: -308,
    },
	
	// /u/catsNpokemon's Mega Mudsdale:https://www.reddit.com/r/stunfisk/comments/7vfkqy/mega_monday_toucannon_and_mudsdale/dtrypwz/
    "thickmud": {
		shortDesc: "The power of Water and Flying type attacks against this Pokemon are halved.",
		onBasePowerPriority: 7,
		onSourceBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Water' || move.type === "Flying") {
				return this.chainModify(0.5);
			}
		},
		id: "thickmud",
        isNonstandard: true,
		name: "Thick Mud",
		rating: 3.5,
		num: -309,
    },
	
	// /u/catsNpokemon's Mega Golisopod:https://www.reddit.com/r/stunfisk/comments/8atw28/mega_monday_golisopod_and_crabominable/dx1vw6e/
    //not working (use uturn and voltswitch?)
	"wisewithdrawal": {
		shortDesc: "This Pokemon switches out when it lands an attack.",	
		onModifyMove: function (move) {
			move.selfSwitch = true;
		},
		id: "wisewithdrawal",
        isNonstandard: true,
		name: "Wise Withdrawal",
		rating: 2,
		num: -310,
    },
	
	// /u/FishFilletShow's Mega Musharna:https://www.reddit.com/r/stunfisk/comments/3r6a41/mega_monday_chimecho_and_musharna/cwlmlt2
    "dreamhaze": {
		shortDesc: "On switch-in, eliminates all stat changes.",
		onStart: function (pokemon) {
			onHitField: {
				this.add('-clearallboost');
				for (const side of this.sides) {
					for (const pokemon of side.active) {
						if (pokemon && pokemon.isActive) pokemon.clearBoosts();
					}
				}
			}
		},
		id: "dreamhaze",
        isNonstandard: true,
		name: "Dream Haze",
		rating: 3,
		num: -311,
    },
    
	// /u/DbuggerS's Mega Heatran:https://www.reddit.com/r/stunfisk/comments/6nptuj/mega_monday_heatran_and_volcanion/dkbiuc3/
    "steelforger": {
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity. This Pokemon's Steel attacks do 1.5x damage.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelforger1 boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelforger1 boost');
				return this.chainModify(1.5);
			}
		},
        onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[msg]', '[from] ability: Steelforger');
				}
				return null;
			}
		},
		onEnd: function (pokemon) {
			pokemon.removeVolatile('flashfire');
        },
		effect: {	
		noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk: function (atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Steelforger2 boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA: function (atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Steelforger2 boost');
					return this.chainModify(1.5);
				}
			},
			onEnd: function (target) {
				this.add('-end', target, 'ability: Steelforger', '[silent]');
			},
		},
		id: "steelforger",
        isNonstandard: true,
		name: "Steelforger",
		rating: 4,
		num: -312,
    },
    
	// /u/Heycanwenot's Mega Oricorio:https://www.reddit.com/r/stunfisk/comments/6i3s4t/mega_monday_oricorio/dj3cgmx/
	"fancytwirl": {
		desc: "Dance moves used by this Pokemon clear hazards; after another Pokemon uses a dance move, this Pokemon uses the same move.",
		shortDesc: "After another Pokemon uses a dance move, this Pokemon uses the same move. It also clears hazards",
		// Implemented partially in runMove in scripts.js akin to Dancer
		onSourceHit: function (target, source, move) {
			if (move.flags['dance']) {
				if (source.hp && source.removeVolatile('leechseed')) {
					this.add('-end', source, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + source);
				}
				let sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
				for (const condition of sideConditions) {
					if (source.hp && source.side.removeSideCondition(condition)) {
						this.add('-sideend', source.side, this.getEffect(condition).name, '[from] move: Rapid Spin', '[of] ' + source);
					}
				}
				if (source.hp && source.volatiles['partiallytrapped']) {
					source.removeVolatile('partiallytrapped');
				}
			}
		},
        id: "fancytwirl",
        isNonstandard: true,
		name: "Fancy Twirl",
		rating: 5,
		num: -313,
    },
    
	// /u/PrisonerLeet's Mega Incineroar Y:https://www.reddit.com/r/stunfisk/comments/917pck/muse_monday_alolan_starters/e2w2hp4/
	"tapout": {
		shortDesc: "This Pokémon and its replacement receives 1/2 damage from moves when switching in.",
		onSwitchIn: function (source, side) {
			source.side.addSideCondition('tapout', source);
		},
		onSwitchOut: function (source, side) {
			source.side.addSideCondition('tapout', source);
		},
		effect: {
			duration: 1,
			onAnyModifyDamage: function (damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target) {
					return this.chainModify(0.5);
				}
			},
			onDamage: function (damage, target, source, effect) {
				if (effect && effect.id === 'stealthrock' || effect.id === 'spikes') {
					return this.chainModify(0.5);;
			}	
			},
		},
		id: "tapout",
        isNonstandard: true,
		name: "Tap Out",
		rating: 5,
		num: -314,
    },
	
	// /u/NebulonsStyle's Mega Vespiquen:https://www.reddit.com/r/stunfisk/comments/4mskyd/mega_monday_vileplume_and_vespiquen/d3y0r78
	"royalcommand": {
		shortDesc: "This Pokemon's Order moves have their priority increased by 1.",
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.flags['order']) return priority + 1;
		},
		id: "royalcommand",
        isNonstandard: true,
		name: "Royal Command",
		rating: 3,
		num: -315,
    },
	
	// /u/mjmanella's Mega Plusle and Minun:https://www.reddit.com/r/stunfisk/comments/98tp2h/mega_monday_plusle_and_minun/e4ipzn8/
	"zburst": {
		shortDesc: "This Pokemon's team can use Z-Moves twice instead of once.",
		id: "zburst",
        isNonstandard: true,
		name: "Z-Burst",
		rating: 5,
		num: -316,
    },
	"megaburst": {
		shortDesc: "This Pokemon's team can Mega Evolve twice instead of once.",
		id: "megaburst",
        isNonstandard: true,
		name: "Mega Burst",
		// implemented in scripts.js, but not optimally
		rating: 4,
		num: -317,
    },
	
	// /u/Mega Missingno's Mega Registeel:https://www.reddit.com/r/stunfisk/comments/3nj2g8/mega_monday_regirock_registeel_regice/cvoqpec/
    "gravitationalforce": {
        desc: "As it switches in, this Pokemon summons Gravity.",
        shortDesc: "On switch-in, this Pokemon Summons Gravity.",
        onStart: function (target, source) {
            this.addPseudoWeather('gravity', source);
        },
        id: "gravitationalforce",
		isNonstandard: true,
        name: "Gravitational Force",
        rating: 3,
        num: -318,
    },
            
    // /u/L0RDR0B's Primal Lunala:https://www.reddit.com/r/stunfisk/comments/5xtsjc/muse_monday_solgaleo_and_lunala/deleurv/
    //still has issues with turn counter, but fully functional
	"lunarshift": {
        shortDesc: "On switch-in, gravity begins until this Ability is not active in battle.",
		onStart: function () {
			this.add('-fieldstart', 'ability: Lunar Shift');
		},
		onModifyAccuracy: function (accuracy) {
			if (typeof accuracy !== 'number') return;
			return accuracy * 5 / 3;
		},
		onDisableMove: function (pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (this.getMove(moveSlot.id).flags['gravity']) {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		onBeforeMovePriority: 6,
		onBeforeMove: function (pokemon, target, move) {
			if (move.flags['gravity']) {
				this.add('cant', pokemon, 'ability: Lunar Shift', move);
				return false;
			}
		},
		onResidualOrder: 5,
        onResidual: function () {
            this.add('-fieldstart', 'Gravity', '[upkeep]');
        },
        onEnd: function () {
            this.add('-fieldend', 'Gravity');
        },
        id: "lunarshift",
		isNonstandard: true,
        name: "Lunar Shift",
        rating: 4,
        num: -319,
    },
            
    // /u/IllogicalMind's Mega Cherrim:https://www.reddit.com/r/stunfisk/comments/3wqh42/mega_monday_cherrim_and_bellosom/cxyp6fm/
    "sunblessing": {
        shortDesc: "If user is active, it and allies' Attack and Sp. Def are 1.5x.",
		onModifyAtkPriority: 3,
        onAllyModifyAtk: function (atk) {
            return this.chainModify(1.5);
        },
        onModifySpDPriority: 4,
        onAllyModifySpD: function (spd) {
            return this.chainModify(1.5);
        },
        id: "sunblessing",
		isNonstandard: true,
        name: "Sun Blessing",
        rating: 4,
        num: -320,
    },
	
	// /u/jayhankedlyon's Mega Incineroar X:https://www.reddit.com/r/stunfisk/comments/9uadq4/muse_monday_incineroar_and_landorustherian/e935tvk/
	"nastystreak": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Dark-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Nasty Streak boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Dark') {
				this.debug('Nasty Streak boost');
				return this.chainModify(1.5);
			}
		},
		id: "nastystreak",
		isNonstandard: true,
		name: "Nasty Streak",
		rating: 3,
		num: -321,
	},
	
	// /u/catsNpokemon's Mega Honchkrow:https://www.reddit.com/r/stunfisk/comments/9scumd/mega_monday_gourgeist_and_honchkrow/e8o2oys/
	"ruthless": {
		shortDesc: "This Pokemon's critical hit ratio is raised by 2 stages.",
		onModifyCritRatio: function (critRatio) {
			return critRatio + 2;
		},
		id: "ruthless",
		isNonstandard: true,
		name: "Ruthless",
		rating: 4.5,
		num: -322,
	},
	
	// /u/LaserBatman's Mega Zoroark:https://www.reddit.com/r/stunfisk/comments/56q4yh/mostly_mega_monday_beheeyem_and_zoroark/d8mc0ws/
    "afterimage": {
		shortDesc: "This Pokemon gives a substiute to its replacement after switching out.",
		id: "afterimage",
		isNonstandard: true,
		name: "Afterimage",
		rating: 4.5,
		num: -323,
	},
};

exports.BattleAbilities = BattleAbilities;