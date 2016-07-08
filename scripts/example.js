module.exports = function(robot) {

  robot.hear(/hello/i, function(msg) {
    return msg.send("Hello, Dave.");
    });

  robot.hear(/thanks/i, function(msg) {
    return msg.send("You are welcome, Dave.");
    });

  robot.hear(/spell (.*)/i, function(res) {
    var word;
    word = res.match[1];
    if (word.charAt("C"))
    return res.reply("Did you mean \'Chicken\', Dave?");
    else
    return res.reply("I have no idea what you mean, Dave.");
    });

    // robot.respond(/open the (.*) doors/i, function(res) {
    //   var doorType;
    //     doorType = res.match[1];
    //   if (doorType === "pod bay") {
    //   return res.reply("I'm afraid I can't let you do that.");
    //   } else {
    //   return res.reply("Opening " + doorType + " doors");
    //   }
    // });

  };


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
