var path = require('path');

var personList = require('../data/friends.js');


    //API routing
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends/:friends?", function(req, res) {
        var friends = req.params.friends;
        if (friends) {
            console.log(friends);

            for (var i = 0; i<personList.length; i++) {
                if (friends === personList[i].name){
                    return res.json(personList[i]);
                }
            }
            return res.json(false);
        }
        return res.json(personList);
    });
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newFriend = req.body;

      newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
      //Might need to be some more stuff here...

      console.log(newFriend);

      personList.push(newFriend);

      // console.log("PList[0].scores = " + personList[0].scores);
      // console.log("PList[0].scores[0] = " + personList[0].scores[0]);
      // console.log("NewFriend.scores[0] = " + newFriend.scores[0]);

      var match = {
          name: "",
          image: "",
          scoresDiff: 100
      };

      console.log(match);


      var totalDiff = 0;

      for (var i=0; i < personList.length; i++) {
          totalDiff = 0;

          for (var x = 0; x < 10; x++) {
              totalDiff += Math.abs(parseInt(newFriend.scores[x]) - parseInt(personList[i].scores[x]));
              if (totalDiff <= match.scoresDiff){
                  match.name = personList[i].name;
                  match.photo = personList[i].photo;
                  match.scoresDiff = totalDiff;
              }
          }
      }

      console.log(match);

      res.json(match);
      // res.json(newFriend);
    });
};
