let hadKey = false;

function room1(){
    alert("You are in a cold dark room");
    alert("There is an exit to the East");
    let inp = prompt("Where do you want to go");
    if(inp == "E"){
        return 2;
    }
    alert("That is not an option");
    return 1; //Goes back to the start in case of a miss type
}

function room2(){
    alert("The room is lit by a candle the flickeing light makes you sick")
    alert("You can see an exit West, North and South")
    let inp = prompt("Where do you want to go");
    if(inp == "W"){
        return 1;
    }
    if(inp == "N"){
        return 3;
    }
    if(inp == "S"){
        return 4
    }
    alert("That is not an option");
    return 2; //Goes back to the start in case of a miss type
}