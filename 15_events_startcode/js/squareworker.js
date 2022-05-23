addEventListener("message", event => {
    console.log(event);
    // imiteer een lange bewerking in het worker script
    var currentTime = new Date().getTime();
    while (currentTime + 10000 >= new Date().getTime()) {
    }
    postMessage(event.data * event.data);
});