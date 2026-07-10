// ===============================
// OPEN ENVELOPE
// ===============================

const openBtn = document.getElementById("openBtn");
const landing = document.getElementById("landing");
const main = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {

    landing.style.opacity = "0";

    setTimeout(() => {

        landing.style.display = "none";

        main.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },700);

});

// ===============================
// LIVE CLOCK
// ===============================

function updateClock(){

    const now = new Date();

    const options = {
        weekday:'long',
        month:'long',
        day:'numeric',
        year:'numeric'
    };

    const date = now.toLocaleDateString('en-US',options);

    const time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML =
    `${date}<br>${time}`;

}

setInterval(updateClock,1000);

updateClock();

// ===============================
// COUNTDOWN
// ===============================

const birthday = new Date("July 16, 2026 17:00:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const distance = birthday - now;

    if(distance <= 0){

        document.getElementById("timer").innerHTML =
        "🎉 Today is the celebration!";

        return;
    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance%(1000*60))
        /1000
    );

    document.getElementById("timer").innerHTML =

    `${days} Days
    ${hours} Hours
    ${minutes} Minutes
    ${seconds} Seconds`;

}

setInterval(countdown,1000);

countdown();

// ===============================
// FALLING PETALS
// ===============================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    (5+Math.random()*6)+"s";

    petal.style.fontSize=
    (15+Math.random()*15)+"px";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,400);

// ===============================
// GALLERY LIGHTBOX
// ===============================

const images=document.querySelectorAll(".photos img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.85)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="9999";

        const photo=document.createElement("img");

        photo.src=img.src;

        photo.style.maxWidth="90%";
        photo.style.maxHeight="90%";
        photo.style.borderRadius="20px";
        photo.style.boxShadow="0 20px 50px rgba(0,0,0,.4)";

        overlay.appendChild(photo);

        overlay.onclick=()=>overlay.remove();

        document.body.appendChild(overlay);

    });

});

// ===============================
// RSVP
// ===============================

const yes=document.getElementById("yesBtn");

yes.addEventListener("click",()=>{

    alert("💖 Thank you! I can't wait to celebrate with you!");

});
