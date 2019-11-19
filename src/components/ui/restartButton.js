import React from 'react'
import { IconButton } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import '../../css/restartButton.css'



const RestartButton = ({onHitRestart}) => (

		<IconButton className="restartbutton" onClick={() => onHitRestart()}>
			<RefreshIcon className="restarticon" />
		</IconButton>
		
)

export default RestartButton