import React from 'react'
import'./Article3.css'
export default function Article3Box({children,text,number}) {
  return (
    <div className='Article3Box-con'>
        <div className="Article3Box-top">
            {children}
            <p>{number}</p>
        </div>
        <div className="Article3Box-down">
            <p>{text}</p>
        </div>
    </div>
  )
}
