import React, { useState } from 'react'
import { db } from '../server/server';

const Create = () => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setEmail(user.email);
          } else {
            setEmail(null);
          }
        });
    
        // Clean up the listener when the component unmounts
        return () => unsubscribe();
      }, [email]);

    const creategSamavad = () => {
        db.collection("samvads").add({
            id: `GS_${Math.random(0, 1000000000)}`,
            title : title,
            desc: desc
        }).then(() => {
            window.location.href = `/samavad/${title}/${email}`
        })
    }

    return (
        <center>
            <div className='f13' style={{
                width: '80%'
            }}>
            <br /><br />
            <a href = "#" style={{background: '#fff', color: 'black', border: '3px solid black', padding: '10px', borderRadius: '10px', width: '100%', textDecoration: 'none'}} className='f13'><span  style={{fontSize: '20px'}}><b>
            Create gSamavad
            </b></span></a>
            <br />
            <br />
                <input
                    placeholder='Title Of Your gSamavad'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control mt-3"
                    style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px' }}
                />
                <br />
                <textarea
                    placeholder='Description Of Your gSamavad'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="form-control mt-3"
                    style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px', height: '40vh'}}
                />
                <br /><br />
                <button className="f13" style={{
                    background: '#ffff00', color: 'black', border: '3px solid black', padding: '10px', borderRadius: '10px', width: '100%', textDecoration: 'none'
                }}><b>Create</b></button>
            </div>
        </center>
    )
}

export default Create