const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const Democratic = presidents.filter(function(president) {
  if(president.party = "D")
  return true;
});

console.table(Democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const Republican = presidents.filter(function(president) {
  if(president.terms = 1 && president.party = "R") {
    return true;
  }
});

//3) return only the last three presidents

const lastthree = presidents.filter (function(president) {
  if(presidents.terms = 1 && party: "R")
}

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const twoterm = presidents.filter(function(president);
if(president.terms = 2 && party = "D") {
return true;
}
});
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const LBJ = presidents.some((pres) =>
pres.name === "Lyndon Johnsn" && pres.terms === 2 ? true : false
);

LBJ === true
  ? console.log("LBJ served 2 terms");
  : console.log("LBJ was 1 and done");