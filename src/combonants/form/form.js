import React, { useContext, useReducer, useState } from 'react'
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import axios from 'axios';

import Modal_section from '../modal/modal';
import {addToHistory,RemoveFromHistory, ClearHistory} from "../form/reducerFuction";


//its comin gfrom create context to mack acsess to state directly
import { Color_Change_context } from '../context/color-change-context';


const intialstate={
  count:0,
  history:[]
}
function reducer(state,action){
  switch(action.type){
    case "addToHestory":{
       return addToHistory(state,action);
    }
    case "removeFromHistory":{
      return RemoveFromHistory(state,action);
    }
    case "clearAllHistory":{
      return ClearHistory()
    }
  }
}


function Form({dataPrint}) {
  const [select,dispatch]=useReducer(reducer,intialstate)
  const [value,setvalue]=useState('https://swapi.dev/api/people/1/')
  const [method, setmethod] = React.useState('get');
  const [bodyTextStatus,setbodyTextStatus]=useState(false);
  const [bodyValue,setBodyvalue]=useState();

  const changing_color=useContext(Color_Change_context);

  console.log(changing_color.color)







  const handleChange=(e)=>{
    setvalue(e.target.value)
  }

  const handleChange2 = (event, data) => {
    setmethod(data);
    (data=="post"||data=="put")?setbodyTextStatus(true):setbodyTextStatus(false)
  };

  const gotoLink=async()=>{


    //----------------------------   Get Section------------------------------------// 
    if(method=="get"){
      try {
        let data=await axios.get(value)
         dataPrint(data)
      }catch(err){
        dataPrint(err.response)
      }
    }
    //--------------------------------post Section ---------------------------------//    
    else if(method==="post"){
      try{
        let  data=await axios.post(value,bodyValue)
         dataPrint(data)
      }catch(err){
        dataPrint(err.response)
      }
    }
    //--------------------------------delete section ---------------------------------//
    else if (method=="delete"){
      try{
        let data=await axios.delete(value)
        dataPrint(data)
      }catch(err){
        dataPrint(err.response)
      }
    }
    //-------------------------------put value section ------------------------------//
    else {
      try{
        let data=await axios.put(value,bodyValue)
        dataPrint(data)
      }catch(err){
        dataPrint(err.response)
      }
    }

    dispatch({type:"addToHestory",payload:{method:method,value:value,id:Date.now()}})
  
  }

  const GetTextBody=(e)=>{
    setBodyvalue(e.target.value)
  }




  return (
        <div className='text-filed'>
          <Button variant="contained" onClick={changing_color.toggelTheme} >change Color</Button>
          <Modal_section dispatch={dispatch}  select={select}/>

                <TextField
                    label="Insert The Url Here ..........."
                    value={value}
                    style={{width:"100%"}}
                    data-testid="url"
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
                        <ToggleButton value="get" className='toggel-button' data-testid="get">GET</ToggleButton>
                        <ToggleButton value="post" className='toggel-button' data-testid="post">POST</ToggleButton>
                        <ToggleButton value="delete" className='toggel-button' data-testid="delete">DELETE</ToggleButton>
                        <ToggleButton value="put" className='toggel-button' data-testid="put">PUT</ToggleButton>
                      </ToggleButtonGroup>

                      <p data-testid="methodType">{method}</p>

                      <Button variant="contained" onClick={gotoLink} data-testid="submitSection">Go To Link ..</Button>
                  </div>

                   {
                    bodyTextStatus!==false?
                        <TextField
                        id="outlined-multiline-static"
                        label="Input The Body Here "
                        multiline
                        rows={4}
                        sx={{width:"100%",marginTop:"15px"}}
                        onChange={GetTextBody}
                      />:<></>
                   }


        </div>
  )
}

export default Form


