import React from 'react';
import {Component} from 'react';

class Input extends Component {

    constructor(props){
        super(props);
        this.state = { input: '' };
    }

    handleChange = event => {
        this.setState({ input: event.target.value });
      };

    render() {
        {this.getInput()}
        return (
            <div>
            <form>
                <label>
                Input:
                <input type="text" name="input" value={this.state.input} onChange={this.handleChange} />
               </label>
                 <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }

    getInput() {
        console.log(this.state.input);
        return this.state.input;
    }
}

export default Input;