const breder = function() {
    console.log("BREDER");
    let elt = document.getElementById("column2");
    let p = elt.getElementsByTagName("p")[0];
    p.setAttribute("style", `height: ${p.offsetHeight+20}px;`)
    //elt.setAttribute("style", `width: ${elt.offsetWidth+20}px;`);
}

const positie = function (kolom) {
    let elt = document.getElementById(kolom);
    let pos = elt.getBoundingClientRect();
    alert("offsetWidth=" + elt.offsetWidth + " ; offsetHeight=" + elt.offsetHeight + "\n" +
        "clientWidth=" + elt.clientWidth + " ; clientHeight=" + elt.clientHeight + "\n\n" +
        "top=" + pos.top + " ; bottom=" + pos.bottom + "\n" +
        "left=" + pos.left + " ; right=" + pos.right + "\n\n" +
        "offsetX=" + window.pageXOffset + " ; offsetY=" + window.pageYOffset);
};

const move = function (kolom) {
    let elt = document.getElementById("column2");
    //let pElts = elt.getElementsByTagName("p");
    let pElts = document.querySelectorAll("#column2 > p");
    let newElt = null;
    if (pElts.length<2) {
        let pElt = pElts[0];
        newElt = document.createElement("p");
        elt.insertBefore(newElt, pElt);
    } else {
        newElt = pElts[0];
    }
    newElt.setAttribute("style", "height:" + (newElt.offsetHeight + 20) + "px;");
}