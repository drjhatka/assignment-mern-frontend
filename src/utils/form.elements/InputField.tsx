import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputAttributes,IReactHooksFormRegister, IRegisterFormInput, ILoginFormInput } from '../../types/types';

const InputField = (name:string,
    register: UseFormRegister<FieldValues>,
                    labelText:string, 
                    inputAttributes:InputAttributes, 
                    hooksConfig:RegisterOptions<FieldValues>) => {
    
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{labelText}</span>
      </label>
      <input
        type={inputAttributes.type}
        placeholder={inputAttributes.placeholder}
        className={inputAttributes.classes}
        {...register(name,hooksConfig)}
      />
    </div>
  )
}

export default InputField
