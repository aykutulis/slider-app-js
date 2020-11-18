var models = [
    {
        name: "Bugatti",
        image: "images/bugatti.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "Ferrari",
        image: "images/ferrari.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "Lamborghini",
        image: "images/lamborghini.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "McLaren",
        image: "images/mclaren.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "Porsche",
        image: "images/porsche.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "Tesla",
        image: "images/tesla.jpg",
        link: "http://www.arabalar.com.tr/"
    }
];

var index = 3;
var slideCount = models.length;
var interval;
var settings = {
    duration: 1000,
    random: false
}

init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
    index--;
    showSlide(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index++;
    showSlide(index);
});

document.querySelectorAll(".fas").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        clearInterval(interval);
    });
    item.addEventListener("mouseleave", function () {
        init(settings);
    });
});

function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev)
            prev = index;
        } else {
            index++;
        }
        showSlide(index);
        console.log(index);
    }, settings.duration);
}

function showSlide(i) {

    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector(".card-img-top").setAttribute("src", models[index].image);

    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-link").setAttribute("href", models[index].link);
}
