const weekend = () =>
    (new Date().getDay() === 0 || new Date().getDay() === 6) ? "prettig weekend" : "fijne werkweek";

console.log(weekend());