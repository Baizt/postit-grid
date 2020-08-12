import React, { Component } from 'react'
import ModalAgregaNotas from './ModalAgregaNotas'

import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import './styles/BotonAgregar.css';

class BotonAgregar extends Component{
	state = {
		showAddNote:false
	}
	handleClickAgregar = e => {
		this.setState({showAddNote:true})
	}
	cerrarModal = e => {
		this.setState({showAddNote:false})
	}
	guardarModal = e =>{
		this.props.handleGuardarModal(e)
		this.cerrarModal()
	}
	render(){
		return (
			<React.Fragment>
				<Fab className="boton-agregar" color="primary" aria-label="add" onClick={this.handleClickAgregar}>
					<AddIcon />
				</Fab>
				<ModalAgregaNotas show={this.state.showAddNote} cancelarAgregar={this.cerrarModal} guardarAgregar={this.guardarModal} />
			</React.Fragment>
		)
	}
}

export default BotonAgregar