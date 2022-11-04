console.log("%cStarting...", "color:orange;font-size:18pt;"); //Start of program

//#region Basic Functionality

document.addEventListener('click', (e) => {
    // Retrieve id from clicked element
    let elementId = e.target.id;
    let elementAttr = e.target.getAttribute("attribute");
    var bookpage = document.getElementById("bookpage");
    var HTMLwindow = document.getElementById("HTMLwindow");
    var editor = document.getElementById("CssEditArea");
    // If element has id
    if (elementId !== '') {
        switch (elementId) {
            case "toggleTab":
                console.log("%cTOGGLETAB Clicked", "color:cyan;");
                var toggleTab = document.getElementById("toggleTab");

                var sidebar = document.getElementById("sidebar");
                sidebar.classList.toggle("sidebar-hidden");
                toggleTab.classList.toggle("sidebar-hidden-tab");
                break;

            default:
                console.log(elementId + " was Clicked.");
                break;
        };
    }
    // If element has attribute attribute
    else if (elementAttr !== '' && elementAttr !== null) {
        switch (elementAttr) {
            case "HTML":
                console.log("%cHTML TAB Clicked", "color:cyan;");
                // var tab = document.querySelectorAll('[attribute="HTML"]');
                // tab[0].classList.toggle("tabin");

                HTMLwindow.classList.remove("switchedout");
                HTMLwindow.classList.add("switchedin");

                if (editor.classList.contains("switchedin")) {
                    editor.classList.add("switchedout");
                    editor.classList.remove("switchedin");
                };
                if (bookpage.classList.contains("switchedin")) {
                    bookpage.classList.add("switchedout");
                    bookpage.classList.remove("switchedin");
                };


                break;
            case "CSS":
                console.log("%cCSS TAB Clicked", "color:cyan;");


                editor.classList.remove("switchedout");
                editor.classList.add("switchedin");
                if (HTMLwindow.classList.contains("switchedin")) {
                    HTMLwindow.classList.add("switchedout");
                    HTMLwindow.classList.remove("switchedin");
                };
                if (bookpage.classList.contains("switchedin")) {
                    bookpage.classList.add("switchedout");
                    bookpage.classList.remove("switchedin");
                };
                break;
            case "HELP":
                console.log("%cHELP TAB Clicked", "color:cyan;");


                bookpage.classList.remove("switchedout");
                bookpage.classList.add("switchedin");
                if (HTMLwindow.classList.contains("switchedin")) {
                    HTMLwindow.classList.add("switchedout");
                    HTMLwindow.classList.remove("switchedin");
                };
                if (editor.classList.contains("switchedin")) {
                    editor.classList.add("switchedout");
                    editor.classList.remove("switchedin");
                };
                break;
            default:
                console.log(elementAttr + " was Clicked.");
                break;
        };


    } else {
        console.log("An element without an id or attribute was clicked.");
    };
});

//#endregion

//#region READ AND RUN

