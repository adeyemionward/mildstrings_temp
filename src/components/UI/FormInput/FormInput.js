import React from 'react';

const FormInput = (props) => {
    return (
        <div className='m-4'>
            <label htmlFor={props.name} className="block mb-2 text-sm font-medium text-gray-900">{props.name}</label>
            <input
                name={props.name}
                id={props.name}
                className="w-full pl-2 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default FormInput;