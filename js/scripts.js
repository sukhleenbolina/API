/************
* Where is the data (api feed)? 
************/
// The API feed
const getStuff = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/5';

/************
* Show the Data
************/ 
// Show the data
const showStuff = (data) => {
    
  // Check the data   
  console.log(data);
  // How much data is there?
  console.log(data.length);
  // How do you access a single data entry? 
  console.log(data[0]);
  
  // Show single entry, then repeat (loop-through) one-at-a-time 
  for (i=0; i < data.length; i++) { 
     
    
      // Template for data. Have fun. Be a Designer.
      // jQuery for easy DOM manipulations: `text()`, `attr()`, `addClass()`, etc. 
           let template = `<div class="movie">
<div class="author">${data[i].author}</div>  
<div class="quote">(<span>${data[i].quote}</span>) </div>
</div>
`;
    
    // Show data within template using jQuery `append()`
    // https://api.jquery.com/append/
    $('#app').append(template);
    
  } // end of `for` loop
    
}; // end of showStuff function

/************
* Got template? Got data? Show it. 
* jQuery convenience function for JSON and API data
* First parameter: url to data
* Second parameter: callback function runs on success
* https://api.jquery.com/jQuery.getJSON
************/ 
$.getJSON( getStuff, showStuff);
