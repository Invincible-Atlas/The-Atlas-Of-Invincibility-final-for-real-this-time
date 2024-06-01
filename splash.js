const splashList = [
    "Yes I use Comic Sans. Cry about it.",
    "TROGDOOOOOOOOOOOR!!!",
    "curl parrot.live",
    "Tips for teenagers: Your hair is fine, and don't tell the cops anything",
    "Life is like an egg: sometimes it has chickens in it",
    "placeholder",
    "Fus... RO-DAH!",
    "drop tables *",
    "Pootis",
    "Sandvich",
    "Powershell is better than Batch. Fight me",
    "I used to be an adventurer like you. Then I took an arrow to the knee.",
    "Let me guess. Someone stole your sweet roll?",
    "No lollygaggin'",
    "Why do we park on driveways and drive on parkways?",
    "Oh my god. Who touched Sasha? WHO TOUCHED MY GUN!?",
    // "So listen up boy, or p0rnography starring your mother will be the second worst thing that has happened to you today.",
    "Can she make a grilled cheese?",
    "We have you surrounded, at least from this side!",
    "Um... swallow a soul gem.",
    "'This... is a bucket.' 'Dear god'",
    "Last one alive, LOCK THE DOOR!",
    "And now he is here to f*** us!" ,
    // "And before you can say step 5, we close on broadway, take our 2 million, and go to Rio!",
    // "I think, therefor, I am. You don't, therefore, you are not.",    "That -Sun Tzu",
    "Reload for another message",
    "Think fast, chucklenuts!",
    "a",
    "Also try minecraft",
    "To be, or not to be? That is a question.",
    "Who needs good contrast anyway",
    "On god fr fr"       



















]
//displays a random message
    var splashtextList = document.getElementsByClassName("splashtext");
    for(i in splashtextList){
        splashtextList[i].innerHTML = splashList[randInt(0,splashList.length-1)];
    }
