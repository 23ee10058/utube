import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'

import { applyMiddleware,compose } from "redux";
import {createStore} from 'redux'
import Reducers from "./reducers.jsx"; 
import {thunk} from 'redux-thunk'

const store=createStore(Reducers,compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      ,
    </BrowserRouter>
  </Provider>
);
