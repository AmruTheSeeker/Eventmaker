import React from 'react'

export const Button = ({variant, children}) => {
    if ( variant === 'primary') 
      return <button className='bg-black text-white p=4 rounded-lg'>{children}</button>;
      return <button className='bg-zinc-400 text-white p=4 rounded-lg'>{children}</button>
}
