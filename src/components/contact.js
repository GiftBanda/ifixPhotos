import React from 'react';
import Fade from 'react-reveal/Fade';

function Contact() {
    return <div className="flex justify-center gap-12 align-center w-full mt-8 mx-auto" >
    <Fade left>
    <div className="flex flex-col gap-4" >
    <h2 className="text-blue-500 font-bold text-3xl uppercase" >Hire Me</h2>
    <strong> <span className="text-blue-500" >Email:</span>  Bandagift42gmail.com</strong>
    <strong> <span className="text-blue-500" >Call/Text:</span> +260 977 560 054</strong>
    <strong> <span className="text-blue-500" >WhatsApp:</span> +260 977 560 054</strong>
    <strong> <span className="text-blue-500" >Twitter:</span> @GiftBanda42</strong>
    </div>
    </Fade>

    <div className="flex " >
    <img className="w-48 h-48 ml-24 " src="../images/lets_talk.png" alt="ifixmedia" />
    </div>

    </div>
}

export default Contact;