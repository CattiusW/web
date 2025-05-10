
var titles = [
  "C",
  "CA",
  "CAS",
  "CASS",
  "CASSI",
  "CASSIU",
  "CASSIUS",
];

// Function to change the title periodically
function changeTitle() {
  var index = 0; 
  // Set interval to change the title every 1000 milliseconds (1 second)
  setInterval(function() {
      // Set the document title to the title at the current index
      document.title = titles[index];
      // Increment the index and use modulo operator to ensure it stays within the bounds of the array
      index = (index + 1) % titles.length;
  }, 1000); // Interval set to 1000 milliseconds (1 second)
}

// Call the function to start changing the title
changeTitle();
