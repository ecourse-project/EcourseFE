import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import pokeApi from '../../apis/pokeApi';
import { PokemonTypes } from '../../types/pokemonInterface';
import { getPokemonSuccess } from './pokemonsSlice';

function* fetchListPokemon() {
	const listPokemon: PokemonTypes[] = yield call(pokeApi.getListDetail);
	yield put(getPokemonSuccess(listPokemon));
}

export default function* rootSaga() {
	console.log('saga');
	yield takeLatest('pokemon/getPokemons', fetchListPokemon);
}
