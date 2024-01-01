    // //////////NEWS LETTER FORM DISPLAY SCRIPT
/*function openSubscribeForm(){
    let newsletterform = document.getElementById('form-container');
    newsletterform.style.display = 'block';
}*/
//setTimeout(openSubscribeForm, 20000); //Call the function to display form for subscribe for news letter

$(document).ready(()=>{  
    setTimeout(() => {
        $('#form-container').css('display', 'block');
    }, 10000);
});

////////////NEWS LETTER FORM CLOSE SCRIPT
function closeSubscribeForm(){
    var closenews = document.getElementById('form-container');
    if (closenews.style.display == 'block') {
        closenews.style.display = 'none';
    }else{
        closenews.style.display = 'block';
    }
};

var words = document.querySelectorAll('.word');
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);

    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = '1';

let changeText = () =>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) =>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) =>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    })
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

/*////////////circle skill///////////*/

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = '';
    var rotate = 360/dots;

    for(let i = 0; i < dots; i++){
        points += "<div class='points' style=' --i:${i} --rot:${rotate}deg'></div>";
    }
    elem.innerHTML = points;

    /*const pointmarked = elem.querySelectorAll(".points");
    for(let i = 0; i < percent; i++){
        pointmarked[i].classList.add("marked");
    }*/
})

    /*/////////This is the mix it up of the portfolio gallery*//////////
    var mixer = mixitup('.portfolio-gallery');

    /*/////////Active Menu*//////////
    let menuLi = document.querySelectorAll("header ul li a");
    let section = document.querySelectorAll("section");

    function activeMenu(){
        let len = section.length;
        while(--len && window.scrollY + 97 > section[len].offsetTop){}
        menuLi.forEach(sec => sec.classList.remove("active"));
        menuLi[len].classList.add("active");
    }
    activeMenu()
    window.addEventListener("scroll", activeMenu);

    
    /*/////////Sticky Navbar*//////////
    window.addEventListener("scroll", function(){
        Headers.classList.toggle("sticky", window.scrollY > 50);
    });


    
    function popupseo(){
        var seo = document.getElementById('seo-read-more');
        if (seo.style.display == 'none') {
            seo.style.display = 'block';
        }else{
            seo.style.display = 'none';
        }
    };
    function closeseo(){
        var close = document.getElementById('seo-read-more');
        if (close.style.display == 'block') {
            close.style.display = 'none';
        }else{
            close.style.display = 'block';
        }
    };
    
    function popupcms(){
        var seo = document.getElementById('cms-read-more');
        if (seo.style.display == 'none') {
            seo.style.display = 'block';
        }else{
            seo.style.display = 'none';
        }
    };
    function closecms(){
        var close = document.getElementById('cms-read-more');
        if (close.style.display == 'block') {
            close.style.display = 'none';
        }else{
            close.style.display = 'block';
        }
    };



    