import React from 'react'
import loading from './spin-blue.gif'

export default function Spinner() {
  return (
    <div className='flex justify-center'>
    <img src={loading} alt="Not loading..." />
    </div>
  )
}
