'use strict';

/**@type {{[k: string]: ModdedItemData}} */
let BattleItems = {
    // Z-CRYSTALS //
    // /u/TheLaughingCat2's Kinglerium Z:https://old.reddit.com/r/stunfisk/comments/8l1iwe/muse_monday_kanto_zmoves/dzc3c09/
    "kingleriumz": {
		id: "kingleriumz",
        isNonstandard: true,
		name: "Kinglerium Z",
		spritenum: 651,
		onTakeItem: false,
		zMove: "Crushing Crab Clobbering",
		zMoveFrom: "Crabhammer",
		zMoveUser: ["Kingler"],
		num: 799,
		gen: 7,
		desc: "If held by a Kingler with Crabhammer, it can use Crushing Crab Clobbering.",
    },

    // /u/Sandman4999's Slakingium Z:https://www.reddit.com/r/stunfisk/comments/6wfvv0/muse_monday_hoenn_zmoves/dm7ztzh/
    "slakingiumz": {
		id: "slakingium",
        isNonstandard: true,
		name: "Slakingium Z",
		spritenum: 651,
		onTakeItem: false,
		zMove: "Youthful Vigor",
		zMoveFrom: "Slack Off",
		zMoveUser: ["Slaking"],
		num: 799,
		gen: 7,
		desc: "If held by a Slaking with Slack Off, it can use Youthful Vigor.",
    },

    // /u/Vitton's Goodrium Z:https://www.reddit.com/r/stunfisk/comments/7qhewa/muse_monday_kalos_zcrystals/dsp923n/
    "goodriumz": {
		id: "goodriumz",
        isNonstandard: true,
		name: "Goodrium Z",
		spritenum: 651,
		onTakeItem: false,
		zMove: "Draconian Downpour",
		zMoveFrom: "Draco Meteor",
		zMoveUser: ["Goodra"],
		num: 799,
		gen: 7,
		desc: "If held by a Goodra with Draco Meteor, it can use Draconian Downpour",
    },
	// MEGA STONES //
	// /u/captainfantastic's Mega Blastoise (Blastoise V2):https://www.reddit.com/r/stunfisk/comments/8vjh0p/mega_monday_venusaur_and_blastoise/e1nyjk8/
	"blastoisinitex": {
		id: "blastoisinitex",
        isNonstandard: true,
		name: "Blastoisinite X",
		spritenum: 575,
		megaStone: "Blastoise-Mega-X",
		megaEvolves: "Blastoise",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Blastoise, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Drake_Bugatti's Mega Blastoise:https://www.reddit.com/r/stunfisk/comments/3yhhd9/mega_monday_blastoise_and_venusaur/cydl9q9/
	"blastoisinitey": {
		id: "blastoisinitey",
        isNonstandard: true,
		name: "Blastoisinite Y",
		spritenum: 575,
		megaStone: "Blastoise-Mega-Y",
		megaEvolves: "Blastoise",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Blastoise, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/colonelxsuezo's Mega Fearow:https://www.reddit.com/r/stunfisk/comments/4hhrea/mega_monday_fearow_and_slowking/d2pqxok/
	"fearowite": {
		id: "fearowite",
        isNonstandard: true,
		name: "Fearowite",
		spritenum: 575,
		megaStone: "Fearow-Mega",
		megaEvolves: "Fearow",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Fearow, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Nidoqueen:https://www.reddit.com/r/stunfisk/comments/3jxeww/mega_monday_labor_day_edition_nidoqueen_and/cut5ep9/
	"nidoqueenite": {
		id: "nidoqueenite",
        isNonstandard: true,
		name: "Nidoqueenite",
		spritenum: 575,
		megaStone: "Nidoqueen-Mega",
		megaEvolves: "Nidoqueen",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Nidoqueen, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Fatalis13's Mega Clefable:https://www.reddit.com/r/stunfisk/comments/6y4lxt/mega_monday_araquanid_and_clefable/dmku9cz/
	"clefablite": {
		id: "clefablite",
        isNonstandard: true,
		name: "Clefablite",
		spritenum: 575,
		megaStone: "Clefable-Mega",
		megaEvolves: "Clefable",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Clefable, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/metalflygon08's Mega Poliwrath X:https://www.reddit.com/r/stunfisk/comments/3mnij0/mega_monday_poliwrath_and_breloom/cvh0732/
	"poliwrathitex": {
		id: "poliwrathitex",
        isNonstandard: true,
		name: "Poliwrathite X",
		spritenum: 575,
		megaStone: "Poliwrath-Mega-X",
		megaEvolves: "Poliwrath",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Poliwrath, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/PrisonerLeet's Mega Poliwrath Y:https://www.reddit.com/r/stunfisk/comments/9yizvs/mega_monday_politied_and_poliwrath/ea1og20
    "poliwrathitey": {
		id: "poliwrathitey",
        isNonstandard: true,
		name: "Poliwrathite Y",
		spritenum: 575,
		megaStone: "Poliwrath-Mega-Y",
		megaEvolves: "Poliwrath",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Poliwrath, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/PrisonerLeet's Mega Machamp:https://www.reddit.com/r/stunfisk/comments/53ftu4/mostly_mega_monday_machamp_and_golem/d7szd9h
	"machampite": {
		id: "machampite",
        isNonstandard: true,
		name: "Machampite",
		spritenum: 575,
		megaStone: "Machamp-Mega",
		megaEvolves: "Machamp",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Machamp, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/howfalcons's Mega Tentacruel:https://www.reddit.com/r/stunfisk/comments/9kg0nd/mega_monday_tentacruel_and_claydol/e6ywbbp/
	"tentacruelite": {
		id: "tentacruelite",
        isNonstandard: true,
		name: "Tentacruelite",
		spritenum: 575,
		megaStone: "Tentacruel-Mega",
		megaEvolves: "Tentacruel",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Tentacruel, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Electrode &co:https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm/
	"electrodite": {
		id: "electrodite",
        isNonstandard: true,
		name: "Electrodite",
		spritenum: 575,
		megaStone: "Electrode-Mega",
		megaEvolves: "Electrode",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Electrode, this item allows it to Mega Evolve in battle.",
	},
    "electrodited": {
		id: "electrodited",
        isNonstandard: true,
		name: "Electrodite D",
		spritenum: 575,
		megaStone: "Electrode-Dive-Mega",
		megaEvolves: "Electrode-Dive",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Electrode, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/awkward____silence's Mega Hitmonchan:https://www.reddit.com/r/stunfisk/comments/49cfsi/mega_monday_hitmonlee_hitmonchan_hitmontop/d0qt6ti
	"hitmonchanite": {
		id: "hitmonchanite",
        isNonstandard: true,
		name: "Hitmonchanite",
		spritenum: 575,
		megaStone: "Hitmonchan-Mega",
		megaEvolves: "Hitmonchan",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Hitmonchan, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/mkperry's Mega Mr. Mime:https://www.reddit.com/r/stunfisk/comments/4f99s0/mega_monday_mr_mime_and_sudowoodo/d27fhlo
	"mrmimite": {
		id: "mrmimite",
        isNonstandard: true,
		name: "Mr. Mimite",
		spritenum: 575,
		megaStone: "Mr. Mime-Mega",
		megaEvolves: "Mr. Mime",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Mr. Mime, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/mkperry's Mega Jynx:https://www.reddit.com/r/stunfisk/comments/4km288/mega_monday_magmortar_and_jynx/d3gak2r
	"jynxite": {
		id: "jynxite",
        isNonstandard: true,
		name: "Jynxite",
		spritenum: 575,
		megaStone: "Jynx-Mega",
		megaEvolves: "Jynx",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Jynx, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Fatalis13's Mega Omastar:https://www.reddit.com/r/stunfisk/comments/65vygh/mega_monday_kabutops_and_omastar/dgdnyzw/
	"omastarite": {
		id: "omastarite",
        isNonstandard: true,
		name: "Omastarite",
		spritenum: 575,
		megaStone: "Omastar-Mega",
		megaEvolves: "Omastar",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Omastar, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/MegaMissingno's Mega Articuno:https://www.reddit.com/r/stunfisk/comments/3kvghh/mega_monday_legendary_birds_articuno_zapdos/cv11kh1
	"articunite": {
		id: "articunite",
        isNonstandard: true,
		name: "Articunite",
		spritenum: 575,
		megaStone: "Articuno-Mega",
		megaEvolves: "Articuno",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Articuno, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/nshooter's Mega Feraligatr:https://www.reddit.com/r/stunfisk/comments/40f88i/mega_monday_meganium_typhlosion_feraligatr/cyuho9l
	"feraligatrite": {
		id: "feraligatrite",
        isNonstandard: true,
		name: "Feraligatrite",
		spritenum: 575,
		megaStone: "Feraligatr-Mega",
		megaEvolves: "Feraligatr",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Feraligatr, this item allows it to Mega Evolve in battle.",
	},
	// /u/Cthuluigi's Mega Azumarill:https://www.reddit.com/r/stunfisk/comments/55ltqy/mostly_mega_monday_azumarill_and_lanturn/d8d07vf
	"azumarite": {
		id: "azumarite",
        isNonstandard: true,
		name: "Azumarite",
		spritenum: 575,
		megaStone: "Azumarill-Mega",
		megaEvolves: "Azumarill",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Azumarill, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Fatalis13's Mega Sudowoodo:https://www.reddit.com/r/stunfisk/comments/7ykfgr/mega_monday_sudowoodo_and_mr_mime/duhnu8l/
	"sudowoodite": {
		id: "sudowoodite",
        isNonstandard: true,
		name: "Sudowoodite",
		spritenum: 575,
		megaStone: "Sudowoodo-Mega",
		megaEvolves: "Sudowoodo",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Sudowoodo, this item allows it to Mega Evolve in battle.",
	},
    
    // /u/PrisonerLeet's Mega Jumpluff:https://www.reddit.com/r/stunfisk/comments/9o9sti/mega_monday_vileplume_and_jumpluff/e7skj2h/
    "jumpluffite": {
		id: "jumpluffite",
        isNonstandard: true,
		name: "Jumpluffite",
		spritenum: 575,
		megaStone: "Jumpluff-Mega",
		megaEvolves: "Jumpluff",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Jumpluff, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/BasedRod's Mega Girafarig:https://www.reddit.com/r/stunfisk/comments/8ckogf/mega_monday_girafarig_and_alomomola/dxfu9a1/
	"girafarigite": {
		id: "girafarigite",
        isNonstandard: true,
		name: "Girafarigite",
		spritenum: 575,
		megaStone: "Girafarig-Mega",
		megaEvolves: "Girafarig",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Girafarig, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/IllogicalMind's Mega Delibird:https://www.reddit.com/r/stunfisk/comments/3xpo6r/mega_monday_delibird_and_stantler/cy6rcws
	"delibirdite": {
		id: "delibirdite",
        isNonstandard: true,
		name: "Delibirdite",
		spritenum: 575,
		megaStone: "Delibird-Mega",
		megaEvolves: "Delibird",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Delibird, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/TheLaughingCat2's Mega Skarmory:https://www.reddit.com/r/stunfisk/comments/4xt33f/mega_monday_unofficial_edition_talonflame_and/d6iaxc5
	"skarmorite": {
		id: "skarmorite",
        isNonstandard: true,
		name: "skarmorite",
		spritenum: 575,
		megaStone: "Skarmory-Mega",
		megaEvolves: "Skarmory",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Skarmory, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Fatalis13's Mega Miltank:https://www.reddit.com/r/stunfisk/comments/52d0j3/mega_monday_tauros_and_miltank/d7kbxr2
	"miltankite": {
		id: "miltankite",
        isNonstandard: true,
		name: "Miltankite",
		spritenum: 575,
		megaStone: "Miltank-Mega",
		megaEvolves: "Miltank",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Miltank, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/MegaMissingno's Mega Suicune:https://www.reddit.com/r/stunfisk/comments/4e94wz/mega_monday_entei_raikou_and_suicune/d1y80to
	"suicunite": {
		id: "suicunite",
        isNonstandard: true,
		name: "Suicunite",
		spritenum: 575,
		megaStone: "Suicune-Mega",
		megaEvolves: "Suicune",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Suicune, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Telekineticism's Mega Ludicolo:https://www.reddit.com/r/stunfisk/comments/6cobtx/mega_monday_shiinotic_and_ludicolo/dhw6812/
	"ludicolite": {
		id: "ludicolite",
        isNonstandard: true,
		name: "Ludicolite",
		spritenum: 575,
		megaStone: "Ludicolo-Mega",
		megaEvolves: "Ludicolo",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Ludicolo, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/krishmc15's Mega Shiftry:https://www.reddit.com/r/stunfisk/comments/3vr8s0/mega_monday_shiftry_and_ludicolo/cxq3box
	"shiftrite": {
		id: "shiftrite",
        isNonstandard: true,
		name: "Shiftrite",
		spritenum: 575,
		megaStone: "Shiftry",
		megaEvolves: "Shiftry",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Shiftry, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/AzureBeast's Mega Swellow:https://www.reddit.com/r/stunfisk/comments/43m8r5/mega_monday_staraptor_and_swellow/czjcwhg
	"swellite": {
		id: "swellite",
        isNonstandard: true,
		name: "Swellite",
		spritenum: 575,
		megaStone: "Swellow-Mega",
		megaEvolves: "Swellow",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Swellow, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/mjmanella's Mega Plusle and Minun:https://www.reddit.com/r/stunfisk/comments/98tp2h/mega_monday_plusle_and_minun/e4ipzn8/
	"plusite": {
		id: "plusite",
        isNonstandard: true,
		name: "Plusite",
		spritenum: 575,
		megaStone: "Plusle-Mega",
		megaEvolves: "Plusle",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Plusle, this item allows it to Mega Evolve in battle.",
	},
	"minite": {
		id: "minite",
        isNonstandard: true,
		name: "Minite",
		spritenum: 575,
		megaStone: "Minun-Mega",
		megaEvolves: "Minun",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Minun, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Wailord:https://www.reddit.com/r/stunfisk/comments/9clu0q/mega_monday_wailord_and_drifblim/e5bs23l/
	"wailordite": {
		id: "wailordite",
        isNonstandard: true,
		name: "Wailordite",
		spritenum: 575,
		megaStone: "Wailord-Mega",
		megaEvolves: "Wailord",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Wailord, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/OmegaFrenzy's Mega Torkoal:https://www.reddit.com/r/stunfisk/comments/6uzcp3/mega_monday_torkoal_and_pelipper/dlwyf7v/
	"torkoalite": {
		id: "torkoalite",
        isNonstandard: true,
		name: "Torkoalite",
		spritenum: 575,
		megaStone: "Torkoal-Mega",
		megaEvolves: "Torkoal",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Torkoal, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/ThatWasPeachy's Mega Zangoose:https://www.reddit.com/r/stunfisk/comments/79qfgt/mega_monday_zangoose_and_seviper/dp48vlq/
	"zangoosite": {
		id: "zangoosite",
        isNonstandard: true,
		name: "Zangoosite",
		spritenum: 575,
		megaStone: "Zangoose-Mega",
		megaEvolves: "Zangoose",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Zangoose, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/catsNpokemon's Mega Solrock:https://www.reddit.com/r/stunfisk/comments/4abauu/mega_monday_solrock_and_lunatone/d0yyjk4
	"solrockite": {
		id: "solrockiteite",
        isNonstandard: true,
		name: "Solrockite",
		spritenum: 575,
		megaStone: "Solrock-Mega",
		megaEvolves: "Solrock",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Solrock, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/L0RDR0B's Mega Cradily:https://www.reddit.com/r/stunfisk/comments/41katj/mega_monday_armaldo_and_cradily/cz345h5
	"cradilite": {
		id: "cradilite",
        isNonstandard: true,
		name: "Cradilite",
		spritenum: 575,
		megaStone: "Cradily-Mega",
		megaEvolves: "Cradily",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Cradily, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/L0RDR0B's Mega Kecleon:https://www.reddit.com/r/stunfisk/comments/51adho/mega_monday/d7afpng
	"kecleonite": {
		id: "kecleonite",
        isNonstandard: true,
		name: "Kecleonite",
		spritenum: 575,
		megaStone: "Kecleon-Mega",
		megaEvolves: "Kecleon",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Kecleon, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/jayhankedlyon's Mega Banette Y:https://www.reddit.com/r/stunfisk/comments/87937k/mega_monday_gengar_and_banette/dwbgemt/
	"banettitey": {
		id: "banettitey",
        isNonstandard: true,
		name: "Banettite Y",
		spritenum: 575,
		megaStone: "Banette-Mega-Y",
		megaEvolves: "Banette",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Banette, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/ArcTruth's Mega Tropius:https://www.reddit.com/r/stunfisk/comments/4jja9b/mega_monday_tropius_and_togekiss/d37e4ws
	"tropiusite": {
		id: "tropiusite",
        isNonstandard: true,
		name: "Tropiusite",
		spritenum: 575,
		megaStone: "Tropius-Mega",
		megaEvolves: "Tropius",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Tropius, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Chimecho:https://www.reddit.com/r/stunfisk/comments/72cuut/mega_monday_hypno_and_chimecho/dni0nzf/
	"chimechonite": {
		id: "chimechonite",
        isNonstandard: true,
		name: "Chimechonite",
		spritenum: 575,
		megaStone: "Chimecho-Mega",
		megaEvolves: "Chimecho",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Chimecho, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/IllogicalMind's Punishing Regi Trio:https://www.reddit.com/r/stunfisk/comments/7nddi3/muse_monday_punisher_formes/ds18elz/
	"stoneidol": {
		id: "stoneidol",
		name: "Stone Idol",
		spritenum: 390,
		onSwitchIn: function (pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Regirock') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal: function (pokemon) {
			pokemon.formeChange('Regirock-Punisher', this.effect, true);
		},
		onTakeItem: function (item, source) {
			if (source.baseTemplate.baseSpecies === 'Regirock') return false;
			return true;
		},
		num: 534,
		gen: 6,
		desc: "If held by a Regirock, this item triggers its Punisher Transformation in battle.",
	},
	"glacialidol": {
		id: "glacialidol",
		name: "Glacial Idol",
		spritenum: 390,
		onSwitchIn: function (pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Regice') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal: function (pokemon) {
			pokemon.formeChange('Regice-Punisher', this.effect, true);
			let newHP = Math.floor(Math.floor(2 * pokemon.template.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
			pokemon.hp = newHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newHP;
		},
		onTakeItem: function (item, source) {
			if (source.baseTemplate.baseSpecies === 'Regice') return false;
			return true;
		},
		num: 534,
		gen: 6,
		desc: "If held by a Regice, this item triggers its Punisher Transformation in battle.",
	},
	"ironidol": {
		id: "ironidol",
		name: "Iron Idol",
		spritenum: 390,
		onSwitchIn: function (pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Registeel') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal: function (pokemon) {
			pokemon.formeChange('Registeel-Punisher', this.effect, true);
			let newHP = Math.floor(Math.floor(2 * pokemon.template.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
			pokemon.hp = newHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newHP;
		},
		onTakeItem: function (item, source) {
			if (source.baseTemplate.baseSpecies === 'Registeel') return false;
			return true;
		},
		num: 534,
		gen: 6,
		desc: "If held by a Registeel, this item triggers its Punisher Transformation in battle.",
	},
	
	// /u/MegaMissingno's Mega Registeel:https://www.reddit.com/r/stunfisk/comments/3nj2g8/mega_monday_regirock_registeel_regice/cvoqpec
	"registeelite": {
		id: "registeelite",
        isNonstandard: true,
		name: "Registeelite",
		spritenum: 575,
		megaStone: "Registeel-Mega",
		megaEvolves: "Registeel",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Registeel, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/L0RDR0B's Mega Empoleon:https://www.reddit.com/r/stunfisk/comments/4ihxst/mega_monday_torterra_infernape_and_empoleon/d2ybi63
	"empoleonite": {
		id: "empoleoniteite",
        isNonstandard: true,
		name: "Empoleonite",
		spritenum: 575,
		megaStone: "Empoleon-Mega",
		megaEvolves: "Empoleon",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Empoleon, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/L0RDR0B's Mega Kricketune:https://www.reddit.com/r/stunfisk/comments/69vv66/mega_monday_kricketune_and_golisopod/dhahqmq/
	"kricketunite": {
		id: "kricketunite",
        isNonstandard: true,
		name: "Kricketunite",
		spritenum: 575,
		megaStone: "Kricketune-Mega",
		megaEvolves: "Kricketune",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Kricketune, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PotageAuCoq's Mega Roserade X:https://www.reddit.com/r/stunfisk/comments/7edc9q/mega_monday_roserade_and_victreebel/dq4fveh/
	"roseraditex": {
		id: "roseraditex",
        isNonstandard: true,
		name: "Roseradite X",
		spritenum: 575,
		megaStone: "Roserade-Mega-X",
		megaEvolves: "Roserade",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Roserade, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Roserade Y:https://www.reddit.com/r/stunfisk/comments/678c5o/mega_monday_mega_ambipom_and_mega_roserade/dgoih8x/
	"roseraditey": {
		id: "roseraditey",
        isNonstandard: true,
		name: "Roseradite Y",
		spritenum: 575,
		megaStone: "Roserade-Mega-Y",
		megaEvolves: "Roserade",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Roserade, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Zerox_Z21's Mega Rampardos:https://www.reddit.com/r/stunfisk/comments/8mqbdl/mega_monday_mega_fossils/dzplcay/
	"rampardosite": {
		id: "rampardosite",
        isNonstandard: true,
		name: "Rampardosite",
		spritenum: 575,
		megaStone: "Rampardos-Mega",
		megaEvolves: "Rampardos",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Rampardos, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Wormadam:https://www.reddit.com/r/stunfisk/comments/951fvl/mega_monday_wormadam_and_mothim/e3pavyd/
	"wormadamite": {
		id: "wormadamite",
        isNonstandard: true,
		name: "Wormadamite",
		spritenum: 575,
		megaStone: "Wormadam-Mega",
		megaEvolves: "Wormadam",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Wormadam, this item allows it to Mega Evolve in battle.",
	},
	"wormadamites": {
		id: "wormadamites",
        isNonstandard: true,
		name: "Wormadamite S",
		spritenum: 575,
		megaStone: "Wormadam-Sandy-Mega",
		megaEvolves: "Wormadam-Sandy",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Wormadam-Sandy, this item allows it to Mega Evolve in battle.",
	},
	"wormadamitet": {
		id: "wormadamitet",
        isNonstandard: true,
		name: "Wormadamite T",
		spritenum: 575,
		megaStone: "Wormadam-Trash-Mega",
		megaEvolves: "Wormadam-Trash",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.Template.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Wormadam-Trash, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/NebulonsStyle's Mega Vespiquen:https://www.reddit.com/r/stunfisk/comments/4mskyd/mega_monday_vileplume_and_vespiquen/d3y0r78
	"vespiquenite": {
		id: "vespiquenite",
        isNonstandard: true,
		name: "Vespiquenite",
		spritenum: 575,
		megaStone: "Vespiquen-Mega",
		megaEvolves: "Vespiquen",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Vespiquen, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/IllogicalMind's Mega Cherrim:https://www.reddit.com/r/stunfisk/comments/3wqh42/mega_monday_cherrim_and_bellosom/cxyp6fm
	"cherrimite": {
		id: "cherrimite",
        isNonstandard: true,
		name: "Cherrimite",
		spritenum: 575,
		megaStone: "Cherrim-Mega",
		megaEvolves: "Cherrim",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -40,
		gen: 6,
		desc: "If held by a Cherrim, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/catsNpokemon's Mega Honchkrow:https://www.reddit.com/r/stunfisk/comments/9scumd/mega_monday_gourgeist_and_honchkrow/e8o2oys/
	"honchkrowite": {
		id: "honchkrowite",
        isNonstandard: true,
		name: "Honchkrowite",
		spritenum: 575,
		megaStone: "Honchkrow-Mega",
		megaEvolves: "Honchkrow",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Honchkrow, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/howfalcons's Mega Purugly:https://old.reddit.com/r/stunfisk/comments/8hnyvk/mega_monday_purugly_and_skuntank/dyl9bks/
	"puruglite": {
		id: "puruglite",
        isNonstandard: true,
		name: "Puruglite",
		spritenum: 575,
		megaStone: "Purugly-Mega",
		megaEvolves: "Purugly",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Purugly, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/AzureBeast's Mega Spiritomb:https://www.reddit.com/r/stunfisk/comments/46yrfh/mega_monday_spiritomb_and_bisharp/d08udkm
	"spiritombite": {
		id: "spiritombite",
        isNonstandard: true,
		name: "Spiritombite",
		spritenum: 575,
		megaStone: "Spiritomb-Mega",
		megaEvolves: "Spiritomb",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Spiritomb, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/MegaMissingno's Mega Drapion X:https://www.reddit.com/r/stunfisk/comments/46yrfh/mega_monday_spiritomb_and_bisharp/d08udkm
	"drapionitex": {
		id: "drapionitex",
        isNonstandard: true,
		name: "Drapionite X",
		spritenum: 575,
		megaStone: "Drapion-Mega-X",
		megaEvolves: "Drapion",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Drapion, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/PrisonerLeet's Mega Drapion Y:https://www.reddit.com/r/stunfisk/comments/6zfu6v/mega_monday_drapion_and_toxicroak/dmuwpz7/
	"drapionitey": {
		id: "drapionitey",
        isNonstandard: true,
		name: "Drapionite Y",
		spritenum: 575,
		megaStone: "Drapion-Mega-Y",
		megaEvolves: "Drapion",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Drapion, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/L0RDR0B's Mega Weavile:https://www.reddit.com/r/stunfisk/comments/50388o/mega_monday_weavile_and_gliscor/d712ex6
	"weavilite": {
		id: "weavilite",
        isNonstandard: true,
		name: "Weavilite",
		spritenum: 575,
		megaStone: "Weavile-Mega",
		megaEvolves: "Weavile",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Weavile, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Metalhead62's Mega Electivire:https://www.reddit.com/r/stunfisk/comments/3i7hac/new_mega_monday_magmortar_and_electivire/cudzqt7
	"electivite": {
		id: "electivite",
        isNonstandard: true,
		name: "Electivite",
		spritenum: 575,
		megaStone: "Electivire-Mega",
		megaEvolves: "Electivire",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Electivire, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/Golden-Warrior's Mega Porygon-Z:https://www.reddit.com/r/stunfisk/comments/4gb4zb/mega_monday_primeape_and_porygonz/d2g1qkk
	"porygonite": {
		id: "porygonite",
        isNonstandard: true,
		name: "Porygonite",
		spritenum: 575,
		megaStone: "Porygon-Z-Mega",
		megaEvolves: "Porygon-Z",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Porygon-Z, this item allows it to Mega Evolve in battle.",
	},
    
	// /u/polarbearhunt's Mega Dusknoir:https://www.reddit.com/r/stunfisk/comments/3oesgv/mega_monday_dusknoir_and_jellicent/cvwwo4e
	"dusknoirite": {
		id: "dusknoirite",
        isNonstandard: true,
		name: "Dusknoirite",
		spritenum: 575,
		megaStone: "Dusknoir-Mega",
		megaEvolves: "Dusknoir",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Dusknoir, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/TheOnlyOrk's Mega Froslass:https://www.reddit.com/r/stunfisk/comments/96y2rs/mega_monday_froslass_and_slowking/e445h67/
	"froslassite": {
		id: "froslassite",
        isNonstandard: true,
		name: "Froslassite",
		spritenum: 575,
		megaStone: "Froslass-Mega",
		megaEvolves: "Froslass",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Froslass, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/DbuggerS's Mega Heatran:https://www.reddit.com/r/stunfisk/comments/6nptuj/mega_monday_heatran_and_volcanion/dkbiuc3/
    "heatranite": {
		id: "heatranite",
        isNonstandard: true,
		name: "Heatranite",
		spritenum: 575,
		megaStone: "Heatran-Mega",
		megaEvolves: "Heatran",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Heatran, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/PrisonerLeet's Mega Emboar:https://www.reddit.com/r/stunfisk/comments/9ejl7x/mega_monday_serperior_emboar_and_samurott/e5ph7a7/
    "emboarite": {
		id: "emboarite",
        isNonstandard: true,
		name: "Emboarite",
		spritenum: 575,
		megaStone: "Emboar-Mega",
		megaEvolves: "Emboar",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Emboar, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/AzureBeast's Mega Simisear:https://www.reddit.com/r/stunfisk/comments/4wok89/mega_monday_simisear_simipour_simisage/d68qnvu
    "simisearite": {
		id: "simisearite",
        isNonstandard: true,
		name: "Simisearite",
		spritenum: 575,
		megaStone: "Simisear-Mega",
		megaEvolves: "Simisear",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Simisear, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/FishFilletShow's Mega Musharna:https://www.reddit.com/r/stunfisk/comments/3r6a41/mega_monday_chimecho_and_musharna/cwlmlt2
    "musharnite": {
		id: "musharnite",
        isNonstandard: true,
		name: "Musharnite",
		spritenum: 575,
		megaStone: "Musharna-Mega",
		megaEvolves: "Musharna",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Musharna, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Heycanwenot's Mega Swoobat:https://www.reddit.com/r/stunfisk/comments/6jihm2/mega_monday_butterfree_and_swoobat/djek6rr/
    "swoobatite": {
		id: "swoobatite",
        isNonstandard: true,
		name: "Swoobatite",
		spritenum: 575,
		megaStone: "Swoobat-Mega",
		megaEvolves: "Swoobat",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Swoobat, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/rmch99's Mega Darmanitan(s):https://www.reddit.com/r/stunfisk/comments/6l010g/mega_monday_basculin_and_darmanitan/djq8u64/
    "darmanitanitex": {
		id: "darmanitanitex",
        isNonstandard: true,
		name: "Darmanitanite X",
		spritenum: 575,
		megaStone: "Darmanitan-X-Mega",
		megaEvolves: "Darmanitan",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Darmanitan, this item allows it to Mega Evolve in battle.",
	},
	"darmanitanitey": {
		id: "darmanitanitey",
        isNonstandard: true,
		name: "Darmanitanite Y",
		spritenum: 575,
		megaStone: "Darmanitan-Y-Mega",
		megaEvolves: "Darmanitan",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Darmanitan, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Fatalis13's Mega Klinklang:https://www.reddit.com/r/stunfisk/comments/64haov/mega_monday_klinklang_and_magearna/dg2mqfp/
    "klinklanite": {
		id: "klinklanite",
        isNonstandard: true,
		name: "Klinklanite",
		spritenum: 575,
		megaStone: "Klinklang-Mega",
		megaEvolves: "Klinklang",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Klinklang, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/L0RDR0B's Mega Chandelure:https://www.reddit.com/r/stunfisk/comments/54iwzc/mostly_mega_monday_gengar_and_chandelure/d82sgax
    "chandelurite": {
		id: "chandelurite",
        isNonstandard: true,
		name: "Chandelurite",
		spritenum: 575,
		megaStone: "Chandelure-Mega",
		megaEvolves: "Chandelure",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Chandelure, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/FishFilletShow's Mega Golurk X:https://www.reddit.com/r/stunfisk/comments/3pavu9/mega_monday_golurk_and_froslass/cw4xdvl
    "golurkitex": {
		id: "golurkitex",
        isNonstandard: true,
		name: "Golurkite X",
		spritenum: 575,
		megaStone: "Golurk-Mega-X",
		megaEvolves: "Golurk",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Golurk, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Fatalis13's Mega Golurk Y:https://www.reddit.com/r/stunfisk/comments/6p549i/mega_monday_golurk_and_krookodile/dknagx2/
    "golurkitey": {
		id: "golurkitey",
        isNonstandard: true,
		name: "Golurkite Y",
		spritenum: 575,
		megaStone: "Golurk-Mega-Y",
		megaEvolves: "Golurk",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Golurk, this item allows it to Mega Evolve in battle.",
	},
    // /u/L0RDRB's Mega Bouffalant:https://www.reddit.com/r/stunfisk/comments/4dauwb/mega_monday_bouffalant_and_hippowdon/d1papat/
    "bouffalantite": {
		id: "bouffalantite",
        isNonstandard: true,
		name: "Bouffalantite",
		spritenum: 575,
		megaStone: "Bouffalant-Mega",
		megaEvolves: "Bouffalant",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Bouffalant, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/TURBODERP's Mega Braviary:https://www.reddit.com/r/stunfisk/comments/8xbtub/mega_monday_braviary_and_mandibuzz/e22fy66/
    "braviarite": {
		id: "braviarite",
        isNonstandard: true,
		name: "Braviarite",
		spritenum: 575,
		megaStone: "Braviary-Mega",
		megaEvolves: "Braviary",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Braviary, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/mkperry's Mega Heatmor:https://www.reddit.com/r/stunfisk/comments/4c9vy2/mega_monday_heatmor_and_durant/d1g9uzv/
    "heatmorite": {
		id: "heatmorite",
        isNonstandard: true,
		name: "Heatmorite",
		spritenum: 575,
		megaStone: "Heatmor-Mega",
		megaEvolves: "Heatmor",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Heatmor, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/LaserBatman's Mega Zoroark:https://www.reddit.com/r/stunfisk/comments/56q4yh/mostly_mega_monday_beheeyem_and_zoroark/d8mc0ws/
    "zoroarkite": {
		id: "zoroarkite",
        isNonstandard: true,
		name: "Zoroarkite",
		spritenum: 575,
		megaStone: "Zoroark-Mega",
		megaEvolves: "Zoroark",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Zoroark, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/MegaMissingno's Mega Tornadus:https://www.reddit.com/r/stunfisk/comments/4ovybw/mega_monday_landorus_thundurus_and_tornadus_art/d4ggwo6/
    "tornadusite": {
		id: "tornadusite",
        isNonstandard: true,
		name: "Tornadusite",
		spritenum: 575,
		megaStone: "Tornadus-Mega",
		megaEvolves: "Tornadus",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Tornadus, this item allows it to Mega Evolve in battle.",
	},
    "tornadusitet": {
		id: "tornadusitet",
        isNonstandard: true,
		name: "Tornadusite T",
		spritenum: 575,
		megaStone: "Tornadus-Therian-Mega",
		megaEvolves: "Tornadus-Therian",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Tornadus, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Fatalis13's Mega Meowstic:https://www.reddit.com/r/stunfisk/comments/60iakb/mega_monday_meowstic/df6qray/
    "meowstinite": {
		id: "meowstinite",
        isNonstandard: true,
		name: "Meowstinite",
		spritenum: 575,
		megaStone: "Meowstic-Mega",
		megaEvolves: "Meowstic",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Meowstic, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/_Mikau's Mega Slurpuff:https://www.reddit.com/r/stunfisk/comments/6mdt4t/mega_monday_aromatisse_and_slurpuff/dk0twkc/
    "slurpuffite": {
		id: "slurpuffite",
        isNonstandard: true,
		name: "Slurpuffite",
		spritenum: 575,
		megaStone: "Slurpuff-Mega",
		megaEvolves: "Slurpuff",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Slurpuff, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/L0RDR0B's Mega Malamar:https://www.reddit.com/r/stunfisk/comments/4baujy/mega_monday_malamar_and_venomoth/d17lzb1/
    "malamarite": {
		id: "malamarite",
        isNonstandard: true,
		name: "Malamarite",
		spritenum: 575,
		megaStone: "Malamar-Mega",
		megaEvolves: "Malamar",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Malamar, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/L0RDR0B's Mega Dragalge:https://www.reddit.com/r/stunfisk/comments/4nti5z/mega_monday_clawitzer_and_dragalge/d4782xb/
    "dragalgite": {
		id: "dragalgite",
        isNonstandard: true,
		name: "Dragalgite",
		spritenum: 575,
		megaStone: "Dragalge-Mega",
		megaEvolves: "Dragalge",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Dragalge, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Blastgang's Mega Aurorus:https://www.reddit.com/r/stunfisk/comments/42m6xx/mega_monday_aurorus_and_tyrantrum/czbvtdn/
    "aurorusite": {
		id: "aurorusite",
        isNonstandard: true,
		name: "Aurorusite",
		spritenum: 575,
		megaStone: "Aurorus-Mega",
		megaEvolves: "Aurorus",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Aurorus, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/MegaMissingno's Mega Gourgeist:https://www.reddit.com/r/stunfisk/comments/3twkmf/mega_monday_parasect_and_gourgeist/cxa0uid/
    "gourgeistite": {
		id: "gourgeistite",
        isNonstandard: true,
		name: "Gourgeistite",
		spritenum: 575,
		megaStone: "Gourgeist-Small-Mega",
		megaEvolves: "Gourgeist-Small",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Gourgeist-Small, this item allows it to Mega Evolve in battle.",
	},
	"gourgeistitea": {
		id: "gourgeistitea",
        isNonstandard: true,
		name: "Gourgeistite A",
		spritenum: 575,
		megaStone: "Gourgeist-Average-Mega",
		megaEvolves: "Gourgeist-Average",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Gourgeist-Average, this item allows it to Mega Evolve in battle.",
	},
	"gourgeistitel": {
		id: "gourgeistitel",
        isNonstandard: true,
		name: "Gourgeistite L",
		spritenum: 575,
		megaStone: "Gourgeist-Large-Mega",
		megaEvolves: "Gourgeist-Large",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Gourgeist-Large, this item allows it to Mega Evolve in battle.",
	},
	"gourgeistites": {
		id: "gourgeistites",
        isNonstandard: true,
		name: "Gourgeistite S",
		spritenum: 575,
		megaStone: "Gourgeist-Super-Mega",
		megaEvolves: "Gourgeist-Super",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Gourgeist-Super, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/jayhankedlyon's Mega Incineroar X:https://www.reddit.com/r/stunfisk/comments/9uadq4/muse_monday_incineroar_and_landorustherian/e935tvk/
	"incineroaritex": {
		id: "incineroaritex",
        isNonstandard: true,
		name: "Incineroarite X",
		spritenum: 575,
		megaStone: "Incineroar-Mega-X",
		megaEvolves: "Incineroar",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Incineroar, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/PrisonerLeet's Mega Incineroar Y:https://www.reddit.com/r/stunfisk/comments/917pck/muse_monday_alolan_starters/e2w2hp4/
    "incineroaritey": {
		id: "incineroaritey",
        isNonstandard: true,
		name: "Incineroarite Y",
		spritenum: 575,
		megaStone: "Incineroar-Mega-Y",
		megaEvolves: "Incineroar",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Incineroar, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Heycanwenot's Mega Oricorio:https://www.reddit.com/r/stunfisk/comments/6i3s4t/mega_monday_oricorio/dj3cgmx/
    "oricorionite": {
		id: "oricorionite",
        isNonstandard: true,
		name: "Oricorionite",
		spritenum: 575,
		megaStone: "Oricorio-Baile-Mega",
		megaEvolves: "Oricorio",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Oricorio-Baile, this item allows it to Mega Evolve in battle.",
	},
	"oricorionitep": {
		id: "oricorionitep",
        isNonstandard: true,
		name: "Oricorionite P",
		spritenum: 575,
		megaStone: "Oricorio-Pom-Pom-Mega",
		megaEvolves: "Oricorio-Pom-Pom",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Oricorio-Pom-Pom, this item allows it to Mega Evolve in battle.",
	},
	"oricorioniteu": {
		id: "oricorioniteu",
        isNonstandard: true,
		name: "Oricorionite U",
		spritenum: 575,
		megaStone: "Oricorio-Pa'u-Mega",
		megaEvolves: "Oricorio-Pa'u",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Oricorio-Pa'u, this item allows it to Mega Evolve in battle.",
	},
	"oricorionites": {
		id: "oricorionites",
        isNonstandard: true,
		name: "Oricorionite S",
		spritenum: 575,
		megaStone: "Oricorio-Sensu-Mega",
		megaEvolves: "Oricorio-Sensu",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by an Oricorio-Sensu, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/Fatalis13's Mega Lycanroc:https://www.reddit.com/r/stunfisk/comments/5z4q6r/mega_monday_lycanroc/devszlu/
    "lycanrocite": {
		id: "lycanrocite",
        isNonstandard: true,
		name: "Lycanrocite",
		spritenum: 575,
		megaStone: "Lycanroc-Mega",
		megaEvolves: "Lycanroc",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Lycanroc-Midday, this item allows it to Mega Evolve in battle.",
	},
	"lycanrocitem": {
		id: "lycanrocitem",
        isNonstandard: true,
		name: "Lycanrocite M",
		spritenum: 575,
		megaStone: "Lycanroc-Midnight-Mega",
		megaEvolves: "Lycanroc-Midnight",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.species) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Lycanroc-Midnight, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/catsNpokemon's Mega Mudsdale:https://www.reddit.com/r/stunfisk/comments/7vfkqy/mega_monday_toucannon_and_mudsdale/dtrypwz/
    "mudsdalite": {
		id: "mudsdalite",
        isNonstandard: true,
		name: "Mudsdalite",
		spritenum: 575,
		megaStone: "Mudsdale-Mega",
		megaEvolves: "Mudsdale",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Mudsdale, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/catsNpokemon's Mega Golisopod:https://www.reddit.com/r/stunfisk/comments/8atw28/mega_monday_golisopod_and_crabominable/dx1vw6e/
    "golisopodite": {
		id: "golisopodite",
        isNonstandard: true,
		name: "Golisopodite",
		spritenum: 575,
		megaStone: "Golisopod-Mega",
		megaEvolves: "Golisopod",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Golisopod, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/IllogicalMind's Mega Drampa:https://www.reddit.com/r/stunfisk/comments/5ppoq6/mega_monday_drampa_and_turtonator/dct0zy9/
    "drampanite": {
		id: "drampanite",
        isNonstandard: true,
		name: "drampanite",
		spritenum: 575,
		megaStone: "Drampa-Mega",
		megaEvolves: "Drampa",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Drampa, this item allows it to Mega Evolve in battle.",
	},
	
    // /u/LaserBatman's Mega Kommo-o:https://www.reddit.com/r/stunfisk/comments/5tq4wn/mega_monday_kommoo_and_goodra/ddodzex/
	"kommonite": {
		id: "kommonite",
        isNonstandard: true,
		name: "Kommonite",
		spritenum: 575,
		megaStone: "Kommo-o-Mega",
		megaEvolves: "Kommo-o",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If held by a Kommo-o, this item allows it to Mega Evolve in battle.",
	},
	
	// /u/L0RDR0B's Primal Lunala:https://www.reddit.com/r/stunfisk/comments/5xtsjc/muse_monday_solgaleo_and_lunala/deleurv/
	"moonflute": {
		id: "moonflute",
        isNonstandard: true,
		name: "Moon Flute",
		spritenum: 575,
		onSwitchIn: function (pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === 'Lunala') {
				this.insertQueue({pokemon: pokemon, choice: 'runPrimal'});
			}
		},
		onPrimal: function (pokemon) {
			pokemon.formeChange('Lunala-Primal', this.effect, true);
		},
		onTakeItem: function (item, source) {
			if (source.baseTemplate.baseSpecies === 'Lunala') return false;
			return true;
		},
		num: 534,
		gen: 6,
		desc: "If held by a Lunala, this item triggers its Primal Reversion in battle.",
	},
};

exports.BattleItems = BattleItems;
