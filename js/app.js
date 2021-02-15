window.onload = function(){
    document.querySelector(".loding").remove()
}


const icon = document.querySelector(".glyphicon");
const toolBox = document.querySelector(".tool-box");

icon.onclick = function () {
    toolBox.classList.toggle("open")
}

/* change colors from tool box */

const liColors = document.querySelectorAll(".tool-box ul li");
const link = document.querySelector("link[href*=them]");

liColors.forEach(function(li){
    li.onclick = function(){
            console.log(this.dataset.color)
            link.setAttribute("href",`css/${this.dataset.color}-them.css`)
        
    }
})

/* scroll to top button */
const toTob = document.querySelector(".scroll-to-tob");

toTob.onclick = function(){
    window.scrollTo(0,0)
}

window.onscroll = function(){
    if(window.pageYOffset >= 1000){
        toTob.style.display = "block"
    } else {
        toTob.style.display = "none"
    }
     console.log(window.pageYOffset)
}