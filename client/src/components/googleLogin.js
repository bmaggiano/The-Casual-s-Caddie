import React from 'react'
import { GoogleLogin } from 'react-google-login'
import auth from '../utils/auth'
import decode from 'jwt-decode'
import { useMutation } from '@apollo/client'
import { GOOGLE_LOGIN } from '../utils/mutations'


const clientId = "1004159162833-2avgpkanfd1tfvsc9n2dit03l5qrpd6a.apps.googleusercontent.com"


function GoogleLoginButton() {

const [ googleLogin ] = useMutation(GOOGLE_LOGIN)


    const onSuccess = async (res) => {
        try {
            const token = res.tokenId;
            const decodedToken = decode(token);
            console.log("decoded token:", decodedToken);
            console.log(res);
            const { data } = await googleLogin({
              variables: {
                idToken: res.tokenId
              }
            })
            await auth.googleLogin(token);
          } catch (err) {
            console.log('Login Failed!', err);
          }
        };
    const onFailure = (res) => {
        console.log('Login Failed!', res)
    }

  return (
    <div id="googleSignInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default GoogleLoginButton
