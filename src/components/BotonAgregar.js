import React, { Component } from 'react'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import './styles/BotonAgregar.css';

class BotonAgregar extends Component{
	render(){
		return (
			<Fab className="boton-agregar" color="primary" aria-label="add">
				<AddIcon />
			</Fab>
		)
	}
}

export default BotonAgregar