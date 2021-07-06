import React, {useRef, useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import isEmail from "validator/es/lib/isEmail";
import AuthService from "../services/auth.service"
import {useHistory} from "react-router-dom";


function ResetPassword(props){

    const history = useHistory();

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)

    }

    const required = value =>{
        if(!value){
            return (
                <div className="alert alert-danger" role="alert">
                    Это обязательное поле!
                </div>
            )
        }
    }
    const validEmail = (value) =>{
        if(!isEmail(value)){
            return (
                <div className="alert alert-danger" role="alert">
                    Некорректный формат e-mail
                </div>
            )
        }
    }

    const handleResetPassword = () => {

        form.current.validateAll()

        AuthService.resetPassword(email).then(() =>{
            history.push("/home")
            window.location.reload()
        } ,
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
            )
    }
    const form = useRef()
    return(
        <div role="tabpanel"
             hidden={props.value !==props.index}
             id={props.index}
             className="LoginContainer">
            <p className="ResetPassword_Title">Reset password</p>
            <p>Please enter your email address. We will send you an email to reset your password.</p>
            <Form ref={form} onSubmit={handleResetPassword}>
                <div className="formField">
                    <label htmlFor="email">E-mail*</label>
                    <Input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                        placeholder="name@example.ru"
                    >

                    </Input>
                </div>
                <div className="formField">
                    <button className="formSubmitButton" disabled={loading}>
                        {loading ? <div className="loader-spinner"/>:<span className="formSubmitButtonText">Send Email</span>}


                    </button>
                </div>


                {message && (<div className="alert alert-danger" role="alert">
                    {message}</div>)}
            </Form>
        </div>


    )
}
export default ResetPassword