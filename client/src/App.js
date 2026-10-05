// App.js
import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function App() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
    isAdmin: false,
  }); // State to hold user data
  const [currentUser, setCurrentUser] = useState(null); // State to hold the currently logged-in user
  const [users, setUsers] = useState([]); // State to hold user data
  const [loggedIn, setLoggedIn] = useState(false); // State to track if the user is logged in
  const [error, setError] = useState(null); // State to hold error messages
  
  return (
    <>
      <Container>
       
      </Container>
    </>
  )
}
