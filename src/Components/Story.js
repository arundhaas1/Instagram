import React from 'react'
import './Story.css'
import Storydata from './Storydata'
import { useDataLayerValue } from "./datalayer";


function Story() {

  const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className="story">
            {user ? (<Storydata image={user?.photoURL}/>) : null}
            <Storydata image={"https://www.whatsappimages.in/wp-content/uploads/2021/03/Alone-Boys-Girls-Whatsapp-DP-Images-wallpaper-download.jpg"}/>
            <Storydata image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhO9a_BfEPT5RNEunoAkxFFKZbnMWopS52g&usqp=CAU"} />
        </div>
    )
}

export default Story
