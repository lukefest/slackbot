module.exports = function(robot) {

// Stores words begining with letters

var letterA = ["Aardvark", "Admiral", "Adderall"];
var letterB = ["Bicycle", "Baby squid", "Bitter-Zombie"];
var letterC = ["Crumpet", "Cringeworthy", "crapper", "Cranny", "Crimping"];
var letterD = ["Dunderhead", "Dangermouse", "Dippy-dippy-do-da", "Dickless"];
var letterE = ["Epicalyx", "Escallop", "Eyelid", "Epoxy Resin"];
var letterF = ["Fathead", "Fandango", "Feckless", "Flagpole", "Flipflop", "Flocking"];
var letterG = ["Gigabyte", "Gizzards", "Glimmers", "Glitter", "Globular"];
var letterH = ["Harpoon", "Harrowing", "Hawkeyed", "Hawkbill", "Headlamp", "Hunkier", "Heirloom"];
var letterI = ["Icehouse", "Ignition", "Immunity","Insanity"];
var letterJ = ["Juniper", "Jazz-hands", "Jurassic"];
var letterK = ["Koala", "Kuna", "Kybosh"];
var letterL = ["Lechayim", "Lonesome", "Lobbyism", "Lipstick"];
var letterM = ["Mangrove", "Mandolin", "Manholes", "Marmite", "Maturing"];
var letterN = ["Necrosis", "Nepotism", "Neurotic", "Nickelback"];
var letterO = ["Oilholes", "Outcrop", "Outweigh", "Oils", "Octuples", "Oxidates"];
var letterP = ["Perineum", "Pharaoh", "Pignolis", "Pitchier", "Pleaches", "Playsuit", "Plunkers"];
var letterQ = ["Quiddity", "Quietly", "Quench"];
var letterR = ["Rapacity", "Rashlike", "Ratooned", "Restroom"];
var letterT = ["Tuckshop", "Tuxedoed", "Twangier"];
var letterU = ["Uglified", "Unamused", "Unkingly", "Uprising"];
var letterW = ["Warplane", "Waterloo", "Wildcat", "Windpipe", "Wizardry", "Wrathful"];
var letterX = ["Xylitol", "Xanthan", "Xenopus"];
var letterY = ["Yacht", "Yucca", "Yurt", "Yang" ];
var letterZ = ["Zombie", "Zoro", "Zigzag"];

// res.match[1] stores any word included in string by user

robot.hear( /spell (.*)/i, function( res ) {
    var word;
    word = res.match[1];

    // Checks word begins with certain letter

    if ( word.startsWith("a") )
      return res.reply ( "I believe it's pronounced \'"+letterA[Math.floor(Math.random()*letterA.length)]+"\', Dave." );

    if ( word.startsWith("b") )
      return res.reply ( "I believe it's pronounced \'"+letterB[Math.floor(Math.random()*letterB.length)]+"\', Dave." );

    if ( word.startsWith("c") )
      return res.reply ( "I believe it's pronounced \'"+letterC[Math.floor(Math.random()*letterC.length)]+"\', Dave." );

    if ( word.startsWith("d") )
      return res.reply ( "I believe it's pronounced \'"+letterD[Math.floor(Math.random()*letterD.length)]+"\', Dave." );

    if ( word.startsWith("e") )
      return res.reply ( "I believe it's pronounced \'"+letterE[Math.floor(Math.random()*letterE.length)]+"\', Dave." );

    if ( word.startsWith("f") )
      return res.reply ( "I believe it's pronounced \'"+letterF[Math.floor(Math.random()*letterF.length)]+"\', Dave." );

    if ( word.startsWith("g") )
      return res.reply ( "I believe it's pronounced \'"+letterG[Math.floor(Math.random()*letterG.length)]+"\', Dave." );

    if ( word.startsWith("h") )
      return res.reply ( "I believe it's pronounced \'"+letterH[Math.floor(Math.random()*letterH.length)]+"\', Dave." );

    if ( word.startsWith("i") )
      return res.reply ( "I believe it's pronounced \'"+letterI[Math.floor(Math.random()*letterI.length)]+"\', Dave." );

    if ( word.startsWith("j") )
      return res.reply ( "I believe it's pronounced \'"+letterJ[Math.floor(Math.random()*letterJ.length)]+"\', Dave." );

    if ( word.startsWith("k") )
      return res.reply ( "I believe it's pronounced \'"+letterK[Math.floor(Math.random()*letterK.length)]+"\', Dave." );

    if ( word.startsWith("l") )
      return res.reply ( "I believe it's pronounced \'"+letterL[Math.floor(Math.random()*letterL.length)]+"\', Dave." );

    if ( word.startsWith("m") )
      return res.reply ( "I believe it's pronounced \'"+letterM[Math.floor(Math.random()*letterM.length)]+"\', Dave." );

    if ( word.startsWith("n") )
      return res.reply ( "I believe it's pronounced \'"+letterN[Math.floor(Math.random()*letterN.length)]+"\', Dave." );

    if ( word.startsWith("o") )
      return res.reply ( "I believe it's pronounced \'"+letterO[Math.floor(Math.random()*letterO.length)]+"\', Dave." );

    if ( word.startsWith("p") )
      return res.reply ( "I believe it's pronounced \'"+letterP[Math.floor(Math.random()*letterP.length)]+"\', Dave." );

    if ( word.startsWith("q") )
      return res.reply ( "I believe it's pronounced \'"+letterQ[Math.floor(Math.random()*letterQ.length)]+"\', Dave." );

    if ( word.startsWith("r") )
      return res.reply ( "I believe it's pronounced \'"+letterR[Math.floor(Math.random()*letterR.length)]+"\', Dave." );

    if ( word.startsWith("s") )
      return res.reply ( "I believe it's pronounced \'"+letterS[Math.floor(Math.random()*letterS.length)]+"\', Dave." );

    if ( word.startsWith("t") )
      return res.reply ( "I believe it's pronounced \'"+letterT[Math.floor(Math.random()*letterT.length)]+"\', Dave." );

    if ( word.startsWith("u") )
        return res.reply ( "I believe it's pronounced \'"+letterU[Math.floor(Math.random()*letterU.length)]+"\', Dave." );

    if ( word.startsWith("v") )
        return res.reply ( "I believe it's pronounced \'"+letterV[Math.floor(Math.random()*letterV.length)]+"\', Dave." );

    if ( word.startsWith("w") )
        return res.reply ( "I believe it's pronounced \'"+letterW[Math.floor(Math.random()*letterW.length)]+"\', Dave." );

    if ( word.startsWith("x") )
        return res.reply ( "I believe it's pronounced \'"+letterX[Math.floor(Math.random()*letterX.length)]+"\', Dave." );

    if ( word.startsWith("y") )
        return res.reply ( "I believe it's pronounced \'"+letterY[Math.floor(Math.random()*letterY.length)]+"\', Dave." );

    if ( word.startsWith("z") )
        return res.reply ( "I believe it's pronounced \'"+letterZ[Math.floor(Math.random()*letterZ.length)]+"\', Dave." );

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

// robot.hear( /(.*)/i, function( msg ) {
//         return msg.send ( "I don't get you, Dave." );
//         });

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
