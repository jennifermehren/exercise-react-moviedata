const Search = (props) => {
  const searchFilm = (e) => {
     e.preventDefault();
    // let input = e.filter((userinput) => props.includes(userinput.value));
    console.log("value");
};
  let searchbar = (
    <div>
      <input name="value" type="text"></input>
      <button onClick={searchFilm}>search</button>
    </div>
  );
  return searchbar;
};

export default Search;
