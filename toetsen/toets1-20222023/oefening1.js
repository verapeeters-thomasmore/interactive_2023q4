function pricePerParticipant(participants, totalCostForWorkshop, minParticipants, maxParticipants) {
    if (participants < minParticipants) return -1;
    return Math.max(totalCostForWorkshop / Math.min(participants, maxParticipants), 20);
}

console.log(pricePerParticipant(10, 1000, 1, 20)); //100
console.log(pricePerParticipant(5, 1000, 1, 20)); //20
console.log(pricePerParticipant(20, 700, 1, 20)); //35
console.log(pricePerParticipant(10, 100, 1, 20)); //20 because minimum price is 20
console.log(pricePerParticipant(20, 1000, 1, 10)); //100 because no more than 10 participants
console.log(pricePerParticipant(20, 1000, 1, 5)); //200 because no more than 5 participants
console.log(pricePerParticipant(10, 1000, 20, 5)); //-1 because less then 20 participants

