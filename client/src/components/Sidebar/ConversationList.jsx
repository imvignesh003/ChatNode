import {getRandomEmoji} from '/src/utils/emoji.js';
import useGetConversation from '/src/hooks/useGetConversation.js';
import Conversation from './Conversation.jsx'



const ConversationList = () => {
  const {loading,conversations} = useGetConversation();
  console.log("COnversation : ",conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {conversations.map((conversation,idx) => (
            <Conversation 
                key={conversation._id} 
                conversation={conversation} 
                lastIdx = {idx === conversations.length - 1} 
                emoji={getRandomEmoji()}
            />
        ))}

        {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default ConversationList