import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Eye, EyeOff  } from 'lucide-react';
export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <form id="loginForm">
        <h3>SIGN IN</h3>
        <div id="loginFormInput">
                <Stack gap={3}>
      <div className="p-2">
            <label className='loginLabel'>USERNAME:</label>
            <input type="text" className='loginInput' placeholder='USERNAME'/>
      </div>
      <div className="p-2">
            <label className='loginLabel'>PASSWORD:</label>
            <div>
                <input
                    type="password"
                    className='loginInput'
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
