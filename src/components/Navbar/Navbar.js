import { Component } from 'react'
import './Navbar.css'


class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            navbarMode: "navbarStart",
            navbarTextMode: "navTextLight"
        });
    }

    listenScrollEvent = () => {
        let navbarMode = this.state.navbarMode
        let navbarTextMode = this.state.navbarTextMode

        if (window.scrollY > 100 && navbarMode !== "navbarOpaque") {
            navbarMode = "navbarOpaque"
            navbarTextMode = "navTextDark"
        }
        else if (window.scrollY <= 100 && navbarMode !== "navbarTranslucent") {
            navbarMode = "navbarTranslucent"
            navbarTextMode = "navTextLight"
        }

        this.setState({ navbarMode: navbarMode, navbarTextMode: navbarTextMode })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {


        return (
            <div className="Navbar">
                <div className={"navbar " + this.state.navbarMode}></div>
                <div className="navbarContainer">
                    <a href="#pageTop" className="navLink">
                        <div className={"navTitle " + this.state.navbarTextMode}>Jonathan Warner</div>
                    </a>

                    <div className={"navItems " + this.state.navbarTextMode}>
                        <a href="#pageTop" className="navLink">
                            <div className="navButton">Home</div>
                        </a>
                        <a href="#aboutMeSection" className="navLink">
                            <div className="navButton">About</div>
                        </a>
                        <a href="#skillsSection" className="navLink">
                            <div className="navButton">Skills</div>
                        </a>
                        <a href="#portfolioSection" className="navLink">
                            <div className="navButton">Work</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar