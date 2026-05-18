// import React from 'react'

function Home() {
  return (
    <>

      <div className="main"> 
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Welcome to HandyCraft!</h1>
          <p className="text-lg mb-6">
            Discover a world of creativity and craftsmanship with us. Explore our unique collection of handmade products, crafted with love and care by talented artisans from around the globe.
          </p>
          <button className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      <div className="features py-12 bg-gray-100">
        <div className="container">

          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Unique Products</h3>
              <p>Each item in our collection is one-of-a-kind, crafted by skilled artisans who pour their heart and soul into every creation.</p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sustainable Craftsmanship</h3>
              <p>We are committed to sustainability and ethical practices, ensuring that our products are not only beautiful but also environmentally friendly.</p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Support Artisans</h3>
              <p>By shopping with us, you are directly supporting talented artisans and their communities, helping to preserve traditional crafts and skills.</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home
