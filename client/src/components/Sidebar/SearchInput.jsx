import  { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../states/useConversation';
import useGetConversations from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!search) return;
    const conversation = conversations.find(c => c.username.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else{
      toast.error('No Conversation Found')
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-green-500 text-white'>
            <FaSearch/>
        </button>
    </form>
  )
}

export default SearchInput