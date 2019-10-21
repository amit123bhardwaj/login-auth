import React from 'react';
import axios from 'axios';

class LoginPage extends React.Component{
    state={
        currEmail:undefined,
        currPassword:undefined,
    };
    handleEmailChange=(e)=>{
        this.setState({currEmail:e.target.value});
    }
    handlePasswordChange=(e)=>{
        this.setState({currPassword:e.target.value});
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        const email= this.state.email;
        const password= this.state.password;
        axios.post('http://localhost:5000/login',{email,password}).then(resp=>console.log('resp',resp));

    }

render(){
    return <div>
       <form >
        <span>
            Email
         <input value={this.state.currEmail} onChange={this.handleEmailChange}/>
         </span>
         <br/>
         <span>
            Password
         <input value={this.state.currPassword} onChange={this.handlePasswordChange}/>
         </span>
          <br/>
          <button onClick={this.handleFormSubmit}> Submit</button>
       </form>
       </div> 
}
}
export default LoginPage;