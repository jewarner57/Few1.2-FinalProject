import { Component } from 'react'
import './SkillList.css'
import SkillItem from '../SkillItem/SkillItem'
import skillsData from '../../skills-data.json'


class SkillList extends Component {

    render() {

        return (
            <div className="SkillList">
                <div className="skillsSection">
                    <div className="sectionTitle">
                        <div>
                            <h1 className="sectionTitle" id="skillsSection">My Skills</h1>
                        </div>
                    </div>
                    <div className="skillsOuterWrapper">
                        <div className="skillsInnerWrapper">

                            {/* Map through each skill*/}
                            {skillsData.map((skill, i) => {
                                const { name, image, imageAlt } = skill
                                return (
                                    <SkillItem
                                        id={i}
                                        key={name}
                                        name={name}
                                        image={image}
                                        imageAlt={imageAlt}
                                    />
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillList