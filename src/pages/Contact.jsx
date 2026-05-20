// import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="container mx-auto px-6 py-12">  
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          We would love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to say hello, feel free to reach out to us.
        </p>
        <p className="text-lg mb-4">
          You can contact us through the following channels:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: <a href="mailto:uQsXc@example.com" className="text-orange-400 hover:underline">uQsXc@example.com</a></li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
        <p className="text-lg mb-4">
            Our customer support team is available Monday to Friday, from 9 AM to 5 PM. We strive to respond to all inquiries within 24 hours.
        </p>
        <p className="text-lg mb-4">
            Thank you for choosing HandyCraft. We look forward to assisting you!
        </p>
      </div> 
    
    </>
  )
}

export default Contact