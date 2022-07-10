import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../apps/hooks';
import { RootState } from '../apps/store';
import { removePokemon } from '../features/pokemons/pokemonsSlice';
import { poke } from './About';

const ModalCom = (props: poke) => {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state: RootState) => state.pokemon);
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => {
		setShow(true);
	};
	const handleRemove = () => {
		dispatch(removePokemon(data.selected.filter((id) => id !== props.id)));
		setShow(false);
	};

	return (
		<>
			<Button variant="danger" onClick={handleShow}>
				Remove {props.id}
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Woohoo, you&apos;re reading this text in a modal!
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleRemove}>
						Remove
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalCom;
