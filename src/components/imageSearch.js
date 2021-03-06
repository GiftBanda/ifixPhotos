import React, {useState} from 'react';

function ImageSearch({ searchText }) {
    const [text, setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }
        return (
        <div className="mb-6 flex justify-center" >

        <form onSubmit={onSubmit} class="w-75 max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2">
              <input onChange={e => setText(e.target.value) } class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Popular Images" aria-label="Full name" />
            <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Search
            </button>
            </div>

       </form>
        
        </div>
    );
}

export default ImageSearch;
