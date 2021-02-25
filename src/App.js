import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

class App extends React.Component{
    render() {
        return(
            <>
            <Header/>
            <MainContent/>
            <Footer/>
            </>
        )
    }
}

export default App

//сделать компонент контент, там кнопки и офер лист. В зависимости от события менять контент. для про отдельный компонент. Создать таблицу там же. Отрисовать в новом компоненте функцией get pro.