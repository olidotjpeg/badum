import React, { 
    Component,
    PropTypes
 } from 'react';
import Wave from './Wave';
import './components.css';
import badummMp3 from '../ba_dumm.mp3';
import badummOgg from '../ba_dumm.ogg';

class Player extends Component {

    static propTypes = {
        playState: PropTypes.bool
    };

    componentDidMount() {
        if (this.props.playState) {
            this.playSound();
        }
    }

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
                <h1>Bad joke? Go ahead, tap it!</h1>
                    <div className="animation-holder">
                        <div className="speaker">
                            <button className="play_button" onClick={() => this.playSound()}></button>
                            <Wave animateState={this.state.animateWave} delay={200} />
                            <Wave animateState={this.state.animateWave} delay={300} />
                            <Wave animateState={this.state.animateWave} delay={700} />
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
