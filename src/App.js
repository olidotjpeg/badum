// React
import React, { Component } from 'react';

// Third Party
import createHistory from 'history/createBrowserHistory'
import classNames from 'classnames';

// Components
import Player from './Components/Player';
import SideBar from './Components/Sidebar';

// CSS
import './App.css';

class App extends Component {

	constructor() {
		super();

		// Base state
		this.state = {
			menuState: false,
			autoPlay: false
		}

		// Location handling
		const history = createHistory();
    	const location = history.location

    	if (location.search === '?play') {
    		this.state = {
    			autoPlay: true
    		};
    	}

	}

	menuHandler() {
		if (this.state.menuState) {
			this.setState({
				menuState: false
			})
		} else {
			this.setState({
				menuState: true
			})
		}
	}

    render() {

    	let menuStateClass = this.state.menuState ? 'open' : '';

        return (
            <div className="App">
                <Player playState={this.state.autoPlay} />
                <SideBar menuState={this.state.menuState} />
                <button className={classNames(menuStateClass, 'menu-toggle')} onClick={() => this.menuHandler()}></button>
            </div>
        );
    }
}

export default App;
