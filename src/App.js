
import React from "react";
import { Provider } from "react-redux";
// import "./App.css";
import Home from "./components/Home";
import { configureStore } from "./redux/store";


function App(props) {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
