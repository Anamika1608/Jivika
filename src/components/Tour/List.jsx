import React from 'react'
import { Link } from 'react-router-dom'
function List() {
  return (
    <div> 
      <Link to='/aloevera'>
        <button className="mt-6 px-6 py-3  m-6 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          Aloevera
        </button>
      </Link>

      <Link to='/tulsi'>
      <br />
        <button className="mt-6 px-6 py-3 m-6  text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          Tulsi
        </button>
      </Link>


      <Link to='/hibiscus'>
        <button className="mt-6 px-6 py-3 m-6 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          Hibiscus
        </button>
      </Link>

      <Link to='/curry-patta'>
        <button className="mt-6 px-6 py-3  m-6  text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          Curry Patta
        </button>
      </Link>

      {/* <Link to='/random'>
        <button className="mt-6 px-6 py-3 m-6  text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          random
        </button>
      </Link> */}


    </div>
  )
}

export default List