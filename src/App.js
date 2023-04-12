import React, { useState , useRef } from 'react'
import Row from './Components/Row'
import './App.css'
import EditList from './Components/EditList'
import { v4 as uuid } from 'uuid';

const App = () => {

  const nameRef = useRef()
  const dobRef =useRef()
  const occupationRef = useRef()

  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);
  const [updateState,setUpdateState] = useState(-1)

  const itemEvent = (event) => {
     setInputList(event.target.value); 
  };

  const handleLogin = (event) => {

    event.preventDefault();
    const name = event.target.name.value
    const dob = event.target.dob.value 
    const occupation = event.target.occupation.value

    const newList = {
      id:uuid(),
      name,
      dob,
      occupation
    }

    setItems((oldItems)=>{
      return [...oldItems,newList];
    })

    nameRef.current.value= ""
    dobRef.current.value= ""
    occupationRef.current.value= ""
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const dob = e.target.dob.value
    const occupation = e.target.occupation.value
    const newItems = items.map((li)=>(li.id===updateState?{...li,name:name,dob:dob,occupation:occupation}:li))
    setItems(newItems)
    setUpdateState(-1)
  }

  return (
    <>
      <div>
        <h1 style={{marginInline:"20px"}}>Table</h1>
        
        <form onSubmit={handleLogin} value={inputList} onChange={itemEvent} className='inputs flex'>
          <input type="text" name="name" placeholder="Name" ref={nameRef}/>
          <input type="text" name="dob" placeholder="DOB" ref={dobRef}/>
          <input type="text" name="occupation" placeholder="Occupation" ref={occupationRef}/>
          <button type="submit" className='btn-add'>Add New</button>
        </form>
        
        <table> 
          <tr className='headings flex'>
            <th>Name</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th>Action</th>
          </tr>
          {
            items.map((current)=>{
              return updateState === current.id ? <form onSubmit={handleSubmit}> <EditList key={current.id} id={current.id} name={current.name} dob={current.dob} occupation={current.occupation} items={items} setItems={setItems}/></form>:
              <Row key={current.id} id={current.id} name={current.name} dob={current.dob} occupation={current.occupation} updateState={updateState} setUpdateState={setUpdateState} items={items} setItems={setItems}/>
            })
          }
        </table>
        
      </div>
    </>
  )
}

export default App
