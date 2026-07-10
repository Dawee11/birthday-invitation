// ==============================
// OPEN INVITATION
// ==============================

const openBtn = document.getElementById("openBtn");
const landing = document.getElementById("landing");
const mainContent = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {

    landing.style.display = "none";
    mainContent.style.display = "block";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ==============================
// COUNTDOWN
// ==============================

const eventDate = new Date("July 16, 2026 17:00:00").getTime();

const timer = document.getElementById("timer");
const clock = document.getElementById("clock");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance <= 0){

        timer.innerHTML = "🎉 TODAY IS THE DAY! 🎉";

        clock.innerHTML = "";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
    `${days} DAYS • ${hours} HOURS • ${minutes} MINUTES • ${seconds} SECONDS`;

    const nowDate = new Date();

    clock.innerHTML =
    nowDate.toLocaleString();

}

setInterval(updateCountdown,1000);

updateCountdown();

// ==============================
// FALLING PETALS
// ==============================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration = (Math.random()*5+6)+"s";

    petal.style.opacity = Math.random();

    petal.style.fontSize = (Math.random()*15+15)+"px";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,300);

// ==============================
// GALLERY LIGHTBOX
// ==============================

document.querySelectorAll(".photos img").forEach(img=>{

    img.addEventListener("click",()=>{

        const lightbox = document.createElement("div");

        lightbox.className="lightbox";

        const image=document.createElement("img");

        image.src=img.src;

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click",()=>{

            lightbox.remove();

        });

    });

});

// ==============================
// RSVP BUTTONS
// ==============================

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click",()=>{

    alert("💖 Yay! I can't wait to celebrate with you! 💖");

});

noBtn.addEventListener("click",()=>{

    alert("Thank you for letting me know. You'll be missed! 🌸");

});

// ==============================
// SMOOTH FADE WHEN SCROLLING
// ==============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".program,.gallery,.rsvp,.details-section,footer").forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition=".8s";

    observer.observe(section);

});
