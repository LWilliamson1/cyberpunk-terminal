import React, { Component } from 'react';
import './new.css';

class summary extends Component {

    render() {
        return (
            <div>
                <div className="emblem"><span className="icon-information"></span></div>
                <div id="frame" className="frame">
                <div id="screen" className="piece output">
                    <h1>Welcome</h1>
                    <p>Welcome to Zorloff's Colosseum Grand. You have been chosen to compete to forgive your debt. You win and you shall walk away with your freedom. Lose and you shall gain your freedom from this life. At this terminal you will receive your equipment for battle. Today you will be facing those who have displeased Zorloff. You will dawn red gear to denote the delinquents, while your opponents will be clad in green. Goodluck to you and the other ill prepared contestants; you will all need it.</p>
                    <a href="/equipment" className="btn" >Equipment</a>
                </div>
                <div className="piece scanlines noclick"></div>
                <div className="piece glow noclick"></div>
                </div>
            </div>
        )
    }
}

export default summary;