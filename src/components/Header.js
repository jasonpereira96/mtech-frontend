import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>Students Database</h1>
                <label>App Server Hostname:</label>
                &nbsp;
                <input type='text' id='host-input'></input>
                &nbsp;
                <button type='button' value='Set Host' onClick={this.onButtonClicked.bind(this)}>Set Host</button>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <label>Current Hostname: {this.props.hostname}</label>
            </div>
        )
    }
    onButtonClicked() {
        var textField = document.getElementById('host-input');
        var newHostname = textField.value;
        var {onHostnameChanged} = this.props;
        onHostnameChanged(newHostname);
        // alert(`hostname changed to: ${newHostname}`);
    }
}
export default Header;  