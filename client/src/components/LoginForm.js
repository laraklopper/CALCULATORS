import React, {useState} from 'react'
import '../css/componentCss/FormSetup.css'
import '../css/componentCss/LoginForm.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Eye, EyeOff  } from 'lucide-react';
export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <form id="loginForm">
    <div id="formHeadingBlock">
<h3 id="formHeading">SIGN IN</h3>
    </div>
        
        <div id="loginFormInput">
                <Stack gap={3}>
      <div className="p-2">
            <label className='loginLabel'>USERNAME:</label>
            <input type="text" className='input' placeholder='USERNAME'/>
      </div>
      <div className="p-2">
            <label className='loginLabel'>PASSWORD:</label>
            <div id="passwordInputContainer">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className='input'
                    placeholder='PASSWORD'
                />
                <Button variant='warning' id="showPasswordBtn" size="sm" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye /> : <EyeOff />}
                </Button>
            </div>
      </div>
      <div className="p-2">Third item</div>
    </Stack>

        </div>
    </form>
  )
}
