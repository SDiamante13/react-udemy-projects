import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    rendorContent() {
        if (!this.state.errorMessage && !this.state.lat) {
            return <Spinner/>
        } else if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
    }

    render() {
        return (
            <div className="border red">
                {this.rendorContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);