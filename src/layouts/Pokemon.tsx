import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiConfig from '../apis/apiConfig';
import { useAppDispatch, useAppSelector } from '../apps/hooks';
import { RootState } from '../apps/store';
import Search from '../components/Search';
import { addPokemon, removePokemon } from '../features/pokemons/pokemonsSlice';
import '../styles/pokemon.scss';
import { PokemonTypes } from '../types/pokemonInterface';
import Pagination from './Pagination';

const Pokemon: React.FC = () => {
	const dispatch = useAppDispatch();
	const pokemonList = useAppSelector((state: RootState) => state.pokemon);

	const [selected, setSelected] = useState<number[]>(() => {
		return pokemonList.selected;
	});
	const [showData, setShowData] = useState<PokemonTypes[]>([]);

	useEffect(() => {
		pokemonList.listPokemonFilter.length !== 0
			? setShowData(pokemonList.listPokemonFilter)
			: setShowData(pokemonList.listPokemonPerPage);
	}, [pokemonList]);

	const toggleAddCarts = (pokemonId: number) => {
		const isSelected = selected.includes(pokemonId);
		setSelected((prev) => {
			if (isSelected) {
				dispatch(removePokemon(selected.filter((id) => id !== pokemonId)));
				return selected.filter((id) => id !== pokemonId);
			} else {
				dispatch(addPokemon([...prev, pokemonId]));
				return [...prev, pokemonId];
			}
		});
	};

	return (
		<div className="container ">
			<div className="col-6 offset-3 border-5">
				<Search />
			</div>
			<div className="row d-flex justify-content-center">
				{showData.map((pokemon: PokemonTypes) => {
					return (
						<div className="col-1 card-container" key={pokemon.id}>
							<Card>
								<Card.Img
									variant="top"
									src={apiConfig.originalImg(pokemon.id)}
								/>
								<Card.Body>
									<Card.Title className="card-title">
										{pokemon.forms[0].name}
									</Card.Title>
									<div className="btn-container">
										<Button variant="info" size="sm" className="btn">
											<Link
												className="text-decoration-none text-dark font-italic"
												to={`/collection/${pokemon.id}`}
												state={{
													pokemon,
												}}
											>
												Detail
											</Link>
										</Button>
										<Button
											size="sm"
											variant={
												selected.includes(pokemon.id) ? 'success' : 'warning'
											}
											className="text-decoration-none btn text-dark font-italic"
											onClick={() => toggleAddCarts(pokemon.id)}
										>
											{selected.includes(pokemon.id) ? 'Remove' : 'Add Cart'}
										</Button>
									</div>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
			{!pokemonList.listPokemonFilter.length && <Pagination />}
		</div>
	);
};

export default Pokemon;
