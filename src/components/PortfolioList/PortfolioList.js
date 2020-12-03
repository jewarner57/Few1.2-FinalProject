import { Component } from 'react'
import './PortfolioList.css'


class PortfolioList extends Component {
    render() {

        return (
            <div className="PortfolioList">
                <div class="portfolioSection" id="portfolioSection">

                    <h1 class="sectionTitle">My Work</h1>

                    <div class="githubLinkText">
                        Check out my <a href="https://github.com/jewarner57" class="githubLink" target="_blank">Github</a>
                    </div>

                    <div class="portfolioItemContainer">

                        {/* Map through the portfolio items here */}

                    </div>

                </div>
            </div>
        );
    }
}

export default PortfolioList