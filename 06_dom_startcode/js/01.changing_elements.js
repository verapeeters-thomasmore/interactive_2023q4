function addExtraListItem() {
    const node = document.createElement("li");
    node.innerHTML = "Item 5"
    document.getElementById("myList").appendChild(node);
}

function insertNewListItem() {
    const firstListItemElement = document.getElementById("firstItem");
    const newListItemElement = document.createElement("li");
    newListItemElement.id = "newItem";
    newListItemElement.innerHTML = "Nieuw item";
    firstListItemElement.parentElement.insertBefore(newListItemElement, firstListItemElement);
}

function removeFirstListItem() {

    const itemEl = document.getElementsByTagName("li")[0]
    if (itemEl)
        itemEl.remove();
}

function addItemBeforeFirstLiElement() {
    const firstLiElement = document.getElementsByTagName("li")[0];
    const newListItemElement = document.createElement("li");
    newListItemElement.id = "newItem";
    newListItemElement.innerHTML = "Nieuw item";
    firstLiElement.parentElement.insertBefore(newListItemElement, firstLiElement);
}

