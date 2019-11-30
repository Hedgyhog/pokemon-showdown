'use strict';

/**@type {{[k: string]: ModdedEffectData}} */
let BattleStatuses = {
	/*
	// Example:
	speciesid: {
		noCopy: true,
		onStart: function () {
			this.add(`raw|<div class='broadcast-blue'><b>creatorname's ahref="arhcivelink" target="_blank">Mega species!</a></div>`);
		},
	},
	*/
	// Please keep statuses organized according to dex number!
	blastoisemegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/captainfantastic's ahref="https://www.reddit.com/r/stunfisk/comments/8vjh0p/mega_monday_venusaur_and_blastoise/e1nyjk8/" target="_blank">Mega Blastoise X!</a></div>`);
        },
    },

    blastoisemegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Drake_Bugatti's ahref="https://www.reddit.com/r/stunfisk/comments/3yhhd9/mega_monday_blastoise_and_venusaur/cydl9q9/" target="_blank">Mega Blastoise Y!</a></div>`);
        },
    },

    fearowmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Dcolonelxsuezo's ahref="https://www.reddit.com/r/stunfisk/comments/4hhrea/mega_monday_fearow_and_slowking/d2pqxok/" target="_blank">Mega Fearow!</a></div>`);
        },
    },

    nidoqueenmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/3jxeww/mega_monday_labor_day_edition_nidoqueen_and/cut5ep9/">Mega Nidoqueen!</a></div>`);
        },
    },

    clefablemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/6y4lxt/mega_monday_araquanid_and_clefable/dmku9cz/">Mega Clefable!</a></div>`);
        },
    },

    poliwrathmegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/metalflygon08's ahref="https://www.reddit.com/r/stunfisk/comments/3mnij0/mega_monday_poliwrath_and_breloom/cvh0732/">Mega Poliwrath X!</a></div>`);
        },
    },

    poliwrathmegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/9yizvs/mega_monday_politied_and_poliwrath/ea1og20">Mega Poliwrath Y!</a></div>`);
        },
    },

    machampmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/53ftu4/mostly_mega_monday_machamp_and_golem/d7szd9h">Mega Machamp!</a></div>`);
        },
    },

    tentacruelmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/howfalcons's ahref="https://www.reddit.com/r/stunfisk/comments/9kg0nd/mega_monday_tentacruel_and_claydol/e6ywbbp/">Mega Tentacruel!</a></div>`);
        },
    },

    electrodedive: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodedive: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodefast: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodefriend: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodefast: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodefast: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodegreat: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodeheal: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodelevel: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodemoon: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodequick: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electroderepeat: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodeultra: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodegreatmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodehealmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodequickmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    electrodeultramega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/934snf/mega_monday_exploud_and_electrode/e3akufm">Mega Electrode & co.!</a></div>`);
        },
    },

    hitmonchanmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/awkward____silence's ahref="https://www.reddit.com/r/stunfisk/comments/49cfsi/mega_monday_hitmonlee_hitmonchan_hitmontop/d0qt6ti">Mega Hitmonchan!</a></div>`);
        },
    },

    mrmimemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/mkperry's ahref="https://www.reddit.com/r/stunfisk/comments/4f99s0/mega_monday_mr_mime_and_sudowoodo/d27fhlo">Mega Mr. Mime!</a></div>`);
        },
    },

    jynxmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/mkperry's ahref="https://www.reddit.com/r/stunfisk/comments/4km288/mega_monday_magmortar_and_jynx/d3gak2r">Mega Jynx!</a></div>`);
        },
    },

    omastarmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/65vygh/mega_monday_kabutops_and_omastar/dgdnyzw/">Mega Omastar!</a></div>`);
        },
    },

    articunomega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/MegaMissingno's ahref="https://www.reddit.com/r/stunfisk/comments/3kvghh/mega_monday_legendary_birds_articuno_zapdos/cv11kh1">Mega Articuno!</a></div>`);
        },
    },

    feraligatrmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/nshooter's ahref="https://www.reddit.com/r/stunfisk/comments/40f88i/mega_monday_meganium_typhlosion_feraligatr/cyuho9l">Mega Feraligatr!</a></div>`);
        },
    },

    azumarillmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Cthuluigi's ahref="https://www.reddit.com/r/stunfisk/comments/55ltqy/mostly_mega_monday_azumarill_and_lanturn/d8d07vf">Mega Azumarill!</a></div>`);
        },
    },

    sudowoodomega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/7ykfgr/mega_monday_sudowoodo_and_mr_mime/duhnu8l/">Mega Sudowoodo!</a></div>`);
        },
    },

    jumpluffmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/9o9sti/mega_monday_vileplume_and_jumpluff/e7skj2h/">Mega Jumpluff!</a></div>`);
        },
    },

    girafarigmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/BasedRod's ahref="https://www.reddit.com/r/stunfisk/comments/8ckogf/mega_monday_girafarig_and_alomomola/dxfu9a1/">Mega Girafarig!</a></div>`);
        },
    },

    delibirdmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/IllogicalMind's ahref="https://www.reddit.com/r/stunfisk/comments/3xpo6r/mega_monday_delibird_and_stantler/cy6rcws/">Mega Delibird!</a></div>`);
        },
    },

    skarmorymega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/TheLaughingCat2's ahref="https://www.reddit.com/r/stunfisk/comments/4xt33f/mega_monday_unofficial_edition_talonflame_and/d6iaxc5">Mega Skarmory!</a></div>`);
        },
    },

    donphanmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Just_Another_Toker's ahref="https://www.reddit.com/r/stunfisk/comments/45urxa/mega_monday_ursaring_and_donphan/d00h4o9
    ">Mega Donphan!</a></div>`);
        },
    },

    donphanmegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Telekineticism's ahref="https://www.reddit.com/r/stunfisk/comments/6qlk0l/mega_monday_donphan_and_ursaring/dkyg0ny/
    ">Mega Donphan X!</a></div>`);
        },
    },

    donphanmegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Vitton's ahref="https://www.reddit.com/r/stunfisk/comments/8093np/mega_monday_ambipom_and_donphan/duu0zas/">Mega Donphan Y!</a></div>`);
        },
    },

    miltankmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/52d0j3/mega_monday_tauros_and_miltank/d7kbxr2">Mega Miltank!</a></div>`);
        },
    },

    suicunemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/MegaMissingno's ahref="https://www.reddit.com/r/stunfisk/comments/4e94wz/mega_monday_entei_raikou_and_suicune/d1y80to">Mega Suicune!</a></div>`);
        },
    },

    ludicolomega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Telekineticism's ahref="https://www.reddit.com/r/stunfisk/comments/6cobtx/mega_monday_shiinotic_and_ludicolo/dhw6812/">Mega Ludicolo!</a></div>`);
        },
    },

    shiftrymega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/krishmc15's ahref="https://www.reddit.com/r/stunfisk/comments/3vr8s0/mega_monday_shiftry_and_ludicolo/cxq3box">Mega Shiftry!</a></div>`);
        },
    },

    swellowmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/AzureBeast's ahref="https://www.reddit.com/r/stunfisk/comments/43m8r5/mega_monday_staraptor_and_swellow/czjcwhg">Mega Swellow!</a></div>`);
        },
    },

    pluslemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/mjmanella's ahref="https://www.reddit.com/r/stunfisk/comments/98tp2h/mega_monday_plusle_and_minun/e4ipzn8/">Mega Plusle!</a></div>`);
        },
    },

    minunmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/mjmanella's ahref="https://www.reddit.com/r/stunfisk/comments/98tp2h/mega_monday_plusle_and_minun/e4ipzn8/">Mega Minun!</a></div>`);
        },
    },

    wailordmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/9clu0q/mega_monday_wailord_and_drifblim/e5bs23l/">Mega Wailord!</a></div>`);
        },
    },

    torkoalmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/OmegaFrenzy's ahref="https://www.reddit.com/r/stunfisk/comments/6uzcp3/mega_monday_torkoal_and_pelipper/dlwyf7v/">Mega Torkoal!</a></div>`);
        },
    },

    zangoosemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/ThatWasPeachy's ahref="https://www.reddit.com/r/stunfisk/comments/79qfgt/mega_monday_zangoose_and_seviper/dp48vlq/">Mega Zangoose!</a></div>`);
        },
    },

    solrockmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/catsNpokemon's ahref="https://www.reddit.com/r/stunfisk/comments/4abauu/mega_monday_solrock_and_lunatone/d0yyjk4">Mega Solrock!</a></div>`);
        },
    },

    cradilymega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/41katj/mega_monday_armaldo_and_cradily/cz345h5">Mega Cradily!</a></div>`);
        },
    },

    kecleonmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/51adho/mega_monday/d7afpng">Mega Kecleon!</a></div>`);
        },
    },

    banettemegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/jayhankedlyon's ahref="https://www.reddit.com/r/stunfisk/comments/87937k/mega_monday_gengar_and_banette/dwbgemt/">Mega Banette Y!</a></div>`);
        },
    },

    tropiusmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/ArcTruth's ahref="https://www.reddit.com/r/stunfisk/comments/4jja9b/mega_monday_tropius_and_togekiss/d37e4ws">Mega Tropius!</a></div>`);
        },
    },

    chimechomega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/72cuut/mega_monday_hypno_and_chimecho/dni0nzf/">Mega Chimecho!</a></div>`);
        },
    },	

    regirockpunisher: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/IllogicalMind's ahref="https://www.reddit.com/r/stunfisk/comments/7nddi3/muse_monday_punisher_formes/ds18elz/">Regirock Punisher!</a></div>`);
        },
    },

    regicepunisher: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/7nddi3/muse_monday_punisher_formes/ds18elz/">Regice Punisher!</a></div>`);
        },
    },

    registeelpunisher: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/7nddi3/muse_monday_punisher_formes/ds18elz/">Registeel Punisher!</a></div>`);
        },
    },

    registeelmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/MegaMissingno's ahref="https://www.reddit.com/r/stunfisk/comments/3nj2g8/mega_monday_regirock_registeel_regice/cvoqpec/">Mega Registeel!</a></div>`);
        },
    },

    empoleonmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/4ihxst/mega_monday_torterra_infernape_and_empoleon/d2ybi63">Mega Empoleon!</a></div>`);
        },
    },

    kricketunemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/69vv66/mega_monday_kricketune_and_golisopod/dhahqmq/">Mega Kricketune!</a></div>`);
        },
    },

    roserademegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PotageAuCoq's ahref="https://www.reddit.com/r/stunfisk/comments/7edc9q/mega_monday_roserade_and_victreebel/dq4fveh/">Mega Roserade X!</a></div>`);
        },
    },

    roserademegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/678c5o/mega_monday_mega_ambipom_and_mega_roserade/dgoih8x/">Mega Roserade Y!</a></div>`);
        },
    },

    wormadammega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/951fvl/mega_monday_wormadam_and_mothim/e3pavyd/">Mega Wormadam!</a></div>`);
        },
    },

    vespiquenmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/NebulonsStyle's ahref="https://www.reddit.com/r/stunfisk/comments/4mskyd/mega_monday_vileplume_and_vespiquen/d3y0r78">Mega Vespiquen!</a></div>`);
        },
    },

    cherrimmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/IllogicalMind's ahref="https://www.reddit.com/r/stunfisk/comments/3wqh42/mega_monday_cherrim_and_bellosom/cxyp6fm/">Mega Cherrim!</a></div>`);
        },
    },

    honchkrowmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/catsNpokemon's ahref="https://www.reddit.com/r/stunfisk/comments/9scumd/mega_monday_gourgeist_and_honchkrow/e8o2oys/">Mega Honchkrow!</a></div>`);
        },
    },

    puruglymega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/howfalcon's ahref="https://old.reddit.com/r/stunfisk/comments/8hnyvk/mega_monday_purugly_and_skuntank/dyl9bks/">Mega Purugly!</a></div>`);
        },
    },
    
    spiritombmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/AzureBeast's ahref="https://www.reddit.com/r/stunfisk/comments/46yrfh/mega_monday_spiritomb_and_bisharp/d08udkm">Mega Spiritomb!</a></div>`);
        },
    },

    drapionmegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/3q9u8g/mega_monday_pangoro_and_drapion/cwddwnw/">Mega Drapion X!</a></div>`);
        },
    },

    drapionmegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/6zfu6v/mega_monday_drapion_and_toxicroak/dmuwpz7/">Mega Drapion Y!</a></div>`);
        },
    },

    weavilemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/50388o/mega_monday_weavile_and_gliscor/d712ex6">Mega Weavile!</a></div>`);
        },
    },

    electiviremega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Metalhead62's ahref="https://www.reddit.com/r/stunfisk/comments/3i7hac/new_mega_monday_magmortar_and_electivire/cudzqt7">Mega Electivire!</a></div>`);
        },
    },

    porygonzmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Golden-Warrior's ahref="https://www.reddit.com/r/stunfisk/comments/4gb4zb/mega_monday_primeape_and_porygonz/d2g1qkk">Mega Porygon-Z!</a></div>`);
        },
    },

    dusknoirmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/polarbearhunt's ahref="https://www.reddit.com/r/stunfisk/comments/3oesgv/mega_monday_dusknoir_and_jellicent/cvwwo4e">Mega Dusknoir!</a></div>`);
        },
    },

    froslassmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/TheOnlyOrk's ahref="https://www.reddit.com/r/stunfisk/comments/96y2rs/mega_monday_froslass_and_slowking/e445h67/">Mega Froslass!</a></div>`);
        },
    },

    heatranmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/DbuggerS's ahref="https://www.reddit.com/r/stunfisk/comments/6nptuj/mega_monday_heatran_and_volcanion/dkbiuc3/">Mega Heatran!</a></div>`);
        },
    },

    emboarmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/9ejl7x/mega_monday_serperior_emboar_and_samurott/e5ph7a7/">Mega Emboar!</a></div>`);
        },
    },

    simisearmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/AzureBeast's ahref="https://www.reddit.com/r/stunfisk/comments/4wok89/mega_monday_simisear_simipour_simisage/d68qnvu">Mega Simisear!</a></div>`);
        },
    },

    musharnamega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/FishFilletShow's ahref="https://www.reddit.com/r/stunfisk/comments/3r6a41/mega_monday_chimecho_and_musharna/cwlmlt2">Mega Musharna!</a></div>`);
        },
    },

    swoobatmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Heycanwenot's ahref="https://www.reddit.com/r/stunfisk/comments/6jihm2/mega_monday_butterfree_and_swoobat/djek6rr/">Mega Swoobat!</a></div>`);
        },
    },

    darmanitanmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/rmch99's ahref="https://www.reddit.com/r/stunfisk/comments/6l010g/mega_monday_basculin_and_darmanitan/djq8u64/">Mega Darmanitan!</a></div>`);
        },
    },

    klinklangmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/64haov/mega_monday_klinklang_and_magearna/dg2mqfp/">Mega Klinklang!</a></div>`);
        },
    },

    chandeluremega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="hhttps://www.reddit.com/r/stunfisk/comments/54iwzc/mostly_mega_monday_gengar_and_chandelure/d82sgax">Mega Chandelure!</a></div>`);
        },
    },

    bearticmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/9aopt6/mega_monday_sunflora_and_beartic/e4wyc3j/">Mega Beartic!</a></div>`);
        },
    },

    golurkmegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/FishFilletShow's ahref="https://www.reddit.com/r/stunfisk/comments/3pavu9/mega_monday_golurk_and_froslass/cw4xdvl">Mega Golurk X!</a></div>`);
        },
    },

    golurkmegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/6p549i/mega_monday_golurk_and_krookodile/dknagx2/">Mega Golurk Y!</a></div>`);
        },
    },

    bouffalantmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/4dauwb/mega_monday_bouffalant_and_hippowdon/d1papat/">Mega Bouffalant!</a></div>`);
        },
    },

    braviarymega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/TURBODERP's ahref="https://www.reddit.com/r/stunfisk/comments/8xbtub/mega_monday_braviary_and_mandibuzz/e22fy66/">Mega Braviary!</a></div>`);
        },
    },

    heatmormega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/mkperry's ahref="https://www.reddit.com/r/stunfisk/comments/4c9vy2/mega_monday_heatmor_and_durant/d1g9uzv/">Mega Heatmor!</a></div>`);
        },
    },

    zoroarkmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/LaserBatman's ahref="https://www.reddit.com/r/stunfisk/comments/56q4yh/mostly_mega_monday_beheeyem_and_zoroark/d8mc0ws/">Mega Zoroark!</a></div>`);
        },
    },

    tornadusmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/MegaMissingno's ahref="https://www.reddit.com/r/stunfisk/comments/4ovybw/mega_monday_landorus_thundurus_and_tornadus_art/d4ggwo6/">Mega Tornadus!</a></div>`);
        },
    },

    meowsticmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/60iakb/mega_monday_meowstic/df6qray/">Mega Meowstic!</a></div>`);
        },
    },

    slurpuffmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/_Mikau's ahref="https://www.reddit.com/r/stunfisk/comments/6mdt4t/mega_monday_aromatisse_and_slurpuff/dk0twkc/">Mega Slurpuff!</a></div>`);
        },
    },

    malamarmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/4baujy/mega_monday_malamar_and_venomoth/d17lzb1/">Mega Malamar!</a></div>`);
        },
    },

    dragalgemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/4nti5z/mega_monday_clawitzer_and_dragalge/d4782xb/">Mega Dragalge!</a></div>`);
        },
    },

    aurorusmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Blastgang's ahref="https://www.reddit.com/r/stunfisk/comments/42m6xx/mega_monday_aurorus_and_tyrantrum/czbvtdn/">Mega Aurorus!</a></div>`);
        },
    },

    gourgeistmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/MegaMissingno's ahref="https://www.reddit.com/r/stunfisk/comments/3twkmf/mega_monday_parasect_and_gourgeist/cxa0uid/">Mega Gourgeist!</a></div>`);
        },
    },

    incineroarmegax: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/jayhankedlyon's ahref="https://www.reddit.com/r/stunfisk/comments/9uadq4/muse_monday_incineroar_and_landorustherian/e935tvk/">Mega Incineroar X!</a></div>`);
        },
    },

    incineroarmegay: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/PrisonerLeet's ahref="https://www.reddit.com/r/stunfisk/comments/917pck/muse_monday_alolan_starters/e2w2hp4/">Mega Incineroar Y!</a></div>`);
        },
    },

    oricoriomega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Heycanwenot's ahref="https://www.reddit.com/r/stunfisk/comments/6i3s4t/mega_monday_oricorio/dj3cgmx/">Mega Oricorio!</a></div>`);
        },
    },

    lycanrocmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/Fatalis13's ahref="https://www.reddit.com/r/stunfisk/comments/5z4q6r/mega_monday_lycanroc/devszlu/">Mega Lycanroc!</a></div>`);
        },
    },

    mudsdalemega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/catsNpokemon's ahref="https://www.reddit.com/r/stunfisk/comments/7vfkqy/mega_monday_toucannon_and_mudsdale/dtrypwz/">Mega Mudsdale!</a></div>`);
        },
    },

    golispodmega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/catsNpokemon's ahref="https://www.reddit.com/r/stunfisk/comments/8atw28/mega_monday_golisopod_and_crabominable/dx1vw6e/">Mega Golisopod!</a></div>`);
        },
    },

    drampamega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/IllogicalMind's ahref="https://www.reddit.com/r/stunfisk/comments/5ppoq6/mega_monday_drampa_and_turtonator/dct0zy9/">Mega Drampa!</a></div>`);
        },
    },

    kommoomega: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/LaserBatman's ahref="https://www.reddit.com/r/stunfisk/comments/5tq4wn/mega_monday_kommoo_and_goodra/ddodzex/">Mega Kommo-o!</a></div>`);
        },
    },

    lunalaprimal: {
        noCopy: true,
        onStart: function () {
            this.add(`raw|<div class='broadcast-blue'><b>/u/L0RDR0B's ahref="https://www.reddit.com/r/stunfisk/comments/5xtsjc/muse_monday_solgaleo_and_lunala/deleurv/">Primal Lunala!</a></div>`);
        },
    },
};

exports.BattleStatuses = BattleStatuses;

