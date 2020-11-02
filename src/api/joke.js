async function getJoke() {
  try {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = await jokeData.json();
    return joke.joke;
  } catch (e) {
    console.error("Could not get data: ", e);
    return "";
  }
}
export default getJoke;
