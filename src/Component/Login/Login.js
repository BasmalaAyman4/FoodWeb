import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import style from "./Login.module.css"
import { Container } from 'react-bootstrap';
export default function Login() {
    return (
        <>
            <div className={`${style.color}`}>
                <Container >
                    <div className={`${style.login}`}>
                        <p>Login</p>
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">
                                    Dashboard
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">
                                    Profile
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Details
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
