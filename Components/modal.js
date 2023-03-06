import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Context from '@/context/context';
import StandardImageList from './imageList';
import { Hidden } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '33vw',
  minWidth: '23rem'
};

export default function TransitionsModal() {
  const {open, handleClose} = React.useContext(Context)

  return (
    <Hidden mdDown>
        <Box >
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={()=>handleClose()}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <StandardImageList modal/>
            </Box>
            </Fade>
        </Modal>
        </Box>
    </Hidden>
  );
}