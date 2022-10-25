import { getSizes, setSize } from "./database.js"
const sizes = getSizes()

//if the the target's name is size, set the size to the object;s value.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }  
)

//User Chose Size
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(`User chose size ${event.target.value}`)
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

