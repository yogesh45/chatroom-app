import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import {createStore} from 'redux';
import storage from 'redux-persist/lib/storage'
import chat from './reducers/index';
import App from './App';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, chat)


const store = createStore(persistedReducer);

let persistor = persistStore(store)

ReactDOM.render( 
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
    
document.getElementById('root'));