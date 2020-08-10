import React, { Component } from 'react';
import Nota from './Nota'
import Lista from './Lista'
import './styles/Notas.css'

class Pizarra extends Component{
	state = {
		notas:[
			{
				tipo:'texto',
				texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reprehenderit placeat quidem tenetur unde atque suscipit, consequuntur soluta blanditiis dolor alias cum nemo, fugiat distinctio ipsum perspiciatis iste, reiciendis necessitatibus?',
				color: 'amarillo',
			},
			{
				tipo:'lista',
				texto: ['Lista 1', 'Lista 2', 'Lista 3'],
				color: 'azul',
			},
			{
				tipo:'texto',
				texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci reprehenderit placeat quidem tenetur unde atque suscipit, consequuntur soluta blanditiis dolor alias cum nemo, fugiat distinctio ipsum perspiciatis iste, reiciendis necessitatibus?',
				color: 'rojo',
			},
			{
				tipo:'lista',
				texto: ['Lista 1', 'Lista 2', 'Lista 3'],
				color: 'verde',
			},
		]
	};
	render(){
		return(
			<div className='pizarra'>
				{this.state.notas.map((nota) => {
					if (nota.tipo == 'lista') {
						return( <Lista lista = { nota } /> )
					} else {
						return( <Nota nota = { nota } /> )
					}
				})}
			</div>
		)
	}
}

export default Pizarra;