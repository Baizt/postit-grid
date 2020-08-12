import React from 'react'
import ReactDOM from 'react-dom'

function Modal(props) {
	if(!props.show){
		return false
	}
	return ReactDOM.createPortal(
		<div className="modal">
			{props.children}
		</div>,
		document.getElementById('modal')
	)
}

export default Modal