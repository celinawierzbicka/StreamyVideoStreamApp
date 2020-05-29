import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth', () => {
            window.gapi.client.init({
                clientId: '641086563857-30bd8riblcocnoqnpp9iokt5nh21becu.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    
    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}

export default GoogleAuth;