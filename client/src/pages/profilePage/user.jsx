const UserProfile = () => {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  console.log(userProfile.name);
  return (
    <>
      <h2>Hello {userProfile.name}</h2>
    </>
  );
};

export default UserProfile;
