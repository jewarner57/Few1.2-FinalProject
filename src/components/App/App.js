import './App.css';
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import PortfolioList from '../PortfolioList/PortfolioList'
import SkillList from '../SkillList/SkillList'
import Footer from '../Footer/Footer'

function App() {
    return (
        <div className="App">

            <Navbar />
            <Hero />
            <About />
            <PortfolioList />
            <SkillList />
            <Footer />


        </div>
    );
}

export default App;
