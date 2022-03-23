function newImage(src, left, bottom) {
    let anyImage = document.createElement('img')
    anyImage.src = src
    anyImage.style.position = "fixed"
    anyImage.style.left = left
    anyImage.style.bottom = bottom
    document.body.append(anyImage)
    return anyImage
}

function newItem(src, left, bottom) {
    let anyItem = newImage(src, left, bottom);
    anyItem.addEventListener("dblclick", function() {
        anyItem.remove(anyItem)
    })
    
}

function background(source, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(source, left + w * 100 + 'px', bottom + h * 100 + 'px') 
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

background('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


newImage("assets/green-character.gif", "100px", "100px")
newImage("assets/pine-tree.png", "450px", "200px")
newImage("assets/tree.png", "200px", "300px")
newImage("assets/pillar.png", "350px", "100px")
newImage("assets/crate.png", "150px", "200px")
newImage("assets/well.png", "500px", "425px")
newItem("assets/sword.png", "500px", "405px")
newItem("assets/shield.png", "165px", "185px")
newItem("assets/staff.png", "600px", "100px")
