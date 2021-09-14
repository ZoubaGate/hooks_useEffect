import React,{useState} from 'react'
import FunctionDisplayKey from './functionDisplayKey';
function Contenainer() {
const [show,setShow]= useState(false);

//utilisation des fonction ternaires
//si c'est afficher on le cache sinon on afficher
const btn_display=show ? 'cacher' : 'afficher';
return (
    <div className="text-center">
        <button className="btn btn-primary m-3" onClick={()=>setShow(!show)}>{btn_display}</button>

        {show &&  <FunctionDisplayKey />}
        
    </div>
)
}
export default Contenainer;