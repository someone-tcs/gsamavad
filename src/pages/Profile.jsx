import React, { useEffect, useState } from 'react';
import { auth } from '../server/server';


export default function ProfilePage() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [followers, setFollowers] = useState()
  const [photoURL, setPhotoURL] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setUsername(user.displayName)
        setEmail(user.email)
        setPhotoURL(user.photoURL)

      }else{
        setPhotoURL()
      }
    })
  
  }, [username, email,  photoURL])
  return (
    <section>

        <div>
          <div lg="4">
            <div className="mb-4">
              <div className="text-center">
                <img
                  src={photoURL}
                  alt="avatar"
                  className="boxW"
                  style={{ width: '50px', height: '50px', border: '3px solid white', borderRadius: '100%', margin: '30px'}}
                  fluid />
                  <br />
                <input defaultValue={username} className="f13" style={{background: '#eee', color: 'black', border: 'none', borderRadius: '10px', padding: '10px', width:'80%'}} />
                <br /><br />
                <input defaultValue={email} className="f13" style={{background: '#eee', color: 'black', border: 'none', borderRadius: '10px', padding: '10px', width:'80%'}} /> <br />
                <div className="d-flex justify-content-center mb-2">
                  <button>Follow</button>
                </div>
              </div>
            </div>

            </div>          
        </div>
    </section>
  );
}