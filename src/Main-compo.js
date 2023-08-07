import React, { useState } from 'react'
import Output from './Output'

export const Main = () => {

  const [title, setData1] = useState("")
  const [flag, setFlag] = useState({
    status: false,
    id: null
  })


  const [content, setData2] = useState("")
  const [state, setState] = useState([])


  function update() {
    if (title === "" || content === "") {
      alert("plz enter the title or value")
    } else {
      if (flag.id == null) {
        setData1('')
        setState((state) => {
          return ([...state, { title, content }])
        })
      } else if (flag.id >= 0) {
        let idx = flag.id
        state[idx].title = title
        setState([...state])

        setFlag({
          status: false,
          id: null
        })
        setData1('')
      }
    }


  }




  return (
    <>
      <div className='mainContainer'>
        <h1 className='heading'>ToDo-App List</h1>
        <div className='submain'>
          <p className='para1'>Title</p>
          <input type="text" className="first_input" onChange={(event) => setData1(event.target.value)} value={title}></input>
          <p className='para2'>Content</p>
          <textarea className="second_input" onChange={(event) => setData2(event.target.value)}></textarea>
          <input type="submit" className='submit' onClick={update} value={!flag.status ? 'Submit' : "Edit"}></input>
        </div>
        {/* <h1 className='para3'>{value}</h1>
    <p className='para4'>{value1}</p> */}
      </div>
      <div>
        <Output data={state} setState={setState} setData1={setData1} setFlag={setFlag} />
      </div>
    </>
  )

}
export default Main;