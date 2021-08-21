import React,{useEffect, useState} from 'react'
import './Activity.css'
import db from '../Firebase';
import Footer from '../Footer';

function Activity() {

    const[datas,setDatas]=useState([])

    useEffect(() => {
        db.collection("InstagramPosts")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setDatas(
              snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
            );
          });
      }, []);
    
    return (
        <div className="activity">
            <div className="activity__header">
                <h4>Activity</h4>
                <p>This month</p>
            </div>

            <div className="activity__datas">
                {datas.map((data)=>{
                    return(
                        <div className="activity__data">
                            <img alt="" src={data.message.image} />
                            <p><span className="spann">{data.message.username}</span>  shared a post</p>
                        </div>
                    )
                })}
            </div>
                <div className="fss">
                <Footer />
                </div>

        </div>
    )
}

export default Activity
