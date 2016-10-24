import React, { Component } from 'react';
import './components.css';
//import speaker from '../speaker.png';
import badummMp3 from '../ba_dumm.mp3';
import badummOgg from '../ba_dumm.ogg';

class Player extends Component {

    playSound() {
        const audio = document.getElementById('audio');
        audio.play();
    }

    render() {
        return (
            <div className="badum">
                <h1><b>Bad joke?</b>  Go ahead, tap it!</h1>
                    <div className="animation-holder">
                        <div className="speaker">
                            <button className="play_button" onClick={() => this.playSound()}></button>
                            <div className="wave"></div>
                            <div className="wave delay"></div>
                            <div className="wave delay2"></div>
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
