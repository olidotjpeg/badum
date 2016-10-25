import React, { 
    Component,
    PropTypes
} from 'react';
import classNames from 'classnames';
import './components.css';

class SideBar extends Component {

	static propTypes = {
		menuState: PropTypes.bool
    };

    render() {

    	let menuStateClass = this.props.menuState ? 'open' : '';

        return (
            <div className={classNames(menuStateClass, 'sidebar')}>
            	<ul className="list">
            		<li className="item">
            			<img src="https://scontent-waw1-1.xx.fbcdn.net/t31.0-8/14124454_10154384861279526_3489114820133926834_o.jpg" alt="Oliver Stenkilde" />
            			<h3 className="title">@theStenkilde</h3>
            			<p className="title">Frontend Developer</p>
            		</li>
            		<li className="item">
            			<img src="https://pbs.twimg.com/profile_images/749229521853902848/bQomwBns.jpg" alt="Søren Clausen" />
            			<h3 className="title">@sclausen93</h3>
            			<p className="title">Digital Designer</p>
            		</li>
            	</ul>
            </div>
        );
    }
}

export default SideBar;
