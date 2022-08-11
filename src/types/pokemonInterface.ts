export interface ResponseAllPokemon {
	count: number;
	next: string;
	previous: string;
	results: PokemonList[];
}

export interface PokemonList {
	name: string;
	url_api: string;
}

export interface PokemonTypes {
	id: number;
	forms: [
		{
			name: string;
			url: string;
		}
	];

	types: [
		{
			type: {
				name: string;
			};
		}
	];
	abilities: [
		{
			ability: {
				name: string;
			};
		}
	];
	weight: number;
}

export interface PokemonDesPcription {
	evolution_chain: {
		url: string;
	};
	flavor_text_entries: string[];
}

export interface PokemonDetail {
	id: number;
	name: string;
	thumb_nail: string;
}
