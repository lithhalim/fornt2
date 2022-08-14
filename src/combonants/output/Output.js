import React from 'react';
import "./output.scss"
function Output_section({state}) {

  
  
  return (
    <div className='output-section'>
          {state!==undefined?
              <div>
                {state!==undefined&&state.status!==0?
                <div>
                  <p>Header</p>
                      <div className='status'>
                        <h1>status Of Request</h1>
                        {state.status==200? <h1>{state.status}</h1>:<h1 style={{color:"red"}}>{state.status}</h1>}
                      </div>
                      <div className='header'>
                        <pre data-testid="headerRequest">{state.headers ? JSON.stringify(state.headers, undefined, 2) : null}</pre>
                      </div>
                      <p>Data</p>
                      <div className='data' >
                        <pre>{state.data ? JSON.stringify(state.data, undefined, 2) : null}</pre>
                      </div>

                </div>
                :<p style={{fontSize:"1.5em",color:"red"}}>Access to XMLHttpRequest at 'https://swapi.dev/api/people/1/' from origin 'http://localhost:3000' has been blocked by CORS policy: Method PUT is not allowed by Access-Control-Allow-Methods in preflight response.          </p>}
          </div>

          :<></>
          }
    </div>
  )
}

export default Output_section
