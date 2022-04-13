const make = function (type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
        if (typeof child != "string") {
            node.appendChild(child);
        } else {
            node.appendChild(document.createTextNode(child));
        }
    }
    return node;
};

const addAuthor = function () {
    let quoteElt = document.getElementById("quote");
    quoteElt.appendChild(
        make("footer",
            make("br"),
            "--",
            make("strong", "Leonardo da Vinci"),
            make("br"),
            "Italiaans schilder, ingenieur en musicus",
            make("br"),
            make("em", "1452-1519")
        )
    );
};

const addCitaat = function () {
    const newQuoteString = "Wie weinig denkt vergist zich vaak.";
    let quoteElt = document.getElementById("quote");
    quoteElt.appendChild(make("div", newQuoteString));
}