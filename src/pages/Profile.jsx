import React, { useEffect, useState } from 'react';
import { auth } from '../server/server';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newusername, setNewUsername] = useState('');
  const [newemail, setNewEmail] = useState('');
  const [followers, setFollowers] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [newphotoURL, setNewPhotoURL] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(`GS_${user.displayName}`);
        setEmail(user.email);
        if (!user.photoURL) {
          user.updateProfile({
            photoURL: 'https://api.dicebear.com/6.x/notionists-neutral/svg',
          });
        }
        setPhotoURL(user.photoURL);
      } else {
        setPhotoURL('');
      }
    });
  }, [photoURL, username, email]);

  const update = () => {
    auth.onAuthStateChanged(user => {
      user.updateProfile({
        email: newemail,
        photoURL: newphotoURL
      }).then(() => {
        setFollowers('Updated Successfully!')
        window.location.reload()
      }).catch(() => {
        setFollowers('Error Occured!')
      })
    })
  }

  return (
    <section>
      <br />
      <div className="container f13">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center mb-4">
            <img
              src={photoURL}
              alt="avatar"
              className="rounded-circle img-thumbnail"
              style={{ width: '150px', height: '150px', border: '3px solid white' }}
            />

            <br />
            <input
              defaultValue={username}
              onChange={(e) => setNewUsername(e.target.value)}
              className="form-control mt-3"
              style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px' }}
            />
            <br />
            <input
              defaultValue={photoURL}
              onChange={(e) => setNewPhotoURL(e.target.value)}
              className="form-control mt-3"
              placeholder='Paste Link Of Your Profile Photo'
              style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px' }}
            />
            <br />
            <input
              defaultValue={email}
              onChange={(e) => setNewEmail(e.target.value)}
              className="form-control"
              style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px' }}
            />
            <br />
            <div className="d-flex justify-content-center mb-2">
              <button onClick={update} className="btn btn-fill-light f13" style={{ padding: '10px', borderRadius: '10px', background: '#fcefc2', color: '#000', width: '100%' }} ><b>Update</b></button>
              </div>
              <br />
              <button onClick={() =>{ auth.signOut()}} className="btn btn-fill-light f13" style={{ padding: '10px', borderRadius: '10px', background: '#FFA07A', color: '#000', width: '100%' }} ><b>SignOut</b></button>
              <br />
              <br />
              <button onClick={() =>{ auth.currentUser.delete().then(() => {
                window.location.href = "/"
              })}} className="btn btn-fill-light f13" style={{ padding: '10px', borderRadius: '10px', background: '#E9967A', color: '#000', width: '100%' }} ><b>Delete Account</b></button>
              <br />
              {followers ? <div class="alert alert-success" role="alert">
                {followers}
              </div>:
              null         
              }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;