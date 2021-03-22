class Player {
    constructor () {
        this.index = null;
        this.distance = 0;
        this.name = null ;

    }
    getPlayerCount () {
        //refer to gameState location in DB
        var playerCountRef = database.ref ('/playerCount');
        // listen to gameState changes in DB
        playerCountRef.on ("value", 
                        function(data){
                            playerCount = data.val ();
                            console.log ("START1 :"+ playerCount);
                        }
        );        
    }
    updatePlayerCount (count) {
         
    var playerCountRef = database.ref ();
        playerCountRef.update ({"playerCount" : count}) ;
    }
    
    updatePlayerNameAndDistance () {
        console.log (playerCount);
        var playerIndex = "/players/player"+this.index;
        console.log (playerIndex);
        database.ref (playerIndex).set ({name : this.name,
                                         distance :this.distance});
    }
    static getPlayerInfo () {
        var playersInfoRef = database.ref ("/players");
        playersInfoRef.on ("value", (data)=>{
            allPlayers = data.val ();
        });
    }
}