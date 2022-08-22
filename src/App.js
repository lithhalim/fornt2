import React, { useState } from "react"
import Form from "./combonants/form/form";
import Header from "./combonants/header/Header";
import Output_section from "./combonants/output/Output";

import {Color_Provider} from "./combonants/context/color-change-context";



const App=()=>{
    const [state,setstate]=useState('dark')
    const dataPrint=(data)=>{
        setstate(data)
    }

    return(
        <>
        <Color_Provider>
            <Header/>
                <Form dataPrint={dataPrint}/>
            <Output_section state={state}/>
        </Color_Provider>
        </>

    )
}

export default App
