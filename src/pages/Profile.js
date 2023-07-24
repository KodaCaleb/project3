import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../utils/AuthContext';
import { firestore } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import AccountModal from './Account';

export default function UserProfileHeading() {
  const [bio, setBio] = useState("");
  const [userContentData, setUserContentData] = useState([]);
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isBlurBackground, setBlurBackground] = useState(false);

  const { user } = useContext(AuthContext); // Destructure user from the context

  useEffect(() => {
    // Wait for the user context to be available
    if (user) {
      const getUserData = async () => {
        try {
          const userDocRef = doc(firestore, "Users", user.uid)
          const userDocSnapshot = await getDoc(userDocRef)
          if (userDocSnapshot.exists()){
            const userData = userDocSnapshot.data()
            setBio(userData.bio || "")

            // Fetch data from the subcollection "userContent"
            const userContentRef = collection(userDocRef, "userContent");
            const userContentSnapshot = await getDocs(userContentRef);

            // process the user content data
            const userContentDataArray = userContentSnapshot.docs.map((doc) => doc.data());
            setUserContentData(userContentDataArray);
            console.log("LOOK HERE",userContentData)
          }
        } catch (error){
          console.log("Error fetching data from firestore:", error)
        }
      };

      getUserData()

      setUsername(user.displayName || "")
      setPhoto(user.photoURL || process.env.PUBLIC_URL + '/pancakeholder.img.png')
      setLoadingUser(false);
    }
  }, [user]);

  const openModal = () => {
    setModalOpen(true);
    setBlurBackground(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setBlurBackground(false);
  };

  return (
    <>
      <div className={`main-container${isBlurBackground ? ' blur-background' : ''}`}>
        <div className="flex h-100 flex-col items-center">
          <div className="flex justify-center md:flex-row mx-4 md:w-1/2 m-20">
            <div className="self-start rounded-full relative flex items-center justify-center px-4 max-w-[150px] max-h-[150px] border border-white bg-yellow-400">
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-start px-4 md:pl-4 w-full">
              {/* stack of username and bio */}
              <div className="username-floating relative text-white">
                <span className="text-5xl text-amber-300">{username}</span>
              </div>
              <div className="bio-floating relative p-1 text-white">
                <span>{bio}</span>
              </div>
              <button
                type="button"
                className="focus:outline-none text-black bg-amber-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 my-4 hover:rounded-3xl"
                data-modal-target="authentication-modal"
                onClick={openModal}
              >
                Account Info
              </button>
              <AccountModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>

          {/* Add this section for displaying user content */}
          {loadingUser ? (
            <div>Loading...</div> // Add a loading state
          ) : (
            userContentData.map((content, index) => (
              <div key={index}>
                {/* Replace 'title' and 'description' with the actual property names in your userContentData objects */}
                <h2>{content.title}</h2> 
                <p>{content.description}</p> 
                {/* ... other content properties ... */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
