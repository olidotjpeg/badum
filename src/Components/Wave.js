import React, { 
    Component,
    PropTypes
} from 'react';
import classNames from 'classnames';
import './components.css';

class Wave extends Component {

	static propTypes = {
		animateState: PropTypes.bool,
        delay: PropTypes.number
    };

    constructor() {
    	super();

    	this.state = {
    		animateClass: ''
    	}
    }

    render() {

		if (this.props.animateState) {
            this.setState({
                animateClass: 'animate'
            });

	        setTimeout(() => {
	        	this.setState({
	        		animateClass: ''
	        	})
	        }, this.props.delay);
	    }

        return (
            <div className={classNames(this.state.animateClass, 'wave')}></div>
        );
    }
}

export default Wave;
