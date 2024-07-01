import { useEffect } from 'react';
import { useSocketContext } from '../context/socketContext';
import useConversation from '../states/useConversation';
import NotificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
  const { socket } = useSocketContext()
  const {messages,setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage",(message) => {
        message.shouldShake = true;
        const sound = new Audio(NotificationSound);
        sound.play();
        setMessages([...messages,message])
    })
    return () => socket?.off("newMessage");
  },[socket,messages,setMessages]);

}

export default useListenMessages 