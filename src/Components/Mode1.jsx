import React, { useState } from 'react'

const Mode1 = () => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    let actualValue = e.target.value;
    const name = e.target.name;
    setValue((previousValue) => { return { ...previousValue, [name]: actualValue } })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Your Details are ", value);
  }

  return (
    <div className='container col-4'>
      <h1 className='m-3'>First React test Case</h1>
      
      <form onSubmit={handleSubmit}>

        <p><label htmlFor="email">Username<input type="email" name='username' id='email' placeholder='Enter Username' className='form-control' onChange={handleChange} /></label></p>

        <p><label htmlFor="email">password<input type="password" name='password' id='password' role='password' placeholder='Enter Password' className='form-control' onChange={handleChange} /></label> </p>

        <p><input className='btn btn-primary' value="Sign in" type="submit" /></p>

      </form>

      {/* <img src="https://images.pexels.com/photos/589828/pexels-photo-589828.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" title='Nature Image' alt="" /> */}


    </div>
  )
}

export default Mode1;
