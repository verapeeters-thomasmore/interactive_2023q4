const studenten = [
  { naam: "Sneeuwwitje", Java: "81", Javascript: "65", UserInterface: "90", Database: "50" },
  { naam: "Roodkapje", Java: "41", Javascript: "25", UserInterface: "70", Database: "90" },
  { naam: "Hans", Java: "51", Javascript: "85", UserInterface: "80", Project: "60" },
  { naam: "Griet", Java: "70", Javascript: "45", UserInterface: "90" },
  { naam: "De boze wolf", Java: "15", Javascript: "65", UserInterface: "40", Project: "40" },
  { naam: "De jager", Project: "80" },
  { naam: "Grootmoeder", Javascript: "80", Project: "60" },
];

// Oefening 3
console.log("Studenten die Java volgen:");
console.log(studentenVoorVak(studenten, "Java"));
console.log("Studenten die Projecten volgen:");
console.log(studentenVoorVak(studenten, "Project"));
console.log("Studenten die Database volgen:");
console.log(studentenVoorVak(studenten, "Database"));

// Oefening 4
console.log("Punten Java:");
console.log(puntenVoorVak(studenten, "Java"));
console.log("Punten Projecten:");
console.log(puntenVoorVak(studenten, "Project"));
console.log("Punten Database:");
console.log(puntenVoorVak(studenten, "Database"));

// Oefening 5
console.log("Gemiddelde Java:");
console.log(gemiddeldeVoorVak(studenten, "Java"));
console.log("Gemiddelde Projecten:");
console.log(gemiddeldeVoorVak(studenten, "Project"));
console.log("Gemiddelde Database:");
console.log(gemiddeldeVoorVak(studenten, "Database"));
