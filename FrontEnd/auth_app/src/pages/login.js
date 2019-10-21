import React from 'react';
import axios from 'axios';
import { Button } from 'antd';

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
        const email= this.state.currEmail;
        const password= this.state.currPassword;
        axios.post('http://localhost:5000/login',{email,password}).then(resp=>console.log('resp',resp));
        const { history } = this.props;
        history.push('/info');
    }

render(){
    return <div style={{width:'100%'}}>
       <form>
          <div> 
            Email
          </div>
         <input value={this.state.currEmail} onChange={this.handleEmailChange}/>
         
         <br/>
        <div>
            Password
        </div>
         <input value={this.state.currPassword} onChange={this.handlePasswordChange}/>
         
          <br/>
       </form>
       <Button onClick={this.handleFormSubmit}> Submit</Button>
       </div> 
}
}
export default LoginPage;