import './PortfolioDetail.css'
import portfolioData from "../../portfolio-data.json"
import Navbar from '../../components/Navbar/Navbar'

// google analytics
import ReactGA from 'react-ga';
ReactGA.initialize('G-PTJPJPXJ0S');
ReactGA.pageview(window.location.pathname + window.location.search);

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
                        <p>Date Published: {datePublished}</p>
                        <hr />
                        <p>{description}</p>
                        <div className="detailButtons">
                            <a href={link} target="_blank" rel="noreferrer"><div className="button hoverfill">Live Project Page</div></a>
                            {githubrepo !== false &&
                                <a href={githubrepo} target="_blank" rel="noreferrer"><div className="button hoverfill">Github Repo
                                <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github's logo" className="iconImage" /></div>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetail