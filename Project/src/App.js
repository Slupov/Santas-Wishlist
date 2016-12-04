import React, {Component} from 'react';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import '../src/App.css'
import './components/common/Navbar.css'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header>
                    <Navbar/>
                </Header>
                {this.props.children}
            </div>
        )
    }
}

export default App;