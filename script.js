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
