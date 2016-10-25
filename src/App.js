import React, { Component } from 'react';
import Player from './Components/Player';
import SideBar from './Components/Sidebar';
import classNames from 'classnames';
import './App.css';

class App extends Component {

	constructor() {
		super();

		this.state = {
			menuState: false
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
                <Player />
                <SideBar menuState={this.state.menuState} />
                <button className={classNames(menuStateClass, 'menu-toggle')} onClick={() => this.menuHandler()}></button>
            </div>
        );
    }
}

export default App;
