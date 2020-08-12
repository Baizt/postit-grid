import React, { Component } from 'react'
import Modal from './Modal'
import AgregarLista from './AgregarLista'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {Select} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import './styles/Modal.css';

class ModalAgregaNotas extends Component{
	state = {
		nota:{
			tipo:'texto',
			texto:'',
			lista:[''],
			color:0,
		}
	}
	changeProp = e => {
		if(typeof e !== 'undefined'){
			this.setState({
				nota:{
					...this.state.nota,
					[e.target.name]: e.target.value,
				}
			})
		}
	}
	handleChangeLista = e => {
		let lista = this.state.nota.lista;
		lista[e.target.name] = e.target.value;
		this.changeProp({
			target:{
				name: 'lista',
				value: lista
			}
		})
	}
	agregaLista = e  => {
		this.setState({
			nota:{
				...this.state.nota,
				lista: [
					...this.state.nota.lista,
					'',
				]
			}
		})
	}
	deleteLista = (numLista) =>{
		let lista = this.state.nota.lista;
		lista.splice(numLista, 1)
		this.changeProp({
			target:{
				name: 'lista',
				value: lista
			}
		})
	}
	// componentWillUnmount(){
	// 	this.setState({
	// 		nota:{
	// 			tipo:'texto',
	// 			texto:'',
	// 			lista:[''],
	// 			color:0,
	// 		}
	// 	})
	// }
	render(){
		return <Modal show={this.props.show}>
			<form action="" className="formulario-agregar">
				<div className="tipo-nota">
					<Select
						id="tipoNota" name="tipo"
						label="Tipo:" value={this.state.nota.tipo}
						onChange={this.changeProp} >
						<MenuItem value="texto">Texto</MenuItem>
						<MenuItem value="lista">Lista</MenuItem>
					</Select>
				</div>

				<div className="color-nota">
					<Select id="colorNota" name="color"
						label="Color:" value={this.state.nota.color}
						onChange={this.changeProp} >
						<MenuItem value="0">Amarillo</MenuItem>
						<MenuItem value="1">Naranja</MenuItem>
						<MenuItem value="2">Verde</MenuItem>
						<MenuItem value="3">Azul</MenuItem>
						<MenuItem value="4">Rojo</MenuItem>
					</Select>
					<div className={`muestra-color fondo-${this.state.nota.color}`}></div>
				</div>

				<div className="modal-body">
					{this.state.nota.tipo === 'lista'
						?
						<AgregarLista
							nota={this.state.nota}
							clickAgregarLista={this.agregaLista}
							clickDeleteLista={this.deleteLista}
							changeLista={this.handleChangeLista}
						/>
						:
						<TextField id="texto" label="Texto de la Nota"
						multiline rows={8} variant="outlined" name="texto"
						className="texto-nota" value={this.state.nota.texto}
						onChange={this.changeProp}
						></TextField>
					}
				</div>

				<Button className="btn-save" variant="contained" color="primary"
					onClick={this.props.guardarAgregar.bind(null, this.state.nota)}>Guardar</Button>

				<Button className="btn-cancel" variant="contained"
					color="secondary" onClick={this.props.cancelarAgregar}>
					Cancelar
				</Button>
			</form>
		</Modal>
	}
}

export default ModalAgregaNotas