import React from 'react'

export const Output = ({data,setState}) => {

    function del(value){
    alert("Confirm Delete ur Data")
    const deletes=data.filter((ele)=>ele.title !== value.title)
    setState(deletes)
    }


    function edit(data){
        alert("Confirm change your detailes")
     setState(
        data.map((t)=>{
            if(t.title == data.title){
                return data
            }
            else{
                return t
            }
        })
     )
    }

  return (
    <div>
     {data.map((value)=>{
       console.log(value)
       return(
        <>
          <div className='update_container'>
            <h1 className='title'>{value.title}</h1>
            <p className='content'>{value.content}</p>
            <div className='buttons'>
            <button className='edit' onClick={()=>edit(data)}>Edit</button>
            <button className='delete' onClick={()=>del(value)}>Delete</button>
            </div>
            
          </div>
       </>
       )
     })

     }
    </div>
    
  )
}
export default Output;