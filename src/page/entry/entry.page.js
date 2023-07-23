import React, {useState} from 'react';

import {LoginForm} from '../../components/login/Login.comp'
import './entry.style.css';
import { ResetPassword } from '../../components/password-reset/passwordReset.comp';


export const EntryPage = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState("login")

const handleOnChange = e =>{
  const {name, value} = e.target;
  switch(name){
    case'email':
      setEmail(value);
      break;

      case'password':
      setPassword(value);
      break;
       
      default:
      break;
  }
  // console.log( name, value );
};


const handleOnSubmit = (e) => {
  e.preventDefault();

  if(!email || !password){
    return (
      alert("Fill up all the form!")
    )
  }

  //TODO CALL API TO SUBMIT THE FORM
  console.log(email,password);
}

const handleOnRestSubmit = (e) => {
  e.preventDefault();

  if(!email){
    return (
      alert("Please enter the email!")
    )
  }
  //TODO CALL API TO SUBMIT THE FORM
  console.log(email);
}

const formSwitcher = (formType) => {
  return setFormLoad(formType)
}

  return <div className='entry-page bg-info'>
    <div className='jumbotron'>

    {formLoad === "login" &&  <LoginForm 
    handleOnChange={handleOnChange}
    handleOnSubmit={handleOnSubmit}
    formSwitcher = {formSwitcher}
    email={email}
    pass={password}
    />}
   
    {formLoad === "reset" &&   <ResetPassword 
    handleOnChange={handleOnChange}
    handleOnResetSubmit={handleOnRestSubmit}
    formSwitcher = {formSwitcher}
    email={email}
    />}
  
    </div>
    
  </div>;
}
// function EntryPage(){
//   return(
//     <div className='entry-page bg-info'>
//       <div className='jumbotron'>
//       <LoginForm/>
//       </div>
     
//     </div>
//   )
// }
// export default EntryPage