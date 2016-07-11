module.exports = function(robot) {

// Stores words begining with letters

var a = ["Aardvark", "Admiral", "Adderall"];
var b = ["Bicycle", "Baby squid", "Bitter-Zombie"];
var c = ["Crumpet", "Cringeworthy", "Crapper", "Cranny", "Crimping"];
var d = ["Dunderhead", "Dangermouse", "Dippy-dippy-do-da", "Dickless"];
var e = ["Epicalyx", "Escallop", "Eyelid", "Epoxy Resin"];
var f = ["Fathead", "Fandango", "Feckless", "Flagpole", "Flipflop", "Flocking"];
var g = ["Gigabyte", "Gizzards", "Glimmers", "Glitter", "Globular"];
var h = ["Harpoon", "Harrowing", "Hawkeyed", "Hawkbill", "Headlamp", "Hunkier", "Heirloom"];
var i = ["Icehouse", "Ignition", "Immunity","Insanity"];
var j = ["Juniper", "Jazz-hands", "Jurassic"];
var k = ["Koala", "Kuna", "Kybosh"];
var l = ["Lechayim", "Lonesome", "Lobbyism", "Lipstick"];
var m = ["Mangrove", "Mandolin", "Manholes", "Marmite", "Maturing"];
var n = ["Necrosis", "Nepotism", "Neurotic", "Nickelback"];
var o = ["Oilholes", "Outcrop", "Outweigh", "Oils", "Octuples", "Oxidates"];
var p = ["Perineum", "Pharaoh", "Pignolis", "Pitchier", "Pleaches", "Playsuit", "Plunkers"];
var q = ["Quiddity", "Quietly", "Quench"];
var r = ["Rapacity", "Rashlike", "Ratooned", "Restroom"];
var t = ["Tuckshop", "Tuxedoed", "Twangier"];
var u = ["Uglified", "Unamused", "Unkingly", "Uprising"];
var w = ["Warplane", "Waterloo", "Wildcat", "Windpipe", "Wizardry", "Wrathful"];
var x = ["Xylitol", "Xanthan", "Xenopus"];
var y = ["Yacht", "Yucca", "Yurt", "Yang" ];
var z = ["Zombie", "Zoro", "Zigzag"];

// res.match[1] stores any word included in string by user

robot.hear( /spell (.*)/i, function(res) {

    var word;
    word = res.match[1];

    var firstLetter;
    firstLetter = word.charAt(0);

    var correctLetterArray;
    correctLetterArray = eval(firstLetter);

    var randomSuggestion;
    randomSuggestion = correctLetterArray[Math.floor(Math.random()*correctLetterArray.length)];

    return res.reply ( "I believe it's spelled \'"+randomSuggestion+"\', Dave." );

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


// 2 different ways of getting first letter

// startsWith("X")

// if ( word.startsWith("a") )
//   return res.reply ( "Did you mean \'"+letterA[Math.floor(Math.random()*letterA.length)]+"\', Dave?" );

// word.charAt(0) === "X"

// if ( word.charAt(0) === "b" )
//   return res.reply ( "Did you mean \'"+letterB[Math.floor(Math.random()*letterB.length)]+"\', Dave?" );

//Example from Hubot

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
