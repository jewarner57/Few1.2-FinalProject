import { Component } from 'react'
import './SkillList.css'


class SkillList extends Component {

    render() {

        return (
            <div className="SkillList">
                <div class="skillsSection">
                    <div class="sectionTitle">
                        <div>
                            <h1 class="sectionTitle" id="skillsSection">My Skills</h1>
                        </div>
                    </div>
                    <div class="skillsOuterWrapper">
                        <div class="skillsInnerWrapper">

                            {/* Map through skills here */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillList