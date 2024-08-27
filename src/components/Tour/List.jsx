import React from 'react'
import { Link } from 'react-router-dom'
function List() {
  return (
    <div>
      <Link to='/neem'>
        <button className="mt-6 px-6 py-3 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          AR1
        </button>
      </Link>

      <Link to='/aloevera'>
        <button className="mt-6 px-6 py-3 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          AR2
        </button>
      </Link>


      <Link to='/hibiscus'>
        <button className="mt-6 px-6 py-3 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          AR3
        </button>
      </Link>

      <Link to='/tulsi'>
        <button className="mt-6 px-6 py-3 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          AR4
        </button>
      </Link>

      <Link to='/lavender'>
        <button className="mt-6 px-6 py-3 text-xl sm:text-2xl bg-[#162C22] text-white rounded-full hover:bg-opacity-75 transition duration-300">
          AR5
        </button>
      </Link>
    </div>
  )
}

export default List