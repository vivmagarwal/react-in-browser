## ReactInBrowser

Intended to be used as a CDN in HTML file

```
 <script src="https://unpkg.com/react-in-browser@17.0.1/dist/react-in-browser.js"></script>
```
It gives you all the commonly used React ecocsytem objects directly in your broswer. I created it for quick demoes & quick student activites in my live class.

The version number corresponds to the React's major version number.

Codepen Demo: https://codepen.io/drupalastic/pen/rNqpjwq?editors=0010

## Full Demo

### HTML file
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="root"></div>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="dist/react-in-browser.js"></script>
    <script src="script.js" type="text/babel"></script>
  </body>
</html>

```

### JS file
```
const user = {
  name: "User One",
  imageUrl: "https://s25.postimg.cc/nvqksp967/Pic-container1.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Profile />
  </StrictMode>
);

```

### CSS file
```
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-left: 20px;
}

.avatar {
  border-radius: 50%;
  object-fit: cover;
}

.large {
  border: 4px solid gold;
}

```
