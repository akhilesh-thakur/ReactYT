import React from 'react'
import './news.css'

import SideComp from './SideComp'

export default function TopHeadlinesMain() {
  return (
    <>
    <div className='papa flex'>
    <SideComp/>
        <div className='flex jys'>
            <h1>NewsZ - Top Headlines of the Day</h1>
        </div>
    </div>
    </>
  )
}
