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
            {/* STACK 1: USERNAME */}
            <Stack direction="horizontal" gap={3} id='regisStack1'>
      <div className="p-2" id='regisUsernameBlock'>
        {/*  username*/}
        <div className='inputDiv'>
        <label className='regisLabel'>USERNAME:</label>
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
            <Asterisk color="#C22419" fontWeight={700} size={12} aria-hidden='true' focusable='false' />
        </div>
        <div>
           <span className='formErrorSpan'>
            <Bug color="#C22419" fontWeight={700} size={16} aria-hidden='true' focusable='false'/><p>Username is required</p>
        </span>
        </div>
      </div>
      <div className="p-2 ms-auto"></div>
      <div className="p-2"></div>
    </Stack>
<Stack direction="horizontal" gap={3} id='regisStack2'>
      <div className="p-2" id="regisEmailBlock">
        <div className='inputDiv'>
        <label className='regisLabel' htmlFor='regisEmailInput'>EMAIL:</label>
            <input
                className='input'
                id='regisEmailInput'
                type='text'
                required
                // name=''
                // value={}
                // onChange={}
                onFocus={()=>  setEmailMsg (true) }
                onBlur={() => setEmailMsg(false)}
            />
            <Asterisk color="#C22419" fontWeight={700} size={12} aria-hidden='true' focusable='false' />
        </div>
          {/* REQUIRED MESSAGE */}
        <span className='formErrorSpan'>
        <Bug color="#C22419" fontWeight={700} size={16} aria-hidden='true' focusable='false'/><p className='errorText'>Email is required</p>
        </span>
      </div>
      <div className="p-2 ms-auto"></div>
      {emailMsg && (
        <div className="p-2">
            <p>We will never share your email</p>
        </div>

      )}
    </Stack>
                 <Stack direction="horizontal" gap={3} id='regisStack3'>
                 {/* Date of Birth */}
      <div className="p-2" id='regisBirthDateBlock'>
        <div className='inputDiv'>
        <label className='regisLabel'>DATE OF BIRTH:</label>
            <input
                type='date'
                className='input'
                id='regisDateInput'
                required
            />
            <Asterisk color="#C22419" fontWeight={700} size={12} aria-hidden='true' focusable='false' />
        </div>
  
          <span className='formErrorSpan'>
             <Bug color="#C22419" fontWeight={700} size={16} aria-hidden='true' focusable='false'/><p className='errorText'>Email is required</p>
          </span>
        
      </div>
      <div className="p-2 ms-auto"></div>
      <div className="p-2">
        <p>All users must be 16 years or older</p>
      </div>
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
      <div className="p-2 ms-auto">
        <span className='formErrorSpan'>
        <Bug color="#C22419" fontWeight={700} size={16} aria-hidden='true' focusable='false'/><p className='errorText'>Email is required</p>
        </span>
      </div>
      <div className="p-2"></div>
    </Stack>
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        <label className='regisLabel' htmlFor='regisAdmin'>REGISTER AS ADMIN</label>
        <input
            type='checkbox'
            id='regisAdmin'
            // name=''
            // value={}
            // onChange={}
            aria-required='false'
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
