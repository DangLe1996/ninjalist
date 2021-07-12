import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div >
 
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio, recusandae quos labore aliquam eum nisi. Et ullam quidem doloribus! Ab cumque maiores nihil dolor consequatur ad eaque, animi perspiciatis.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio, recusandae quos labore aliquam eum nisi. Et ullam quidem doloribus! Ab cumque maiores nihil dolor consequatur ad eaque, animi perspiciatis.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio, recusandae quos labore aliquam eum nisi. Et ullam quidem doloribus! Ab cumque maiores nihil dolor consequatur ad eaque, animi perspiciatis.</p>
      <Link href='/ninjas'>
      <a className={styles.btn}> See Ninja Listing</a>
      </Link>
     
    </div>
    
  )
}
