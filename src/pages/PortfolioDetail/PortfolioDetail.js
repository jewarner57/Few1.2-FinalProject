import './PortfolioDetail.css'
import portfolioData from "../../portfolio-data.json"
import Navbar from '../../components/Navbar/Navbar'

function PortfolioDetail(props) {
    const { id } = props.match.params
    const { name, projectType, link, image, imageAlt, technologies, description, githubrepo, datePublished
    } = portfolioData[id]

    return (
        <div className="PortfolioDetail">
            <Navbar type="solid" />
            <div className="PortfolioItemDetails">
                <h1>{name}</h1>
                <h1>{projectType}</h1>
                <h1>{technologies}</h1>
                <p>{description}</p>
                <p>Data Published: {datePublished}</p>
                <a href={githubrepo}>github</a>
                <a href={link}>visit</a>
                <div>
                    <img src={require('../../assets/portfolio/' + image).default} alt={imageAlt} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail