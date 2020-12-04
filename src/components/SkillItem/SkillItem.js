import { Component } from 'react'
import './SkillItem.css'


class SkillItem extends Component {

    render() {

        return (
            <p className="skillItem">
                {this.props.name}<span><img src={require("../../assets/skills/" + this.props.image).default} alt={this.props.imageAlt} className="icon" /></span>
            </p>
        );
    }
}

export default SkillItem