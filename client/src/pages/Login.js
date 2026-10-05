import React from 'react'
import '../css/pagesCss/LoggedOut.css'
import '../css/pagesCss/pageSetup.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/LoginForm';
import MainHeader from '../components/MainHeader';
export default function Login({userData}) {
  return (
    <div id="pageContainer">
    <MainHeader pageHeading="LOGIN"/>
        <section id="loginSection">
            <div id="loginFormBlock">
             <Row id="loginFormRow">
                <Col id="loginFormCol1"/>
                <Col xs={6} id="loginFormCol2">
                    <div id="loginFormPanal">
                        <LoginForm userData={userData}/>
                    </div>
                </Col>
                <Col id="loginFormCol3"/>
                </Row>
            </div>
        </section>
    </div>
  )
}
