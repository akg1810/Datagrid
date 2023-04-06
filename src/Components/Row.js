import React from 'react'

const Row = (props) => {
     const handleDelete = (id)=>{
          const newList = props.items.filter((li)=>li.id!==id)
          props.setItems(newList)
        }
     const handleEdit = (id)=>{
          const setUpdateState=props.setUpdateState
          setUpdateState(id)
     }
  return (
    <>
     
      <tr className='row flex'>
          <td className='box'>{props.name}</td>
          <td className='box'>{props.dob}</td>
          <td className='box'>{props.occupation}</td>
          <td>
          <button onClick={()=>handleEdit(props.id) } type='button' className='btn-edit'>Edit</button>
          <button type='button' onClick={()=>handleDelete(props.id)} className='btn-delete'>Delete</button>
          </td>
      </tr>
     
    </>
  )
}

export default Row
