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
        {/*  GROUP 1: username, email, date of birth*/}
            <div id='regisGroup1'>
        <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        {/*  username*/}
        <label className='regisLabel'>USERNAME:</label>
        <div>
            <input
                type='text'
                id='regisUsername'
                className='input'
                required
                autoComplete='username'
                // name=''
                // value={}
                // onChange={}
            />
            <Asterisk size={14}/>
        </div>
      </div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>

    <Stack direction="horizontal" gap={3}>
    <div className="p-2">
        <label>EMAIL:</label>
        <div>
            <input
                className='input'
                id='regisEmailInput'
                type='text'
                required
                // name=''
                // value={}
                // onChange={}
            />
            <Asterisk size={14}/>
        </div>
      </div>  
          <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
                 <Stack direction="horizontal" gap={3}>
                 {/* Date of Birth */}
      <div className="p-2">
        <label className='regisLabel'>DATE OF BIRTH:</label>
        <div>
            <input
                type='date'
                className='input'
                id='regisDateInput'
                required
            />
            <Asterisk size={14}/>
        </div>
      </div>
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
