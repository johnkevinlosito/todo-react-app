import React from 'react'

const Header = ({ onAdd, showForm, onCancel }) => {
  return (
    <div className="flex justify-between items-center p-2 mb-4">
      <h1 className="font-bold text-2xl ">TODO App</h1>
      {showForm ? <button className="bg-red-700 hover:bg-red-600 text-white p-2 rounded-lg flex flex-row items-center justify-between gap-1"
        onClick={onCancel}
      >
        Cancel
        <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button> : <button className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-lg flex flex-row items-center justify-between gap-1"
        onClick={onAdd}
      >
        Add
        <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>}


    </div>
  )
}

export default Header
