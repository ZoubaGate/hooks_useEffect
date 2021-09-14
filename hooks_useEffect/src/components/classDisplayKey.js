import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class ClassDisplayKey extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyCode : null
        }
    }
    handlerKeyCode = (e) => {
        this.setState({
            keyCode:e.code
        })
    }
    componentDidMount(){
        document.addEventListener("keyup",this.handlerKeyCode);
    }
    componentWillUnmount(){
        document.removeEventListener("keyup",this.handlerKeyCode);
    }
    render(){
        const {keyCode}= this.state;
        return(
            <div className="card card-body">
                
                      <h1 className="text-center">{keyCode}</h1>
                
            </div>
        )
    }
}
export default ClassDisplayKey;