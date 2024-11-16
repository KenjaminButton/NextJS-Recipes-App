'use client'

import { useEffect, useState } from 'react'; // Importing React hooks for state and lifecycle management
import Image from 'next/image'; // Importing the Image component from Next.js for optimized image handling

// Importing image assets for the slideshow
import burgerImg from '@/assets/burger.jpg'; 
import curryImg from '@/assets/curry.jpg'; 
import dumplingsImg from '@/assets/dumplings.jpg'; 
import macncheeseImg from '@/assets/macncheese.jpg'; 
import pizzaImg from '@/assets/pizza.jpg'; 
import schnitzelImg from '@/assets/schnitzel.jpg'; 
import tomatoSaladImg from '@/assets/tomato-salad.jpg'; 
import classes from './image-slideshow.module.css'; // Importing CSS module for styling

// Creating an array of images with their corresponding alt text
const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() { // Defining the ImageSlideshow functional component
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the index of the current image

  useEffect(() => { // Effect to handle the image slideshow functionality
    const interval = setInterval(() => { // Setting an interval for automatic image change
      setCurrentImageIndex((prevIndex) => // Update to the next image index
        prevIndex < images.length - 1 ? prevIndex + 1 : 0 // Loop back to the start when reaching the end
      );
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    // Main container for the slideshow
    <div className={classes.slideshow}> 
      {images.map((image, index) => ( // Mapping over the images array to render each image
        <Image
          key={index} // Unique key for each image element, using the index
          src={image.image} // Source of the image
          className={index === currentImageIndex ? classes.active : ''} // Apply active class to the current image
          alt={image.alt} // Alternate text for the image
        />
      ))}
    </div>
  );
}