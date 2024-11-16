import Link from "next/link"

import logoImg from '@/assets/logo2.png'
import classes from './main-header.module.css'
import Image from "next/image"
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link"


export default function MainHeader() {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Digital Camera Fuji XT-30 Mark II" priority />
          Fuji XT-30 Mark II
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Fujifilm Filtered Recipes Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}