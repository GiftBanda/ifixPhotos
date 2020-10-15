import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
    return (
        <div className=" flex flex-col justify-center  " >
        <div className="flex justify-center mb-2" >
        <img className="w-24 h-24 rounded" src="../images/gift.jpg" alt="Gift Banda" />
        </div>
    
    <Fade bottom>
    <div className="text-center px-64 " >
    <p className="flex justify-center my-12 h-50 font-semibold leading-8 " >
    Hi
my names are Gift Banda from Zambia, a down-to-earth type of person, social and driver by integrity, intuition, and intelligence, loves to read books especially business-related. Am currently studying web and mobile app development with the London App Brewery. With the ambition and passion to be the best at my craft, and work for one of the biggest technology companies in the world.
    </p>
    </div>
    </Fade>
    </div>
   
    )
}

export default About;