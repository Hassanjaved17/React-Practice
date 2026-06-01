import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider ({children}){
 const [user, setUser] = useState(null);

const getUser = async () => {
  try{
const response =  await fetch("https://jsonplaceholder.typicode.com/posts")
const data = await response.json()
setUser(data)
  }
  catch(error){
    console.error('Error fetching user data:', error);
  }
}

useEffect(() => {
  getUser();
}, [])
  return (
    <UserContext.Provider value={{user, setUser, getUser}}>
      {children}
    </UserContext.Provider>
  );

}
export default UserContext;
export { UserProvider };