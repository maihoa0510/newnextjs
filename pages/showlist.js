import {getUser} from '../lib/user'

export default function ShowList( {users}) {
  return (<>
    <div className="container">
    <table className="table">
    <thead>
      <tr>
        <th>id</th>
        <th>Email</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Business</th>
      </tr>
      </thead>
      <tbody>
   {
    users.map(user => (
      <tr key = {user.id}>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.business}</td>
    </tr>
    ))
   }
   </tbody>
     </table>
    </div>
  </>)
}
export async function getServerSideProps(context) {
  const users = await getUser()
  return {
    props: {users}, 
  }
}