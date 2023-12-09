import React, { useState, createContext, useContext } from 'react';
import '../App.css';
// import { Context } from './transection';


 

// Create a context
// const UserContext = createContext();

// const Component1 = () => {
//   const [names, setname] = useState("vijay");

//   return (
//     <UserContext.Provider value={names}>
//       <h1>{names}</h1>
//     </UserContext.Provider>
//   );
// };

const Creates = createContext();

const New = () =>{
  const[buy, setBuy]=useState("sounthar");
  return(

    <Creates.Provider value={{ buy }}>
      <Contact />
    </Creates.Provider>
    
  );
   
};

const Contact = () => {

  const {buy} = useContext(Creates);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFocus = (event) => {
    event.target.style.backgroundColor = 'green';
  };

  const handleBlur = (event) => {
    event.target.style.backgroundColor = 'yellow';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    const { username, age, email, tel } = inputs;
    alert(`Name: ${username}\nAge: ${age}\nEmail: ${email}\nTel: ${tel}`);
  };

  return (
    <>
      <div className='money '>
       
        <form onSubmit={handleSubmit}>
          <label className='label'>Enter your name:</label><br />
          <input
            type="text"
            name="username"
            placeholder='enter your name'
            value={inputs.username || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          /><br />

          <label className='label'>Enter your age:</label><br />
          <input
            type="number"
            name="age"
            placeholder='enter your age'
            value={inputs.age || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          /><br />
          <label className='label'>Enter your Email </label><br />

          <input
            type="email"
            name="email"
            placeholder='enter your email'
            value={inputs.email || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          /><br />

          <label className='label'>Mobile number</label><br />
          <input
            type='tel'
            name='tel'
            placeholder='enter ph number'
            value={inputs.tel || ""}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          /><br />
          <input className='submit' type="submit" />
        </form>
      </div>
      <div>
        {/* Use the context value */}
        <h2>{buy}</h2>
       </div>
     
    </>
  );
}

export default New;
