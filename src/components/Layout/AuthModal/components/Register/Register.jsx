import React, { useState } from "react";
import { Button, Input } from "../../../../../shared/components";
import s from "./Register.module.scss";

const advices = [
	{
		title: "Fill out your account.",
		text: "Upload the best avatar, you’ve ever had and write bio",
	},
	{
		title: "Time to let the world know you",
		text: "Write your proofs — text with links that describes your activity. It’s better to follow 1 rule: 1 activity - 1 proof ;)",
	},
	{
		title: "Keep improving yourself",
		text: "If you need time to think about your proof for editing sometime - save it to drafts and return in any convenient time.",
	},
	{
		title: "Share your goals",
		text: "When you are confident in writing the proof - press “Publish” button to upload it on your profile.",
	},
];

export function Register() {

	const [firstName, SetFirstName] = useState({name:"", error:"", state:true});
	const [lastName, SetLastName] = useState({name:"", error:"", state:true});
	const [email, setEmail] = useState({mail:"", error:"", state:true});
	const [password, setPassword] = useState({pswd:"", error:"", state:true});
	const [specialization, setSpecialization] = useState({spec:"", error:"", state:true});
	const [repeatPassword, setRepeatPassword] = useState({repeat:"", error:"", state:true});

	function validateFirstName (){
		const FIRST_NAME_REGEXP  = /^[a-zA-Z\s]{1,30}$/;
		if(FIRST_NAME_REGEXP.test(String(firstName.name).toLowerCase())){
			SetFirstName(prev=>({...prev, state:true}));
		}
		else{
			if(firstName.name.trim() === ""){
				SetFirstName(prev=>({...prev, error:"*empty field"}));
			}
			else if(firstName.name.length > 30){
				SetFirstName(prev=>({...prev, error:"*the value is too long"}));
			}
			else if(!FIRST_NAME_REGEXP.test(firstName.name)){
				SetFirstName(prev=>({...prev, error:"*you can use only latins letters"}));
			}
			else{
				SetFirstName(prev=>({...prev, error:"*not valid"}));
			}
			SetFirstName(prev=>({...prev, state:false}));
		}
	}

	function validateLastName (){
		const LAST_NAME_REGEXP  = /^[a-zA-Z\s]{1,30}$/;
		if(LAST_NAME_REGEXP.test(String(lastName.name).toLowerCase())){
			SetLastName(prev=>({...prev, state:true}));
		}
		else{
			if(lastName.name.trim() === ""){
				SetLastName(prev=>({...prev, error:"*empty field"}));
			}
			else if(lastName.name.length > 30){
				SetLastName(prev=>({...prev, error:"*the value is too long"}));
			}
			else if(!LAST_NAME_REGEXP.test(lastName.name)){
				SetLastName(prev=>({...prev, error:"*you can use only latins letters"}));
			}
			else{
				SetLastName(prev=>({...prev, error:"*not valid"}));
			}
			SetLastName(prev=>({...prev, state:false}));
		}
	}

	function validateSpecialization (){
		const SPECIALIZATION_REGEXP  = /^[a-zA-Z0-9\s]{1,70}$/;
		if(SPECIALIZATION_REGEXP.test(String(specialization.spec).toLowerCase())){
			setSpecialization(prev=>({...prev, state:true}));
		}
		else{
			if(lastName.name.trim() === ""){
				setSpecialization(prev=>({...prev, error:"*empty field"}));
			}
			else if(specialization.spec.length > 70){
				setSpecialization(prev=>({...prev, error:"*the value is too long"}));
			}
			else if(!SPECIALIZATION_REGEXP.test(specialization.spec)){
				setSpecialization(prev=>({...prev, error:"*you can use only latins letters and numbers"}));
			}
			else{
				setSpecialization(prev=>({...prev, error:"*not valid"}));
			}
			setSpecialization(prev=>({...prev, state:false}));
		}
	}

	function validateEmail() {
		const EMAIL_REGEXP  = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (EMAIL_REGEXP.test(String(email.mail).toLowerCase())){
            setEmail(prev=>({...prev, state: true}));
        }
        else{
            if(email.mail.trim() === ""){
                setEmail(prev=>({...prev, error: "*empty field"}));
            }
            else if(!email.mail.includes("@")){
                setEmail(prev=>({...prev, error: "*email doesn't have \"@\""}));
            }
            else if(!email.mail.split("@")[1].includes(".")){
                setEmail(prev=>({...prev, error: "*domain name doesn't have \".\""}));
            }
            else{
                setEmail(prev=>({...prev, error: "*not valid email"}));
            }
            setEmail(prev=>({...prev, state: false}));
        }
	}

	function validatePassword() {
		const PASSWORD_REGEXP  = /^[a-zA-Z0-9]{8,}$/;
		if(PASSWORD_REGEXP.test(String(password.pswd).toLowerCase())){
            setPassword(prev=>({...prev, state:true}));
        }
        else{
            if(password.pswd.trim() === ""){
                setPassword(prev=>({...prev, error:"*empty field"}));
            }
			else if(password.pswd.length < 8){
                setPassword(prev=>({...prev, error:"*password should be more than or equal 8 symbols"}));
            }
            else if(!/^[a-zA-Z0-9]$/.test(password.pswd)){
                setPassword(prev=>({...prev, error:"*you can use only latins letters and numbers"}));
            }
            else{
                setPassword(prev=>({...prev, error:"*not valid password"}));
            }
            setPassword(prev=>({...prev, state:false}));
        }
	}

	function validateRepeatPassword() {
		if(password.pswd === repeatPassword.repeat && repeatPassword.repeat.trim() !== ""){
			setRepeatPassword(prev=>({...prev, state:true}));
		}
		else{
			if(repeatPassword.repeat.trim() === ""){
				setRepeatPassword(prev=>({...prev, error:"*empty field"}));
			}
			else{
				setRepeatPassword(prev=>({...prev, error:"*repeated password does not equal the initial one"}));
			}
			setRepeatPassword(prev=>({...prev, state:false}));
		}
	}

	function valedateAll(){
		validateFirstName();
		validateLastName();
		validateSpecialization();
		validateEmail();
		validatePassword();
		validateRepeatPassword();
	}

	function handler(event){
		event.preventDefault()
	}
	return (
		<>
			<form action="#" onSubmit={handler} className={s.form}>
				<span>the mark * indicating that the field is required</span>
				<div className={s.input_block}>
                    <label htmlFor="first_name">First Name*</label>
                    <Input name="first_name" type="text" required placeholder="John" autoComplete="off" className={`${s.input} ${firstName.state ? "" : s.error}`} onChange={event => SetFirstName(prev=>({...prev, name:event.target.value}))}></Input>
                    <span>{firstName.state ? "" : firstName.error}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="last_name">Last Name*</label>
                    <Input name="last_name" type="text" required placeholder="Brown" autoComplete="off" className={`${s.input} ${lastName.state ? "" : s.error}`} onChange={event => SetLastName(prev=>({...prev, name:event.target.value}))}></Input>
                    <span>{lastName.state ? "" : lastName.error}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="login">Login*</label>
                    <Input name="login" type="text" required placeholder="example@gmail.com" autoComplete="off" className={`${s.input} ${email.state ? "" : s.error}`} onChange={event => setEmail(prev=>({...prev, mail:event.target.value}))}></Input>
                    <span>{email.state ? "" : email.error}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="specialization">Specialization*</label>
                    <Input name="specialization" type="text" required placeholder="Java Developer" autoComplete="off" className={`${s.input} ${specialization.state ? "" : s.error}`} onChange={event => setSpecialization(prev=>({...prev, spec:event.target.value}))}></Input>
                    <span>{specialization.state ? "" : specialization.error}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="password">Password*</label>
                    <Input name="password" type="password" required placeholder="your password" autoComplete="off" className={`${s.input} ${password.state ? "" : s.error}`} onChange={event => setPassword(prev=>({...prev, pswd:event.target.value}))}></Input>
                    <span>{password.state ? "" : password.error}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="repeated_password">Repeat Password*</label>
                    <Input name="repeated_password" type="password" required placeholder="repeat password" autoComplete="off" className={`${s.input} ${repeatPassword.state ? "" : s.error}`} onChange={event => setRepeatPassword(prev=>({...prev, repeat:event.target.value}))}></Input>
                    <span>{repeatPassword.state ? "" : repeatPassword.error}</span>
                </div>
				
				<Button type="submit" className={s.btn} onClick={()=>valedateAll()}>
					Register
				</Button>
			</form>
			<div className={s.info}>
				<div className={s.title}>Already have an account?</div>
				<ul className={s.advices}>
					{advices.map(({ title, text }) => (
						<li key={title}>
							<h4>{title}</h4>
							<p>{text}</p>
						</li>
					))}
				</ul>
				<Button className={s.btn}>Login</Button>
			</div>
		</>
	);
}
