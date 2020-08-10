import React from 'react'

function Lista(props){
	return(
		<div className="post-it">
			{props.lista.texto.map((renglon) => {
				return(
					<p>{renglon}</p>
				)
			})}
		</div>
	)
}

export default Lista