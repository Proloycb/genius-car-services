import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if(loading || updating){
        return <Loading/>
    }

    if (user) {
        console.log(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className='container w-50 mx-auto mt-5'>
            <PageTitle title="Register"/>
            <h2 className='text-primary text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='name' placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' />
                    <Form.Label className={`ps-2 ${agree ? '' : 'text-danger'}`}>Accept Terms and Conditions</Form.Label>
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit" className='d-block mx-auto w-50 mb-2'>
                    Register
                </Button>
            </Form>
            <p>Already Have an account?<Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;