import './PortfolioDetail.css'
import portfolioData from "../../portfolio-data.json"

function PortfolioDetail(props) {
    const { id } = props.match.params
    const { name, projectType, link, image, imageAlt, technologies } = portfolioData[id]

    return (
        <div className="PortfolioDetail">
            <h1>{name}</h1>
            <h1>{projectType}</h1>
        </div>
    )
}

export default PortfolioDetail