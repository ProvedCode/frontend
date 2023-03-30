import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../../context/UserContext/UserContext";
import { Button, Input } from "../../../../../shared/components";
import s from "./Login.module.scss";

const advices = [
    {
        title: "Searching and connecting",
        text: "You can search for the talents all around the globe and connect with them easily",
    },
    {
        title: "Upload any quantity of proofs",
        text: "It is allowed for you to upload any quantity of proofs you want.",
    },
    {
        title: "Job alerts",
        text: " You will be immediately recognised, when employers will want to make connection.",
    },
    {
        title: "Free CV review",
        text: "It is allowed to have the CV review for free!",
    },
];

export function Login() {
    const { setAuth } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const [validEmail, setValidEmail] = useState(true);
	// const [validPassword, setValidPassword] = useState(true);

	function validateEmail() {
		const EMAIL_REGEXP  = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		return EMAIL_REGEXP.test(String(email).toLowerCase());
	}
	function validatePassword() {
		const PASSWORD_REGEXP  = /^[a-zA-Z0-9]{8,}$/;
		return PASSWORD_REGEXP.test(String(password).toLowerCase());
	}
	function validateForm(){
		// validateEmail(email);
		// validatePassword(password);
		return validateEmail() && validatePassword();
	}
	
	function handler(event){
		event.preventDefault()
	}
    return (
        <>
            <form action="#" onSubmit={handler} className={s.form}>
                <div className={s.input_block}>
                    <label htmlFor="login">Login</label>
                    <Input name="login" type="text" required placeholder="example@gmail.com" className={`${s.input} ${validateEmail() ? "" : s.error}`} onChange={event => setEmail(event.target.value)}></Input>
                    <span>{validateEmail() ? "" : "*not valid email"}</span>
                </div>
                <div className={s.input_block}>
                    <label htmlFor="password">Password</label>
                    <Input name="password" type="text" required placeholder="your password" className={`${s.input} ${validatePassword() ? "" : s.error}`} onChange={event => setPassword(event.target.value)}></Input>
					<span>{validatePassword() ? "" : "*not valid password"}</span>
                </div>
                <Button type="submit" className={s.btn} onClick={()=>validateForm()}>
                    Login
                </Button>
            </form>
            <div className={s.info}>
                <div className={s.title}>Not Registered?</div>
                <ul className={s.advices}>
                    {advices.map(({ title, text }) => (
                        <li key={title}>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>
                <Button
                    className={s.btn}
                    onClick={() =>
                        navigate(location.state.redirect, { replace: true })
                    }
                >
                    Register
                </Button>
            </div>
        </>
    );
}
