import { Component } from 'react'
import './PortfolioItem.css'

class PortfolioItem extends Component {
    constructor(props) {
        super(props)

        this.state = { "pItemClass": "hoverDiv hoverDivRetract" }
    }

    render() {

        return (
            <div className="PortfolioItem"
                onMouseEnter={() => this.setState({ "pItemClass": "hoverDiv hoverDivExpand" })}
                onMouseLeave={() => this.setState({ "pItemClass": "hoverDiv hoverDivRetract" })}
            >
                <img src={require('../../assets/portfolio/' + this.props.image).default} alt={this.props.alt} className="portfolioImg" />
                <a href={'/#/portfolio-detail/' + this.props.id} className="inTextLink" target="_blank" rel="noreferrer">
                    <div className={this.state.pItemClass}>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.projectType}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default PortfolioItem