
//hushRouter

import './App.css'
import { Link, NavLink, useHistory ,useLocation } from "react-router-dom";

let user = {
  name: "sdsdf",
  age: 12,
  img: 'srvxcvffgjfkljkfgjkdfjdfkjg'
}



export default function Home() {

  let history = useHistory()
  let loc = useLocation()

  console.log(loc);

  localStorage.setItem('armen', JSON.stringify(user))
  localStorage.setItem('armen', JSON.stringify(user))
  // let a = localStorage.getItem('armen')
  // localStorage.removeItem('armen')


  let gotoLogin = () => {

      history.replace('/')

  }


  return (
    <>
      <div className='home'>

        <header>
          <div className='size headerSize'>
            <NavLink exact={true} to={{
              pathname : "/login",
              params : 'bla bla bla',
              state : 'staaaaaaaaaaaaaaaaaaate'
            }} activeClassName='active2'>login</NavLink>
            

            {/* <NavLink to={`login/${}`}></NavLink> */}

            <div className='headerRight'>
              <p className='Subscribe'>Subscribe Plan</p>
              <p className='Login'>Login</p>
              <button onClick={gotoLogin}>Sign up</button>
              <select name="" id="">
                <option value="">en</option>
                <option value="">ru</option>
                <option value="">fr</option>
              </select>
            </div>
          </div>
        </header>

        <div className='context'>
          <div className='contextBlock'>
            <p>dfsdfds</p>
            <p>dfsdfds</p>
            <p>dfsdfds</p>
          </div>

          <div className='contextRight'>
            <div className='contextBlock'>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
            </div>


            <div className='contextBlock'>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
            </div>



            <div className='contextBlock'>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
            </div>
            <div className='contextBlock'>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
            </div>
            <div className='contextBlock'>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
            </div>
            <div className='contextBlock'>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
              <p>dfsdfds</p>
            </div>
          </div>

        </div>



      </div>
    </>
  )
}