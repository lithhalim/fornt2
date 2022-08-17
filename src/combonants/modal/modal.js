import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import "./modal.scss"





function Modal_section({select,dispatch}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const deleteItem=(e)=>{
       let ItemDeleteId=e.currentTarget.getAttribute("datatype")
       dispatch({type:"removeFromHistory",payload:{ItemDeleteId:ItemDeleteId}})
    }

    const deleteAll=()=>{
        dispatch({type:"clearAllHistory"})
    }

    return (
        <div>
            <div onClick={handleOpen}>
                <ColorButton variant="contained" style={{marginBottom:"15px"}}>Hestory</ColorButton>
            </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <div className='modal-header'>
                    <p>Number Page Visite ({select.count})</p>
                    <Button variant="outlined" color="error" onClick={deleteAll}>
                        clear All
                    </Button>
                </div>
                {select.history.map(({method,value,id},i)=>(
                    <div className='wibsite-container' key={i}>
                        <p>{value}</p>
                        <p style={{color:"blue"}}>{method}</p>
                        <Button variant="outlined" color="error" onClick={deleteItem} datatype={id}>
                             x
                        </Button>
                    </div>                
                ))}
            </Box>
          </Modal>
        </div>
      );
    
  
}

export default Modal_section




// -----------------------------------------modify material ui -------------------------------------------------//
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  }));
  

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  