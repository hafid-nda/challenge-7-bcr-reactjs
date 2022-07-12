import React, { Component } from 'react'

import GoogleLogin from 'react-google-login'

export class Google extends Component {
    responseGoogle = (response) => {
        console.log(response);

        console.log(response.profileObj);
    }
    render() {
        return (
            <GoogleLogin
                className="google-sign"
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="SignIn With Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
        )
    }
}

export default Google