var hintWrapper = document.getElementById("hint");
var hintTitle = document.getElementById("hintTitle");
var hintText = document.getElementById("hintText");
var helpLog = document.getElementById("bookpage");

class HINT {
    constructor(id, timeout, title, descshorthand, desclong) {
        this.id = id;
        this.timeout = timeout;
        this.title = title;
        this.descshorthand = descshorthand;
        this.desclong = desclong;
    }
    async flag() {
        hintWrapper.classList.remove("alert");
        // add active class, removes inactive class, then after a timeout it swaps back.
        hintTitle.innerHTML = this.title;
        hintText.innerHTML = this.descshorthand;
        hintWrapper.classList.add("alertActive");
        setTimeout(() => {
            hintWrapper.classList.remove("alertActive");
            hintWrapper.classList.add("alert");

            this.newHelpLog()
        }, this.timeout);

    }
    async newHelpLog() {
        const tempwrap = document.createElement("toggleWrap");
        helpLog.appendChild(tempwrap);

        const temp = document.createElement("toggleTitle");
        temp.innerText = this.title;
        tempwrap.appendChild(temp);
        temp.id = this.id;
        // temp.classList.add("collapsible");
        const tempContents = document.createElement("toggleText");
        tempContents.innerHTML = this.desclong;
        $(temp).after(tempContents);
        const tempArrow = document.createElement("toggleArrow");
        // tempArrow.innerText = ">";
        $(temp).after(tempArrow);
        // tempContents.classList.add("content");
    }
}


var hint1 = new HINT("ht1", 4000, "HEY IS THIS THING ON", "Can you hear me?", "Oh you can! I was really getting worried there!")
var hint0 = new HINT("ht0", 1000, "WELCOME", "Check out the HELP tab to get started!", "This is your help Log. You will see <e>Hints</e> and <e>Quests</e> logged here.<br>You can click on the title of any entry here to toggle its visibility.");
hint0.flag();
setTimeout(() => {
    hint1.flag();
}, 5000);