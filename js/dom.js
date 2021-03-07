const myBtn = document.getElementById('button');
const svetloforBar = document.querySelector('.svetlofor');

function cheangColor() {
    svetloforBar.style.backgroundColor = true ? "red"
        : "#ffa500";

};

// let progress = 0;

// function inProgressone() {
//     const srep = 5;
//     progress = srep;

//     svetloforBar.style.width = `${progress}%`;
//     svetloforBar.style.background = _this.checked ? '#ff0000' : '#FF0000';

// }

// function addStyle() {
//     svetloforBar.style.background = _this.checked ? '#ff0000' : '#FF0000';
// }

myBtn.onclick = cheangColor;

console.log(myBtn);
console.log(svetloforBar);
