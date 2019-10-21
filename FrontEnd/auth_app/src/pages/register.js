import React from 'react';
import axios from 'axios';

class RegisterPage extends React.Component{

    state={
      curName:undefined,
      curEmail:undefined,
      curPassword:undefined,
      confirmPassword:undefined,
     };

    handleNameChange=(e)=>{
        this.setState({curName:e.target.value});
    }
    handleEmailChange=(e)=>{
        this.setState({curEmail:e.target.value});
    }
    handlePasswordChange=(e)=>{
        this.setState({curPassword:e.target.value});
    }
    handleConfirmPasswordChange=(e)=>{
        this.setState({confirmPassword:e.target.value});
    }
    handleFormSubmit=(e)=>{
      e.preventDefault();
      const name= this.state.name;
      const email= this.state.email;
      const password= this.state.password;
      const password2= this.state.password2;
      axios.post('http://localhost:5000/register',
      {name:this.state.curName,
        email:this.state.curEmail,
        password:this.state.curPassword,
        password2:this.state.confirmPassword})
        .then(resp=>console.log('resp', resp.data));
      this.setState({
          curName:'',
          curEmail:'',
          curPassword:'',
          confirmPassword:'',
      })

      const {history} = this.props;
      history.push('/info');
    }
     
    render(){
        return <div>
            <form>
                Name:
                <input value={this.state.curName} onChange={this.handleNameChange}/>
                <br/>
                Email:
                <input value={this.state.curEmail} onChange={this.handleEmailChange}/>
                <br/>
                Password:
                <input value={this.state.curPassword} onChange={this.handlePasswordChange}/>
                <br/>
                Confirm Password:
                <input value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
                <br/>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
        </div>
    }
}
export default RegisterPage;