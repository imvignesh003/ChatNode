import { useSocketContext } from "../../context/socketContext";
import useConversation from "../../states/useConversation";

const Conversation = ({conversation,lastIdx,emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    const isSelected = selectedConversation?._id === conversation._id;

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-green-600 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-green-700" : ""}`} onClick = {() => setSelectedConversation(conversation)}> 
                <div className={`avatar ${isOnline?'online':''}`}>
                    <div className='w-12 rounded-full'>
                        <img src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"/>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.username}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1'> </div>}
        </>
    )
}

export default Conversation