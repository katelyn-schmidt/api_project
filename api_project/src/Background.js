import React from 'react';
import Input from './Input.js';
import ReactDOM from "react-dom";
import {Component} from 'react';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            output: ''
        };
    }

    handleChange = event => {
        this.setState({ input: event.target.value });
      };


    getInput() {
        console.log(this.state.input);
        return this.state.input;
    }

    getURL() {
        this.getInput()
        let urlstr = 'https://api.funtranslations.com/translate/yoda.json?text='+this.state.input;
        let urlstr2 = 'https://api.funtranslations.com/translate/yoda.json?text="'+this.state.input+"\"";
        console.log(urlstr)
        return urlstr2;
    }

    async componentDidMount() {
        const response = await
        fetch(this.getURL())
        const json = await response.json();
        // if {json.error} == null:

        this.setState({ output: json.contents.translated });
    }

    buttons() {
        this.componentDidMount()
    }

    render() {
        return (
        <div className="output">
            <div>
            <form>
                <label>
                Type here!<br></br>
                <input type="text" name="input" value={this.state.input} onChange={this.handleChange} />
               </label>
               
            </form>
            <button onClick={() => this.componentDidMount()} id="button" type="submit" value="Translate!"/>
            </div>
            <div>
                {this.state.output.replace('\"', '').replace('\"', '')}
            </div>
            
        </div>
        );
    }
}

export default Background;