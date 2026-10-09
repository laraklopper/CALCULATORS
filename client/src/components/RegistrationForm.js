import React, { useState } from 'react'
import '../css/componentCss/FormSetup.css'
import '../css/componentCss/RegisterForm.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Eye, EyeOff, Asterisk, Bug  } from 'lucide-react';
export default function RegistrationForm() {
    // ==========STATE VARIABLES==============
    //state to display password
    const [showPassword, setShowPassword] = useState(false)
    const [emailMsg, setEmailMsg] = useState(false)
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
        <Stack gap={3} id='regisStack1'>
      <div className="p-2" id='regisUsernameBlock'>
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
      <div className="p-2" id='regisEmailBlock'>
    <div>
 <label className='regisLabel'>EMAIL:</label>
        <div className='inputDiv'>
            <input
                className='input'
                id='regisEmailInput'
                type='text'
                required
                // name=''
                // value={}
                // onChange={}
            />
            <Asterisk color="#C22419" fontWeight={700} size={12} aria-hidden='true' focusable='false' />
        </div>
        {/* REQUIRED MESSAGE */}
        <div>
        <Bug/><p>Email is requrired</p>
        </div>
    </div>
       {emailMsg && (
        <div>
            <p>We will never share your email</p>
        </div>
       )}
      </div>  
          
      <div className="p-2">Third item</div>
    </Stack>

  
                 <Stack direction="horizontal" gap={3} id='regisStack2'>
                 {/* Date of Birth */}
      <div className="p-2" id='regisBirthDateBlock'>
      <div>
        <label className='regisLabel'>DATE OF BIRTH:</label>
        <div>
            <input
                type='date'
                className='input'
                id='regisDateInput'
                required
            />
            <Asterisk color="#C22419" fontWeight={700} size={12} aria-hidden='true' focusable='false' />
        </div>
      </div>
        
        <div>
            <p>All users must be 16 years or onler and 
    Admin Users must be 18 or older</p>
        </div>
      </div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
                
            </div>
            {/* PASSWORD AND ADMIN */}
            <div id='regisGroup2'>
            <Stack direction="horizontal" gap={3}>
      <div className="p-2">
      <label>PASSWORD</label>
        <div>
            <input
                type={showPassword ? 'text': 'password'}
                id='regisPassword'
                className='input'
                required
            />
            <Button 
                id='showPswdButton' 
                variant='warning' 
                onClick={() => setShowPassword(!showPassword)}
                type='button'
                // ARIA ATTRIBUTES
                aria-label={showPassword ? 'Hide Password': 'Show password'}
                >
                {showPassword ? <Eye size={16}  aria-hidden='true' focusable='false' /> : <EyeOff size={16}   aria-hidden='true' focusable='false' />}
            </Button>
            <Asterisk color="#C22419" fontWeight={700} size={12} aria-hidden='true' focusable='false' />
        </div>
      </div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        <label className='regisLabel'>REGISTER AS ADMIN</label>
        <input
            type='checkbox'
        />
      </div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">
        {/* ADMIN REQUIREMENS */}
        <p>Admin Users must be at least 18 years old</p>
      </div>
    </Stack>

            </div>
        </div>
        {/* ====END OF INPUT============= */}
        <div id='regisGroup3'>
<Stack direction="horizontal" gap={3} id='regisActionsBlock'>
      <div className="p-2">First item</div>
      <div className="p-2 ms-auto">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
        </div>

    </form>
  )
}
