import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider ({children}){
 const [user, setUser] = useState(null);

const getUser = async () => {
  try{
const response =  await fetch("https://jsonplaceholder.typicode.com/posts")
  }

  catch(error){
    console.error('Error fetching user data:', error);
  }
}

}