import './About.css'

function About() {
    return (
        <div className="About">
            <div className="aboutMeSection" id="aboutMeSection">
                <div className="aboutMeDesc">
                    <h1>Hello, I'm Jonathan</h1>
                    <h2>Tech guy from Harrisonburg, Virginia</h2>

                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>At age 8 I discovered </span>
                        <a href="https://www.scratch.mit.edu" className="inTextLink">Scratch</a>:
                a beginners programming language. I fell in love and never looked
                back. In the years since, I have widened my skills from Scratch to
                many other programming languages and platforms. I am currently attending <a
                            href="https://www.makeschool.com/" className="inTextLink">Make School</a> in SF where I am majoring in
                applied computer science.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About