import React, { useRef, useState } from 'react';
import './Form.scss';

const Form = () => {

    const nameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const [disabled, setDisabled] = useState(true);

    const submitData = (event) => {
        event.preventDefault();

    }

    const validateForm = () => {
        if (nameRef.current.value.length >= 3 && addressRef.current.value !== '' && emailRef.current.value !== '') {
            setDisabled(false);
        } 

        if (phoneRef.current.value.length !== 0) {
            if(phoneRef.current.value.length < 9) {
                setDisabled(true);
            }
        }
    }

    return(
        <form onSubmit={submitData}>
            <div className="block">
                <label>Name*</label>
                    <input onChange={validateForm} ref={nameRef} type="text" required/>
                
            </div>
            
            <div className="block">
                <label>Address*</label>
                    <input onChange={validateForm} ref={addressRef} type="text" required/>
                
            </div>
            <div className="block">
                <label>Phone</label>
                    <input onChange={validateForm} ref={phoneRef} type="number"/>
            </div>
            <div className="block">
                <label>E-mail</label>
                    <input onChange={validateForm} ref={emailRef} type="text" required/>
            </div>
            <input disabled={disabled} className="pay" type="submit" value="PAY"/>
        </form>
    )
};

export default Form;