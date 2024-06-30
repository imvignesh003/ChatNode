import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className="w-10 rounded-full">
                <img src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"/>
            </div>
        </div>
        <div className="chat-bubble text-white bg-green-300">
            Heyy Mann
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:34</div>
    </div>
  )
}

export default Message