import './App.css'
import Heading from './comp/Heading'
import Add from './comp/Add'
import Listelems from './comp/Listelems'
import Msg from './comp/Msg'
import { useState } from 'react'
function App() {
   let defValue=[{
    task:"getmilk",
    due:"1/23/2024",
   },
   {
    task:"getFood",
    due:"1/23/2024",
   },
   {
    task:"getBed",
    due:"1/23/2024",
   }
  ]
  let [data,setData]=useState(defValue);
  let methods =(taskName,taskDue)=>{ 
   setData((curValue)=>[...curValue,{task:taskName,due:taskDue}]);
  }
  let checkMethod=(item)=>{
    let items=data.filter((ele)=>ele.task!==item);
    setData(items);
  }
  return (
    <form className="container" action=''>
      {onsubmit=(event)=>{
          event.preventDefault();
      }}
      <Heading></Heading>
      <Add btnFunc={methods}></Add>
      {data.length===0 && <Msg></Msg>} 
      <Listelems remele={checkMethod} values={data}></Listelems>
    </form>
  )
}

export default App
