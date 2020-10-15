import React from 'react';

function Navbar({ setPage }) {
    return <div >
        <button className="  bg-transparent hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 border border-opacity-0 rounded-l" onClick={() => setPage('images')}>Images</button>
        <button className="mx-4  bg-tansparent hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 border border-opacity-0 rounded-l" onClick={() => setPage('about')}>About</button>
        <button className=" bg-transparent hover:bg-teal-400 text-gray-800 font-bold py-2 px-4 border border-opacity-100 rounded-l" onClick={() => setPage('contact')}>Contact</button>
        </div>
}

export default Navbar;