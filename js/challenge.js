//See the timer increment every second once the page has loaded. 
let count = 0;
let intervalID;
const timerText = document.querySelector('#counter')

document.addEventListener('DOMContentLoaded', () => {
  intervalID = setInterval(counter, 1000)
})

function counter() {
  count += 1;
  timerText.textContent = count;
}

// Manually increment and decrement the counter using the plus and minus buttons.
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');

function minusBtn() {
  minus.addEventListener("click", () => {
    timerText.textContent = count--;
  })
}
minusBtn();

function plusBtn() {
  plus.addEventListener("click", () => {
    timerText.textContent = count++;
  })
}
plusBtn();

//"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
const heart = document.querySelector('#heart')
heart.addEventListener("click", () => {
  const message = document.querySelector(".likes")
  let heartCount = timerText.textContent;
  const likes = document.getElementById(`likes-${heartCount}`)

  if (likes) {
    const fullText = likes.innerText
    const words = fullText.split(' ')
    console.log(words)
    const number = parseInt(words[4]) + 1;
    words[4] = number;
    likes.innerText = words.join(' ')
  } else {
    const li = document.createElement("li")
    li.id = `likes-${heartCount}`
    li.textContent = `${heartCount} has been liked 1 times`
    message.append(li);
  }
})
// const heart = document.querySelector('#heart');
// let likes = {}
// let li = document.createElement("li");
// let message = document.querySelector(".likes")
// //function heartBtn () {
//   heart.addEventListener("click", () => {
//     let heartCount = document.querySelector('#counter').textContent;
//     if (likes[heartCount]){
//      likes[heartCount] +=1;      
//     } else { 
//       likes[heartCount] = 1;
//     }
//     li.innerText = (`${heartCount} has been liked ${likes[heartCount]} times!`)
//     message.appendChild[li];   
//   })
//}
//heartBtn(); 

//- Pause the counter, which should:
//pause the counter
const pause = document.querySelector('#pause')
pause.addEventListener("click", (event) => {
  //switch the label on the button from "pause" to "resume"
  if (pause.innerText === "resume") {
    pause.innerHTML = "pause"
    intervalID = setInterval(counter, 1000)

  } else {
    pause.innerHTML = "resume"
    clearInterval(intervalID);
  }
  //disable all buttons except the pause button
  minus.disabled = !minus.disabled;
  plus.disabled = !plus.disabled;
  heart.disabled = !heart.disabled;
})


//Click the "restart" button to restart the counter and re-enable the buttons.
function restartBTN() {
  const message = document.querySelector(".likes")  
  let restart = document.createElement('button')
  restart.innerHTML = "Restart";
  document.body.appendChild(restart);
  restart.addEventListener("click", (event) => {
    if (pause.innerText === "resume") {
      count = 0
      timerText.textContent = count;
      intervalID = setInterval(counter, 1000)
      minus.removeAttribute('disabled')
      plus.removeAttribute('disabled')
      heart.removeAttribute('disabled')
      pause.innerHTML = "pause"
      list.innerHTML = " "
      message.innerHTML = " "
    }
  })
}
restartBTN();

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
let comment = document.querySelector('#comment-form')
comment.addEventListener("submit", (event) => {
  event.preventDefault();
  const list = document.querySelector("#list")
  let li = document.createElement("li");
  li.innerText = event.target[0].value;
  list.appendChild(li);
  comment.reset();
})