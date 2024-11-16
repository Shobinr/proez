import cover from '../../assets/images/18700.jpg'
import { useDispatch, useSelector } from "react-redux";
 import { loginSubmit } from "../../utils/slice/userSlice";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login  = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isFetching, isSuccess, isError, errorMessage } = useSelector((state) => state.user);

  const users1 = useSelector((state) => state);
  const users = useSelector((state) => state.user?.Users);
  console.log("users", users1);
  console.log(users);

const  handleChange =(e) =>{
  const {name, value} = e.target;
  if(name === 'username'){
    setUsername(value);
  }else if (name === 'password'){
    setPassword(value);
  }
} 




const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const result = await dispatch(loginSubmit({ username, password }));
    if (loginSubmit.fulfilled.match(result)) {
      navigate('/dashboard');
    } else {
      setError('Login failed: Invalid username or password');
    }
  } catch (error) {
    setError('Login failed: ' + error.message);
    console.error('Login failed:', error);
  }
}


  
  return(
    <div className='w-full h-screen flex item-start'>
      <div className='relative  w-1/2 h-full flex flex-col'>
        <img src={cover} className='w-full h-full object-cover'/>
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex  flex-col p-20 justify-evenly'>   
        <h1 className='text-4xl text-[#060606] font-semibold'> ProLex</h1>

        <div className='w-full flex  flex-col max-w-[550px'>
          <div className='w-full flex flex-col  mb-2'>
            <h3 className='text-3xl  font-semibold  mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome Back, Please enter your details </p>
          </div>

          <div className='w-full flex flex-col'>
            <input type="email"
            name="username"
            value={username}
            placeholder='Email Address'
            onChange={(e)=> handleChange(e)}
            className='w-full text-black py-4  my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
             <input type="password"
             name="password"
             value={password}
            placeholder='Password'
            onChange={(e)=> handleChange(e)}
            className='w-full text-black py-4  my-2 bg-transparent border-b border-black outline-none focus:outline-none'/> 
          </div>

          <div className='w-full flex item-center justify-between'>
            <div className='w-full flex'>
              <input type='checkbox' className='w-4 h-4 mr-2'/>
              <p className='text-sm '> Remember me</p>
            </div>
            <p className='text-sm font-medium  whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
        </div>

        <div className='w-full flex flex-col my-4'>
          <button onClick={ handleLogin}className='w-full bg-[#060606] my-2 text-white p-4 rounded-md  flex item-center justify-center'>Login</button>
          {error && <p className='error-message'>{error}</p>}
        </div>
        

<div className='w-full flex items-center justify-center'>

</div>
        </div>
      </div>


    </div>
  )
}
export default Login;