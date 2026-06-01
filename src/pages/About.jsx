// import React from 'react'
import { useContext } from 'react';
import Button from '../components/buttons/Button'
import  UserContext  from '../context/UserContext'

const About = () => {

  const {user, setUser} = useContext(UserContext)
  console.log("users", user);
  return (
    <>
    
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        At HandyCraft, we are passionate about bringing you the finest handmade products from around the world. Our mission is to connect talented artisans with customers who appreciate the beauty and craftsmanship of handmade goods.
      </p>
      <p className="text-lg mb-4">
        We believe in the power of creativity and the importance of supporting local communities. Each product in our collection is carefully curated to ensure it meets our high standards of quality and uniqueness.
      </p>
      <p className="text-lg mb-4">
        Thank you for choosing HandyCraft. We hope you find something special that brings joy and inspiration to your life.
      </p>

      <Button title="Learn More"/>
    </div>
   <div>
      <h1 className='text-2xl font-bold mb-4'>Hi i am {user.title}</h1>
      <h2 className='text-xl font-semibold mb-2'>The product Desc are: {user.body}</h2>

   </div>


    </>
  )
}

 export default About