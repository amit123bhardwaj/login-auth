import React from 'react';
import { Col, Row } from 'antd';



class InfoPage extends React.Component{

    render(){
     return <div> <Row style={{display:'flex', flexDirection:'row'}}>
             <Col>
              <span><Col>name: </Col><Col>Login User Name</Col> </span>
              <span><Col>Email: </Col><Col>Login User Email</Col> </span>
              <span><Col>UPdate: </Col><Col>Login User Update Password</Col> </span>
             </Col>
              <Col>
              <img src="" alt="not found"></img> 
              </Col>
            </Row>  </div>   
    }
}
export default InfoPage;