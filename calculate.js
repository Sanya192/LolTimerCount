let runtime = "0:00";

let goodTemplate;
let okayTemplate;
let badTemplate;

function refreshStrings() {
  goodTemplate = `
      <div class="col">
          <div class="results">
          <div class="title">Here's what it looks if the game started at 0:00</div> 
          <div class="circle circlegood">
              <p>
                  ${runtime}
              </p>
          </div>
          <div class="desc">you did a great run</div>
          </div>
      </div>
      `;
  okayTemplate = `
  <div class="col">
      <div class="results">
      <div class="title">Here's what it looks if the game started at 0:00</div> 
      <div class="circle ">
          <p>
          ${runtime}
  
          </p>
      </div>
      <div class="desc">This was nice, but you can impove more :).</div>
      </div>
  </div>
  `;
  badTemplate = `
  <div class="col">
      <div class="results">
      <div class="title">Here's what it looks if the game started at 0:00</div> 
      <div class="circle circlebad">
          <p>
          ${runtime}
          </p>
      </div>
      <div class="desc">Practice more, you will gonna get it :).</div>
      </div>
  </div>
  `;
}
/**
 * Handles getting data from the HTML.
 * Also puts back the created data
 */
function clickedOnCalculate() {
  let start = document.getElementById("startTime").value;
  let end = document.getElementById("endTime").value;
  let runtimeinSeconds = parseInt(calculateTimeinSeconds(start, end));
  runtime = addSpawnTimeandFormat(runtimeinSeconds);
  console.log(runtimeinSeconds);
  console.log(runtime);
  outputDiv = document.getElementById("results");
  refreshStrings();
  // 3:10 (game time) -1:30 (spawnTime)
  if (runtimeinSeconds < 100) {
    outputDiv.innerHTML = goodTemplate;
  }
  // 3:20 (game time) -1:30 (spawnTime)
  else if (runtimeinSeconds < 110) {
    outputDiv.innerHTML = okayTemplate;
  } else {
    outputDiv.innerHTML = badTemplate;
  }
}

/**
 * Calculates the difference between the startTime and endTime.
 * Number format:  "0:00"
 *
 * @param {string} startTime
 * @param {string} endTime
 */
function calculateTimeinSeconds(startTime, endTime) {
  let start = startTime.split(":");
  let startSeconds = parseInt(parseInt(start[0]) * 60 + parseInt(start[1]));
  let end = endTime.split(":");
  let endSeconds = parseInt(parseInt(end[0]) * 60 + parseInt(end[1]));
  let resultSeconds = parseInt(endSeconds - startSeconds);
  return resultSeconds;
}

function addSpawnTimeandFormat(resultSeconds) {
  resultSeconds = parseInt(resultSeconds);
  let spawnTimeSeconds = 90;
  let outputTime = `${Math.floor((resultSeconds + spawnTimeSeconds) / 60)}:${
    (resultSeconds + spawnTimeSeconds) % 60
  }`;
  return outputTime;
}
