import React from 'react'

export const Output = ({ data, setState, setData1, setFlag }) => {

  function del(value) {
    alert("Confirm Delete ur Data")
    const deletes = data.filter((ele) => ele.title !== value.title)
    setState(deletes)
  }


  function edit(data,idx) {
    // alert("Confirm change your detailes")
    // setState(
    //   data.map((t) => {
    //     if (t.title == data.title) {
    //       return data
    //     }
    //     else {
    //       return t
    //     }
    //   })
    // )

    //1. data check 
    console.log(data, idx)
    setData1(data.title)
    setFlag({
      status: true,
      id: idx
    })
  }

  return (
    <div>
      {data.map((value, idx) => {
        console.log(value)
        return (
          <>
            <div className='update_container'>
              <h1 className='title'>{value.title}</h1>
              <p className='content'>{value.content}</p>
              <div className='buttons'>
                <button className='edit' onClick={() => edit(value, idx)}>Edit</button>
                <button className='delete' onClick={() => del(value)}>Delete</button>
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