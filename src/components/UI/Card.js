import React from 'react';

const Card = (props) => {
  return (
    <div className='w-full bg-white rounded-lg shadow border'>
        {props.children}
    </div>
  )
}

export default Card;