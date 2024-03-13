import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ( {length=4 , onOtpSubmit=()=>{}} ) => {

    const [otp, setOtp] = useState(new Array(length).fill(''))

    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0] && inputRefs.current[0].focus) {
            inputRefs.current[0].focus()
        }
    }, [])


    const handleChange = (index, e) => {
        const value = e.target.value  
        if (isNaN(value)) return false
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        //submit the otp if all the inputs are filled   
        const combinedOtp = newOtp.join('')
        if (combinedOtp.length === length) {
            onOtpSubmit(combinedOtp)
        }

        //focus on next input box if available
        if (index !== length - 1 && value !== '') {
            inputRefs.current[index + 1].focus()
        }

    }
    const  handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        // optional
        if (index > 0 && !otp[index - 1]) {
          inputRefs.current[otp.indexOf("")].focus();
        }

    }
    const handleKeyDown = (index, e) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
          ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
          }
    }

  
  return (
    <div>
        {
            otp.map((value, index) => (
                <input
                    type='text'
                    maxLength='1'
                    key={index}
                    ref={(ref) => inputRefs.current[index] = ref}
                    value={value}
                    onChange={(e) => handleChange(index,e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index,e)}
                    className="otpInput"
                />
            ))
        }

    </div>
  )
}

export default OtpInput