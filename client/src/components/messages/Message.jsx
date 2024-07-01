// import useConversation from '../../states/useConversation';
import { useAuthContext } from '../../context/authContext';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  // const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatcls = fromMe ? 'chat-end' : 'chat-start';
  const chatBubblecls = fromMe ? 'bg-green-700' : '';
  const fmtTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatcls}`}>
        <div className='chat-image avatar'>
            <div className="w-10 rounded-full">
                <img src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${chatBubblecls} ${shakeClass}`} >
            {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {fmtTime}
        </div>
    </div>
  )
}

export default Message