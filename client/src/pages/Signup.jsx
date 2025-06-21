import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-lg mx-auto" >
      <h1 className='font-bold text-3xl text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' id='userName' className='border rounded-lg p-2' />
        <input type="email" placeholder='email' id='userName' className='border rounded-lg p-2' />
        <input type="password" placeholder='password' id='password' className='border rounded-lg p-2' />
        <button className='bg-slate-600 text-white rounded-lg p-2 hover:opacity-90 disabled:opacity-80 transition-all duration-200'>Sign Up</button>
      </form>
      <div className="flex items-center mt-4 gap-2">
        <p>Have an account ?</p>
        <Link to={"/sign-in"} className='text-blue-500 hover:underline'>Sign In</Link>
      </div>
    </div>
  )
}
