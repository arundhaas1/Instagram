import React from 'react'
import './Story.css'
import Storydata from './Storydata'
import { useDataLayerValue } from "./datalayer";


function Story() {

  const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="story">
            {user ? (<Storydata image={user?.photoURL}/>) : null}
            <Storydata image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"}/>
            <Storydata image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrwnDbtNcrI-dGYTymzFiIqCWWlLKxHpEew&usqp=CAU"} />
        </div>
    )
}

export default Story
