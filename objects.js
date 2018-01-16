var playlist = {artist: "song title", artist2: "song title2"};

function updatePlaylist (playlist, artistName, songTitle) {
Object.assign({}, playlist, { artist3: "song title3" })
return playlist;
}
