# JSON Web Token: Dos and Don'ts

## Don'ts

1. Don't store tokens in `localstorage`. You can use **HttpOnly cookie** or in **React state** i.e. browser memory.
2. Don't keep the secret keys that go into signing your tokens in the browser.
3. Don't decode the token in the client.
Instead of decoding the token to get the payload -- for example, if you wanted to get the user information from the payload -- you can just hit a userInfo endpoint or get the UserInfo when the user signs in or when they sign up.

## Dos

1. Do keep long, strong, unguessable secrets.
2. Do keep your token payload small.
3. Do make sure that you're using HTTPS.