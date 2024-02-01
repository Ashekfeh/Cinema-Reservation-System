const dateSlider = document.getElementById("date");

const mySwiper = document.createElement("div");
mySwiper.classList.add('swiper');

const swiperWrapper = document.createElement("div");
swiperWrapper.classList.add('swiper-wrapper');

for (let i = 0; i < 6; i++) {
    const swiperSlide = document.createElement("div");



    swiperSlide.classList.add('swiper-slide');

    const dateButton = document.createElement("button");
    dateButton.classList.add('date-button');
    dateButton.setAttribute('data-set', `${i}`)
    dateButton.textContent = `May, ${i + 1}`;
    swiperSlide.appendChild(dateButton);
    swiperWrapper.appendChild(swiperSlide);




}


mySwiper.appendChild(swiperWrapper);
const next = document.createElement("div");
next.classList.add('swiper-button-next');
const prev = document.createElement("div");
prev.classList.add('swiper-button-prev');

mySwiper.appendChild(next);
mySwiper.appendChild(prev);
dateSlider.appendChild(mySwiper);


const buttons = document.getElementsByClassName("date-button");
const hideTheaters = document.getElementById("theaters-wrapper");
hideTheaters.style.display = "none";

function handleClick_date(event) {
    const clickedButton = event.target;
    const isActive_date = clickedButton.classList.contains("active");

    // Remove active class from all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        hideTheaters.style.display = "none";
    }

    // Toggle active class on the clicked button
    if (!isActive_date) {
        clickedButton.classList.add("active");
        hideTheaters.style.display = "block";
    }
}

// Attach click event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick_date);
}




function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}



const cinemaGrid = document.getElementById("cinema-grid");

const testCol = document.createElement("tr");
const emptySpace = document.createElement('td');
emptySpace.textContent = "salon";
testCol.appendChild(emptySpace)

for (let i = 0; i < rows.length + 1; i++) {
    const colName = document.createElement('td');
    colName.textContent = `${columns[i]}`;
    testCol.appendChild(colName);
}

cinemaGrid.appendChild(testCol);


const checkoutSection = document.getElementById("checkout-section");
const checkout = document.createElement('a');
checkoutSection.appendChild(checkout);
checkout.textContent = "CHECKOUT ";


let price = 0;

for (let i = 0; i < rows.length; i++) {
    const tableRow = document.createElement('tr');
    for (let j = 0; j < columns.length; j++) {
        const tableData = document.createElement('td');
        const left = document.createElement('div');
        left.classList.add('left')
        const right = document.createElement('div');
        right.classList.add('right')
        if (j == 0) {
            const rowName = document.createElement('td');
            rowName.textContent = `${rows[i]}`;
            tableRow.appendChild(rowName);
        }
        tableData.classList.add('seat');
        tableData.addEventListener("click", function () {
            tableData.classList.toggle("active");
            if (tableData.classList.contains("active")) {
                price = price + seats[(i * columns.length) + (j + 1)].pricing;
            } else {
                price = price - seats[(i * columns.length) + (j + 1)].pricing;
            }

            checkout.textContent = "CHECKOUT " + (price > 0 ? `${price.toFixed(2)} TL` : "");

            console.log(price);

        })

        tableData.appendChild(left);
        tableData.appendChild(right);
        tableRow.appendChild(tableData);

    };
    cinemaGrid.appendChild(tableRow);

};





const TheaterElement = document.getElementById("available-theaters");

const time_buttons = document.getElementsByClassName("time");

const hideCinema = document.getElementById("cinema-wrapper");
hideCinema.style.display = "none";

function pickTime(event) {


    const pickedTime = event.target;
    const isActive_time = pickedTime.classList.contains("active");

    pickedTime.classList.add("active");

    for (let i = 0; i < time_buttons.length; i++) {
        time_buttons[i].classList.remove("active");
        hideCinema.style.display = "none";

    }

    if (!isActive_time) {
        pickedTime.classList.add("active");
        hideCinema.style.display = "block"
    }

}

theaters.forEach(theater => {
    const Test05 = document.createElement('div');
    const theaterName = document.createElement('h2');
    theaterName.classList.add('theater-name')
    theaterName.textContent = theater.name;
    Test05.appendChild(theaterName);


    const ClassWrapper = document.createElement('div');
    ClassWrapper.classList.add('class-wrapper');


    const Test = theater.getTheaterClasses();
    Test.forEach((theaterClass) => {

        const ClassesELement = document.createElement('div');
        ClassesELement.classList.add('class')
        ClassesELement.textContent = theaterClass.name;

        const timeWrapper = document.createElement('div');
        timeWrapper.classList.add('time-wrapper')
        for (let i = 0; i < theaterClass.availableShows.length; i++) {

            const timeElement = document.createElement('button');


            timeElement.textContent = theaterClass.availableShows[i];
            timeElement.classList.add('time');
            timeElement.addEventListener("click", pickTime);
            timeWrapper.appendChild(timeElement);
        }




        ClassesELement.appendChild(timeWrapper);
        ClassWrapper.appendChild(ClassesELement);
        Test05.appendChild(ClassWrapper);
    })



    TheaterElement.appendChild(Test05);
}
)




checkout.href = "checkout.html"


var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});