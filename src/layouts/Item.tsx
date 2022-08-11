import React from 'react';
import { PokemonTypes } from '../types/pokemonInterface';
type Current = {
	currentItems: PokemonTypes[];
};
function Item({ currentItems }: Current) {
	return (
		<div className="items">
			{currentItems &&
				currentItems.map((item, index) => (
					<div key={index}>
						<h3>Item #{item.forms[0].name}</h3>
					</div>
				))}
		</div>
	);
}

export default Item;
