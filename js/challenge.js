// DOMContentLoaded event on the document
// lets stop the default behaviour of the submit button
// lets get the counter going up every 1000ms

document.addEventListener('DOMContentLoaded', init); // I like to initialize after the DOM loads the initial content from the .html and .css files

function init(){
    // init will run code to initialize the page
    // lets do the heart button
    document.getElementById('heart').addEventListener('click', heartLogic);
    // const heartButton = document.getElementById('heart');
    // heartButton.addEventListener('click', heartLogic);

    // lets do the pause button next
    document.getElementById(`pause`).addEventListener('click', pauseLogic);
    //const pauseButton = document.getElementById(`pause`);
    //pauseButton.addEventListener('click', pauseLogic);

    // lets get the plus and minus button
    // minus below
    document.getElementById('minus').addEventListener('click', (ev) => {
        count--;
        document.getElementById('counter').innerText = count;
    })
    // plus below
    document.getElementById('plus').addEventListener('click', (ev) => {
        count++;
        document.getElementById('counter').innerText = count;
    })

    // finally, lets work on that submit form
    document.getElementById('submit').addEventListener('click', commentFormLogic);
}

//#region  Like Functionality
let likeCount;
function heartLogic(event){
    // try to find the working area
    //console.log(event);
    let likeComment = document.getElementById(`like${count}`);
    //console.log(`this is the place where likes go: `);
    //console.log(likeComment);
    if(likeComment === null){
        //console.log(`there is no place where likes go`);
        // if there's no working area, make one
        likeComment = document.createElement('li');
        likeComment.id = `like${count}`;
        likeCount = 1;
        likeComment.innerText = `${count} has ${likeCount} likes!!`;
        // gotta find where we're gonna put that new item
        const workingArea = document.querySelector(`.likes`);
        workingArea.appendChild(likeComment); // and add it to!
    }
    else{
        /*
        My idea is to turn the comment into an array, get the 3rd element in the array
        with index of 2, and change it to the like count, and turn that back into a string
        */
       likeCount++;
        let commentArray = likeComment.innerText.split(' ');
        commentArray[2] = likeCount;
        //console.log(likeCount);
        //console.log(`the likecount^^^`);
        likeComment.innerText = commentArray.join(' ');
    }
}
//#endregion

//#region Counter Stuff
let isPaused = false;
let count = 0;
setInterval(counterLogic,1000)

function counterLogic(){
    // console.log(counter);
    if(isPaused === false){
        const counter = document.getElementById('counter');
        count++;
        counter.innerText = count;
    }
}

function pauseLogic(event){
    //console.log(event.target);
    isPaused = !isPaused;
    // gotta take the event, grab it's target's parent, and make the buttons nonselectable
    // all except pause button, of course!
    if(isPaused === true){
        // disable all buttons
        document.getElementById('minus').setAttribute('disabled', 'disabled');
        document.getElementById('plus').setAttribute('disabled', 'disabled');
        document.getElementById('heart').setAttribute('disabled', 'disabled');
        document.getElementById('pause').innerText = 'resume';

    }
    else {
        // enable paused buttons
        document.getElementById('minus').removeAttribute('disabled');
        document.getElementById('plus').removeAttribute('disabled');
        document.getElementById('heart').removeAttribute('disabled');
        document.getElementById('pause').innerText = 'pause';
    }
}
//#endregion

//#region  Sumbit Form
function commentFormLogic(event){
    event.preventDefault();
    // const userComment = document.getElementById("comment-input");
    const comment = document.createElement('p');
    comment.innerText = document.getElementById("comment-input").value;
    // const commentList = document.getElementById('list');
    document.getElementById('list').appendChild(comment);
    // commentList.appendChild(comment);
}
//#endregion