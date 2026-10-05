import React from 'react'
import '../css/pagesCss/LoggedOut.css'
import '../css/pagesCss/pageSetup.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {
  return (
    <div id="pageContainer">
        <section id="loginSection">
            <div id="loginFormContainer">
             <Row id="loginFormRow">
                <Col id="loginFormCol1"/>
                <Col xs={6} id="loginFormCol2">
                    <div id="loginFormPanal">
                        {/* Login Form */}
                    </div>
                </Col>
                <Col id="loginFormCol3"/>
                </Row>
            </div>
        </section>
    </div>
  )
}
