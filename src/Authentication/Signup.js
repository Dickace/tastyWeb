import React, {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service"



function Signup(props){

    const [termsAndPolicyAlert,setTermsAndPolicyAlert] = useState(false)
    const history = useHistory();

    const required = value =>{
        if(!value){
            return (
                <div className="alert alert-danger" role="alert">
                    Это обязательное поле!
                </div>
            )
        }
    }
    const termsAndPolicyRequired = value =>{
        if(!value){
        setTermsAndPolicyAlert(true)

        } else{
            setTermsAndPolicyAlert(false)
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
    const validUsername = (value) => {
        if(value.length<3 ){
            return(
                <div className="alert alert-danger" role="alert">
                    <p>Минимальное количество символов - 3</p>
                    <p>Некорректный формат имени</p>
                </div>
            )
        } else if(value.length>24){
            return(
                <div className="alert alert-danger" role="alert">
                    <p>Максимальное количество символов - 24</p>
                    <p>Некорректный формат имени</p>
                </div>
            )
        }

    }

    const validRepeatPassword = (value,props,components) => {

        if( components.password[0].value !==value){
            return(
                <div>
                    Пароли не совпадают
                </div>
            )
        }
    }
    const validPassword = (value) => {
        const minReg = new RegExp("(?=.*[0-9])(?=.*[.!#$%&\"*+/\\-=?^_`{|}~@])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z.!#$%&\"*+/\\-=?^_`{|}~@]{8,24}")
        if(value.length < 8){
            return(
                <div className="alert alert-danger">
                    Минимальное количество символов - 8
                </div>
            )
        } else if ( value.length > 24){
            return(
                <div className="alert alert-danger">
                    Максимальное количество символов - 24
                </div>
            )
        } else if (!minReg.test(value)){
            return(
                <div className="alert alert-danger">
                    Пароль должен содержать не менее:
                    <p>- одной латинской заглавной буквы (A-Z)</p>
                    <p> - одной латинской строчной буквы (a-z)</p>
                        <p>- одной цифры (0-9)</p>
                            <p>- одного спецсимвола (.!#$%&"*+/-=?^_`|\\{"{"}{"}"}~@)</p>
                </div>
                )

        }
    }


    const form = useRef()
    const checkBtn = useRef()

    const [username, setUsername]= useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [termsAndPolicy, setTermsAndPolicy] = useState(false)
    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)

    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)

    }
    const onChangeRepeatPassword = (event) => {
        setRepeatPassword(event.target.value)
    }

    const onChangeTermsAndPolicy = event => {
        if (termsAndPolicy){
            setTermsAndPolicy(false)
        } else{
            setTermsAndPolicy(true)
        }

    }

    const handleSignUp = (event) => {
        event.preventDefault()
        setLoading(true)
        setMessage("")
        form.current.validateAll()
        if(checkBtn.current.context._errors.length===0){
            AuthService.register(email,username, password).then(()=>{
                history.push("/home", {from: "signup"})
                window.location.reload()
            },
                (error)=>{
                const resMessage = (
                    error.responce && error.responce.data && error.responce.data.message) || error.message || error.toString()

                    setLoading(false)
                    setMessage(resMessage);
            }

            )
        } else{
            setLoading(false)
        }

    }

    return(
        <div role="tabpanel"
             hidden={props.value !==props.index}
             id={props.index}>
                <Form

                    onSubmit={handleSignUp}
                    ref={form}
                >
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
                        <label htmlFor="username">Username*</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required,validUsername]}
                        >

                        </Input>
                    </div>
                    <div className="formField">
                        <label htmlFor="password">Password*</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required,validPassword]}
                        />

                    </div>

                    <div className="formField">
                        <label htmlFor="repeatPassword">Repeat password*</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={onChangeRepeatPassword}
                            validations={[required,validRepeatPassword
                              ]}
                        >

                        </Input>
                    </div>
                    <div className="formField" >
                        <div style={{
                            display:"flex",

                        }}>

                            <Input
                                type="checkbox"
                                className="form-control"
                                name="termsAndPolicy"
                                default={termsAndPolicy}
                                value={termsAndPolicy}
                                onChange={onChangeTermsAndPolicy}
                                validations={[termsAndPolicyRequired
                                ]}/>
                            <p>I agree to the <Link  to={"/terms"}>Terms</Link> and <Link to={"/policy"}>Privacy Policy</Link></p>

                        </div>
                        {termsAndPolicyAlert? <div className="alert alert-danger" role="alert">
                            For signup accept Terms and Policy
                            </div> :<div/>
                           }

                    </div>

                    <div className="formField">
                        <button className="formSubmitButton" disabled={loading}>
                            {loading ? <div className="loader-spinner"/>:<span className="formSubmitButtonText">Sign Up</span>}


                        </button>
                    </div>



                    <CheckButton
                        style={{
                            display:"none"
                        }}
                        ref={checkBtn}
                    />
                    {message && (<div className="alert alert-danger" role="alert">
                        {message}
                    </div>)}
                </Form>


        </div>
    )
}
export default Signup