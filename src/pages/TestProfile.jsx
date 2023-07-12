import React, { useEffect, useState } from 'react';
import { auth } from '../server/server';

const ProfilePage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [followers, setFollowers] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName || '');
        setEmail(user.email || '');
        if (!user.photoURL) {
          user.updateProfile({
            photoURL: 'https://api.dicebear.com/6.x/notionists-neutral/svg',
          });
        }
        setPhotoURL(user.photoURL || '');
        setUserExists(true);
      } else {
        setPhotoURL('');
        setUserExists(false);
      }
    });
  }, []);

  const handleUsernameChange = (e) => {
    const newUsernamee = e.target.value.replace(/\s/g, ''); // Remove spaces from the new username
    // Perform validation for the newUsernamee (example: must be at least 8 characters and only alphanumericals)
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (newUsernamee.length >= 8 && alphanumericRegex.test(newUsernamee)) {
      setNewUsername(newUsername);
      // Check if the new username already exists in Firebase Auth
      auth.fetchSignInMethodsForEmail(`${newUsername}@example.com`).then((methods) => {
        if (methods.length === 0) {
          // Username is available, you can set it to Firebase Auth's displayName if desired
          auth.currentUser.updateProfile({
            displayName: newUsername,
          });
        } else {
          // Username already exists in Firebase Auth
          console.log('Username already taken.');
        }
      });
    } else {
      setNewUsername('');
    }
  };

  return (
    <section>
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
              onChange={handleUsernameChange}
              className="form-control mt-3"
              style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px' }}
              disabled={!userExists} // Disable input if the user does not exist
            />
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              style={{ background: '#eee', color: 'black', border: 'none', borderRadius: '10px' }}
              disabled={!userExists} // Disable input if the user does not exist
            />
            <br />
            <div className="d-flex justify-content-center mb-2">
              <button className="btn btn-primary f13" style={{ padding: '10px', borderRadius: '10px', background: '#fcefc2', color: '#000', width: '100%' }} ><b>Update</b></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
