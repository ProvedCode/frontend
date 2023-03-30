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

	const [firstName, SetFirstName] = useState("");
	const [lastName, SetLastName] = useState("");
	const [specialization, setSpecialization] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");


	const [validFirstName, setValidFirstName] = useState(true);
	const [validLastName, setValidLastName] = useState(true);
	const [validSpec, setValidSpec] = useState(true);
	const [validEmail, setValidEmail] = useState(true);
	const [validPassword, setValidPassword] = useState(true);
	const [validRepeatPassword, setValidRepeatPassword] = useState(true);

	function validateFirstName (fname){
		const FIRST_NAME_REGEXP  = /^[a-zA-Z\s]{1,30}$/;
		if(FIRST_NAME_REGEXP.test(String(fname).toLowerCase())){
			setValidFirstName(true);
		}
		else{
			setValidFirstName(false);
		}
	}

	function validateLastName (lname){
		const LAST_NAME_REGEXP  = /^[a-zA-Z\s]{1,30}$/;
		if(LAST_NAME_REGEXP.test(String(lname).toLowerCase())){
			setValidLastName(true);
		}
		else{
			setValidLastName(false);
		}
	}

	function validateSpecialization (spec){
		const SPECIALIZATION_REGEXP  = /^[a-zA-Z\s]{1,50}$/;
		if(SPECIALIZATION_REGEXP.test(String(spec).toLowerCase())){
			setValidSpec(true);
		}
		else{
			setValidSpec(false);
		}
	}

	function validateEmail(email) {
		const EMAIL_REGEXP  = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if(EMAIL_REGEXP.test(String(email).toLowerCase())){
			setValidEmail(true);
		}
		else{
			setValidEmail(false);
		}
	}

	function validatePassword(password) {
		const PASSWORD_REGEXP  = /^[a-zA-Z0-9]{8,}$/;
		if(PASSWORD_REGEXP.test(String(password).toLowerCase())){
			setValidPassword(true);
		}
		else{
			setValidPassword(false);
		}
	}

	function validateRepeatPassword(password, repPassword) {
		if(password === repPassword){
			setValidRepeatPassword(true);
		}
		else{
			setValidRepeatPassword(false);
		}
	}

	function valedateAll(fname, lname, spec, email, password, repPassword){
		validateFirstName(fname);
		validateLastName(lname);
		validateSpecialization(spec);
		validateEmail(email);
		validatePassword(password);
		validateRepeatPassword(password, repPassword);
	}

	function handler(event){
		event.preventDefault()
	}
	return (
		<>
			<form action="#" onSubmit={handler} className={s.form}>
				<div className={s.input_block}>
                    <label htmlFor="first_name">First Name</label>
                    <Input name="first_name" type="text" required placeholder="John" autoComplete="off" className={`${s.input} ${validFirstName ? "" : s.error}`} onChange={event => SetFirstName(event.target.value)}></Input>
                    <span>{validFirstName ? "" : "*not valid first name"}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="last_name">Last Name</label>
                    <Input name="last_name" type="text" required placeholder="Brown" className={`${s.input} ${validLastName ? "" : s.error}`} onChange={event => SetLastName(event.target.value)}></Input>
                    <span>{validLastName ? "" : "*not valid last name"}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="login">Login</label>
                    <Input name="login" type="text" required placeholder="example@gmail.com" className={`${s.input} ${validEmail ? "" : s.error}`} onChange={event => setEmail(event.target.value)}></Input>
                    <span>{validEmail ? "" : "*not valid email"}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="specialization">Specialization</label>
                    <Input name="specialization" type="text" required placeholder="Java Developer" className={`${s.input} ${validSpec ? "" : s.error}`} onChange={event => setSpecialization(event.target.value)}></Input>
                    <span>{validSpec ? "" : "*not valid specialization"}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="password">Password</label>
                    <Input name="password" type="text" required placeholder="your password" className={`${s.input} ${validPassword ? "" : s.error}`} onChange={event => setPassword(event.target.value)}></Input>
                    <span>{validPassword ? "" : "*not valid password"}</span>
                </div>
				<div className={s.input_block}>
                    <label htmlFor="repeated_password">Repeat Password</label>
                    <Input name="repeated_password" type="text" required placeholder="repeat password" className={`${s.input} ${validRepeatPassword ? "" : s.error}`} onChange={event => setRepeatPassword(event.target.value)}></Input>
                    <span>{validRepeatPassword ? "" : "*password repeat incorrectly"}</span>
                </div>
				
				<Button type="submit" className={s.btn} onClick={()=>valedateAll(firstName, lastName,specialization, email, password, repeatPassword )}>
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
