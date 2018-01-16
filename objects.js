var playlist = {artist: "song title", artist2: "song title2"};

function updatePlaylist (playlist, artistName, songTitle) {
Object.assign({}, playlist, { artistName: songTitle })
return playlist;
}
