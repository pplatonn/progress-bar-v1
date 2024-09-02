'use strict'

// getting the actul progress line in a variable 

const line = document.querySelector('.progress_bar_line')

// saving its background to get the actual width.
// we could use pixels but it's not the best idea for adaptive in the future 

const progressbar = document.querySelector('.progress_bar_bg')
const fullWidth = window.getComputedStyle(progressbar).width

// the function of transition

function progressBar() {

// I meant the length of progress line which will long through the progress bar background  

  let length = 0;

  // saving the setInterval() function into a variable 

  let timer = setInterval(progressBarLine, 10)
  function progressBarLine() {

// this is what I talked about when I mentioned about width in pixels 

    if (length >= parseInt(fullWidth)) {
      length = 0
      line.style.width = `${length}px`

    } else {

      // increasing the length and changing style of line with it 
      length++
      line.style.width = `${length}px`
    }
  }
}

progressBar()
