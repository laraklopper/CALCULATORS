import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Eye, EyeOff, Bug, Asterisk  } from 'lucide-react';
export default function RegistrationForm() {
    // ==========STATE VARIABLES==============
    //state to display password
    const [showPassword, setShowPassword] = useState()
    // State to controls whether the password helper message is displayed
    // const [pswdmsg, setPswdMsg] = useState(false)
    // const [touched, setTouched] = useState({})

    //========== EMPTY FIELD VALIDATION ====================

    //===========JSX RENDERING=============
  return (
    <form id='registrationForm'>
        <div id='formHeadingBlock'>
            <h3 id='formHeading'>SIGN UP</h3>
        </div>
        <div id='registerInput'>
        {/*  GROUP 1: username, email*/}
            <div id='regisGroup1'>
                 <Stack gap={3}>
      <div className="p-2">
        {/*  username*/}
        <label>USERNAME:</label>
        <div>
            <input/>
            <Asterisk size={14}/>
        </div>
      </div>
      {/* Email */}
      <div className="p-2">

      </div>   
    </Stack>
                 <Stack direction="horizontal" gap={3}>
                 {/* Date of Birth */}
      <div className="p-2">First item</div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
                
            </div>
            {/* PASSWORD AND ADMIN */}
            <div id='regisGroup2'>

            </div>
        </div>

    </form>
  )
}
