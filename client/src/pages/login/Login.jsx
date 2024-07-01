import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [input, setInput] = useState({username: '', password: ''});
    const {loading,login} = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault()
        login({input});
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-green-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-10 border-collapse p-8'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                <span className='text-green-400'>ChatNode</span>
                &nbsp;&nbsp;LOGIN 
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10' value = {input.username} onChange={(e) => {setInput({...input,username : e.target.value})}}/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='text' placeholder='Password' className='w-full input input-bordered h-10' value={input.password} onChange={(e) => setInput({...input,password:e.target.value})}/>
                </div>  

                <Link to='/signup' className='text=sm hover:underline hover:text-green-400 mt-2 inline-block'>
                    {"Don't have an account? Sign up"}
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>{!loading?"Login":<span className='loading loading-spinner'></span>}</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login