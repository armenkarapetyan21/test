import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './redux/users/UserSlice'




function Mard(props) {


    let anun = useSelector(state => {
        return state.users.userInfo.name
    })


    let [input, setInput] = useState('')
    let dispatch = useDispatch()

    console.log(anun);
    return (
        <div>
            <p> {anun} </p>
            <hr />
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }} />
            <button onClick={() => dispatch(editUser(input))}> click </button>
        </div>
    )
}

export default Mard
