import React from 'react'
import Button from '../components/buttons/Button'

const About = () => {
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
    </>
  )
}

export default About