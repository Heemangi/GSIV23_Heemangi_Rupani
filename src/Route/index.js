import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import HeaderComponent from '../Components/Header';
import HomeContainer from '../Container/Home';
import DetailsContainer from '../Container/Details';
import SearchContainer from '../Container/Search';
const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path="/search" element={<SearchContainer />} />
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
                {/* <FooterComponent /> */}
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;