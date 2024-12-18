let item = document.getElementById('item-pr');
let content_heart = document.getElementById('count-heart');
let content_shopping = document.getElementById('count-shopping');
let count_heart = 0;
let count_shopping = 0;
let arry_img = ["sources/pngwing.com (3).png", "sources/pngwing.com (2).png", "sources/pngwing.com (3).png", "sources/pngwing.com (4).png",
    "sources/pngwing.com (5).png", "sources/pngwing.com (6).png", "sources/pngwing.com (7).png", "sources/pngwing.com (6).png", "sources/pngwing.com (9).png",
    "sources/pngwing.com (2).png", "sources/pngwing.com.png", "sources/pngwing.com (5).png", "sources/pngwing.com (3).png", "sources/pngwing.com (2).png",
    "sources/pngwing.com (2).png", "sources/pngwing.com (4).png", "sources/pngwing.com (5).png", "sources/pngwing.com (6).png", "sources/pngwing.com (7).png",
    "sources/pngwing.com (6).png", "sources/pngwing.com (9).png", "sources/pngwing.com (2).png", "sources/pngwing.com.png", "sources/pngwing.com (6).png"
];
let arry_span1 = ["7.99$"];
let arry_h4 = ["Featured Shoes"];
let arry_h2 = ["Modern designs with a perfect fit"]
let arry_span2 = ["-30%"];

function setItem(arry_img, arry_h4, arry_h2, arry_span1, arry_span2) {
    // creat elments
    let div = document.createElement('div');
    div.setAttribute('class', 'item');
    let img = document.createElement('img');
    img.src = arry_img;
    img.width = '250px';
    let h4 = document.createElement('h4');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let span1 = document.createElement('span');
    span1.setAttribute('class', 'doller');
    let span2 = document.createElement('span');
    span2.setAttribute('class', 'offer');
    let a1 = document.createElement('a');
    let i1 = document.createElement('i')
    i1.className = 'fa-regular fa-heart';
    let a2 = document.createElement('a');
    let i2 = document.createElement('i');
    a2.setAttribute('id', 'a2');
    i2.className = 'fa-solid fa-cart-shopping';
    let button = document.createElement('button');
    button.className = "buy-now";
    a1.addEventListener('click', function (event) {
        event.preventDefault();
        if (a1.style.color == 'red') {
            i1.className = 'fa-regular fa-heart';
            a1.style.color = 'black'
            a1.style.transitionDuration = '0.1s';
            count_heart--;
            content_heart.innerText = count_heart;

        }
        else {
            i1.className = "fa-solid fa-heart";
            a1.style.color = 'red';
            a1.style.transitionDuration = '0.2s';
            count_heart++;
            content_heart.innerText = count_heart;
        }
    })
    a2.addEventListener('click', function (event2) {
        event2.preventDefault();
        if (a2.style.color == 'red') {
            a2.style.color = 'green';
            count_shopping--;
            content_shopping.innerText = count_shopping;
        }
        else {
            a2.style.color = 'red';
            a2.style.transitionDuration = '0.2s';
            count_shopping++;
            content_shopping.innerText = count_shopping;
        }

    })
    // conten of elments
    let con_h4 = document.createTextNode(arry_h4);
    let con_h2 = document.createTextNode(arry_h2);
    let con_h3 = document.createTextNode("/pair");
    let con_span1 = document.createTextNode(arry_span1);
    let con_span2 = document.createTextNode(arry_span2);
    let con_button = document.createTextNode("Buy Now");
    // 
    h4.appendChild(con_h4);
    h2.appendChild(con_h2);
    span1.appendChild(con_span1)
    h3.appendChild(span1);
    h3.appendChild(con_h3);
    span2.appendChild(con_span2);
    a1.appendChild(i1);
    a2.appendChild(i2);
    button.appendChild(con_button);
    let arryElments = [img, h4, h2, h3, span2, a1, a2, button];

    arryElments.forEach((items) => {
        div.appendChild(items);
    })
    item.appendChild(div);

}
for (let x = 0; x < 24; x++) {
    setItem(arry_img[x], arry_h4[0], arry_h2[0], arry_span1[0], arry_span2[0]);
}
// evvents--------------------------
// استدعاء العناصر
const signUpButton = document.getElementById('sign-up');
const logInButton = document.getElementById('log-in');
const signContent = document.getElementById('Sign-co1');
const logContent = document.getElementById('Sign-co2');
const colse_icon = document.getElementById('icon-close');
const colse_icon2 = document.getElementById('icon-close2');


// function of Events
function showSignUpContent(eventa) {
    eventa.preventDefault();
    signContent.classList.remove('hidden');
    signContent.classList.add('visible');
    logContent.classList.add('hidden');
    logContent.classList.remove('visible');

    logInButton.disabled = true;
}

function showLogInContent(event) {
    event.preventDefault();
    logContent.classList.remove('hidden');
    logContent.classList.add('visible');
    signContent.classList.add('hidden');
    signContent.classList.remove('visible');
    signUpButton.disabled = true;
}
function closeSignUp(event) {
    event.preventDefault();
    signContent.classList.add('hidden')
}
function closeLogIn(event) {
    event.preventDefault();
    logContent.classList.add('hidden')
}

// add Events to Elements
signUpButton.addEventListener('click', showSignUpContent);
logInButton.addEventListener('click', showLogInContent);
colse_icon.addEventListener('click', closeSignUp);
colse_icon2.addEventListener('click', closeLogIn);

// scroll TO top
const btn_top = document.getElementById('btnTop')
// nav Bar Scroll
const nav = document.getElementById('scroll');

window.onscroll = function () {
    if (scrollY < 450) {
        btn_top.style.display = "none";
    } else {
        btn_top.style.display = "flex";
    }
    if (scrollY >= 3) {
        nav.style.backgroundColor = 'antiquewhite';
    } else {
        nav.style.background = 'none';
    }
}
// دالة التمرير لأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // تمرير سلس
    });
}

// background-color: ;


//  Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
    loop: true, // تمكين التمرير اللانهائي
    autoplay: {
        delay: 1100, // الانتظار 1.1 ثوانٍ قبل الانتقال
        disableOnInteraction: false, // استمرار التشغيل التلقائي حتى عند التفاعل
    },
    speed: 800, // سرعة الانتقال بين الشرائح (0.8 ثانية)
});

