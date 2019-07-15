import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { render } from "react-dom";

const BasicRows = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("app"));

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
