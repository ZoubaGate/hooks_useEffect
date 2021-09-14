import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function FunctionDisplayKey(){
    const [keyCode,setKeyCode] = useState('')
    
    const  handlerKeyCode=(e)=>{
      setKeyCode(e.code)
    }
    useEffect( () => {
        document.addEventListener("keyup",handlerKeyCode)

        return ()=>{
            document.removeEventListener("keyup",handlerKeyCode)
        }
    },[])

    return(
            <div className="card card-body">

                <h1 className="text-center">{keyCode}</h1>

            </div>
        );
}

export default FunctionDisplayKey;