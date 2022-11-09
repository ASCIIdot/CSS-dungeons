var hintWrapper = document.getElementById("hint");
var hintTitle = document.getElementById("hintTitle");
var hintText = document.getElementById("hintText");
var helpLog = document.getElementById("bookpage");

class hint {
    constructor(id, title, descshorthand, desclong) {
        this.id = id;
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
        }, 3000);




    }
    async newHelpLog() {
        const tempwrap = document.createElement("toggleTitle");
        helpLog.appendChild(tempwrap);

        const temp = document.createElement("toggleTitle");
        temp.innerText = this.title;
        tempwrap.appendChild(temp);
        const tempArrow = document.createElement("toggleArrow");
        tempArrow.innerText = ">";
        tempwrap.appendChild(tempArrow);
        const tempContents = document.createElement("toggleText");
        tempContents.innerHTML = this.desclong;
        tempwrap.appendChild(tempContents);
    }
}

let hint0 = new hint(0, "WELCOME", "Check out the HELP tab to get started!", "This is your help Log. You will see <e>Hints</e> and <e>Quests</e> logged here.<br>You can click on the title of any entry here to toggle its visibility.");
hint0.flag();