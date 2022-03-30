let drawing = document.getElementById('drawing')
    //console.log(drawing)
if (drawing.getContext) {
    console.log(drawing);
    let imgURI = drawing.toDataURL('./image/1.jpg')
    let image = document.createElement('img')
    image.src = imgURI
    document.body.appendChild(image)
}