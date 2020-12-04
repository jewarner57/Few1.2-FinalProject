import { Component } from 'react'
import './PortfolioList.css'
import PortfolioItem from "../PortfolioItem/PortfolioItem"
import portfolioData from "../../portfolio-data.json"

class PortfolioList extends Component {
    render() {

        return (
            <div className="PortfolioList">
                <div class="portfolioSection" id="portfolioSection">

                    <h1 class="sectionTitle">My Work</h1>

                    <div class="githubLinkText">
                        Check out my <a href="https://github.com/jewarner57" class="githubLink" target="_blank" rel="noreferrer">Github</a>
                    </div>

                    <div class="portfolioItemContainer">

                        {/* Map through each portfolio item */}
                        {portfolioData.map((item, i) => {
                            const { name, projectType, link, image, imageAlt, technologies } = item
                            return (
                                <PortfolioItem
                                    id={i}
                                    key={name}
                                    name={name}
                                    projectType={projectType}
                                    link={link}
                                    image={image}
                                    imageAlt={imageAlt}
                                    technologies={technologies}
                                />
                            )
                        })}

                    </div>

                </div>
            </div>
        );
    }
}

export default PortfolioList