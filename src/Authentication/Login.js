import React, {useRef, useState} from "react";

import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button"
import AuthService from "../services/auth.service"
import {useHistory} from "react-router-dom";
import '../AdditionalComponents/additionalCSS.css'



function Login(props){


    const history = useHistory();

    const required = value =>{
        if(!value){
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            )
        }
    }


    const form = useRef()

    const checkBtn = useRef()

    const [username, setUsername]= useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)

    }
    const handleLogin = (event, value,components) => {
        event.preventDefault()

        setMessage("")
        setLoading(true)
        form.current.validateAll()

        if (checkBtn.current.context._errors.length === 0){
            AuthService.login(username,password).then(
                ()=>{
                  history.push("/home",{from:"login"})
                    window.location.reload()




                },
                (error) =>{
                    const resMessage =  (
                        error.response &&
                            error.response.data &&
                            error.response.data.message)||
                        error.message ||
                        error.toString()

                    setLoading(false)
                    setMessage(resMessage);

                }
            );
        }else {
            setLoading(false)
        }

    }

    return(
        <div role="tabpanel"
            hidden={props.value !==props.index}
             id={props.index}
             className="LoginContainer"
        >
            <Form

                onSubmit={handleLogin}
                  ref={form}
            >
                <div className="formField">
                    <label htmlFor="username">Username or E-mail</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                    >

                    </Input>
                </div>
               <div className="formField">
                   <label htmlFor="password">Password</label>
                   <div className="ResetPassword_Dialog" onClick={props.resetPassword}>Forgot password?</div>
                   <Input
                       type="password"
                       className="form-control"
                       name="password"
                       value={password}
                       onChange={onChangePassword}
                       validations={[required]}
                   >

                   </Input>
               </div>
               <div className="formField">
                   <button className="formSubmitButton" disabled={loading}>
                       {loading ? <div className="loader-spinner"/>:<span className="formSubmitButtonText">Login</span>}


                   </button>
               </div>

                <CheckButton style={{display:"none"}}
                             ref={checkBtn}
                />

                {message && (<div className="alert alert-danger" role="alert">
                    {message}
                </div>)}
            </Form>

        </div>
    )
}
export default Login