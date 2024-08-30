'use strict'

// the actual function 

function progressBar() {

    // finding the progress line 

    var line = document.querySelector('.progress_bar_line');

    // setting its beginning width 

    let lineWidth = 1;

    // timer function which works in some interval 

    let timer = setInterval(progressStatus, 100);
    function progressStatus() {

    // when line (its width = 100%) is full, stop the function 

        if (lineWidth >= 100) {
            lineWidth = 0
        } else {
            lineWidth++
            line.style.width = `${lineWidth}%`;
            // changing styles to make an illusion of pouring in 
        }
    }
}
progressBar()

// function showPrank() {
//     let prank = document.createElement('p')
//     prank.style.fontFamily = 'Ubuntu';
//     prank.style.fontSize = '16px';
//     prank.style.textAlign = 'center';
//     prank.style.display = 'none'
//     setTimeout(() => {
//         document.body.appendChild(prank)
//         prank.textContent = 'ты пидор'
//         prank.style.display = 'block'
//     }, 10000)
//     setTimeout(() => {
//         prank.style.display = 'none'
//     }, 10100)
// }


// showPrank()
