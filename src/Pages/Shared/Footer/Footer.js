import React from 'react';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
     <footer>
         <p className='text-center mt-5 '><small>copyright @ {year} by <b> <a style={{textDecoration: "none" , color: "gray"}} href="https://saklain71.github.io/saklain-blog-repo/">Saklain Mustak</a></b> </small></p>
     </footer>
    );
};

export default Footer;