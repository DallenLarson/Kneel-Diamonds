import { getOrders, getMetals, getStyles, getSizes } from "./database.js"

const buildOrderListItem = (order) => {
    const sizes = getSizes()
    const styles = getStyles()
    const metals = getMetals()
    const foundMetal = metals.find(
        (metal) => {
        
                return metal.id === order.metalId
            
        }
    )
    const foundSizes = sizes.find(
        (size) => {
        
                return sizes.id === size.metalId
            
        }
    
    )
    const foundStyles = styles.find(
        (style) => {
        
                return styles.id === style.metalId
            
        }
    
    )
    
    const totalCost = foundMetal.price + foundSizes.price + foundStyles.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    

    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}