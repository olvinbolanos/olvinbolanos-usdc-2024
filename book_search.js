/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
  /** You will need to implement your search and
   * return the appropriate object here. */
  // Convert the search term to lowercase for case-insensitive matching
  const searchTermLower = searchTerm.toLowerCase();

  // Convert the first letter of the word to capitalize for case-sensitive matching
  const firstLetter = searchTermLower.charAt(0);
  const firstLetterCapitalized = firstLetter.toUpperCase();
  const searchTermCapitalized = firstLetterCapitalized + searchTermLower.slice(1);

  if (searchTerm === searchTermCapitalized) {
    console.log("Case-sensitive search");
    searchTerm = searchTermCapitalized;
  } else {  
    console.log("Case-insensitive search");
    searchTerm = searchTermLower;
  }

  // Initialize an array to store the results
  const results = [];

  // Iterate through each book in the input
  for (const book of scannedTextObj) {
    const { ISBN, Content } = book;

    // Iterate through each piece of scanned text in the book
    for (const { Page, Line, Text } of Content) {
      //console.log(searchTermLower);
      //console.log(textLower);

      // Check if the search term is present in the scanned Text
      if (Text.includes(searchTerm)) {
        // If found, push the result to the results array
        results.push({ ISBN, Page, Line });
      }
    }
  }

  // Return the result object
  var result = {
    SearchTerm: searchTerm,
    Results: results, // no need for this to be an array.Since results is already initialized
  };

  return result;
}

/** Example input object. */
const twentyLeaguesIn = [
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];

/** Example output object */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length === 1) {
  console.log("PASS: Test 2");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test2result.Results.length);
}

/** We check to see if the search term is case-sensitive. */
const test3result = findSearchTermInBooks("The", twentyLeaguesIn);
if (test3result.Results.length === 1) {
  console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test3result.Results.length);
}
/** We can check that, given a negative test input, that do not return any matches. */
const test4result = findSearchTermInBooks("Canada", twentyLeaguesIn);
if (test4result.Results.length === 0) {
  console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test4result.Results.length);
}
