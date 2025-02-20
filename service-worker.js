
// // Create a debounce function to avoid excessive
// // calls to the GitHub API while the user is still
// // // typing the search query.
// // function debounce(fn, delay) {
// //   let timeoutID;
// //   return function (...args) {
// //     if (timeoutID) clearTimeout(timeoutID);
// //     timeoutID = setTimeout(() => fn(...args), delay);
// //   };
// // }

// // // When the user has changed what is typed into the omnibox.
// // chrome.omnibox.onInputChanged.addListener(
// //   debounce(async (text, suggest) => {
// //     const response = await fetch(
// //       `https://api.github.com/search/issues?q=${text}`,
// //     );
// //     const data = await response.json();
// //     const suggestions = data.items.map((issue) => ({
// //       content: issue.html_url,
// //       description: issue.title,
// //     }));

// //     suggest(suggestions);
// //   }, 50),
// //);

// // When the user has accepted what is typed into the omnibox.
function change() {
    document.body.style.backgroundColor = 'red';

}
chrome.action.onClicked.addListener((tab) => {

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: change
    })
});