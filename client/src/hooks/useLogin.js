import {useState} from 'react';
import {useAuthContext} from '../context/authContext';
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const login = async({input}) => {
        setLoading(true);
        const success = handleInputError({input});
        if(!success)
            return
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({input})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading, login};
}

export default useLogin


const handleInputError = ({input}) => {
    if(!input.username || !input.password){
        toast.error('Please fill in all fields')
        return false
    }

    if(input.password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true
}