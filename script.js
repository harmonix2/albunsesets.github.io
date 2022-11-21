
let str = `- youtube johnny m lost in the middle of nowhere

  Lost In The Middle Of Nowhere | 2017 Progressive House Mix

- youtube johnny m serenity

  Johnny M - Serenity | 2022 Deep Progressive House Set

- youtube johnny m simply deep

  Simply Deep | 2017 Mixed By Johnny M - YouTube

- youtube johnny m diving to deep

  Deep House Set | Winter 2017 Mixed By Johnny M - YouTube

- youtube Night Sounds 18 Dub Techno

  Night Sounds 18 Dub Techno (TRACKLIST) - YouTube

- youtube Night Sounds 16 Dub Techno

  Night Sounds 16 Dub Techno (TRACKLIST) - YouTube

- 2018 Deep Progressive House Set Mixed By Johnny M

  2018 Deep Progressive House Set | Mixed By Johnny M

- youtube anjunabeats 03

  Anjunabeats: Vol. 3 (Mixed By Above & Beyond - YouTube

- youtube anjunabeats: vol. 04

 Anjunabeats: Vol. 4 (Mixed By Above & Beyond - YouTube

______________________________________________________________________________
- youtube in search of sunrise 5

  Tiësto ‎– In Search Of Sunrise 5: Los Angeles [Disc 1] - YouTube

  1:17:40

  Tiësto ‎– In Search Of Sunrise 5: Los Angeles [Disc 2] - YouTube

  1:17:47

_______________________________________________________________________________
- youtube markus schulz ibiza 06 part 1

  Markus Schulz - Ibiza '06 part 1 - YouTube

  1:18:17

- youtube markus schulz ibiza 06 part 2

  Markus Schulz - Ibiza '06 part 2 - YouTube

  1:17:22
__________________________________________________________________________
- youtube markus schulz amsterdam '08 part 1

  Markus Schulz - Amsterdam '08 part 1 - YouTube

- youtube markus schulz amsterdam '08 part 2

  Markus Schulz - Amsterdam '08 part 2 - YouTube
_______________________________________________________________________________
- youtube "the angels are with us christian monique remix"

  The Angels Are With Us (Christian Monique Remix) - YouTube

  Ricardo Piedra - Topic

- youtube "matter & universal harmonics acacia original mix"

  Matter & Universal Harmonics - Acacia (Original Mix ...

  Progressive House Worldwide
`

let output = document.getElementById("output")
let splitted = str.split("\n")

console.log(splitted)

let maskDictionary = splitted.map((line) => (line.substring(0,2) == "- ") ?
                                { text: line.replace("- ", ""), label: "search" } :
                                { text: line, label: "rest" })

maskDictionary = maskDictionary.filter((el) => (el.text !== ""))
                              .filter((el) => (el.text.slice(0, 3) !== "___"))

console.log(maskDictionary)


let formattedLists = maskDictionary.reduce((prev, item) => {
    if (item.label == "search") {
      console.log("search")
      return prev.concat([[item.text]])
    }
    console.log("rest")
    let withoutLast = prev.slice(0, prev.length - 1)
    let last = prev[prev.length - 1].concat([item.text])
    return [...withoutLast, last]
  }, [])

console.log(formattedLists)

let listsHTML = formattedLists.reduce((prev, item) =>
  prev + createListTemplate(item), "")

output.innerHTML += listsHTML

