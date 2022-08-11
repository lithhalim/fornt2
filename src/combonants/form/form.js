import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import axios from 'axios';





function Form({dataPrint}) {
  const [value,setvalue]=useState('https://swapi.dev/api/people/1/')
  const [method, setmethod] = React.useState('get');


  const handleChange=(e)=>{
    setvalue(e.target.value)
  }

  const handleChange2 = (event, data) => {
    setmethod(data);
  };

  const gotoLink=async()=>{
    let dataUse
    if(method=="get"){
      const data=await axios.get(value)
      dataUse=data
    }else if(method=="post"){
      const data=await axios.post(value)
      dataUse=data
    }else if (method=="delete"){
      const data=await axios.delete(value)
      dataUse=data
    }
    else {
      const data=await axios.put(value)
      dataUse=data
    }

    dataPrint(dataUse)
  
  }




  return (
        <div className='text-filed'>
                <TextField
                    label="Insert The Url Here ..........."
                    value={value}
                    style={{width:"100%"}}
                    onChange={handleChange}
                  />

                  <div className='form-button'>
                      <ToggleButtonGroup
                        color="primary"
                        value={method}
                        exclusive
                        onChange={handleChange2}
                        style={{width:"60%"}}
                      >
                        <ToggleButton value="get" className='toggel-button'>GET</ToggleButton>
                        <ToggleButton value="post" className='toggel-button'>POST</ToggleButton>
                        <ToggleButton value="delete" className='toggel-button'>DELETE</ToggleButton>
                        <ToggleButton value="put" className='toggel-button'>PUT</ToggleButton>
                      </ToggleButtonGroup>


                      <Button variant="contained" onClick={gotoLink}>Go To Link ..</Button>
                  </div>
        </div>
  )
}

export default Form
