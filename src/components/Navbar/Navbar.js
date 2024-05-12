import { Component } from 'react'
import './Navbar.css'
import { HashLink } from 'react-router-hash-link'


class Navbar extends Component {
    constructor(props) {
        super(props)

        let navbarMode = "navbarStart"
        let navbarTextMode = "navTextLight"
        let changeOnScroll = true

        if (this.props.type === "solid") {
            navbarMode = "navbarOpaque"
            navbarTextMode = "navTextDark"
            changeOnScroll = false
        }

        this.state = ({
            navbarMode: navbarMode,
            navbarTextMode: navbarTextMode,
            changeOnScroll: changeOnScroll,
            windowSize: window.innerWidth
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

        if (this.state.changeOnScroll === true)
            this.setState({ navbarMode: navbarMode, navbarTextMode: navbarTextMode })
    }

    listenResizeEvent = () => {
      this.setState({ windowSize: window.innerWidth })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.listenResizeEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
        window.removeEventListener('resize', this.listenResizeEvent);
    }

    render() {


        return (
            <div className="Navbar">
                <div className={"navbar " + this.state.navbarMode}></div>
                <div className="navbarContainer">
                    <HashLink smooth to="/#pagetop" className="navLink">
                <div className={"navTitle " + this.state.navbarTextMode}>{this.state.windowSize > 450 ? 'Jonathan Warner' : 'JW'}</div>
                    </HashLink>

                    <div className={"navItems " + this.state.navbarTextMode}>
                        <HashLink smooth to="/#aboutMeSection" className="navLink">
                            <div className="navButton">About</div>
                        </HashLink>
                        <HashLink smooth to="/#portfolioSection" className="navLink">
                            <div className="navButton">Work</div>
                        </HashLink>
                        <HashLink smooth to="/#skillsSection" className="navLink">
                            <div className="navButton">Skills</div>
                        </HashLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar