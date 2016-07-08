module.exports = function(robot) {

// Stores words begining with letters

var letterA = ["apple", "ass", "Adderall"];
var letterB = ["bike", "baby squid", "big zombie"];
var letterC = ["cunt", "cat", "crapper"];

// res.match[1] stores any word included in string by user

robot.hear( /spell (.*)/i, function( res ) {
    var word;
    word = res.match[1];

    // Checks word begins with certain letter

    if ( word.startsWith("a") )
      return res.reply ( "Did you mean \'"+letterA[Math.floor(Math.random()*letterA.length)]+"\', Dave?" );

    if ( word.charAt(0) === "b" )
      return res.reply ( "Did you mean \'"+letterB[Math.floor(Math.random()*letterB.length)]+"\', Dave?" );

    if ( word.charAt(0) === "c" )
      return res.reply ( "Did you mean \'"+letterC[Math.floor(Math.random()*letterC.length)]+"\', Dave?" );

    else
      return res.reply ("I don't understand what you mean, Dave.");

    });

// Standard simple listeners and replies

robot.hear( /hello/i, function( msg ) {
    return msg.send("Hello, Dave.");
    });

robot.hear( /thanks/i, function( msg ) {
    return msg.send ( "You are welcome, Dave." );
    });


  };






// ---------------------------
// ********** SHITE ************
// ---------------------------

    // robot.respond(/open the (.*) doors/i, function(res) {
    //   var doorType;
    //     doorType = res.match[1];
    //   if (doorType === "pod bay") {
    //   return res.reply("I'm afraid I can't let you do that.");
    //   } else {
    //   return res.reply("Opening " + doorType + " doors");
    //   }
    // });

    // function(msg) {
    //   return msg.send("Did you mean \'Chicken\', Dave?");
    //   });

//word catch example


//
// };

// // example
//
// robot.respond(/open the (.*) doors/i, function(res) {
//    var doorType;
//    doorType = res.match[1];
//
//    if (doorType === "pod bay") {
//      return res.reply("I'm afraid I can't let you do that.");
//    } else {
//      return res.reply("Opening " + doorType + " doors");
//    }
//  });'
