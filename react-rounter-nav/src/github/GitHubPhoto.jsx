const GitHub = async function GitHubPhoto() {
  try {
    const res = await fetch("https://api.github.com/users/Zafarimam7032");
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    return console.log(error);
  }
};

export default GitHub;
