import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Login({ children }) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          {children}
          <div style={{ position: 'absolute', top: 20, right: 20 }}>
            <p>Hello, {user.username}!</p>
            <button onClick={signOut}>Sign out</button>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default Login;