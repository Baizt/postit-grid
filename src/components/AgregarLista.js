import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core/'
import { TextField } from '@material-ui/core/'
import { IconButton } from '@material-ui/core/'
import './styles/AgregarLista.css'

class AgregarLista extends React.Component{
	render(){
		return(
			<React.Fragment>
				{this.props.nota.lista.map((lista, index) => {
					return(
						<div key={index} className="container-campo-lista">
							<TextField label="Outlined" onChange={this.props.changeLista} variant="outlined" value={lista} name={index} />
							<IconButton onClick={this.props.clickDeleteLista.bind(null, index)} name={index}>
								<DeleteIcon />
							</IconButton>
						</div>
					)
				})}
				{this.props.nota.lista.length < 5 && <Button color="primary" onClick={this.props.clickAgregarLista}>Agregar +</Button>}
			</React.Fragment>
		)
	}
}

export default AgregarLista