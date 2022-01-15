import React from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Form from '../Components/Form'

export const  Login = (props: any) => {
	return (
		<div className='container--beige-light windowed'>
			<div className="login-container box-shadow">
				<Form className="">
					<Input type="text" placeholder="Brukernavn"></Input>
					<Input type="password" placeholder="Passord"></Input>
				</Form>
				<Button className="box-shadow btn--primary" onClick={() => props.setLogin(true)}> Logg på </Button>
			</div>
		</div>
	)
}
