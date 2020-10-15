import React from 'react';

function Card({ image }) {

    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm max-h-sm rounded overflow-hidden mx-6 my-4 shadow-lg">
        <img className="w-full" src={image.webformatURL}  alt="nike shoe " />
        
        <div className="py-6 px-6 rounded" >
        <p>Photo by</p>
        <h1 className="text-blue-700 font-bold" >{image.user}</h1>

        <ul>
        <li>
        <strong>Views: </strong> {image.views}
        </li>

        <li>
        <strong>Likes: </strong> {image.likes}
        </li>

        <li>
        <strong>Downloads: </strong> {image.downloads}
        </li>
        </ul>
        </div>

        <div className="px-6 py-4" >
        {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
        #{tag}
        </span>
        ))}
        </div>

        </div>
    )
}

export default Card;