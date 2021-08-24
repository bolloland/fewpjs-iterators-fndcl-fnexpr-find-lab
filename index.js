myArray = [
  {year: "2018", result: "L"},
  {year: "2017", result: "X"},
  {year: "2016", result: "N/A"}
]


function superbowlWin(array) {
  let yearWon = array.find(obj => obj["result"] === "W")
  if (yearWon) {
      console.log(yearWon["year"])
      return yearWon["year"]
  } 
}

  // for(const obj of array) {
    //     obj.find( (res) => {
    //         obj["result"] === "W"
    //     })
    // }