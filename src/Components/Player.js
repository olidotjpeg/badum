import React, { Component } from 'react';
import Wave from './Wave';
import './components.css';
import badummMp3 from '../ba_dumm.mp3';
import badummOgg from '../ba_dumm.ogg';

class Player extends Component {

    constructor() {
        super();

        this.state = {
            animateWave: false
        }
    }

    playSound() {
        const audio = document.getElementById('audio');
        audio.play();

        this.setState({
            animateWave: true
        });

        setTimeout(() => { 
            this.setState({
                animateWave: false
            });
        }, 2000);
    }

    render() {
        return (
            <div className="badum">
                <h1><b>Bad joke?</b>  Go ahead, tap it!</h1>
                    <div className="animation-holder">
                        <div className="speaker">
                            <button className="play_button" onClick={() => this.playSound()}></button>
                            <Wave animateState={this.state.animateWave} delay={300} />
                            <Wave animateState={this.state.animateWave} delay={700} />
                            <Wave animateState={this.state.animateWave} delay={1000} />
                        </div>
                    </div>
                    <audio id="audio">
                      <source src={badummOgg} type="audio/ogg" />
                      <source src={badummMp3} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
            </div>
        );
    }
}

export default Player;
