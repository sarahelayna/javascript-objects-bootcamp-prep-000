var playlist = {artist: "song title", artist2: "song title2"};

function updatePlaylist (playlist, artistName, songTitle) {
return Object.assign({}, playlist, { [artistName]: songTitle });
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
}
