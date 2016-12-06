import React, {Component} from 'react';
import Header from './components/common/Header';
import Infobox from './components/common/Infobox';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Infobox/>
                {this.props.children}
            </div>
        )
    }
}

export default App;