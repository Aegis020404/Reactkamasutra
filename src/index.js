import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById(`root`));
}



rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);


