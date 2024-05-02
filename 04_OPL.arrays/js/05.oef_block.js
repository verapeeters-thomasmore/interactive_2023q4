const volume = (total, num) => total * num;
const volumeDifference = (block1, block2) =>
    Math.abs(block1.reduce(volume) - block2.reduce(volume)) ;