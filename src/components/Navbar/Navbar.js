import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div class="navbar navbarStart"></div>
            <div class="navbarContainer">
                <a href="#pageTop" class="navLink">
                    <div class="navTitle">Jonathan Warner</div>
                </a>

                <div class="navItems">
                    <a href="#pageTop" class="navLink">
                        <div class="navButton">Home</div>
                    </a>
                    <a href="#aboutMeSection" class="navLink">
                        <div class="navButton">About</div>
                    </a>
                    <a href="#skillsSection" class="navLink">
                        <div class="navButton">Skills</div>
                    </a>
                    <a href="#portfolioSection" class="navLink">
                        <div class="navButton">Work</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar