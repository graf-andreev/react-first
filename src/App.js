import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserContext from "./components/UserContext";

class App extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            showForGuest: true
        }
      }

    render() {
        return(
            <>
            <UserContext.Provider value={this.state.showForGuest}>
            <Header/>
            <MainContent/>
            <Footer/>
            </UserContext.Provider>
            </>
        )
    }
}

export default App