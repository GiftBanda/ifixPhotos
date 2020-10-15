import React, {useState, useEffect} from 'react';
import Card from './card';
import ImageSearch from '../components/imageSearch';
import Tilt from 'react-parallax-tilt';

function Images() {
   

  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImage(data.hits);
      setIsLoading(false);
    })
    .catch(error => console.log(error))
  },[term]);

    return ( 
        <div className="container mx-auto" >
        <ImageSearch searchText={text => setTerm(text)}  />

        {!isLoading && image.length === 0 && <h1 className="text-center text-5xl text-blue-700 mt-32" >No Images Found</h1>  }


        { isLoading ? <h1 className="text-center text-6xl text-blue-700 mt-32" >Loading</h1> : <div className="grid grid-cols-3 gap-4" >
        {image.map(image => (
          <Tilt>
            <Card key={image.id} image={image} /> </Tilt>
        )) }
        </div>}
        <h2 className="text-center my-8 font-semibold " >Developed with love by Gift Banda</h2>
        
        
        </div> 
   
    );
}

export default Images;