import React from 'react';
import {Container} from '@material-ui/core'
import LeftSideBar from '../components/LeftSideBar';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

const MainPage = () => {
    return (
        <div>
            <div className="mainpage">
            <Navbar/>

            <Container>
                <div className="main">
                    <LeftSideBar/>
                    <div className="dlina">
                    <Content/>
                    </div>
                </div>
            </Container>
            </div>
            
        </div>
    );
};

export default MainPage;