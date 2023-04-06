import React from 'react'

const EditList = (props) => {

     const handleInputName = (e)=>{
          const name = e.target.name.value
          const newItems = props.items.map((li)=>(li.id===props.id)?{...li,name:name}:li)
          props.setItems(newItems)
     }
     const handleInputDob = (e)=>{
          const dob = e.target.dob.value
          const newItems = props.items.map((li)=>(li.id===props.id)?{...li,dob:dob}:li)
          props.setItems(newItems)
     }
     const handleInputOccupation = (e)=>{
          const occupation = e.target.occupation.value
          const newItems = props.items.map((li)=>(li.id===props.id)?{...li,occupation:occupation}:li)
          props.setItems(newItems)
     }
  return (
    <>
     
      <tr className='row flex'>
          <td><input type='text' name='name' value={props.name} onChange={handleInputName} className='edit-box'></input></td>
          <td><input type='text' name='dob' value={props.dob} onChange={handleInputDob} className='edit-box'></input></td>
          <td><input type='text' name='occupation'value={props.occupation} onChange={handleInputOccupation} className='edit-box'></input></td>
          <td ><button type='submit' className='btn-save'>Save</button></td>
      </tr>

    </>
  )
}

export default EditList
