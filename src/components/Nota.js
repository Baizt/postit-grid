import React from 'react'

function Nota(props){
	return(
		<div className="post-it">{props.nota.texto}</div>
	)
}

export default Nota