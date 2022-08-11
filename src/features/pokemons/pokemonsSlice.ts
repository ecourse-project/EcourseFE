import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonTypes } from '../../types/pokemonInterface';

export type IDefaultState = {
	listPokemon: PokemonTypes[];
	listPokemonPerPage: PokemonTypes[];
	listPokemonFilter: PokemonTypes[];
	status: string;
	selected: number[];
	isLoading: boolean;
	currentPage: number;
	searchWord: string;
};

const initialState: IDefaultState = {
	listPokemon: [],
	listPokemonPerPage: [],
	listPokemonFilter: [],
	status: 'idle',
	selected: [],
	isLoading: false,
	currentPage: 0,
	searchWord: '',
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		addPokemon: (state, action: PayloadAction<number[]>) => {
			state.selected = action.payload;
		},
		removePokemon: (state, action: PayloadAction<number[]>) => {
			state.selected = [];
			state.selected = action.payload;
		},
		setPokemonsPerPage: (state, action: PayloadAction<PokemonTypes[]>) => {
			state.listPokemonPerPage = action.payload;
		},
		setPokemonFilter: (state, action: PayloadAction<PokemonTypes[]>) => {
			state.listPokemonFilter = action.payload;
		},
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		setSearchWord: (state, action: PayloadAction<string>) => {
			state.searchWord = action.payload;
		},

		getPokemons: (state) => {
			state.isLoading = true;
		},
		getPokemonSuccess: (state, action: PayloadAction<PokemonTypes[]>) => {
			state.listPokemon = action.payload;
		},
		getPokemonFail: (state) => {
			state.isLoading = true;
		},
	},
});
export const {
	getPokemons,
	getPokemonSuccess,
	addPokemon,
	removePokemon,
	setPokemonsPerPage,
	setCurrentPage,
	setPokemonFilter,
	setSearchWord,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
