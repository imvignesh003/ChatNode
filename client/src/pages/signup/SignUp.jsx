import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-green-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-10 border-collapse p-8'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                <span className='text-green-400'>ChatNode</span>
                &nbsp;&nbsp;SignUp 
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input type='text' placeholder='Email' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='text' placeholder='Password' className='w-full input input-bordered h-10'/>
                </div>
                <a href='#' className='text=sm hover:underline hover:text-green-400 mt-2 inline-block'>
                    {"Already have an account? Sign up"}
                </a>
                <div>
                    <button className='btn hover:bg-green-700 btn-block btn-sm mt-2'>SignUp</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp