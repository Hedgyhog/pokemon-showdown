'use strict';

/**@type {ModdedBattleScriptsData} */
let BattleScripts = {
	runMove(moveOrMoveName, pokemon, targetLoc, sourceEffect, zMove, externalMove) {
		let target = this.getTarget(pokemon, zMove || moveOrMoveName, targetLoc);
		let baseMove = this.getActiveMove(moveOrMoveName);
		const pranksterBoosted = baseMove.pranksterBoosted;
		if (!sourceEffect && baseMove.id !== 'struggle' && !zMove) {
			let changedMove = this.runEvent('OverrideAction', pokemon, target, baseMove);
			if (changedMove && changedMove !== true) {
				baseMove = this.getActiveMove(changedMove);
				if (pranksterBoosted) baseMove.pranksterBoosted = pranksterBoosted;
				target = null;
			}
		}
		let move = zMove ? this.getActiveZMove(baseMove, pokemon) : baseMove;

		if (!target && target !== false) target = this.resolveTarget(pokemon, move);

		move.isExternal = externalMove;

		this.setActiveMove(move, pokemon, target);

		/* if (pokemon.moveThisTurn) {
			// THIS IS PURELY A SANITY CHECK
			// DO NOT TAKE ADVANTAGE OF THIS TO PREVENT A POKEMON FROM MOVING;
			// USE this.cancelMove INSTEAD
			this.debug('' + pokemon.id + ' INCONSISTENT STATE, ALREADY MOVED: ' + pokemon.moveThisTurn);
			this.clearActiveMove(true);
			return;
		} */
		let willTryMove = this.runEvent('BeforeMove', pokemon, target, move);
		if (!willTryMove) {
			this.runEvent('MoveAborted', pokemon, target, move);
			this.clearActiveMove(true);
			// The event 'BeforeMove' could have returned false or null
			// false indicates that this counts as a move failing for the purpose of calculating Stomping Tantrum's base power
			// null indicates the opposite, as the Pokemon didn't have an option to choose anything
			pokemon.moveThisTurnResult = willTryMove;
			return;
		}
		if (move.beforeMoveCallback) {
			if (move.beforeMoveCallback.call(this, pokemon, target, move)) {
				this.clearActiveMove(true);
				pokemon.moveThisTurnResult = false;
				return;
			}
		}
		pokemon.lastDamage = 0;
		let lockedMove;
		if (!externalMove) {
			lockedMove = this.runEvent('LockMove', pokemon);
			if (lockedMove === true) lockedMove = false;
			if (!lockedMove) {
				if (!pokemon.deductPP(baseMove, null, target) && (move.id !== 'struggle')) {
					this.add('cant', pokemon, 'nopp', move);
					let gameConsole = [null, 'Game Boy', 'Game Boy', 'Game Boy Advance', 'DS', 'DS'][this.gen] || '3DS';
					this.add('-hint', "This is not a bug, this is really how it works on the " + gameConsole + "; try it yourself if you don't believe us.");
					this.clearActiveMove(true);
					pokemon.moveThisTurnResult = false;
					return;
				}
			} else {
				sourceEffect = this.getEffect('lockedmove');
			}
			pokemon.moveUsed(move, targetLoc);
		}

		// Dancer Petal Dance hack
		// TODO: implement properly
		let noLock = externalMove && !pokemon.volatiles.lockedmove;

		if (zMove) {
			if (pokemon.illusion) {
				this.singleEvent('End', this.getAbility('Illusion'), pokemon.abilityData, pokemon);
			}
			this.add('-zpower', pokemon);
			pokemon.side.zMoveUsed = true;
		}
		let moveDidSomething = this.useMove(baseMove, pokemon, target, sourceEffect, zMove);
		if (this.activeMove) move = this.activeMove;
		this.singleEvent('AfterMove', move, null, pokemon, target, move);
		this.runEvent('AfterMove', pokemon, target, move);

		// /u/Heycanwenot's Mega Oricorio:https://www.reddit.com/r/stunfisk/comments/6i3s4t/mega_monday_oricorio/dj3cgmx/
		//only here to add Fancy Twirl to the Dancer implementation
		// Dancer's activation order is completely different from any other event, so it's handled separately
		if (move.flags['dance'] && moveDidSomething && !move.isExternal) {
			let dancers = [];
			for (const side of this.sides) {
				for (const currentPoke of side.active) {
					if (!currentPoke || !currentPoke.hp || pokemon === currentPoke) continue;
					if (currentPoke.hasAbility('dancer') || currentPoke.hasAbility('fancytwirl') && !currentPoke.isSemiInvulnerable()) {
						dancers.push(currentPoke);
					}
				}
			}
			// Dancer activates in order of lowest speed stat to highest
			// Ties go to whichever Pokemon has had the ability for the least amount of time
			dancers.sort(function (a, b) { return -(b.stats['spe'] - a.stats['spe']) || b.abilityOrder - a.abilityOrder; });
			for (const dancer of dancers) {
				if (this.faintMessages()) break;
				if (dancer.hasAbility('dancer')) {
					this.add('-activate', dancer, 'ability: Dancer');
					this.runMove(move.id, dancer, 0, this.getAbility('dancer'), undefined, true);
				}
				else if(dancer.hasAbility('fancytwirl')) {
					this.add('-activate', dancer, 'ability: Fancy Twirl');
					this.runMove(move.id, dancer, 0, this.getAbility('dancer'), undefined, true);
				}
			}
		}
		if (noLock && pokemon.volatiles.lockedmove) delete pokemon.volatiles.lockedmove;
	},
	
	canMegaEvo(pokemon) {
		let altForme = pokemon.baseTemplate.otherFormes && this.getTemplate(pokemon.baseTemplate.otherFormes[0]);
		let item = pokemon.getItem();
		if (altForme && altForme.isMega && altForme.requiredMove && pokemon.baseMoves.includes(toId(altForme.requiredMove)) && !item.zMove) return altForme.species;
		if (item.megaEvolves !== pokemon.baseTemplate.species || item.megaStone === pokemon.species) {
			return null;
		}
		return item.megaStone;
	},
	
	runMegaEvo(pokemon) {
		const templateid = pokemon.canMegaEvo || pokemon.canUltraBurst;
		const originalSpecies = pokemon.species;
		let item = pokemon.getItem();
		if (!templateid) return false;
		const side = pokemon.side;
		let format = this.getFormat();

		// Pokémon affected by Sky Drop cannot Mega Evolve. Enforce it here for now.
		for (const foeActive of side.foe.active) {
			if (foeActive.volatiles['skydrop'] && foeActive.volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}

		// Do we have a proper sprite for it?
		// @ts-ignore
		if (this.getTemplate(pokemon.canMegaEvo).species && item.isNonstandard) {
			let megaTemplate = this.getTemplate(item.megaStone);
			pokemon.formeChange(templateid, pokemon.getItem(), true);
			//shows held Mega Stone to differentiate mons with multiple megas
			this.add('-start', pokemon, item, '[silent]');
			//shows type of mega form, even if unchanged
			this.add('-start', pokemon, 'typechange', megaTemplate.types.join('/'), '[silent]');
		} else {
			pokemon.formeChange(templateid, pokemon.getItem(), true);
		}

		if (format == "[Gen 7] Stunfisk Showcase") {
			//Allow infinite megas for showcase
			pokemon.canMegaEvo = null;
		}
		else {
			// Limit one mega evolution excluding Minun (should be tidied, switch to checking for Mega Burst then finally to make Mega Burst do it itself
			let wasMega = pokemon.canMegaEvo;
			for (const ally of side.pokemon) {
				if (wasMega && pokemon != "Minun" && pokemon.item != "minite" && ally != "Minun" && ally.item != "minite") {
					ally.canMegaEvo = null;
				} else if (wasMega) {
					pokemon.canMegaEvo = null;
				} else {
					ally.canUltraBurst = null;
				}
			}
		}

		this.runEvent('AfterMega', pokemon);
		return true;
	},
	
	init() {
        // /u/captainfantastic's Mega Blastoise (Blastoise V2):https://www.reddit.com/r/stunfisk/comments/8vjh0p/mega_monday_venusaur_and_blastoise/e1nyjk8/
        this.modData('Learnsets', 'blastoise').learnset.heavyslam = ['7L1'];
        this.modData('Learnsets', 'blastoise').learnset.avalanche = ['7L1'];
        
        // /u/colonelxsuezo's Mega Fearow:https://www.reddit.com/r/stunfisk/comments/4hhrea/mega_monday_fearow_and_slowking/d2pqxok/

        // /u/PrisonerLeet's Mega Nidoqueen:https://www.reddit.com/r/stunfisk/comments/3jxeww/mega_monday_labor_day_edition_nidoqueen_and/cut5ep9/
        this.modData('Learnsets', 'nidoqueen').learnset.slackoff = ['7L1'];

        // /u/Fatalis13's Mega Clefable:https://www.reddit.com/r/stunfisk/comments/6y4lxt/mega_monday_araquanid_and_clefable/dmku9cz/
        this.modData('Learnsets', 'clefable').learnset.softboiled = ['7L1'];
        
        // /u/metalflygon08's Mega Poliwrath X:https://www.reddit.com/r/stunfisk/comments/3mnij0/mega_monday_poliwrath_and_breloom/cvh0732/
        this.modData('Learnsets', 'poliwrath').learnset.drainpunch = ['7L1'];
        this.modData('Learnsets', 'poliwrath').learnset.aquajet = ['7L1'];
		
		// /u/PrisonerLeet's Mega Poliwrath Y:https://www.reddit.com/r/stunfisk/comments/9yizvs/mega_monday_politied_and_poliwrath/
		this.modData('Learnsets', 'poliwrath').learnset.machpunch = ['7L1'];

        // /u/PrisonerLeet's Mega Machamp:https://www.reddit.com/r/stunfisk/comments/53ftu4/mostly_mega_monday_machamp_and_golem/d7szd9h
        this.modData('Learnsets', 'machamp').learnset.vacuumwave = ['7L1'];
        this.modData('Learnsets', 'machamp').learnset.calmmind = ['7L1'];
        
        // /u/howfalcons's Mega Tentacruel:https://www.reddit.com/r/stunfisk/comments/9kg0nd/mega_monday_tentacruel_and_claydol/e6ywbbp/
        this.modData('Learnsets', 'tentacruel').learnset.recover = ['7L1'];
        this.modData('Learnsets', 'tentacruel').learnset.block = ['7L1'];

        // /u/awkward______silence's Mega Hitmonchan:https://www.reddit.com/r/stunfisk/comments/49cfsi/mega_monday_hitmonlee_hitmonchan_hitmontop/d0qt6ti/
        this.modData('Learnsets', 'hitmonchan').learnset.suckerpunch = ['7L1'];

        // /u/PrisonerLeet's Mega Electrode&co:https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm
        this.modData('Learnsets', 'electrode').learnset.rockblast = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.encore = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.batonpass = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.nastyplot = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.barrage = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.iciclespear = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.vacuumwave = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.steamroller = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.heavyslam = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.autotomise = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.darkpulse = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.icebeam = ['7L1'];
        this.modData('Learnsets', 'electrode').learnset.zenheadbutt = ['7L1'];

        // /u/mkperry's Mega Mr. Mime:https://www.reddit.com/r/stunfisk/comments/4f99s0/mega_monday_mr_mime_and_sudowoodo/d27fhlo
        this.modData('Learnsets', 'mrmime').learnset.darkpulse = ['7L1'];
        this.modData('Learnsets', 'mrmime').learnset.drainingkiss = ['7L1'];

        // /u/mkperry's Mega Jynx:https://www.reddit.com/r/stunfisk/comments/4km288/mega_monday_magmortar_and_jynx/d3gak2r
        this.modData('Learnsets', 'jynx').learnset.secretsword = ['7L1'];
        this.modData('Learnsets', 'jynx').learnset.kingsshield = ['7L1'];

        // /u/Fatalis13's Mega Omastar:https://www.reddit.com/r/stunfisk/comments/65vygh/mega_monday_kabutops_and_omastar/dgdnyzw/
        this.modData('Learnsets', 'omastar').learnset.powergem = ['7L1'];
        this.modData('Learnsets', 'omastar').learnset.earthpower = ['7L1'];

        // /u/MegaMissingno's Mega Articuno:https://www.reddit.com/r/stunfisk/comments/3kvghh/mega_monday_legendary_birds_articuno_zapdos/cv11kh1
        this.modData('Learnsets', 'articuno').learnset.powergem = ['7L1'];

        // /u/nshooter's Mega Feraligatr:https://www.reddit.com/r/stunfisk/comments/40f88i/mega_monday_meganium_typhlosion_feraligatr/cyuho9l
        this.modData('Learnsets', 'feraligatr').learnset.dracometeor = ['7L1'];
        
        // /u/Cthuluigi's Mega Azumarill:https://www.reddit.com/r/stunfisk/comments/55ltqy/mostly_mega_monday_azumarill_and_lanturn/d8d07vf/
        this.modData('Learnsets', 'azumarill').learnset.drainpunch = ['7L1'];
		
		// /u/Fatalis13's Mega Sudowoodo:https://www.reddit.com/r/stunfisk/comments/7ykfgr/mega_monday_sudowoodo_and_mr_mime/duhnu8l/
        
        // /u/PrisonerLeet's Mega Jumpluff:https://www.reddit.com/r/stunfisk/comments/9o9sti/mega_monday_vileplume_and_jumpluff/e7skj2h/
        this.modData('Learnsets', 'jumpluff').learnset.stompingtantrum = ['7L1'];
        this.modData('Learnsets', 'jumpluff').learnset.whirlwind = ['7L1'];
        
        // /u/BasedRod's Mega Girafarig:https://www.reddit.com/r/stunfisk/comments/8ckogf/mega_monday_girafarig_and_alomomola/dxfu9a1/
        this.modData('Learnsets', 'girafarig').learnset.hyperfang = ['7L1'];
        this.modData('Learnsets', 'girafarig').learnset.icefang = ['7L1'];

        // /u/IllogicalMind's Mega Delibird:https://www.reddit.com/r/stunfisk/comments/3xpo6r/mega_monday_delibird_and_stantler/cy6rcws
        this.modData('Learnsets', 'delibird').learnset.powerwhip = ['7L1'];
		this.modData('Learnsets', 'delibird').learnset.christmaswhip = ['7L1'];
		this.modData('Learnsets', 'delibird').learnset.powerwhip = ['7L1'];
		this.modData('Learnsets', 'delibird').learnset.powerwhip = ['7L1'];
        
        // /u/TheLaughingCat2's Mega Skarmory:https://www.reddit.com/r/stunfisk/comments/4xt33f/mega_monday_unofficial_edition_talonflame_and/d6iaxc5

        // /u/Just_Another_Toker's Mega Donphan:https://www.reddit.com/r/stunfisk/comments/45urxa/mega_monday_ursaring_and_donphan/d00h4o9/
        this.modData('Learnsets', 'donphan').learnset.slackoff = ['7L1'];
        this.modData('Learnsets', 'donphan').learnset.ironhead = ['7L1'];
        
        // /u/Telekineticism's Mega Donphan X:https://www.reddit.com/r/stunfisk/comments/6qlk0l/mega_monday_donphan_and_ursaring/dkyg0ny/
        this.modData('Learnsets', 'donphan').learnset.uturn = ['7L1'];
        
        // /u/Vitton's Mega Donphan Y:https://www.reddit.com/r/stunfisk/comments/8093np/mega_monday_ambipom_and_donphan/duu0zas/
        this.modData('Learnsets', 'donphan').learnset.smackdown = ['7L1'];
        this.modData('Learnsets', 'donphan').learnset.accelerock = ['7L1'];
        
        // /u/Fatalis13's Mega Miltank:https://www.reddit.com/r/stunfisk/comments/52d0j3/mega_monday_tauros_and_miltank/d7kbxr2
        this.modData('Learnsets', 'miltank').learnset.headbutt = ['7L1'];
        
        // /u/MegaMissingno's Mega Suicune:https://www.reddit.com/r/stunfisk/comments/4e94wz/mega_monday_entei_raikou_and_suicune/d1y80to

        // /u/Telekineticism's Mega Ludicolo:https://www.reddit.com/r/stunfisk/comments/6cobtx/mega_monday_shiinotic_and_ludicolo/dhw6812/
        this.modData('Learnsets', 'ludicolo').learnset.grasswhistle = ['7L1'];
        this.modData('Learnsets', 'ludicolo').learnset.boomburst = ['7L1'];
        
        // /u/krishmc15's Mega Shiftry:https://www.reddit.com/r/stunfisk/comments/3vr8s0/mega_monday_shiftry_and_ludicolo/cxq3box/
        this.modData('Learnsets', 'shiftry').learnset.drillpeck = ['7L1'];
        
        // /u/AzureBeast's Mega Swellow:https://www.reddit.com/r/stunfisk/comments/43m8r5/mega_monday_staraptor_and_swellow/czjcwhg/
        this.modData('Learnsets', 'swellow').learnset.focusblast = ['7L1'];
        this.modData('Learnsets', 'swellow').learnset.doubleedge = ['7L1'];
		
		// /u/mjmanella's Mega Plusle and Minun:https://www.reddit.com/r/stunfisk/comments/98tp2h/mega_monday_plusle_and_minun/e4ipzn8/
		this.modData('Learnsets', 'plusle').learnset.energyball = ['7L1'];
		this.modData('Learnsets', 'plusle').learnset.vacuumwave = ['7L1'];
		this.modData('Learnsets', 'minun').learnset.paraboliccharge = ['7L1'];
		this.modData('Learnsets', 'minun').learnset.partingshot = ['7L1'];

        // /u/PrisonerLeet's Mega Wailord:https://www.reddit.com/r/stunfisk/comments/9clu0q/mega_monday_wailord_and_drifblim/e5bs23l/
        this.modData('Learnsets', 'wailord').learnset.milkdrink = ['7L1'];
        this.modData('Learnsets', 'wailord').learnset.freezedry = ['7L1'];
        
        // /u/OmegaFrenzy's Mega Torkoal:https://www.reddit.com/r/stunfisk/comments/6uzcp3/mega_monday_torkoal_and_pelipper/dlwyf7v/

        // /u/ThatWasPeachy's Mega Zangoose:https://www.reddit.com/r/stunfisk/comments/79qfgt/mega_monday_zangoose_and_seviper/dp48vlq/
        this.modData('Learnsets', 'zangoose').learnset.meteormash= ['7L1'];
        this.modData('Learnsets', 'zangoose').learnset.bulletpunch = ['7L1'];
        
        // /u/catsNpokemon's Mega Solrock:https://www.reddit.com/r/stunfisk/comments/4abauu/mega_monday_solrock_and_lunatone/d0yyjk4
        
        // /u/L0RDR0B's Mega Cradily:https://www.reddit.com/r/stunfisk/comments/41katj/mega_monday_armaldo_and_cradily/cz345h5/
        this.modData('Learnsets', 'cradily').learnset.leechseed = ['7L1'];
        this.modData('Learnsets', 'cradily').learnset.raindance = ['7L1'];
        
        // /u/L0RDR0B's Mega Kecleon:https://www.reddit.com/r/stunfisk/comments/51adho/mega_monday/d7afpng/
        this.modData('Learnsets', 'kecleon').learnset.playrough = ['7L1'];
        this.modData('Learnsets', 'kecleon').learnset.bulkup = ['7L1'];
        
        // /u/jayhankedlyon's Mega Banette Y:https://www.reddit.com/r/stunfisk/comments/87937k/mega_monday_gengar_and_banette/dwbgemt/
        this.modData('Learnsets', 'banette').learnset.poweruppunch = ['7L1'];
        this.modData('Learnsets', 'banette').learnset.hypervoice = ['7L1'];

        // /u/ArcTruth's Mega Tropius:https://www.reddit.com/r/stunfisk/comments/4jja9b/mega_monday_tropius_and_togekiss/d37e4ws/
        this.modData('Learnsets', 'tropius').learnset.calmmind = ['7L1'];
        this.modData('Learnsets', 'tropius').learnset.batonpass = ['7L1'];
        this.modData('Learnsets', 'tropius').learnset.defog = ['7L1'];
        
        // /u/PrisonerLeet's Mega Chimecho:https://www.reddit.com/r/stunfisk/comments/72cuut/mega_monday_hypno_and_chimecho/dni0nzf/
        this.modData('Learnsets', 'chimecho').learnset.boomburst = ['7L1'];
        this.modData('Learnsets', 'chimecho').learnset.voltswitch = ['7L1'];

        // /u/L0RDR0B's Mega Empoleon:https://www.reddit.com/r/stunfisk/comments/4ihxst/mega_monday_torterra_infernape_and_empoleon/d2ybi63
        this.modData('Learnsets', 'empoleon').learnset.roost = ['7L1'];
        this.modData('Learnsets', 'empoleon').learnset.airslash = ['7L1'];
		
		// /u/L0RDR0B's Mega Kricketune:https://www.reddit.com/r/stunfisk/comments/69vv66/mega_monday_kricketune_and_golisopod/dhahqmq/
		this.modData('Learnsets', 'kricketune').learnset.boomburst = ['7L1'];
        this.modData('Learnsets', 'kricketune').learnset.snarl = ['7L1'];

        // /u/PotageAuCoq's Mega Roserade X:https://www.reddit.com/r/stunfisk/comments/7edc9q/mega_monday_roserade_and_victreebel/dq4fveh/
        this.modData('Learnsets', 'roserade').learnset.uturn = ['7L1'];

        // /u/PrisonerLeet's Mega Roserade Y:https://www.reddit.com/r/stunfisk/comments/678c5o/mega_monday_mega_ambipom_and_mega_roserade/dgoih8x/
        this.modData('Learnsets', 'roserade').learnset.cottonguard = ['7L1'];
        this.modData('Learnsets', 'roserade').learnset.earthpower = ['7L1'];

        // /u/Zerox_Z21's Mega Rampardos:https://www.reddit.com/r/stunfisk/comments/8mqbdl/mega_monday_mega_fossils/dzplcay/
        this.modData('Learnsets', 'rampardos').learnset.accelerock = ['7L1'];
		
		// /u/PrisonerLeet's Mega Wormadam:https://www.reddit.com/r/stunfisk/comments/951fvl/mega_monday_wormadam_and_mothim/e3pavyd/
		this.modData('Learnsets', 'wormadam').learnset.uturn = ['7L1'];
		this.modData('Learnsets', 'wormadam').learnset.sludgebomb = ['7L1'];
		this.modData('Learnsets', 'wormadamtrash').learnset.uturn = ['7L1'];
		this.modData('Learnsets', 'wormadamtrash').learnset.healorder = ['7L1'];
		this.modData('Learnsets', 'wormadamsandy').learnset.uturn = ['7L1'];
		this.modData('Learnsets', 'wormadamsandy').learnset.coil = ['7L1'];
		
		// /u/NebulonsStyle's Mega Vespiquen:https://www.reddit.com/r/stunfisk/comments/4mskyd/mega_monday_vileplume_and_vespiquen/d3y0r78
		this.modData('Learnsets', 'vespiquen').learnset.healbell = ['7L1'];
		this.modData('Learnsets', 'vespiquen').learnset.workup = ['7L1'];
		
		// /u/catsNpokemon's Mega Honchkrow:https://www.reddit.com/r/stunfisk/comments/9scumd/mega_monday_gourgeist_and_honchkrow/e8o2oys/
		this.modData('Learnsets', 'honchkrow').learnset.leafblade = ['7L1'];

        // /u/howfalcons's Mega Purugly:https://old.reddit.com/r/stunfisk/comments/8hnyvk/mega_monday_purugly_and_skuntank/dyl9bks/
        this.modData('Learnsets', 'purugly').learnset.doubleedge = ['7L1'];
        this.modData('Learnsets', 'purugly').learnset.lastresort = ['7L1'];

        // /u/AzureBeast's Mega Spiritomb:https://www.reddit.com/r/stunfisk/comments/46yrfh/mega_monday_spiritomb_and_bisharp/d08udkm
        this.modData('Learnsets', 'spiritomb').learnset.rocksmash = ['7L1'];
        this.modData('Learnsets', 'spiritomb').learnset.honeclaws = ['7L1'];

        // /u/MegaMissingno's Mega Drapion X:https://www.reddit.com/r/stunfisk/comments/46yrfh/mega_monday_spiritomb_and_bisharp/d08udkm
        this.modData('Learnsets', 'drapion').learnset.spikes = ['7L1'];

        // /u/PrisonerLeet's Mega Drapion Y:https://www.reddit.com/r/stunfisk/comments/6zfu6v/mega_monday_drapion_and_toxicroak/dmuwpz7/
        this.modData('Learnsets', 'drapion').learnset.superpower = ['7L1'];
        this.modData('Learnsets', 'drapion').learnset.suckerpunch = ['7L1'];

        // /u/L0RDR0B's Mega Weavile:https://www.reddit.com/r/stunfisk/comments/50388o/mega_monday_weavile_and_gliscor/d712ex6
        this.modData('Learnsets', 'weavile').learnset.iciclespear = ['7L1'];
        this.modData('Learnsets', 'weavile').learnset.partingshot = ['7L1'];

        // /u/Metalhead62's Mega Electivire:https://www.reddit.com/r/stunfisk/comments/3i7hac/new_mega_monday_magmortar_and_electivire/cudzqt7
        this.modData('Learnsets', 'electivire').learnset.volttackle = ['7L1'];
        this.modData('Learnsets', 'electivire').learnset.workup = ['7L1'];

        // /u/Golden-Warrior's Mega Porygon-Z:https://www.reddit.com/r/stunfisk/comments/4gb4zb/mega_monday_primeape_and_porygonz/d2g1qkk
        this.modData('Learnsets', 'porygonz').learnset.focusblast = ['7L1'];

        // /u/polarbearhunt's Mega Dusknoir:https://www.reddit.com/r/stunfisk/comments/3oesgv/mega_monday_dusknoir_and_jellicent/cvwwo4e
        this.modData('Learnsets', 'dusknoir').learnset.drainpunch = ['7L1'];
        this.modData('Learnsets', 'dusknoir').learnset.knockoff = ['7L1'];

		// /u/TheOnlyOrk's Mega Froslass:https://www.reddit.com/r/stunfisk/comments/96y2rs/mega_monday_froslass_and_slowking/e445h67/
		this.modData('Learnsets', 'froslass').learnset.nastyplot = ['7L1'];
        this.modData('Learnsets', 'froslass').learnset.magiccoat = ['7L1'];
		
		// /u/DbuggerS's Mega Heatran:https://www.reddit.com/r/stunfisk/comments/6nptuj/mega_monday_heatran_and_volcanion/dkbiuc3/
		this.modData('Learnsets', 'heatran').learnset.heavyslam = ['7L1'];
        this.modData('Learnsets', 'heatran').learnset.heatcrash = ['7L1'];
		
        // /u/PrisonerLeet's Mega Emboar:https://www.reddit.com/r/stunfisk/comments/9ejl7x/mega_monday_serperior_emboar_and_samurott/e5ph7a7/
        this.modData('Learnsets', 'emboar').learnset.partingshot = ['7L1'];
        this.modData('Learnsets', 'emboar').learnset.poweruppunch = ['7L1'];

        // /u/AzureBeast's Mega Simisear:https://www.reddit.com/r/stunfisk/comments/4wok89/mega_monday_simisear_simipour_simisage/d68qnvu
        this.modData('Learnsets', 'simisear').learnset.flashcannon = ['7L1'];
        this.modData('Learnsets', 'simisear').learnset.recover = ['7L1'];

        // /u/FishFilletShow's Mega Musharna:https://www.reddit.com/r/stunfisk/comments/3r6a41/mega_monday_chimecho_and_musharna/cwlmlt2
        this.modData('Learnsets', 'musharna').learnset.moonblast = ['7L1'];

        // /u/Heycanwenot's Mega Swoobat:https://www.reddit.com/r/stunfisk/comments/6jihm2/mega_monday_butterfree_and_swoobat/djek6rr/
        this.modData('Learnsets', 'swoobat').learnset.sludgewave = ['7L1'];
        this.modData('Learnsets', 'swoobat').learnset.aurasphere = ['7L1'];

        // /u/rmch99's Mega Darmanitan(s):https://www.reddit.com/r/stunfisk/comments/6l010g/mega_monday_basculin_and_darmanitan/djq8u64/
        this.modData('Learnsets', 'darmanitan').learnset.poisonjab = ['7L1'];
        this.modData('Learnsets', 'darmanitan').learnset.calmmind = ['7L1'];

        // /u/Fatalis13's Mega Klinklang:https://www.reddit.com/r/stunfisk/comments/64haov/mega_monday_klinklang_and_magearna/dg2mqfp/
        this.modData('Learnsets', 'klinklang').learnset.shadowpunch = ['7L1'];

        // /u/L0RDR0B's Mega Chandelure:https://www.reddit.com/r/stunfisk/comments/54iwzc/mostly_mega_monday_gengar_and_chandelure/d82sgax
        this.modData('Learnsets', 'chandelure').learnset.lavaplume = ['7L1'];
        this.modData('Learnsets', 'chandelure').learnset.moonblast = ['7L1'];

        // /u/PrisonerLeet's Mega Beartic:https://www.reddit.com/r/stunfisk/comments/9aopt6/mega_monday_sunflora_and_beartic/e4wyc3j/
        this.modData('Learnsets', 'beartic').learnset.iceshard = ['7L1'];
        this.modData('Learnsets', 'beartic').learnset.wildcharge = ['7L1'];

        // /u/FishFilletShow's Mega Golurk X:https://www.reddit.com/r/stunfisk/comments/3pavu9/mega_monday_golurk_and_froslass/cw4xdvl
        this.modData('Learnsets', 'golurk').learnset.shadowforce = ['7L1'];
        this.modData('Learnsets', 'golurk').learnset.circlethrow = ['7L1'];

        // /u/Fatalis13's Mega Golurk Y:https://www.reddit.com/r/stunfisk/comments/6p549i/mega_monday_golurk_and_krookodile/dknagx2/

        // /u/L0RDRB's Mega Bouffalant:https://www.reddit.com/r/stunfisk/comments/4dauwb/mega_monday_bouffalant_and_hippowdon/d1papat/
        this.modData('Learnsets', 'bouffalant').learnset.nightslash = ['7L1'];
        this.modData('Learnsets', 'bouffalant').learnset.hornleech = ['7L1'];

        // /u/TURBODERP's Mega Braviary:https://www.reddit.com/r/stunfisk/comments/8xbtub/mega_monday_braviary_and_mandibuzz/e22fy66/
        this.modData('Learnsets', 'braviary').learnset.doubleedge = ['7L1'];
        this.modData('Learnsets', 'braviary').learnset.extremespeed = ['7L1'];

        // /u/mkperry's Mega Heatmor:https://www.reddit.com/r/stunfisk/comments/4c9vy2/mega_monday_heatmor_and_durant/d1g9uzv/
        this.modData('Learnsets', 'heatmor').learnset.flareblitz = ['7L1'];
        this.modData('Learnsets', 'heatmor').learnset.crunch = ['7L1'];
        
        // /u/LaserBatman's Mega Zoroark:https://www.reddit.com/r/stunfisk/comments/56q4yh/mostly_mega_monday_beheeyem_and_zoroark/d8mc0ws/
        this.modData('Learnsets', 'zoroark').learnset.smokebomb = ['7L1'];
        this.modData('Learnsets', 'zoroark').learnset.moonblast = ['7L1'];

        // /u/MegaMissingno's Mega Tornadus:https://www.reddit.com/r/stunfisk/comments/4ovybw/mega_monday_landorus_thundurus_and_tornadus_art/d4ggwo6/
        this.modData('Learnsets', 'tornadus').learnset.roost = ['7L1'];
        this.modData('Learnsets', 'tornadus').learnset.bodyslam = ['7L1'];
        this.modData('Learnsets', 'tornadus').learnset.waterpulse = ['7L1'];
        this.modData('Learnsets', 'tornadus').learnset.aquatail = ['7L1'];

        // /u/Fatalis13's Mega Meowstic:https://www.reddit.com/r/stunfisk/comments/60iakb/mega_monday_meowstic/df6qray/
        this.modData('Learnsets', 'meowstic').learnset.dazzlinggleam = ['7L1'];
        this.modData('Learnsets', 'meowstic').learnset.afteryou = ['7L1'];

        // /u/_Mikau's Mega Slurpuff:https://www.reddit.com/r/stunfisk/comments/6mdt4t/mega_monday_aromatisse_and_slurpuff/dk0twkc/
        this.modData('Learnsets', 'slurpuff').learnset.iciclecrash = ['7L1'];
        this.modData('Learnsets', 'slurpuff').learnset.freezedry = ['7L1'];

        // /u/L0RDR0B's Mega Malamar:https://www.reddit.com/r/stunfisk/comments/4baujy/mega_monday_malamar_and_venomoth/d17lzb1/
        this.modData('Learnsets', 'malamar').learnset.hammerarm = ['7L1'];
        this.modData('Learnsets', 'malamar').learnset.psychoboost = ['7L1'];

        // /u/L0RDR0B's Mega Dragalge:https://www.reddit.com/r/stunfisk/comments/4nti5z/mega_monday_clawitzer_and_dragalge/d4782xb/
        this.modData('Learnsets', 'dragalge').learnset.recover = ['7L1'];
        this.modData('Learnsets', 'dragalge').learnset.clearsmog = ['7L1'];

        // /u/Blastgang's Mega Aurorus:https://www.reddit.com/r/stunfisk/comments/42m6xx/mega_monday_aurorus_and_tyrantrum/czbvtdn/

        // /u/MegaMissingno's Mega Gourgeist:https://www.reddit.com/r/stunfisk/comments/3twkmf/mega_monday_parasect_and_gourgeist/cxa0uid/
        this.modData('Learnsets', 'gourgeist').learnset.flareblitz = ['7L1'];
        this.modData('Learnsets', 'gourgeist').learnset.superpower = ['7L1'];

        // /u/PrisonerLeet's Mega Incineroar:https://www.reddit.com/r/stunfisk/comments/917pck/muse_monday_alolan_starters/e2w2hp4/
        this.modData('Learnsets', 'incineroar').learnset.firelash = ['7L1'];
        this.modData('Learnsets', 'incineroar').learnset.suckerpunch = ['7L1'];

        // /u/Heycanwenot's Mega Oricorio:https://www.reddit.com/r/stunfisk/comments/6i3s4t/mega_monday_oricorio/dj3cgmx/

        // /u/Fatalis13's Mega Lycanroc:https://www.reddit.com/r/stunfisk/comments/5z4q6r/mega_monday_lycanroc/devszlu/
        this.modData('Learnsets', 'lycanroc').learnset.icefang = ['7L1'];
        this.modData('Learnsets', 'lycanroc').learnset.iceshard = ['7L1'];
        this.modData('Learnsets', 'lycanrocmidnight').learnset.knockoff = ['7L1'];
        this.modData('Learnsets', 'lycanrocmidnight').learnset.pursuit = ['7L1'];

        // /u/catsNpokemon's Mega Mudsdale:https://www.reddit.com/r/stunfisk/comments/7vfkqy/mega_monday_toucannon_and_mudsdale/dtrypwz/

	},
};

exports.BattleScripts = BattleScripts;
