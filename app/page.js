import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Fujifilm Recipes for that classic film look</h1>
            <p>Discover & share fuji camera settings from the photography community .</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Recipes</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Achieving the classic film look with your Fuji camera is all about the right settings and techniques. Our guide provides you with various “recipes” that help you replicate the aesthetic of traditional film photography. By adjusting parameters like color profiles, film simulation modes, and in-camera settings, you can create stunning images reminiscent of vintage film.
          </p>
          <p>
            Fuji Film Recipes is a place to discover new camera settings, and to connect
            with other Fuji Camera lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Use Fuji Camera Film Recipes?</h2>
          <p>
            Fuji camera film recipes combine the technical capabilities of modern digital cameras with the timeless qualities of film. With detailed settings for parameters such as ISO, shutter speed, aperture, and unique film simulations like Velvia or Astia, you can achieve rich colors, beautiful grain, and dynamic range that evoke nostalgia.
          </p>
          <p>
            Whether you are shooting portraits, landscapes, or street scenes, these recipes will help you express your artistic vision while connecting with a community of fellow photography enthusiasts passionate about the classic film aesthetic. Explore the possibilities with your Fuji camera and redefine your photography with the charm of film.
          </p>
        </section>
      </main>
    </>
  );
}