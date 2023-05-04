// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    const newUser = {
      id: this.currentID,
      name,
    };
    this.users[this.currentID] = newUser;
    const isFollowing = new Set();
    this.follows[this.currentID] = isFollowing;
    return this.currentID;
  }

  getUser(userID) {
    // Your code here
    // return this.users[userID] ?? null;
    const currentUser = this.users[userID];
    if (currentUser) return currentUser;
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (!this.users[userID1] || !this.users[userID2]) return false;
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    const followers = new Set();
    for (const currentUser in this.follows) {
      if (+currentUser === userID) continue;
      if (this.follows[currentUser].has(userID)) followers.add(+currentUser)
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees, recommended = [], seen = new Set()) {
    // Your code here
    seen.add(userID);
    const currentFollows = this.getFollows(userID);
    for (const followID of currentFollows) {
      const recSet = this.getFollows(followID);
      for (const rec of recSet) {
        if (!seen.has(rec)) {
          seen.add(rec);
          recommended.push(rec)
        }
      }
    }
    if (degrees > 1) {
      for (const followID of currentFollows) {
        this.getRecommendedFollows(followID, degrees - 1, recommended, seen);
      }
    }
    return recommended;
    //------------- Iterative solve
    let queue = [[userID]];

    let recommended = [];

    let visited = new Set();
    visited.add(userID);

    while (queue.length > 0) {

      let path = queue.shift();
      let id = path[path.length - 1];

      if (path.length > degrees + 2) break;

      if (path.length > 2) recommended.push(id);

      for (let follow of this.follows[id]) {
        if (!visited.has(follow)) {
          visited.add(follow);
          // Use concat to create a new array
          // DON'T modify the existing path!!!
          queue.push(path.concat([follow]))
        }
      }
    }

    return recommended;
  }
}

module.exports = SocialNetwork;