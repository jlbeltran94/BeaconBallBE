var socketManager = function(socket){
    console.log('Socket connected');
    socket.on('disconnect',onDisconnect); 
    socket.on('register_player',onRegisterPlayer);
    socket.on('start_game', onStartGame);
    socket.on('win_game',onWinGame); 

    //******** EVENTS ***************/

    
    function onDisconnect(data){
        console.log("Player disconnect: "+data.username);
    }

    function onRegisterPlayer(data){        
        console.log('Player connected: '+data.username);
        socket.broadcast.emit('player_registered', data.username);
    }

    function onStartGame(data){        
        console.log('Game started');
        socket.broadcast.emit('game_started', data);
    }

    function onWinGame(data){        
        console.log('Game won by:'+data.teamId);
        socket.broadcast.emit('game_won', data.teamId);
    }
};

module.exports = {
    socketManager
  }