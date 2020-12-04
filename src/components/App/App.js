import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home/Home'
import PortfolioDetail from '../../pages/PortfolioDetail/PortfolioDetail'
import Footer from '../Footer/Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <Route exact path="/" component={Home} />
                <Route path="/portfolio-detail/:id" component={PortfolioDetail} />

                <Footer />
            </div>
        </Router>
    );
}

export default App;
