import { 
    Artikel, 
    Background, 
    Bottom, 
    ClientDetails, 
    Footer, 
    Intro, 
    LastFooter, 
    SliderPage
 } from '../../components';
import './Home.scss'

const Home = () => {
    return(
        <>
        <Background />
        <Intro/>
        <SliderPage />
        <ClientDetails/>
        <Artikel />
        <Bottom />
        <Footer/>
        <LastFooter/>
        </>
        
    )
};

export default Home;