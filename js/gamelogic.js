function gameLogic(){
    let room = 1
    while (true){
        switch(room){
            case 1:
                room = room1();
                break;
            case 2:
                room = room2();
                break;
            case 3:
                room = room3();
            
            ////etc for each room in the game

            default:
                room = 1;
        }

        if (isDead){
            alert("For you the game is over")
            break;
        }

    }

}