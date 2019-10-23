import React from 'react';
import axios from 'axios';
import { Button } from 'antd';
import InfoPage from './info';
import { connect } from 'react-redux';
import { getUserData } from '../action/userAction';
import { bindActionCreators } from 'redux';
class RegisterPage extends React.Component{

    state={
      curName:undefined,
      curEmail:undefined,
      curPassword:undefined,
      confirmPassword:undefined,
      response:{},
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
      
    //   axios.post('http://localhost:5000/register',
    //   {name:this.state.curName,
    //     email:this.state.curEmail,
    //     password:this.state.curPassword,
    //     password2:this.state.confirmPassword})
    //     .then(resp=>{
    //                 console.log('resp', resp.data);
    //                 this.setState({response:{...resp.data}})
    //       });

    //    console.log('response', this.state.response);
    const body={name:this.state.curName,
        email:this.state.curEmail,
        password:this.state.curPassword,
        password2:this.state.confirmPassword};
        this.setState({response:body});
        console.log('before action dispatch');
        this.props.getUserData(body);
      this.setState({
          curName:'',
          curEmail:'',
          curPassword:'',
          confirmPassword:'',
      });

    //   const { history } = this.props;
    //   history.push('/info');
        // <InfoPage userData={this.state.response}/>
    }
     
    render(){
        return <div style={{width:'100%'}}>
            <form>
                <div>
                Name:
                </div>
                <input value={this.state.curName} onChange={this.handleNameChange}/>
                <br/>
                <div>
                Email:
                </div>
                <input value={this.state.curEmail} onChange={this.handleEmailChange}/>
                <br/>
                <div>
                Password:
                </div>
                <input value={this.state.curPassword} onChange={this.handlePasswordChange}/>
                <br/>
                <div>
                Confirm Password:
                </div>
                <input value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
                <br/>
                <Button type="primary" onClick={this.handleFormSubmit}>Submit</Button>
            </form>
            <Button></Button>
        </div>
    }
};

const mapStateToProps =(userReducer,ownProps) =>{
     return  {userData:userReducer};
}

const mapDispatchToProps= (dispatch) => {
  return  bindActionCreators({getUserData},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage);




