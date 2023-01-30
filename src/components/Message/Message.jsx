import React, {useState} from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Message({message, handleOpen, handleClose, setOpen, open}) {
    //const [open, setOpen] = useState(false);
 
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {message.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message.body}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Message
