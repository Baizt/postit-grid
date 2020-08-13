import React from 'react'
import Paper from '@material-ui/core/Paper'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

function Nota(props){
	const randomDegrees = Math.floor(Math.random()*9)
	return(
		<Paper elevation={3} className={`post-it gira-${randomDegrees} fondo-${props.nota.color}`}>
			<section className="header-post-it">
				<div className="container-btn-cancel">
					{/* <CancelIcon className="btn-nota btn-cancel" onClick={props.clickDeleteNota.bind(props.numNota)} /> */}
				</div>
				<div className="pin" onClick={props.clickDeleteNota.bind(props.numNota)}></div>
				<div className="container-btn-edit">
					<EditIcon className="btn-nota btn-edit" onClick={props.clickEditNota.bind(props.nota, props.numNota)} />
				</div>
			</section>
			<section>
			{props.nota.tipo === 'lista' ?
				props.nota.lista.map((renglon, index) => {
					return(
						<p key={index}>{renglon}</p>
						)
					})
				:
				props.nota.texto
			}
			</section>
		</Paper>
	)
}

export default Nota