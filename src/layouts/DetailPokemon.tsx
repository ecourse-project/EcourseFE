import React, { useEffect, useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import apiConfig from '../apis/apiConfig';
import pokeApi from '../apis/pokeApi';
import { PokemonTypes } from '../types/pokemonInterface';

const DetailPokemon: React.FC = () => {
	const pokeId = useParams<{ id: string }>();
	const [locationState, setLocationState] = useState<PokemonTypes>();
	const navigation = useNavigate();

	interface CustomizedState {
		pokemon: PokemonTypes;
	}
	const location = useLocation();

	useEffect(() => {
		if (location.state) {
			const { pokemon } = location.state as CustomizedState;
			setLocationState(pokemon);
		} else {
			const poke = pokeApi.getDetailPokemonById(Number(pokeId));
			poke
				.then((response) => setLocationState(response))
				.catch((err) => navigation('*'));
		}
	}, []);
	return (
		<div className="container">
			<CloseButton
				style={{ float: 'right' }}
				onClick={() => navigation('../collection')}
			/>
			<div className="row">
				<div className="col-6">
					<img
						src={apiConfig.originalGif(Number(locationState?.id))}
						height="300"
						alt=""
					/>
				</div>
				<div className="col-6">
					<h1>Some Infomation</h1>
					<h2>
						Abilities
						{locationState?.abilities.map((item, index) => {
							return <p key={index}>{item.ability.name}</p>;
						})}
						Type:
						{locationState?.types.map((item, index) => {
							return <p key={index}>{item.type.name}</p>;
						})}
						Weight:
						{locationState?.weight}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default DetailPokemon;
