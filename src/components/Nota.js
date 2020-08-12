import React from 'react'
import Paper from '@material-ui/core/Paper'

function Nota(props){
	if(props.nota.tipo === 'lista'){
		return(
			<Paper elevation={3} className={`post-it fondo-${props.nota.color}`}>
				{props.nota.lista.map((renglon, index) => {
					return(
						<p key={index}>{renglon}</p>
					)
				})}
			</Paper>
		)
	}
	return(
		<Paper elevation={3} className={`post-it fondo-${props.nota.color}`}>{props.nota.texto}</Paper>
	)
}

export default Nota