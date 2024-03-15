import React, { useState } from 'react'
import OtpInput from './OtpInput'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from '../App';

const PhoneLogin = () => {

  const [phoneno, setPhoneno] = useState('')
  const [showOtpInput, setShowOtpInput] = useState(false)

  const handlePhoneNo = (e) => {
    setPhoneno(e.target.value)
  }
  const handlePhoneSubmit = (e) => {
    e.preventDefault()
    console.log(phoneno)

    const regex = /^[0-9]{10}$/
    if (!regex.test(phoneno)) {
      toast.error('Invalid Phone Number')
      return
    }
    setShowOtpInput(true)
  }

  const onOtpSubmit = (otp) => {
    console.log(otp)
    if (otp === '1234') {
      toast.success('Logged In Successfully')
    } else {
      toast.error('Invalid OTP')
    }
  
  }

  return (
    <div className=''>
      <ToastContainer />
      {!showOtpInput ? (
      <form onSubmit={handlePhoneSubmit}>
        <input className='form-control   ' type="text" value={phoneno} placeholder="Enter Phone Number" onChange={handlePhoneNo} />
        <button className='btn  p-2 m-3 btn-primary' type='submit'>Submit</button>
      </form>
      ) : (
        <div>
          <p>OTP Sent to {phoneno}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
};

export default PhoneLogin