import React, { Component } from 'react';
import BotonAgregar from './BotonAgregar';
import Nota from './Nota'
import './styles/Notas.css'

class Pizarra extends Component{
	state = {
		notas:[
			{
				tipo:  'texto',
				texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reprehenderit placeat quidem tenetur unde atque suscipit, consequuntur soluta blanditiis dolor alias cum nemo, fugiat distinctio ipsum perspiciatis iste, reiciendis necessitatibus?',
				lista: [],
				color: 0,
			},
			{
				tipo:  'lista',
				texto: '',
				lista: ['Lista 1', 'Lista 2', 'Lista 3'],
				color: 1,
			},
			{
				tipo:  'texto',
				texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reprehenderit placeat quidem tenetur unde atque suscipit, consequuntur soluta blanditiis dolor alias cum nemo, fugiat distinctio ipsum perspiciatis iste, reiciendis necessitatibus?',
				lista: [],
				color: 2,
			},
			{
				tipo:  'lista',
				texto: '',
				lista: ['Lista 1', 'Lista 2', 'Lista 3'],
				color: 3,
			},
		],
	}
	handleGuardar = nota => {
		this.setState({
			notas:[
				...this.state.notas,
				nota
			]
		})
	}
	handleDelete = nota => {
		let notas = this.state.notas;
		notas.splice(nota, 1);
		this.setState({ notas });
	}

	handleEdit = (nota, index) => {
		console.log('handleEdit')
		// let notas = this.state.notas;
		// notas[index] = nota;
		// this.setState({ notas });
	}
	render(){
		return(
			<React.Fragment>
				<div className='pizarra'>
					{this.state.notas.map((nota, index) => {
						return( <Nota key={index} numNota={index} nota={nota}
								clickDeleteNota={this.handleDelete}
								clickEditNota={this.handleEdit} /> )
					})}
				</div>

				<BotonAgregar handleGuardarModal={this.handleGuardar} />
			</React.Fragment>
		)
	}
}

export default Pizarra;