//the following are constant regular expressions that match valid CSS syntax and other expressions.
const identifierRegEx = new RegExp(/[\w-[\]@:, ]*(?={)/); //matches foo{
const propertyRegEx = new RegExp(/[\w-]*(?=:[\w-%#" ]*(?=;))/); // matches foo:xxxx;
const valueRegEx = new RegExp(/(?<=:)[\w\d\s#%()]*(?=;)/); //matches :foo;
const hexRegEx = new RegExp(/(?<=#)[\w\d]*/); //matches #foo

// need it to: 
// 1. grab and store input. [DONE]
// 2. compare input against validator checks. [DONE]
//3a. IF input is "valid", then try running the code with CSSDOM. 
//3b. ELSE input is "invalid", and an appropriate error is returned, pointing out which line in RED. it may or may not be able to tell us which segment.


function validateText() {

    let lineInput = document.getElementsByClassName('cssLine');
    var lineText = [];

    for (let i = 0; i < lineInput.length; i++) {
        if (lineInput[i].innerHTML != "") {
            lineText.push(lineInput[i].innerHTML);
        }
    };

    var flag = true;
    for (let i = 1; i < lineText.length - 1; i++) {
        if (propertyRegEx.test(lineText[i])) {
            continue
        } else {
            var wrongLine = i;
            flag = false
            break
        }
    };

    if (!identifierRegEx.test(lineText[0])) {
        flag = false
        var wrongLine = 0;
    }
    if (lineText[lineText.length - 1] !== "}") {
        flag = false
        var wrongLine = lineText.length - 1;
    }


    if (flag == true) {
        return lineText;
    } else if (flag == false) {
        return [flag, wrongLine];
    }
}

function runCode() {
    if (validateText()[0] !== false) {
        var target = document.getElementById('TARGET');
        var textLines = validateText();
        for (let i = 1; i < textLines.length - 1; i++) {
            let property = textLines[i].match(propertyRegEx);
            let value = textLines[i].match(valueRegEx); //it matches multiple properties :D
            target.style.setProperty(property, value);
        };
    } else(
        console.log(validateText()[1])
    );
};


// let pattern = /\w+/g;
//             let temp = ed.match(pattern);
//             console.log(temp);
//             let att = temp[0];
//             let quant = String(temp[1]);
//             console.log(att);
//             console.log(temp);
//             dest.style.setProperty(att, quant);






//Part 2:: 

//3a->4. Make sure that the output can only be displayed within the contraints of the canvas. I could do this by
// creating an invisible container div on top of the canvas, and having the output displayed there.
// 5. The output should then be able to be validated. >>>Look into JSON for individual objects to compare against? level class with stage objects
// 6. The stage should be cleared or failed according.







//#endregion

//#region GAME_FUNCTIONS

//i will go over this l8r

//#endregion 

//#region GAME_CANVAS

var ctx = null;
var gameMap = [
    44, 45, 44, 44, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45,
    45, 45, 45, 45, 45, 45, 45, 44, 44, 45, 45, 45, 45, 45, 45,
    45, 45, 45, 45, 45, 45, 1, 1, 1, 44, 45, 45, 45, 45, 45,
    45, 45, 45, 45, 45, 45, 1, 1, 1, 44, 44, 45, 45, 45, 45,
    45, 45, 45, 44, 44, 44, 44, 43, 44, 44, 44, 44, 44, 44, 44,
    45, 45, 45, 44, 44, 44, 44, 43, 44, 45, 45, 44, 45, 45, 44,
    45, 45, 03, 41, 41, 41, 41, 42, 44, 44, 44, 44, 44, 44, 44,
    45, 44, 43, 44, 44, 44, 44, 45, 44, 44, 44, 44, 44, 44, 44,
    45, 45, 43, 44, 44, 44, 44, 44, 45, 45, 44, 44, 44, 44, 44,
    45, 45, 43, 44, 44, 44, 44, 44, 44, 44, 45, 45, 44, 44, 44,
];
var tileW = 16 * 5,
    tileH = 16 * 5;
var mapW = 15,
    mapH = 10;
// var currentSecond = 0,
//     frameCount = 0,
//     framesLastSecond = 0;

var ctx2 = null;
var gameMap2 = [
    0, 0, 0, 0, 0, 0, -01, -02, -03, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, -11, -12, -13, 0, 0, 0, 0, 51, 0,
    0, 0, 51, 0, 0, 0, -21, -22, -23, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, -31, -32, -33, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 51, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

window.onload = function() {
    ctx = document.getElementById('myScreen').getContext("2d");
    ctx2 = document.getElementById('layer2').getContext("2d");
    requestAnimationFrame(drawGame);
    requestAnimationFrame(drawGameTwo);
    // ctx.font = "bold 10pt sans-serif";
};




const tiles = new Image(); // Create new img element
tiles.src = 'Assets/tiles/tilemap.png';

function drawGame() {
    if (ctx == null) { return; }
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;


    // var sec = Math.floor(Date.now() / 1000);
    // if (sec != currentSecond) {
    //     currentSecond = sec;
    //     framesLastSecond = frameCount;
    //     frameCount = 1;
    // } else { frameCount++; }


    for (var y = 0; y < mapH; ++y) {
        for (var x = 0; x < mapW; ++x) {
            switch (gameMap[((y * mapW) + x)]) {
                case 44:
                    // ctx.fillStyle = "#557d55";
                    var sx = 64;
                    var sy = 64;
                    break;
                case 45:
                    // ctx.fillStyle = "#557d55";
                    var sx = 80;
                    var sy = 64;
                    break;
                case 43:
                    var sx = 48;
                    var sy = 64;
                    break;
                case 03:
                    var sx = 48;
                    var sy = 0;
                    break;
                case 41:
                    var sx = 16;
                    var sy = 64;
                    break;
                case 42:
                    var sx = 32;
                    var sy = 64;
                    break;
                case 33:
                    var sx = 48;
                    var sy = 48;
                    break;

                default:
                    // ctx.fillStyle = "#735b42";
                    var sx = 0;
                    var sy = 80;
            }

            // ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
            ctx.drawImage(tiles, sx, sy, 16, 16, x * tileW, y * tileH, tileW, tileH);
        }
    }

    // ctx.fillStyle = "#ff0000";
    // ctx.fillText("FPS: " + framesLastSecond, 10, 20);

    requestAnimationFrame(drawGame);
}

function drawGameTwo() {
    if (ctx2 == null) { return; }
    ctx2.webkitImageSmoothingEnabled = false;
    ctx2.imageSmoothingEnabled = false;


    // var sec = Math.floor(Date.now() / 1000);
    // if (sec != currentSecond) {
    //     currentSecond = sec;
    //     framesLastSecond = frameCount;
    //     frameCount = 1;
    // } else { frameCount++; }


    for (var y = 0; y < mapH; ++y) {
        for (var x = 0; x < mapW; ++x) {
            switch (gameMap2[((y * mapW) + x)]) {
                case 44:
                    // ctx.fillStyle = "#557d55";
                    var sx = 64;
                    var sy = 64;
                    break;
                case 45:
                    // ctx.fillStyle = "#557d55";
                    var sx = 80;
                    var sy = 64;
                    break;
                case 43:
                    var sx = 48;
                    var sy = 64;
                    break;
                case 03:
                    var sx = 48;
                    var sy = 0;
                    break;
                case 41:
                    var sx = 16;
                    var sy = 64;
                    break;
                case 42:
                    var sx = 32;
                    var sy = 64;
                    break;
                case 33:
                    var sx = 48;
                    var sy = 48;
                    break;
                case 51:
                    var sx = 16;
                    var sy = 80;
                    break;
                case -01:
                    var sx = 0;
                    var sy = 0;
                    break;
                case -02:
                    var sx = 16;
                    var sy = 0;
                    break;
                case -03:
                    var sx = 32;
                    var sy = 0;
                    break;
                case -11:
                    var sx = 0;
                    var sy = 16;
                    break;
                case -12:
                    var sx = 16;
                    var sy = 16;
                    break;
                case -13:
                    var sx = 32;
                    var sy = 16;
                    break;
                case -21:
                    var sx = 0;
                    var sy = 32;
                    break;
                case -22:
                    var sx = 16;
                    var sy = 32;
                    break;
                case -23:
                    var sx = 32;
                    var sy = 32;
                    break;
                case -31:
                    var sx = 0;
                    var sy = 48;
                    break;
                case -32:
                    var sx = 16;
                    var sy = 48;
                    break;
                case -33:
                    var sx = 32;
                    var sy = 48;
                    break;
                default:
                    // ctx.fillStyle = "#735b42";
                    var sx = 0;
                    var sy = 80;
            }

            // ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
            ctx2.drawImage(tiles, sx, sy, 16, 16, x * tileW, y * tileH, tileW, tileH);
        }
    }

    // ctx.fillStyle = "#ff0000";
    // ctx.fillText("FPS: " + framesLastSecond, 10, 20);

    requestAnimationFrame(drawGameTwo);
}




// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

//#endregion