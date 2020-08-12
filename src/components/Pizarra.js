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
	};
	render(){
		return(
			<React.Fragment>
				<div className='pizarra'>
					{this.state.notas.map((nota, index) => {
						return( <Nota key={index} nota = { nota } /> )
					})}
				</div>

				<BotonAgregar />
			</React.Fragment>
		)
	}
}

export default Pizarra;