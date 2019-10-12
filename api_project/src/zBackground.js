import React from 'react';
import Input from './Input.js';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            output: ""
        };
    }


    componentDidMount() {
        fetch('https://api.funtranslations.com/translate/yoda.json')
        .then(results => {
            return results.json();
        }).then(data => {
            let output = 
            <div key="text">
                {data.results.translated}
            </div>
            return output
        })
    this.setState({output: output});
    }

    render() {
        return (
        <div className="output">
            {this.state.output}
        </div>
        );
    }
}

export default Background;