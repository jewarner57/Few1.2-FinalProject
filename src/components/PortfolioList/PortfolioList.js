import { Component } from 'react'
import './PortfolioList.css'
import PortfolioItem from "../PortfolioItem/PortfolioItem"
import portfolioData from "../../portfolio-data.json"

class PortfolioList extends Component {
    render() {

        return (
            <div className="PortfolioList">
                <div className="portfolioSection" id="portfolioSection">

                    <h1 className="sectionTitle">My Work</h1>

                    <div className="portfolioItemContainer">

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