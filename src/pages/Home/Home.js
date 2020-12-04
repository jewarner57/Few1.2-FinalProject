import './Home.css';
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import PortfolioList from '../../components/PortfolioList/PortfolioList'
import SkillList from '../../components/SkillList/SkillList'

function App() {
    return (
        <div className="Home">
            <Hero />
            <About />
            <PortfolioList />
            <SkillList />
        </div>
    );
}

export default App;
