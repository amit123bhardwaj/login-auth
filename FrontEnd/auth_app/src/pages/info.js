import React, { useReducer } from 'react';
import { Col, Row } from 'antd';



class InfoPage extends React.Component{

    render(){
      const {user} = this.props;
     return <div> <Row style={{display:'flex', flexDirection:'row'}}>
             <Col>
              <span><Col>name: </Col><Col>{user ? user.name:''}</Col> </span>
              <span><Col>Email: </Col><Col>{user ? user.email:''}</Col> </span>
              <span><Col>Current Password: </Col><Col>{user ? user.password:''}</Col> </span>
             </Col>
              <Col>
              <img src="" alt="not found"></img> 
              </Col>
            </Row>  </div>   
    }
}
export default InfoPage;