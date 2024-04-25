// const inputs = document.querySelectorAll("li input");

// inputs.forEach((input) => {
//   input.addEventListener("keyup", (e) => {
//     console.log(
//       input.parentElement.previousElementSibling.getAttribute("class")
//     );

//     input.parentElement.nextElementSibling.innerHTML = input.value;
//   });
// });

const output = document.querySelectorAll(".output");

const alloutput = Array.from(output);
// console.log(alloutput);

const inputs = document.querySelectorAll(".input");
const brr = [];
const arr = Array.from(inputs);
const cout = 0;
arr.forEach((element, index) => {
  element.addEventListener("input", () => {
    if (arr[0].value) {
      alloutput[0].innerHTML = arr[0].value * 500;
    }

    if (arr[1].value) {
      alloutput[1].innerHTML = arr[1].value * 200;
    }

    if (arr[2].value) {
      alloutput[2].innerHTML = arr[2].value * 100;
    }

    if (arr[3].value) {
      alloutput[3].innerHTML = arr[3].value * 50;
    }

    if (arr[4].value) {
      alloutput[4].innerHTML = arr[4].value * 200;
    }

    if (arr[5].value) {
      alloutput[5].innerHTML = arr[5].value * 10;
    }

    const allvalue = eval(
      `${alloutput[0].innerHTML}+${alloutput[1].innerHTML} + ${alloutput[2].innerHTML} + ${alloutput[3].innerHTML}+${alloutput[4].innerHTML}+${alloutput[5].innerHTML}`
    );
    console.log(allvalue);
    allvalueFun(allvalue);
  });
});

console.log(brr);

// console.log(alloutput);

const TotalBtn = document.querySelector(".TotalBtn");
const outputLi = document.querySelector(".outputIcone");

const allvalueFun = (allvalue) => {
  TotalBtn.addEventListener("click", (e) => {
    outputLi.innerHTML = allvalue;
  });
};
