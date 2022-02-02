import React, { useState } from 'react'

interface InputProps {
  label: string
  type: string
  name: string
  error: boolean
  errorMsg: string
  onChange: (value: string, type: string) => void
}

const Input: React.FC<InputProps> = (props) => {
  const [value, setvalue] = useState('')
  const { label, name, type, error, errorMsg, onChange } = props

  return (
    <div className='input'>
      <div className='textLight'>{label}</div>
      <input
        className='mainInput'
        name={name}
        onChange={(e) => {
          setvalue(e.target.value)
          onChange(e.target.value, type)
        }}
        required
        type={type}
        value={value}
        style={{ border: error ? '2px solid red' : '2px solid green' }}
      />
      {error && <div className='input__error'>{errorMsg}</div>}
    </div>
  )
}

export default Input
