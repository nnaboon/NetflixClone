import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';



const config = {
    apiKey: "AIzaSyA_ZMD-irrD4bDGIE4cLb27OHs6B2CxVTw",
    authDomain: "netflix-scrimba-76066.firebaseapp.com",
    projectId: "netflix-scrimba-76066",
    storageBucket: "netflix-scrimba-76066.appspot.com",
    messagingSenderId: "663171153628",
    appId: "1:663171153628:web:885c299d3e62c3a364fe19"
  };


ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);
