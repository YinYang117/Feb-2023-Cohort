

class Lobby {
	constructor(players = []) {
		this.players = players;
	}

	whosPlaying() {
		this.players.forEach(player => console.log(player))
	}

}

let lobby1 = new Lobby(["Anthony", "Ryan", "Tayvor","Kyle","Marcus"])

let playerListFunction = lobby1.whosPlaying


let teamDeathmatch = {
	players:[ "Franky","Geralt"],
	someFunc: playerListFunction,
}

teamDeathmatch.someFunc()

