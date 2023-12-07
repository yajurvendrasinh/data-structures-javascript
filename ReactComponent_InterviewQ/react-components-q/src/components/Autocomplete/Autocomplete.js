// yourube link : https://youtu.be/Kb3YtXDvPo0?si=LyKwJof8ipTVJtIE
// version 2 : https://youtu.be/MY6ZZIn93V8?si=e-k9Hibb1GE_JrR3

import React, { useRef, useState } from "react";

export default function Autocomplete() {
  const [names, setNames] = useState([]); // the liste where we can add and search names from
  const [searchList, setSearchList] = useState([]);
  const nameInput = useRef();
  const searchInput = useRef();

  // adding names to the list
  function onSubmit(e) {
    e.preventDefault(); // because we want to prevent the form to reload the page
    const newName = nameInput.current.value; // you will need to obtain the value via ref
    if (newName === "") return;
    setNames((existingName) => {
      return [...existingName, newName];
    });
    nameInput.current.value = ""; // clear the input box
  }

  //  autocompleting name from the above list
  function autoComplete(event) {
    let searchedNames = names.filter((name) => {
      return (
        name.substr(0, event.target.value.length).toLowerCase() ===
        event.target.value.toLowerCase()
      );
    });

    event.target.value.length === 0
      ? setSearchList("")
      : setSearchList(searchedNames);
  }
  // ///////////////////////////////////////

  const searchResult = searchList
    ? searchList.map((search, idx) => {
        return (
          <p onClick={(e) => handleNameClick(e)} key={idx}>
            {search}
          </p>
        );
      })
    : "";

  function handleNameClick(e) {
    searchInput.current.value = e.target.innerHTML;
  }

  const showName = names.map((search, idx) => {
    return <p key={idx}>{search}</p>;
  });

  return (
    <div className="autocomplete-section">
      Autocomplete component:
      <hr />
      {/* SEARCH names from the list */}
      <label>
        Search Name:
        <input
          ref={searchInput}
          onChange={(e) => {
            autoComplete(e);
          }}
          type="text"
        />
      </label>
      {/* SEARCH RESULT */}
      <section>
        <h4>Search Result:</h4>
        {searchResult}
      </section>
      {/* FORM to ADD THINGS TO LIST  */}
      <form onSubmit={onSubmit}>
        <input ref={nameInput} type="text" />
        <button type="submit">Add Name</button>
      </form>
      {/* SECTION to display the list */}
      <div>Dispaly current names:</div>
      <div>{showName}</div>
    </div>
  );
}

// ADD CONTENT
/*
 * Build a form with input and button
 * provide input with ref to clear out the input once onSubmit it clicked
 * const val = e.target.value -> setList((prev) => {[...prev, val]})
 * clear input by ref.current.value = ''
 *
 */

// SEARCH and AUTOCOMPLETE
/**
 * build the inpus file, give it a ref so that it can be utilized later
 * input Onchange =>
 *
 *
 * */
