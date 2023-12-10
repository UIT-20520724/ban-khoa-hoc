import React from "react";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import Typical_Teacher from "../Typical_Teacher/Typical_Teacher";
import ProductHomePage from "./ProductHomePage/ProductHomePage";
import CoursesDataService from "../../services/CoursesDataService"
import Intro from "../Intro/Intro";
import banner from "./combo-pbt-banner-no-logo_1024x1024.webp"
const HomePage=()=>{
    
    const img=
        [banner]
    
    useEffect(()=>{window.scrollTo(0, 0)},[])
    return <div>
        <Banner imgs={img}/>
        <ProductHomePage/>
        
    </div>;
}
export default HomePage;