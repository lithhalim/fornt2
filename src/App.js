import React, { useState } from "react"
import Form from "./combonants/form/form";
import Header from "./combonants/header/Header";
import Output_section from "./combonants/output/Output";




const App=()=>{
    const [state,setstate]=useState()
    const dataPrint=(data)=>{
        setstate(data)
    }

    return(
        <>
            <Header/>
                <Form dataPrint={dataPrint}/>
            <Output_section state={state}/>
        </>

    )
}

export default App
