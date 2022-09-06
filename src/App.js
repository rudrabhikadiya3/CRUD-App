
import React from "react";
import { Provider } from "react-redux";
import Create from "./components/Create";
// import "./App.css";
import Home from "./components/Home";
import { configureStore } from "./redux/store";


function App(props) {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Home/>
      <Create/>
    </Provider>
  );
}

export default App;
