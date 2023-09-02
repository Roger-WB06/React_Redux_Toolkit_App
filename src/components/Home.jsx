import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { removeAll, removeUser } from '../features/users/userSlice'



const Home = () => {

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) =>
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.mobile}</td>
                <td>
                  <button onClick={()=> dispatch(removeUser(user.id))}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      {
        users.length > 0 ? <button onClick={() =>dispatch(removeAll([]))}>Delete All</button> : ''
      }
    </div>
  )
}

export default Home