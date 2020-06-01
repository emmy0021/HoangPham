
var menuTxt = document.getElementsByClassName('txt')[0];

var buttons = document.getElementsByClassName('button');
var nameBtn = buttons[0];
var menuBtn = buttons[1];
var aboutMeBtn = buttons[2];
var contactBtn = buttons[3];

var groupBtns = [aboutMeBtn,contactBtn];

console.log(aboutMeBtn.innerHTML);

var ul = document.getElementById('ul');

var mainContent = document.getElementById('mainContent');

var open = true;


menuBtn.addEventListener('click', function (e) {
    moveFromTo(mainContent, "20vh", "29vh",open);
    clckTextColor(menuTxt,open);
    hide(ul,open);
    showBorder(menuBtn,open);
    open = !open;
});
nameBtn.addEventListener('click', function () {
    //console.log("click " + IO);
        

    setText(mainContent, "Main page");
    
    if(!open){
        hide(ul,open);
        showBorder(menuBtn,open);
        clckTextColor(menuTxt,open);
        open = !open;
        
        moveFromTo(mainContent, "29vh", "20vh",open);
    }
    

});

for(var element = 0;element<groupBtns.length;element++){
    groupBtns[element].addEventListener('click', function (e) {

        moveFromTo(mainContent, "20vh", "29vh",open);
        hide(ul,open);
        showBorder(menuBtn,open);
        clckTextColor(menuTxt,open);
        setText(mainContent, aboutMeBtn.innerHTML,open);
        open = !open;

});
}


function setText(e, txt = "") {
    //console.log("setting text to " + txt);
    //console.log(e);
    
        e.innerHTML = txt;

}



function moveFromTo(e, from, to, o) {
    if (o) {
        e.style.top = to;

    } else {
        e.style.top = from;
    }
}

function clckTextColor(elmnt,o) {
    if (o) {
        elmnt.style.color = "red";
    } else {
        elmnt.style.color = "var(--text-color)";
    }
}

function hide(e,o) {
    if (open) {
        e.style.visibility = "visible";
    } else {
        e.style.visibility = "hidden";
    }
}

function showBorder(e,o) {
    if (o) {
        e.style.border = "#C0B8C3 solid 1px";
    } else {
        e.style.border = "#C0B8C3 solid 0px";
    }
}

function changeBackground(e, color,o) {

    if (o) {
        e.style.background = color;
    } else {
        e.style.background = "transparent";

    }
}

function t(e,o) {
    if (o) {

    } else {

    }
}