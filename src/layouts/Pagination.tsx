import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../apps/hooks';
import { RootState } from '../apps/store';
import { ITEM_PER_PAGE } from '../constants/PokemonActionType';
import {
	setCurrentPage,
	setPokemonsPerPage,
} from '../features/pokemons/pokemonsSlice';

export default function Pagination() {
	const navigate = useNavigate();
	const pokemonList = useAppSelector((state: RootState) => state.pokemon);
	const dispatch = useAppDispatch();

	const [pageCount, setPageCount] = useState<number>(0);
	const [itemOffset, setItemOffset] = useState<number>(0);

	useEffect(() => {
		const endOffset = itemOffset + ITEM_PER_PAGE;
		dispatch(
			setPokemonsPerPage(pokemonList.listPokemon.slice(itemOffset, endOffset))
		);
		setPageCount(Math.ceil(pokemonList.listPokemon.length / ITEM_PER_PAGE));
	}, [itemOffset, ITEM_PER_PAGE]);

	const handlePageClick = (event: any) => {
		const newOffset =
			(event.selected * ITEM_PER_PAGE) % pokemonList.listPokemon.length;

		//dynamic
		const newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname +
			`?page=${event.selected + 1}`;
		window.history.pushState({ path: newurl }, '', newurl);

		dispatch(setCurrentPage(event.selected));
		setItemOffset(newOffset);
	};

	return (
		<>
			<ReactPaginate
				nextLabel="Next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={3}
				pageCount={pageCount}
				previousLabel="< Previous"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination stiky-bottom justify-content-center"
				activeClassName="active"
				initialPage={pokemonList.currentPage}
			/>
		</>
	);
}
