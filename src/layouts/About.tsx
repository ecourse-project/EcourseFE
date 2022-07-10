import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import apiConfig from '../apis/apiConfig';
import { useAppDispatch, useAppSelector } from '../apps/hooks';
import { RootState } from '../apps/store';
import { addPokemon, removePokemon } from '../features/pokemons/pokemonsSlice';
import ModalCom from './Modal';
import Modal from './Modal';
export interface poke {
	id: number;
}
const About = () => {
	const pokemons = useAppSelector((state: RootState) => state.pokemon);
	const [selected, setSelected] = useState<number[]>(() => {
		return pokemons.selected;
	});
	useEffect(() => {
		setSelected(pokemons.selected);
	}, [pokemons.selected]);
	return (
		<div>
			<div className="container">
				<div className="text-center mt-5">
					<h1>List pokemon</h1>
					<div className="row">
						{selected.map((poke) => (
							<div className="col-3 card-container" key={poke}>
								<Card>
									<Card.Img variant="top" src={apiConfig.originalImg(poke)} />
									<Card.Body>
										<Card.Title className="card-title">{poke}</Card.Title>
										<div className="btn-container"></div>
									</Card.Body>
									<ModalCom id={poke} />
								</Card>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
