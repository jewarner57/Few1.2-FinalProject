import './PortfolioDetail.css'
import portfolioData from "../../portfolio-data.json"
import Navbar from '../../components/Navbar/Navbar'

function PortfolioDetail(props) {
    const { id } = props.match.params
    const { longname, projectType, link, image, imageAlt, technologies, description, githubrepo, datePublished
    } = portfolioData[id]

    return (
        <div className="PortfolioDetail">
            <Navbar type="solid" />
            <div className="PortfolioItemDetails">
                <div className="portfolioDetailWrapper">
                    <div className="detailImage">
                        <img src={require('../../assets/portfolio/' + image).default} alt={imageAlt} />
                    </div>
                    <div className="detailInfo">
                        <h1>{longname}</h1>
                        <hr />
                        <p>Project Type: {projectType}</p>
                        <p>Technologies Used: {technologies}</p>
                        <p>Data Published: {datePublished}</p>
                        <hr />
                        <p>{description}</p>
                        <div className="detailButtons">
                            <a href={githubrepo}><div className="button hoverfill">View Project On Github</div></a>
                            <a href={link}><div className="button hoverfill">View Live Project Page</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail