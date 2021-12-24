import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ReCaptcha = ({ onChange }) => {
  const ref = useRef(null)
  const _handleChange = (value) => {
    if (value && ref.current) {
      onChange && onChange(2)
    }
  }

  return (
    <ReCAPTCHA
      style={{ margin: '16px 0' }}
      theme='light'
      ref={(current) => (ref.current = current)}
      sitekey='6LeXc8QdAAAAAGrsWg6HBhEJb7jsl5gZtAO2tMum'
      onChange={_handleChange}
    />
  )
}

export default ReCaptcha
