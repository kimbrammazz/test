console.log(window.location.origin);

const kinde = await createKindeClient({
    domain: 'https://test.localkinde.me',
    redirect_uri: window.location.origin
});

document.getElementById('login').addEventListener('click', async () => {
    console.log("pressed login button");
  await kinde.login();
});

document.getElementById('register').addEventListener('click', async () => {
  await kinde.register();
});


window.addEventListener('load', async () => {
  await kinde.handleRedirectCallback();
  const user = await kinde.getUser();
  console.log({user});
});

document.getElementById('logout').addEventListener('click', async () => {
    await kinde.logout();
});

// (async () => {
//     try {
//         const token = await kinde.getToken();
//         const response = await fetch(YOUR_API, {
//             headers: new Headers({
//                 Authorization: 'Bearer ' + token
//             })
//         });
//         const data = await response.json();
//         console.log({data});
//     } catch (err) {
//         console.log(err);
//     }
// })();