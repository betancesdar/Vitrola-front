import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      {/*Main*/}
      <main>
        {/*Sidebar*/}
        <Sidebar />


        {/*Center*/}

      </main>
      <div>
        {/*Player*/}

      </div>
      
    </div>
  )
}
