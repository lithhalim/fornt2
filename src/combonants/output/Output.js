import React from 'react';
import "./output.scss"
function Output_section({state}) {
  
  
  return (
    <div className='output-section'>
      {state!==undefined?
      <div>
        <p>Header</p>
            <div className='header'>
              <pre>{state.headers ? JSON.stringify(state.headers, undefined, 2) : null}</pre>
            </div>
            <p>Data</p>
            <div className='data' >
              <pre>{state.data ? JSON.stringify(state.data, undefined, 2) : null}</pre>
            </div>

      </div>
      :<></>}
    </div>
  )
}

export default Output_section
