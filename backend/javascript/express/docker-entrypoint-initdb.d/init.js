"use strict";

db.createUser({
  user: "root",
  pwd: "example",
  roles: [
    {
      role: "dbOwner",
      db: "mongo_example",
    },
  ],
});

db.createCollection("pings");
db.pings.insertMany([
  {
    _uid: "111111111111111111",
    ping: "pong1",
  },
  {
    _uid: "222222222222222222",
    ping: "pong2",
  },
  {
    _uid: "333333333333333333",
    ping: "pong3",
  },
  {
    _uid: "444444444444444444",
    ping: "pong4",
  },
  {
    _uid: "555555555555555555",
    ping: "pong5",
  },
]);
