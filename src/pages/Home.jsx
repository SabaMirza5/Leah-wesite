import React from 'react'
import Our_client_sec from '../components/Our_client_sec'
import Client_review_sec from '../components/Client_review_sec'
import Contact_us from '../components/Contact_us'
import Different_sec from '../components/Different_sec'
import Dream_team from '../components/Dream_team'
import Header from '../components/Header'

function Home() {
  return (
    <>
    <Header/> 
    <Different_sec/>
    <Dream_team/>
    <Our_client_sec/>
    <Contact_us/>
    <Client_review_sec/>
    </>
  )
}

export default Home
