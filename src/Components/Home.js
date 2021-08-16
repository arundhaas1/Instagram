import React from 'react'
import './Home.css'
import HomeHeader from './HomeHeader'
import Story from './Story'
import Feeds from './Feeds'
import Footer from './Footer'

function Home() {
    return (
        <div className="home">
            <HomeHeader />
            <Story />
            <Feeds />
            <Footer />
        </div>
    )
}

export default Home
