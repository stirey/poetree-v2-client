import React from 'react'
import {Button} from 'reactstrap';

type AddEmojiState= {
    count: number;
}


class AddEmoji extends React.Component<{}, AddEmojiState>{
    state = { 
        count: 0
    }

    incrementMe = () => { 
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render() {
        return(
            <div>
                <p>testing the like button</p>
                <button onClick={this.incrementMe}>Likes: {this.state.count}</button>
            </div>
        );
    }
}


export default AddEmoji;