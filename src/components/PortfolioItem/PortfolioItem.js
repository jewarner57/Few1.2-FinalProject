import { Component } from 'react'
import './PortfolioItem.css'

class PortfolioItem extends Component {

    render() {

        return (
            <div class="PortfolioItem">
                <img src={require('../../assets/portfolio/' + this.props.image).default} alt={this.props.alt} class="portfolioImg" />
                <a href={this.props.link} class="inTextLink" target="_blank" rel="noreferrer">
                    <div class="hoverDiv hoverDivExpand">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.projectType}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default PortfolioItem