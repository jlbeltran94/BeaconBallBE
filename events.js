var socketManager = function(socket){
    console.log('Socket connected');
    socket.on('disconnect',onDisconnect); 
    socket.on('register_player',onRegisterPlayer);
    // socket.on('start_game', onStartGame);
    // socket.on('win_game',onWinGame); 
    // socket.on('player_exit',onExitPlayer); 

    //******** EVENTS ***************/

    
    function onDisconnect(data){
        console.log("Player disconnect: "+data);
    }

    function onRegisterPlayer(data){        
        console.log('Player connected: '+data);
        socket.broadcast.emit('player_registered', data);
    }
};

module.exports = {
    socketManager
  }