function createListTemplate(item) {
  let searchItem = item[0]
  let restItems = item.slice(1, item.length)
  let restTemplates = restItems.reduce((previous, el) =>
    previous + createRestItemTemplate(el) + "\n", "")

  let rowTemplate = `
    <div class="row">
      <div class="col-sm-6">
        <ul class="items-list-class list-group p-2 mb-2">
          <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
            <input class="checkbox-class form-check-input me-1" type="checkbox" value="">
            <label class="text-to-copy-class form-check-label" for="firstCheckbox">${searchItem}</label>
            <span class="clipboard-span-class"><i class="bi bi-clipboard"></i></span>
          </li>
          ${restTemplates}
        </ul>
        </div>
      </div>
    `

    return rowTemplate

    function createRestItemTemplate (restItem) {
      let restItemTemplate = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${restItem}
        </li>
      `
      return restItemTemplate
    }
}





/*__________________________________________________*/
class ClipboardState {
  clipboardSpan
  labelToCopy
  checkbox
  currentIconState = "ready"
  timer
  delayTime


  constructor (listElement, delayTime) {
    this.clipboardSpan = listElement.getElementsByClassName("clipboard-span-class")[0]
    this.labelToCopy = listElement.getElementsByClassName("text-to-copy-class")[0]
    this.checkbox = listElement.getElementsByClassName("checkbox-class")[0]
    this.timer = undefined
    this.delayTime = delayTime

    this.clipboardSpan.onmouseenter = () => {
      switch (this.currentIconState) {
        case "ready":
          this.currentIconState = "ready-over"
          this.replaceClipboardIcon ("clipboard-fill")

          break;

        case "checked-left":
          this.currentIconState = "checked-over"
          if (this.timer !== undefined) {
            window.clearTimeout(this.timer)
          }
          this.replaceClipboardIcon ("clipboard-fill")

          break;

        case "checked-not-left":
          console.log("Checked, but cursor has not left the span.")
          break;
        default:
          console.log("onmouseenter default")
      }
    }

    this.clipboardSpan.onmouseleave = () => {
      switch (this.currentIconState) {
        case "ready-over":
            this.currentIconState = "ready"
            this.replaceClipboardIcon("clipboard")
          break;

        case "checked-over":
            this.currentIconState = "ready"
            this.replaceClipboardIcon ("clipboard")
          break;

        case "checked-not-left":
          this.currentIconState = "checked-left"
          break;
        default:
          console.log("onmouseleave default")
      }
    }

    this.clipboardSpan.onclick = () => {
      switch (this.currentIconState) {
        case "ready":
            console.log("Clicked before hover")
          break;

        case "ready-over":
          this.copyAndSetChecked ()
          break;

        case "checked-over":
          this.copyAndSetChecked ()
          break;

        case "checked":
            console.log("Clicked before hover")
          break;

        default:
          console.log("onclick default")
      }
    }
  }

  createBSIcon (iconName) {
    let icon = document.createElement("i")
    icon.classList.add("bi", "bi-" + iconName)

    return icon
  }

  replaceClipboardIcon (iconName) {
    let icon = document.createElement("i")
    icon.classList.add("bi", "bi-" + iconName)
    this.clipboardSpan.firstElementChild.replaceWith(icon)

    return icon
  }

  copyAndSetChecked () {
    navigator.clipboard.writeText(this.labelToCopy.innerHTML).then(
      () => {
        this.currentIconState = "checked-not-left"
        this.replaceClipboardIcon ("check2")

        console.log("writeText success")

        this.timer = setTimeout (() => {
          this.currentIconState = "ready"
          this.replaceClipboardIcon ("clipboard")
        }, this.delayTime)

        this.checkbox.checked = true
      },
      () => {
        console.log("Clipboard write failed")
      }
    );
  }
}

let itemsListsElements = document.getElementsByClassName("items-list-class")
let arr = new Array(...itemsListsElements)
let clipboardStates = []
arr.forEach((el) => clipboardStates.push(new ClipboardState(el, 2200)))

let redList = ["youtube johnny m serenity",
                "youtube markus schulz amsterdam '08 part 2"]

let redListMatches = arr.filter((el) => {
    let text = el.querySelector(".text-to-copy-class").innerHTML
    return redList.indexOf(text) !== -1
  })

redListMatches.map((match) => match.firstElementChild.classList.replace("list-group-item-info", "list-group-item-danger"))
