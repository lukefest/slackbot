// //----------------------
// //Firebase
// //----------------------
//
// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDLDqK3dyfaUkRoql0uK3uJhiax0vkZe9M",
//     authDomain: "spel-9000.firebaseapp.com",
//     databaseURL: "https://spel-9000.firebaseio.com",
//     storageBucket: "",
//   };
//   firebase.initializeApp(config);

//--------------------------------------
//JavaScriptSpellCheck stuff
//--------------------------------------

//Real Time Spell Checking Functions Added to JavaScript
var FormSpellingValid = $Spelling.SpellCheckSuggest("textrea1,textarea2,textinput1"); // true or false
//Returns and array of suggestions for an incorrectly spelled word:
var arrSuggestions = $Spelling.SpellCheckSuggest("Worldd"); //returns ['world']

//--------------------------------------
//SlackBot stuff
//--------------------------------------

module.exports = function(robot) {
    return robot.hear( FormSpellingValid() ) {
    return msg.send( arrSuggestions() );
  }
};
