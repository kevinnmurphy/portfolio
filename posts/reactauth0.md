---
title: 'Using Auth0 With React'
date: '2020-11-15'
---

This post's focus is using Auth0 with React for authentication. The Auth0 website has great documentation, but I would like to provide a very concise version that can get you started in minutes.

---

![alt text](https://images.unsplash.com/photo-1484191914255-a429e6f819b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8a2V5cGFkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)

---

"The Auth0 React SDK handles grant and protocol details, token expiration and renewal, as well as token storage and caching. Under the hood, it implements Universal Login and the Authorization Code Grant Flow with PKCE. "

To start, create a free account on Auth0 website. Add a new project, I used Single Page Application, and write down your Domain and ClientId for later:

Domain - (dev-12345678.us.auth0.com)

ClientId - ASDFASDFasdfasdf1234123412341234

Drop in an image in the Application Logo section for some customization.

Also configure your Allowed URL's sections with: http://localhost:3000

Then, you need to import the library:

npm install @auth0/auth0-react

Wrap your App with the Auth0Provider component:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Auth0Provider } from '@auth0/auth0-react';
    import App from './App';
    ReactDOM.render(
      <Auth0Provider
        domain="YOUR-DOMAIN"
        clientId="YOUR-CLIENTID"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById('app')

);

You will need login:

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
const {
isAuthenticated,
loginWithRedirect,
} = useAuth0();

return !isAuthenticated && (
<button onClick={loginWithRedirect}>Log in</button>
);
}

export default LoginButton;

And Logout:

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
const {
isAuthenticated,
logout,
} = useAuth0();

return isAuthenticated && (
<button onClick={() => {
logout({ returnTo: window.location.origin });
}}>Log out</button>
);
}

export default LogoutButton;

After this, you can desctructure the user from the Auth0 component and display it's properties:

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
const { user } = useAuth0();

return <div>Hello {user.name}</div>;
}

export default Profile;

    And that's the simplest form of setting up Auth0 with your React project and getting user data back.
