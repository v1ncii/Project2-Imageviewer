import React, { Component } from 'react'
import '../App.css';

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: ['https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/iwyqeuwashxpntwnuqqk.jpg',
            'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/yggcr8adqvldz8tgvlwf.jpg',
            'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/wpiuwvnc3ovvxfixxdv3.jpg',
            'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/udnw6hamhalcrwyfrizc.jpg',
            'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/vemuoa82hhmik84jltol.jpg',
            'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/lqmqworyl9z5conrpf0p.jpg'],
            players: [
                'Aaron Rodgers',
                'Davante Adams',
                'Montravius Adams',
                'Jaire Alexander',
                'Geronimo Allison',
                'Aaron Jones'
            ],
            curImage: 0,
            curPlayer: 0
        }
    }

    nextPic = () => {
        let arrLen = this.state.images.length;
        let curPic = this.state.curImage;
        let nextPic = (curPic + 1) % arrLen;
        this.setState({
            curImage: nextPic
        });
    }
    nextPlayer = () => {
        let arrLen = this.state.players.length;
        let curPlay = this.state.curPlayer;
        let nextPlayer = (curPlay + 1) % arrLen
        this.setState({
            curPlayer: nextPlayer
        });
    }

    render(){
        let arrLen = this.state.images.length;
        let rawIndex = this.props.curImageIndex;
        let fixedIndex = rawIndex % arrLen;
        return(
            <div>
                <img src={this.state.images[fixedIndex]}/>
                <p>  </p>
                {this.state.players[fixedIndex]}   
            </div>
        )
    }
}