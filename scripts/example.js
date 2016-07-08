var images = [ "http://images.wikia.com/pt.starwars/images/c/c4/Yoda2.jpg",  "http://images.wikia.com/es.starwars/images/4/45/Yoda.jpg", "http://img.lum.dolimg.com/v1/images/ep3_ia_89377_r_bb46f7c6.jpeg", "http://vignette2.wikia.nocookie.net/starwars/images/1/14/Air_yoda.jpg/revision/latest", "http://screencrush.com/442/files/2014/12/yoda-back.jpg", "http://cdn.pcwallart.com/images/yoda-wallpaper-1920x1080-wallpaper-4.jpg" ];


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
