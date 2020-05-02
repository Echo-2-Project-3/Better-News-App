import React, { Component } from "react";


class Leaderboards extends Component { 
    state = {
        data: [
            {userName: 'Joe', highScore: 52},
            {userName: 'Jenny', highScore: 120},
        ]
    }
render () {
    return (
        <p>Leaderboards</p>
    )
}
}

export default Leaderboards;