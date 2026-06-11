const cards=
document.querySelectorAll(".card");

const preview=
document.getElementById("preview");

const lightbox=
document.querySelector(".lightbox");

let current=0;

cards.forEach(
(card,index)=>{

card.onclick=()=>{

current=index;

preview.src=
card.querySelector("img").src;

lightbox.style.display=
"flex";

};

}
);

document
.querySelector(".next")

.onclick=()=>{

current=
(current+1)
%
cards.length;

preview.src=
cards[current]
.querySelector("img")
.src;

};

document
.querySelector(".prev")

.onclick=()=>{

current=
(current-1+
cards.length)
%
cards.length;

preview.src=
cards[current]
.querySelector("img")
.src;

};

document
.querySelector(".close")

.onclick=()=>{

lightbox.style.display=
"none";

};

document
.querySelectorAll(
".filters button"
)

.forEach(
(btn)=>{

btn.onclick=
()=>{

document
.querySelector(".active")
.classList.remove(
"active"
);

btn.classList.add(
"active"
);

let filter=
btn.dataset.filter;

cards.forEach(
(card)=>{

card.style.display=

filter==="all"

||

card.classList.contains(
filter
)

?

"block"

:

"none";

});

};

});