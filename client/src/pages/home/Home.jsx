import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

export const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-green-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-10 border-collapse p-8'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}
