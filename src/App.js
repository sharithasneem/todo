import { useState } from 'react';
import './App.css'

function App() {
  const[todos,settodos]=useState([])
  const[todo,settodo]=useState(" ")
  return (  
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🙌☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settodos([...todos,{id:Date.now(),text:todo,Status:false}])}className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
        {todos.map((value)=> {
           return (<div className="todo">
            <div className="left">
              <input onChange={(e)=>{ 
                settodos(todos.filter(obj2=>{
                  if(obj2.id===value.id){
                    obj2.status=e.target.checked
                  }
                  return obj2
                }))}}  type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
            <i onClick={(e)=>{
                todos.splice(0, 1);
                settodos([...todos]);
            }}>-</i>
              
            </div>
          </div>)
        })}
        
      </div>
      {todos.map((value)=>{
            if(value.status){
              return(<div>
                <h3><span style={{fontSize:'15 px'}}>Completed Task :</span>{value.text}</h3>
                 </div>)
            }
            return null
        })}
    </div>
  )

}

export default App;
