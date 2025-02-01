import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { InputAttributes } from '../../types/types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const InputField = (
  name: string,
  register: UseFormRegister<FieldValues>,
  labelText: string,
  inputAttributes: InputAttributes,
  hooksConfig: RegisterOptions
) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordView = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text  text-blue-900 font-bold '>
          {labelText}
        </span>
      </label>

      {inputAttributes.type == 'text' ? (
        <input
          type={inputAttributes.type}
          placeholder={inputAttributes.placeholder}
          className={inputAttributes.classes}
          {...register(name, hooksConfig)}
        />
      ) : (
        <div className='flex border-2 ' >
          <input
            type={showPassword ? 'text' : inputAttributes.type}
            placeholder={inputAttributes.placeholder}
            className={inputAttributes.classes}
            {...register(name, hooksConfig)}
          />
          <button className='btn btn-ghost absolute right-5' onClick={togglePasswordView}>
            <FontAwesomeIcon icon={!showPassword?faEyeSlash: faEye}></FontAwesomeIcon>
          </button>
        </div>
      )}
    </div>
  )
}

export default InputField
