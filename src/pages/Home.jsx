// import React from 'react'

import Button from "../components/buttons/Button"
import Counter from "../components/counter/Counter"

function Home() {
  return (
    <>

      <div className="main">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Welcome to HandyCraft!</h1>
          <p className="text-lg mb-6">
            Discover a world of creativity and craftsmanship with us. Explore our unique collection of handmade products, crafted with love and care by talented artisans from around the globe.
          </p>
          <Button title="Shop Now" />
        </div>
      </div>

      <div className=" mt-5 mb-5"><Counter /></div>

      <div className="features py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">

          <h2 className="
      text-3xl 
      font-bold 
      mb-8 
      text-center
      text-gray-900
      dark:text-white
    ">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="
        feature
        bg-white
        dark:bg-gray-800
        p-6
        rounded-lg
        shadow-md
        transition-colors
        duration-300
      ">
              <h3 className="
          text-xl
          font-semibold
          mb-4
          text-gray-900
          dark:text-white
        ">
                Unique Products
              </h3>

              <p className="text-gray-700 dark:text-gray-300">
                Each item in our collection is one-of-a-kind, crafted by skilled
                artisans who pour their heart and soul into every creation.
              </p>
            </div>

            <div className="
        feature
        bg-white
        dark:bg-gray-800
        p-6
        rounded-lg
        shadow-md
        transition-colors
        duration-300
      ">
              <h3 className="
          text-xl
          font-semibold
          mb-4
          text-gray-900
          dark:text-white
        ">
                Sustainable Craftsmanship
              </h3>

              <p className="text-gray-700 dark:text-gray-300">
                We are committed to sustainability and ethical practices, ensuring
                that our products are not only beautiful but also environmentally
                friendly.
              </p>
            </div>

            <div className="
        feature
        bg-white
        dark:bg-gray-800
        p-6
        rounded-lg
        shadow-md
        transition-colors
        duration-300
      ">
              <h3 className="
          text-xl
          font-semibold
          mb-4
          text-gray-900
          dark:text-white
        ">
                Support Artisans
              </h3>

              <p className="text-gray-700 dark:text-gray-300">
                By shopping with us, you are directly supporting talented artisans
                and their communities, helping to preserve traditional crafts and
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Home
