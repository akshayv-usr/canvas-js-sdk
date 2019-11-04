import React, {Component} from 'react';
import logo from '../logo.svg';
import Sfdc from '../services/Sfdc'

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            f_name: 'old name'
        }

        Sfdc.canvas.onReady(() => {
            console.log("Canvas application ready");
            Sfdc.canvas(function(){
                console.log(Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken));
              //  this.updateState();                           
            })
        });

        // this.updateState = this.updateState.bind(this);

    }
    
    updateState() {
        this.setState({f_name: 'new name'});
        console.log(this.state.f_name)
    }

   /* componentDidUpdate(){
        this.updateState();
    }*/

    render()
    {        
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <h5>{this.state.f_name}</h5>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>{this.state.f_name}
                </header>
                <button onClick = {() => this.updateState()}>click</button>
            </div>
        )
    }


}

export default Main;