
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useAuthContext } from '../context/authContext';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const signup = async({input}) => {
        setLoading(true)
        console.log(input)
        const success = handleInputError({input})
        if(!success)
            return
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({input}) 
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }


            localStorage.setItem('chat-user', JSON.stringify(data))


            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }

    };
    return {loading, signup}
}

export default useSignUp

const handleInputError = ({input}) => {
    if(!input.username || !input.email || !input.password){
        toast.error('Please fill in all fields')
        return false
    }

    if(input.password.length < 6){
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true
}