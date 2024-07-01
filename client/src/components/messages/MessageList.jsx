import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx'
import { useEffect, useRef } from 'react';
import useListenMessages from '../../hooks/useListenMessages.js';

const MessageList = () => {
  const {loading,messages} = useGetMessages();
  useListenMessages();
  const lastRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      lastRef.current?.scrollIntoView({smooth:true})
    },100); 
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>


        {!loading && messages.length>0 && messages.map((message) => (
        <div key={message._id} ref = {lastRef}>
          <Message message={message} />
        </div>))}
        {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx} />)}

        {!loading && messages.length === 0 && <p className='text-center'>Send a Message to Start Conversation</p>}
    </div>
  )
}

export default MessageList