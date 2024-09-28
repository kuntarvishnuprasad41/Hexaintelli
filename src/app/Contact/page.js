import React from 'react'
import { ContactHero } from 'src/components/Contact-comp/Hero/page'
import { Poster } from 'src/components/Contact-comp/Poster/page'
import { Socials } from 'src/components/Contact-comp/Socials/page'
import { Footer } from 'src/components/Footer/page'
import styles from './page.module.css'
const Contact = () => {
  return (
    <div className={styles.contact} >
        <ContactHero/>
        <Socials/>
        <Poster/>
        <Footer/>
    </div>
  )
}
export default Contact;
