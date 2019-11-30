'use strict';

/** @typedef {{[name: string]: StunfiskSet}} StunfiskSets */
/**
 * @typedef {Object} StunfiskSet
 * @property {string} species
 * @property {string | string[]} ability
 * @property {string | string[]} item
 * @property {GenderName} gender
 * @property {(string | string[])[]} moves
 * @property {{hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number}=} evs
 * @property {{hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number}=} ivs
 * @property {string | string[]} nature
 * @property {number=} level
 * @property {boolean=} shiny
 */

const RandomTeams = require('../../data/random-teams');

class RandomStunfiskTeams extends RandomTeams {
	randomStunfiskTeam() {
		/** @type {PokemonSet[]} */
		let team = [];
		/** @type {StunfiskSets} */
		let sets = {
			/*
			// Example:
			'Name': {
				species: 'Species', ability: 'Ability', item: 'Item', gender: '',
				moves: ['Move Name', ['Move Name', 'Move Name']],
				evs: {stat: number}, ivs: {stat: number}, nature: 'Nature', level: 100, shiny: false,
			},
			// Species, ability, and item need to be captialized properly ex: Ludicolo, Swift Swim, Life Orb
			// Gender can be M, F, N, or left as an empty string
			// each slot in moves needs to be a string (the move name, captialized properly ex: Hydro Pump), or an array of strings (also move names)
			// You can skip Evs (defaults to 82 all) and/or Ivs (defaults to 31 all), or just skip part of the Evs (skipped evs are 0) and/or Ivs (skipped Ivs are 31)
			// You can also skip shiny, defaults to false. Level can be skipped (defaults to 100).
			// Nature needs to be a valid nature with the first letter capitalized ex: Modest
			*/
			
			// /u/captainfantastic's Mega Blastoise X:https://www.reddit.com/r/stunfisk/comments/8vjh0p/mega_monday_venusaur_and_blastoise/e1nyjk8/
            'Mega Blastoise X': {
                species: 'Blastoise', ability: 'Torrent', item: 'Blastoisinite X', gender: '',
                moves: ['Liquidation', 'Heavy Slam', 'Zen Headbutt', 'Avalanche'],
                evs: {hp: 252, atk: 252, def: 4}, nature: 'Adamant',
            },

            // /u/Drake_Bugatti's Mega Blastoise Y:https://www.reddit.com/r/stunfisk/comments/3yhhd9/mega_monday_blastoise_and_venusaur/cydl9q9/
            'Mega Blastoise Y': {
                species: 'Blastoise', ability: 'Torrent', item: 'Blastoisinite Y', gender: '',
                moves: ['Aqua Jet', 'Ice Punch', 'Earthquake', ['Fake Out', 'Substitute', 'Brick Break', 'Double Edge', 'Focus Punch']],
                evs: {hp: 252, atk: 4, def: 252}, nature: 'Adamant',
            },
            // /u/colonelxsuezo's Mega Fearow:https://www.reddit.com/r/stunfisk/comments/4hhrea/mega_monday_fearow_and_slowking/d2pqxok/
            'Mega Fearow': {
                species: 'Fearow', ability: 'Sniper', item: 'Fearowite', gender: '',
                moves: ['Drill Run', 'Drill Peck', 'Steel Wing', ['Quick Attack', 'U-turn']],
                evs: {}, nature: 'Jolly',
            },

            // /u/PrisonerLeet's Mega Nidoqueen:https://www.reddit.com/r/stunfisk/comments/3jxeww/mega_monday_labor_day_edition_nidoqueen_and/cut5ep9/
            'Mega Nidoqueen': {
                species: 'Nidoqueen', ability: 'Poison Point', item: 'Nidoqueenite', gender: 'F',
                moves: ['Earth Power', 'Sludge Wave', 'Ice Beam', 'Recover'],
                evs: {hp: 136, spa: 252, spe: 120}, ivs: {atk: 0}, nature: 'Modest',
            },

            // /u/Fatalis13's Mega Clefable:https://www.reddit.com/r/stunfisk/comments/6y4lxt/mega_monday_araquanid_and_clefable/dmku9cz/
            'Mega Clefable': {
                species: 'Clefable', ability: 'Magic Guard', item: 'Clefablite', gender: '',
                moves: ['Moonblast', 'Stealth Rock', ['Flamethrower', 'Aromatherapy'], ['Soft-Boiled', 'Wish']],
                evs: {hp: 252, spa: 252, spe: 4}, ivs: {atk: 0}, nature: 'Modest',
            },

            // /u/metalflygon08's Mega Poliwrath X:https://www.reddit.com/r/stunfisk/comments/3mnij0/mega_monday_poliwrath_and_breloom/cvh0732/
            'Mega Poliwrath X': {
                species: 'Poliwrath', ability: 'Water Absorb', item: 'Poliwrathite X', gender: '',
                moves: ['Circle Throw', ['Knock Off', 'Aqua Jet', 'Drain Punch'], 'Waterfall', 'Bulk Up'],
                evs: {}, ivs: {}, nature: 'Adamant',
            },

            // /u/PrisonerLeet's Mega Poliwrath Y:https://www.reddit.com/r/stunfisk/comments/9yizvs/mega_monday_politied_and_poliwrath/ea1og20
            'Mega Poliwrath Y': {
                species: 'Poliwrath', ability: 'Water Absorb', item: 'Poliwrathite Y', gender: '',
                moves: ['Drain Punch', 'Waterfall', 'Ice Punch', 'Earthquake'],
                evs: {hp: 252, atk: 252, spd: 4}, nature: 'Adamant',
            },

            // /u/PrisonerLeet's Mega Machamp:https://www.reddit.com/r/stunfisk/comments/53ftu4/mostly_mega_monday_machamp_and_golem/d7szd9h
            'Mega Machamp': {
                species: 'Machamp', ability: 'Guts', item: 'Machampite', gender: '',
                moves: ['Dynamic Punch', 'Fire Blast', 'Stone Edge', 'Knock Off'],
                evs: {hp: 248, atk: 252, spa: 8}, nature: 'Lonely',
            },

            // /u/howfalcons's Mega Tentacruel:https://www.reddit.com/r/stunfisk/comments/9kg0nd/mega_monday_tentacruel_and_claydol/e6ywbbp/
            'Mega Tentacruel': {
                species: 'Tentacruel', ability: 'Clear Body', item: 'Tentacruelite', gender: '',
                moves: ['Recover', 'Toxic', 'Scald', 'Block'],
                evs: {hp: 248, def: 252, spd: 8}, ivs: {atk: 0}, nature: 'Bold',
            },

            // /u/PrisonerLeet's Mega Electrode&co:https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm
            'Electrode-Dive': {
                species: 'Electrode-Dive', ability: 'Storm Drain', item: 'Life Orb', gender: '',
                moves: ['Thunderbolt', 'Ice Beam', 'Volt Switch', 'Encore'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Fast': {
                species: 'Electrode-Fast', ability: 'Speed Boost', item: 'Life Orb', gender: '',
                moves: ['Thunderbolt', 'Ice Beam', 'Nasty Plot', 'Encore'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Friend': {
                species: 'Electrode-Friend', ability: 'Friend Guard', item: 'Focus Sash', gender: '',
                moves: ['Thunderbolt', ['Thunder Wave', 'Encore'], 'Mirror Coat', 'Protect'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Great': {
                species: 'Electrode-Great', ability: 'Sheer Force', item: 'Life Orb', gender: '',
                moves: ['Thunderbolt', 'Ice Beam', 'Nasty Plot', ['Encore', 'Dark Pulse', 'Hidden Power Fire']],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Heal': {
                species: 'Electrode-Heal', ability: 'Regenerator', item: 'Life Orb', gender: '',
                moves: ['Thunderbolt', 'Ice Beam', 'Volt Switch', 'Hidden Power Fire'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Level': {
                species: 'Electrode-Level', ability: 'Technician', item: 'Choice Specs', gender: '',
                moves: ['Thunderbolt', 'Volt Switch', 'Ice Beam', 'Hidden Power Fire'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Moon': {
                species: 'Electrode-Moon', ability: 'Magic Guard', item: 'Life Orb', gender: '',
                moves: ['Thunderbolt', 'Ice Beam', ['Nasty Plot', 'Volt Switch'], 'Encore'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Quick': {
                species: 'Electrode-Quick', ability: 'Prankster', item: 'Focus Sash', gender: '',
                moves: ['Thunderbolt', 'Protect', 'Thunder Wave', 'Encore'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Repeat': {
                species: 'Electrode-Repeat', ability: 'Skill Link', item: 'Choice Band', gender: '',
                moves: ['Wild Charge', 'Icicle Spear', 'Rock Blast', 'Volt Switch'],
                evs: {atk: 252, spd: 4, spe: 252}, ivs: {}, nature: 'Jolly',
            },
            'Electrode-Ultra': {
                species: 'Electrode-Ultra', ability: 'Pure Power', item: 'Choice Band', gender: '',
                moves: ['Wild Charge', 'Icicle Spear', 'Rock Blast', 'Explosion'],
                evs: {atk: 252, spd: 4, spe: 252}, ivs: {}, nature: 'Jolly',
            },
            'Electrode-Mega': {
                species: 'Electrode', ability: 'Static', item: 'Electrodite', gender: '',
                moves: [['Volt Switch', 'Thunderbolt'], ['Sucker Punch', 'Dark Pulse'], 'Ice Beam', ['Explosion', 'Nasty Plot', 'Taunt']],
                evs: {atk: 4, spa: 252, spe: 252}, nature: 'Naive',
            },
            'Electrode-Great-Mega': {
                species: 'Electrode-Great', ability: 'Sheer Force', item: 'Electrodite', gender: '',
                moves: ['Thunderbolt', 'Ice Beam', 'Dark Pulse', ['Signal Beam', 'Nasty Plot', 'Encore', 'Taunt', 'Volt Switch']],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Heal-Mega': {
                species: 'Electrode-Heal', ability: 'Regenerator', item: 'Electrodite', gender: '',
                moves: ['Volt Switch', ['Encore', 'Taunt'], 'Dark Pulse', 'Ice Beam'],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Quick-Mega': {
                species: 'Electrode-Quick', ability: 'Prankster', item: 'Electrodite', gender: '',
                moves: ['Thunderbolt', ['Taunt', 'Encore'], 'Thunder Wave', ['Ice Beam', 'Dark Pulse']],
                evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
            },
            'Electrode-Ultra-Mega': {
                species: 'Electrode-Ultra', ability: 'Pure Power', item: 'Electrodite', gender: '',
                moves: ['Wild Charge', 'Sucker Punch', 'Icicle Spear', 'Explosion'],
                evs: {atk: 252, spd: 4, spe: 252}, ivs: {}, nature: 'Jolly',
            },

            // /u/awkward____silence's Mega Hitmonchan:https://www.reddit.com/r/stunfisk/comments/49cfsi/mega_monday_hitmonlee_hitmonchan_hitmontop/d0qt6ti
            'Hitmonchan-Mega': {
                species: 'Hitmonchan', ability: 'Inner Focus', item: 'Hitmonchanite', gender: 'M',
                moves: ['Bullet Punch', 'Sky Uppercut', 'Comet Punch', 'Sucker Punch'],
                evs: {}, ivs: {}, nature: 'Jolly',
            },

            // /u/mkperry's Mega Mr. Mime:https://www.reddit.com/r/stunfisk/comments/4f99s0/mega_monday_mr_mime_and_sudowoodo/d27fhlo
            'Mr. Mime-Mega': {
                species: 'Mr. Mime', ability: 'Technician', item: 'Mr Mimite', gender: 'M',
                moves: ['Draining Kiss', 'Dark Pulse', 'Protect', 'Nasty Plot'],
                evs: {def: 4, spa: 252, spe: 252}, ivs: {atk: 0}, nature: 'Modest',
            },

            // /u/mkperry's Mega Jynx:https://www.reddit.com/r/stunfisk/comments/4km288/mega_monday_magmortar_and_jynx/d3gak2r
            'Jynx-Mega': {
                species: 'Jynx', ability: 'Dry Skin', item: 'Jynxite', gender: 'F',
                moves: ['Calm Mind', 'Secret Sword', 'King\'s Shield', ['Psyshock', 'Ice Beam']],
                evs: {spa: 252, def: 4, spe: 252}, ivs: {atk: 0}, nature: 'Modest',
            },

            // /u/Fatalis13's Mega Omastar:https://www.reddit.com/r/stunfisk/comments/65vygh/mega_monday_kabutops_and_omastar/dgdnyzw/
            'Omastar-Mega': {
                species: 'Omastar', ability: 'Swift Swim', item: 'Omastarite', gender: '',
                moves: ['Power Gem', ['Hydro Pump', 'Surf'], ['Ice Beam', 'Earth Power'], 'Shell Smash'],
                evs: {spa: 252, def: 4, spe: 252}, ivs: {atk: 0}, nature: 'Modest',
            },

            // /u/MegaMissingno's Mega Articuno:https://www.reddit.com/r/stunfisk/comments/3kvghh/mega_monday_legendary_birds_articuno_zapdos/cv11kh1
            'Articuno-Mega': {
                species: 'Articuno', ability: 'Pressure', item: 'Articunite', gender: '',
                moves: ['Substitute', 'Roost', ['Ice Beam', 'Freeze Dry'], ['Toxic', 'Power Gem']],
                evs: {hp: 252, def: 4, spe: 252}, ivs: {atk: 0}, nature: 'Bold',
            },

            // /u/nshooter's Mega Feraligatr:https://www.reddit.com/r/stunfisk/comments/40f88i/mega_monday_meganium_typhlosion_feraligatr/cyuho9l
            'Feraligatr-Mega': {
                species: 'Feraligatr', ability: 'Sheer Force', item: 'Feraligatrite', gender: '',
                moves: ['Dragon Dance', 'Waterfall', ['Dragon Claw', 'Outrage', 'Ice Punch'], ['Earthquake', 'Superpower', 'Iron Tail']],
                evs: {atk: 252, spd: 4, spe: 252}, ivs: {}, nature: 'Adamant',
            },

            // /u/Cthuluigi's Mega Azumarill:https://www.reddit.com/r/stunfisk/comments/55ltqy/mostly_mega_monday_azumarill_and_lanturn/d8d07vf
            'Azumarill-Mega': {
                species: 'Azumarill', ability: 'Sap Sipper', item: 'Azumarite', gender: '',
                moves: ['Belly Drum', 'Aqua Jet', ['Play Rough', 'Drain Punch'], 'Knock Off'],
                evs: {hp: 92, atk: 252, spe: 164}, ivs: {}, nature: 'Adamant',
            },

            // /u/Fatalis13's Mega Sudowoodo:https://www.reddit.com/r/stunfisk/comments/7ykfgr/mega_monday_sudowoodo_and_mr_mime/duhnu8l/
            'Sudowoodo-Mega': {
                species: 'Sudowoodo', ability: 'Sturdy', item: 'Sudowoodite', gender: '',
                moves: ['Flail', 'Earthquake', 'Stone Edge', ['Sucker Punch', 'Power-Up Punch']],
                evs: {atk: 252, spe: 252}, ivs: {hp: 0, def: 0, spd: 0}, nature: 'Hasty',
            },

            // /u/PrisonerLeet's Mega Jumpluff:https://www.reddit.com/r/stunfisk/comments/9o9sti/mega_monday_vileplume_and_jumpluff/e7skj2h/
            'Jumpluff-Mega': {
                species: 'Jumpluff', ability: 'Infiltrator', item: 'Jumpluffite', gender: '',
                moves: ['Sleep Powder', 'Stomping Tantrum', 'Seed Bomb', 'U-turn'],
                evs: {atk: 252, def: 4, spe: 252}, ivs: {}, nature: 'Jolly',
            },

            // /u/BasedRod's Mega Girafarig:https://www.reddit.com/r/stunfisk/comments/8ckogf/mega_monday_girafarig_and_alomomola/dxfu9a1/
            'Girafarig-Mega': {
                species: 'Girafarig', ability: 'Sap Sipper', item: 'Girafarigite', gender: '',
                moves: ['Crunch', 'Psychic Fangs', 'Hyper Fang', 'Trick Room'],
                evs: {}, ivs: {}, nature: 'Adamant',
            },

            // /u/IllogicalMind's Mega Delibird:https://www.reddit.com/r/stunfisk/comments/3xpo6r/mega_monday_delibird_and_stantler/cy6rcws
            'Delibird-Mega': {
                species: 'Delibird', ability: 'Vital Spirit', item: 'Delibirdite', gender: '',
                moves: ['Ice Tempest', 'Christmas Bomb', ['Power Whip', 'Christmas Whip', 'Gunk Shot'], 'Ice Shard'],
                evs: {hp: 4, atk: 252, spe: 252}, ivs: {}, nature: 'Jolly',
            },

            // /u/TheLaughingCat2's Mega Skarmory:https://www.reddit.com/r/stunfisk/comments/4xt33f/mega_monday_unofficial_edition_talonflame_and/d6iaxc5

            // /u/Just_Another_Toker's Mega Donphan:https://www.reddit.com/r/stunfisk/comments/45urxa/mega_monday_ursaring_and_donphan/d00h4o9

            // /u/Telekineticism's Mega Donphan X:https://www.reddit.com/r/stunfisk/comments/6qlk0l/mega_monday_donphan_and_ursaring/dkyg0ny/

            // /u/Vitton's Mega Donphan Y:https://www.reddit.com/r/stunfisk/comments/8093np/mega_monday_ambipom_and_donphan/duu0zas/

            // /u/Fatalis13's Mega Miltank:https://www.reddit.com/r/stunfisk/comments/52d0j3/mega_monday_tauros_and_miltank/d7kbxr2

            // /u/MegaMissingno's Mega Suicune:https://www.reddit.com/r/stunfisk/comments/4e94wz/mega_monday_entei_raikou_and_suicune/d1y80to

            // /u/Telekineticism's Mega Ludicolo:https://www.reddit.com/r/stunfisk/comments/6cobtx/mega_monday_shiinotic_and_ludicolo/dhw6812/

            // /u/krishmc15's Mega Shiftry:https://www.reddit.com/r/stunfisk/comments/3vr8s0/mega_monday_shiftry_and_ludicolo/cxq3box

            // /u/AzureBeast's Mega Swellow:https://www.reddit.com/r/stunfisk/comments/43m8r5/mega_monday_staraptor_and_swellow/czjcwhg

            // /u/mjmanella's Mega Plusle and Minun:https://www.reddit.com/r/stunfisk/comments/98tp2h/mega_monday_plusle_and_minun/e4ipzn8/

            // /u/PrisonerLeet's Mega Wailord:https://www.reddit.com/r/stunfisk/comments/9clu0q/mega_monday_wailord_and_drifblim/e5bs23l/

            // /u/OmegaFrenzy's Mega Torkoal:https://www.reddit.com/r/stunfisk/comments/6uzcp3/mega_monday_torkoal_and_pelipper/dlwyf7v/

            // /u/ThatWasPeachy's Mega Zangoose:https://www.reddit.com/r/stunfisk/comments/79qfgt/mega_monday_zangoose_and_seviper/dp48vlq/

            // /u/catsNpokemon's Mega Solrock:https://www.reddit.com/r/stunfisk/comments/4abauu/mega_monday_solrock_and_lunatone/d0yyjk4

            // /u/L0RDR0B's Mega Cradily:https://www.reddit.com/r/stunfisk/comments/41katj/mega_monday_armaldo_and_cradily/cz345h5

            // /u/L0RDR0B's Mega Kecleon:https://www.reddit.com/r/stunfisk/comments/51adho/mega_monday/d7afpng

            // /u/jayhankedlyon's Mega Banette Y:https://www.reddit.com/r/stunfisk/comments/87937k/mega_monday_gengar_and_banette/dwbgemt/

            // /u/ArcTruth's Mega Tropius:https://www.reddit.com/r/stunfisk/comments/4jja9b/mega_monday_tropius_and_togekiss/d37e4ws

            // /u/PrisonerLeet's Mega Chimecho:https://www.reddit.com/r/stunfisk/comments/72cuut/mega_monday_hypno_and_chimecho/dni0nzf/

            // /u/IllogicalMind's Punishing Regi Trio:https://www.reddit.com/r/stunfisk/comments/7nddi3/muse_monday_punisher_formes/ds18elz/

            // /u/MegaMissingno's Mega Registeel:https://www.reddit.com/r/stunfisk/comments/3nj2g8/mega_monday_regirock_registeel_regice/cvoqpec/

            // /u/L0RDR0B's Mega Empoleon:https://www.reddit.com/r/stunfisk/comments/4ihxst/mega_monday_torterra_infernape_and_empoleon/d2ybi63

            // /u/L0RDR0B's Mega Kricketune:https://www.reddit.com/r/stunfisk/comments/69vv66/mega_monday_kricketune_and_golisopod/dhahqmq/

            // /u/PotageAuCoq's Mega Roserade X:https://www.reddit.com/r/stunfisk/comments/7edc9q/mega_monday_roserade_and_victreebel/dq4fveh/

            // /u/PrisonerLeet's Mega Roserade Y:https://www.reddit.com/r/stunfisk/comments/678c5o/mega_monday_mega_ambipom_and_mega_roserade/dgoih8x/

            // /u/PrisonerLeet's Mega Wormadam:https://www.reddit.com/r/stunfisk/comments/951fvl/mega_monday_wormadam_and_mothim/e3pavyd/

            // /u/NebulonsStyle's Mega Vespiquen:https://www.reddit.com/r/stunfisk/comments/4mskyd/mega_monday_vileplume_and_vespiquen/d3y0r78

            // /u/IllogicalMind's Mega Cherrim:https://www.reddit.com/r/stunfisk/comments/3wqh42/mega_monday_cherrim_and_bellosom/cxyp6fm/

            // /u/catsNpokemon's Mega Honchkrow:https://www.reddit.com/r/stunfisk/comments/9scumd/mega_monday_gourgeist_and_honchkrow/e8o2oys/

            // /u/howfalcons's Mega Purugly:https://old.reddit.com/r/stunfisk/comments/8hnyvk/mega_monday_purugly_and_skuntank/dyl9bks/

            // /u/AzureBeast's Mega Spiritomb:https://www.reddit.com/r/stunfisk/comments/46yrfh/mega_monday_spiritomb_and_bisharp/d08udkm

            // /u/MegaMissingno's Mega Drapion X:https://www.reddit.com/r/stunfisk/comments/3q9u8g/mega_monday_pangoro_and_drapion/cwddwnw/

            // /u/PrisonerLeet's Mega Drapion Y:https://www.reddit.com/r/stunfisk/comments/6zfu6v/mega_monday_drapion_and_toxicroak/dmuwpz7/

            // /u/L0RDR0B's Mega Weavile:https://www.reddit.com/r/stunfisk/comments/50388o/mega_monday_weavile_and_gliscor/d712ex6

            // /u/Metalhead62's Mega Electivire:https://www.reddit.com/r/stunfisk/comments/3i7hac/new_mega_monday_magmortar_and_electivire/cudzqt7

            // /u/Golden-Warrior's Mega Porygon-Z:https://www.reddit.com/r/stunfisk/comments/4gb4zb/mega_monday_primeape_and_porygonz/d2g1qkk

            // /u/polarbearhunt's Mega Dusknoir:https://www.reddit.com/r/stunfisk/comments/3oesgv/mega_monday_dusknoir_and_jellicent/cvwwo4e

            // /u/TheOnlyOrk's Mega Froslass:https://www.reddit.com/r/stunfisk/comments/96y2rs/mega_monday_froslass_and_slowking/e445h67/

            // /u/DbuggerS's Mega Heatran:https://www.reddit.com/r/stunfisk/comments/6nptuj/mega_monday_heatran_and_volcanion/dkbiuc3/

            // /u/PrisonerLeet's Mega Emboar:https://www.reddit.com/r/stunfisk/comments/9ejl7x/mega_monday_serperior_emboar_and_samurott/e5ph7a7/

            // /u/AzureBeast's Mega Simisear:https://www.reddit.com/r/stunfisk/comments/4wok89/mega_monday_simisear_simipour_simisage/d68qnvu

            // /u/FishFilletShow's Mega Musharna:https://www.reddit.com/r/stunfisk/comments/3r6a41/mega_monday_chimecho_and_musharna/cwlmlt2

            // /u/Heycanwenot's Mega Swoobat:https://www.reddit.com/r/stunfisk/comments/6jihm2/mega_monday_butterfree_and_swoobat/djek6rr/

            // /u/rmch99's Mega Darmanitan(s):https://www.reddit.com/r/stunfisk/comments/6l010g/mega_monday_basculin_and_darmanitan/djq8u64/

            // /u/Fatalis13's Mega Klinklang:https://www.reddit.com/r/stunfisk/comments/64haov/mega_monday_klinklang_and_magearna/dg2mqfp/

            // /u/L0RDR0B's Mega Chandelure:https://www.reddit.com/r/stunfisk/comments/54iwzc/mostly_mega_monday_gengar_and_chandelure/d82sgax

            // /u/PrisonerLeet's Mega Beartic:https://www.reddit.com/r/stunfisk/comments/9aopt6/mega_monday_sunflora_and_beartic/e4wyc3j/

            // /u/FishFilletShow's Mega Golurk X:https://www.reddit.com/r/stunfisk/comments/3pavu9/mega_monday_golurk_and_froslass/cw4xdvl

            // /u/Fatalis13's Mega Golurk Y:https://www.reddit.com/r/stunfisk/comments/6p549i/mega_monday_golurk_and_krookodile/dknagx2/

            // /u/L0RDRB's Mega Bouffalant:https://www.reddit.com/r/stunfisk/comments/4dauwb/mega_monday_bouffalant_and_hippowdon/d1papat/

            // /u/TURBODERP's Mega Braviary:https://www.reddit.com/r/stunfisk/comments/8xbtub/mega_monday_braviary_and_mandibuzz/e22fy66/

            // /u/mkperry's Mega Heatmor:https://www.reddit.com/r/stunfisk/comments/4c9vy2/mega_monday_heatmor_and_durant/d1g9uzv/

            // /u/LaserBatman's Mega Zoroark:https://www.reddit.com/r/stunfisk/comments/56q4yh/mostly_mega_monday_beheeyem_and_zoroark/d8mc0ws/

            // /u/MegaMissingno's Mega Tornadus:https://www.reddit.com/r/stunfisk/comments/4ovybw/mega_monday_landorus_thundurus_and_tornadus_art/d4ggwo6/

            // /u/Fatalis13's Mega Meowstic:https://www.reddit.com/r/stunfisk/comments/60iakb/mega_monday_meowstic/df6qray/

            // /u/_Mikau's Mega Slurpuff:https://www.reddit.com/r/stunfisk/comments/6mdt4t/mega_monday_aromatisse_and_slurpuff/dk0twkc/

            // /u/L0RDR0B's Mega Malamar:https://www.reddit.com/r/stunfisk/comments/4baujy/mega_monday_malamar_and_venomoth/d17lzb1/

            // /u/L0RDR0B's Mega Dragalge:https://www.reddit.com/r/stunfisk/comments/4nti5z/mega_monday_clawitzer_and_dragalge/d4782xb/

            // /u/Blastgang's Mega Aurorus:https://www.reddit.com/r/stunfisk/comments/42m6xx/mega_monday_aurorus_and_tyrantrum/czbvtdn/

            // /u/MegaMissingno's Mega Gourgeist:https://www.reddit.com/r/stunfisk/comments/3twkmf/mega_monday_parasect_and_gourgeist/cxa0uid/

            // /u/jayhankedlyon's Mega Incineroar X:https://www.reddit.com/r/stunfisk/comments/9uadq4/muse_monday_incineroar_and_landorustherian/e935tvk/

            // /u/PrisonerLeet's Mega Incineroar Y:https://www.reddit.com/r/stunfisk/comments/917pck/muse_monday_alolan_starters/e2w2hp4/

            // /u/Heycanwenot's Mega Oricorio:https://www.reddit.com/r/stunfisk/comments/6i3s4t/mega_monday_oricorio/dj3cgmx/

            // /u/Fatalis13's Mega Lycanroc:https://www.reddit.com/r/stunfisk/comments/5z4q6r/mega_monday_lycanroc/devszlu/

            // /u/catsNpokemon's Mega Mudsdale:https://www.reddit.com/r/stunfisk/comments/7vfkqy/mega_monday_toucannon_and_mudsdale/dtrypwz/

            // /u/catsNpokemon's Mega Golisopod:https://www.reddit.com/r/stunfisk/comments/8atw28/mega_monday_golisopod_and_crabominable/dx1vw6e/

            // /u/IllogicalMind's Mega Drampa:https://www.reddit.com/r/stunfisk/comments/5ppoq6/mega_monday_drampa_and_turtonator/dct0zy9/

            // /u/LaserBatman's Mega Kommo-o:https://www.reddit.com/r/stunfisk/comments/5tq4wn/mega_monday_kommoo_and_goodra/ddodzex/

            // /u/L0RDR0B's Primal Lunala:https://www.reddit.com/r/stunfisk/comments/5xtsjc/muse_monday_solgaleo_and_lunala/deleurv/
		};
		let pool = Object.keys(sets);
		/** @type {{[type: string]: number}} */
		let typePool = {};
		while (pool.length && team.length < 6) {
			let name = this.sampleNoReplace(pool);
			let stunfiskSet = sets[name];
			/** @type {PokemonSet} */
			let set = {
				name: name,
				species: stunfiskSet.species,
				item: Array.isArray(stunfiskSet.item) ? this.sampleNoReplace(stunfiskSet.item) : stunfiskSet.item,
				ability: Array.isArray(stunfiskSet.ability) ? this.sampleNoReplace(stunfiskSet.ability) : stunfiskSet.ability,
				moves: [],
				nature: Array.isArray(stunfiskSet.nature) ? this.sampleNoReplace(stunfiskSet.nature) : stunfiskSet.nature,
				gender: stunfiskSet.gender,
				evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: stunfiskSet.level || 100,
				shiny: stunfiskSet.shiny,
			};
			if (stunfiskSet.ivs) {
				for (let iv in stunfiskSet.ivs) {
					// IVs from the set override the default of 31, assume the hardcoded IVs are legal
					// @ts-ignore StatsTable has no index signature
					set.ivs[iv] = stunfiskSet.ivs[iv];
				}
			}
			if (stunfiskSet.evs) {
				for (let ev in stunfiskSet.evs) {
					// EVs from the set override the default of 0, assume the hardcoded EVs are legal
					// @ts-ignore StatsTable has no index signature
					set.evs[ev] = stunfiskSet.evs[ev];
				}
			} else {
				set.evs = {hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84};
			}
			while (set.moves.length < 4 && stunfiskSet.moves.length > 0) {
				let move = this.sampleNoReplace(stunfiskSet.moves);
				if (Array.isArray(move)) move = this.sampleNoReplace(move);
				set.moves.push(move);
			}
			team.push(set);
		}
		return team;
	}
}

module.exports = RandomStunfiskTeams;