const hintWrapper = document.getElementById('hint')
const hintTitle = document.getElementById('hintTitle')
const hintText = document.getElementById('hintText')
const helpLog = document.getElementById('bookpage')

class HINT {
    constructor(id, timeout, type, title, descshorthand, desclong) {
        this.id = id
        this.timeout = timeout
        this.type = type
        this.title = title
        this.descshorthand = descshorthand
        this.desclong = desclong
    }

    async flag() {
        hintWrapper.classList.remove('alert')
            // add active class, removes inactive class, then after a timeout it swaps back.
        hintTitle.innerHTML = this.title
        hintText.innerHTML = this.descshorthand
        hintWrapper.classList.add('alertActive')
        setTimeout(() => {
            hintWrapper.classList.remove('alertActive')
            hintWrapper.classList.add('alert')

            this.newHelpLog()
        }, this.timeout)
    }

    async newHelpLog() {
        const tempwrap = document.createElement('toggleWrap')
        helpLog.appendChild(tempwrap)

        const temp = document.createElement('toggleTitle')
        temp.innerText = this.title
        tempwrap.appendChild(temp)
        temp.id = this.id
            // temp.classList.add("collapsible");
        const tempContents = document.createElement('toggleText')
        tempContents.innerHTML = this.desclong
        $(temp).after(tempContents)
        const tempArrow = document.createElement('toggleArrow')
            // tempArrow.innerText = ">";
        $(temp).after(tempArrow)
            // tempContents.classList.add("content");
    }
}

const hint1 = new HINT('ht1', 4000, 'hint', "LET'S GO", 'Follow the intructions in the HELP tab!', "Every time a new hint is shown, dont forget to check this tab!<br>But without further ado;<br>The three tabs above this- yes, <e>'CSS'</e>, <e>'HTML'</e>, and <e>'HELP'</e>, all can be clicked.<br><e>CSS</e> is where you are going to be typing your input line by line. <e>HTML</e> is where you can see the element you will be applying your style to. <e>Here</e> is where you can access information you may need to continue. Check out HTML to continue.")
const hint0 = new HINT('ht0', 4000, 'hint', 'WELCOME', 'Check out the HELP tab to get started!', 'This is your help Log. You will see <e>Hints</e> and <e>Quests</e> logged here.<br>You can click on the title of any entry here to toggle its visibility.')

const hintOpacity = new HINT('htOpacity', 3500, 'hint', 'OPACITY', 'You can set the opacity of any element with opacity:[0 to 1];', "<e>Opacity</e> refers to how see-through an element is.<br>The way you use this property is:<br><syntax>opacity:[value];</syntax><br>Where <i>value</i> is a number between 0 and 1, <e>0</e> being <e>invisible</e> and <e>1</e> being <e>completely visible</e>.<br><txt style='opacity:0.5;'>This text has opacity:0.5; applied to it.</txt>")
const hintColor = new HINT('htColor', 3500, 'hint', 'COLOR', 'Color sets the colour of the text, using color:[colourName¦hexCode¦RGB];', "<e>Color</e> is a property that defines the colour of the text. Unfortunately, using the american spelling of it.<br>The way you use this property is:<br><syntax>color:[colourName¦hexCode¦RGBa];</syntax><br><e>colourName</e> is a word for a colour. These names are already defined- you can find a full list <a href='https://htmlcolorcodes.com/color-names/'>here.</a><br><e>hexCodes</e> are a special code which look like <e>#</e>abcdef. <a href='https://www.hexcolortool.com/'>Here</a> is a colour picker that generates a hex code. You may see it also generates a <e>RGBa</e> code, which works similarly.<br>RGBa are written as <e>rgba(number,number,number,0 to 1)</e>, where all numbers are between 0 and 255. <e>a</> is Alpha, which is another name for<e> opacity</e>.")

hint0.flag()
setTimeout(() => {
    hint1.flag()
}, 5000)

function getHint(flag) {
    if (flag == 0) {
        hintColor.flag()
    }
}