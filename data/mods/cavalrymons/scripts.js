'use strict';

/**@type {ModdedBattleScriptsData} */
let BattleScripts = {
	gen: 8,
	//canMount logic
	//passes activePokemon and secondPokemon; activePokemon is the pokemon in battle when mounting, secondPokemon is the Pokemon to be connected
	canMount(activePokemon, secondPokemon) {
		//retrieving items to check for the saddle
		let activeItem = activePokemon.getItem();
		let secondItem = secondPokemon.getItem();
		//checks active and second pokemon for correct mount and pilot tags and that one holds the saddle
		if (((activePokemon.baseTemplate.mount == true && secondPokemon.baseTemplate.pilot == true) || (activePokemon.baseTemplate.pilot == true && secondPokemon.baseTemplate.mount == true)) && (activeItem == "saddle" || secondItem == "saddle")) {
			return true;
		}
		else {
			return null;
		}
		//not sure what to return
		return item.megaStone;
	},
	
	//To-Do
	runMount(pokemon) {
		const templateid = pokemon.canMegaEvo || pokemon.canUltraBurst;
		if (!templateid) return false;
		const side = pokemon.side;

		// Pokémon affected by Sky Drop cannot mega evolve. Enforce it here for now.
		for (const foeActive of side.foe.active) {
			if (foeActive.volatiles['skydrop'] && foeActive.volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}

		pokemon.formeChange(templateid, pokemon.getItem(), true);

		// Limit one mega evolution
		let wasMega = pokemon.canMegaEvo;
		for (const ally of side.pokemon) {
			if (wasMega) {
				ally.canMegaEvo = null;
			} else {
				ally.canUltraBurst = null;
			}
		}

		this.runEvent('AfterMega', pokemon);
		return true;
	},

};

exports.BattleScripts = BattleScripts;
