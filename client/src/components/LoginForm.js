import React, {useState} from 'react'
import '../css/componentCss/FormSetup.css'
import '../css/componentCss/LoginForm.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Eye, EyeOff  } from 'lucide-react';
export default function LoginForm({userData, setUserData}) {
    const [showPassword, setShowPassword] = useState(false);
    const [pswdMsg, setPswdMsg] = useState(false);
  return (
    <form id="loginForm">
    <div id="formHeadingBlock">
<h3 id="formHeading">SIGN IN</h3>
    </div>
        <div id="loginFormInput">
                <Stack gap={3}>
      <div className="p-2" id="usernameInputBlock">
            <label className='loginLabel'>USERNAME:</label>
            <input 
            type="text" 
            className='input' 
            placeholder='USERNAME' 
            name='username' 
            value={userData.username} 
            onChange={(e) => setUserData({...userData, username: e.target.value})}
            />
      </div>
      <div className="p-2" id="passwordInputBlock">
            <label className='loginLabel'>PASSWORD:</label>
            <div id="passwordInputContainer">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className='input'
                    placeholder='PASSWORD'
                    name='password'
                    value={userData.password}
                    onChange={(e) => setUserData({...userData, password: e.target.value})}
                />
                <Button variant='warning' id="showPasswordBtn" size="sm" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye size={16} /> : <EyeOff size={16}  />}
                </Button>
            </div>
      </div>
      <div className="p-2" id="rememberMeBlock">
            <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={userData.rememberMe}
                onChange={(e) => userData.setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" className='loginLabel'>
                REMEMBER ME
            </label>
      </div>
      
    </Stack>
        </div>
        <div id="submitBtnBlock">
            <Button variant='light' type='submit'>
                SIGN IN
            </Button>
      </div>
    </form>
  )
}
