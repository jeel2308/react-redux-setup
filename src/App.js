import logo from './logo.svg';
import './App.css';
import React from "react";
import {Provider} from "react-redux";
import CakeComponent from "./components/CakeComponent";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamComponent from "./components/IceCreamComponent";
import NewCakeComponent from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HooksCakeContainer />
                <CakeComponent/>
                <IceCreamComponent />
                <NewCakeComponent />
                <ItemContainer cake={true}/>
                <ItemContainer />
                <UserContainer />
            </div>
        </Provider>
    );
}

export default App;
