import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import PortfolioDetail from '../../pages/PortfolioDetail/PortfolioDetail'
import Footer from '../Footer/Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/portfolio-detail/:id" component={PortfolioDetail} />
                </div>
                <Footer />
            </div>

        </Router>
    );
}

export default App;
