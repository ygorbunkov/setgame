import React from 'react'
import { Modal, Fade, Backdrop, Typography } from '@material-ui/core'
import { Container as RestartButton } from '../containers/restartButton'
import '../../css/completeModal.css'

const CompleteModal = ({complete,score,time}) => (
	<Modal
		open={complete}
		closeAfterTransition
		BackdropProps={{timeout: 500}}
		BackdropComponent={Backdrop}
		>
		<Fade in={complete}>
			<div className="modalresult">
				<Typography variant="h2" style={{paddingTop:'20%'}}>{0|time/score}</Typography>
				<br/>
				<Typography>seconds/set</Typography>
				<RestartButton />
			</div>
		</Fade>
	</Modal>
)

export default CompleteModal