import React, { Component } from 'react';

class Equipment extends Component {
    
    render() {
        let {credits} = this.props || 15;
        return (
            <div>
                <h2>Credits: {}</h2>
            </div>
        )
    }
}

export default Equipment;