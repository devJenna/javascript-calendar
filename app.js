const date = new Date();

const generateCalendar = () => {

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = date.getDate();
    const currentLastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevLastDate = new Date(currentYear, currentMonth, 0).getDate();
    const currentLastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
    const prevLastDay = new Date(currentYear, currentMonth, 0).getDay();
    document.querySelector(".year").textContent = currentYear;
    document.querySelector(".month").textContent = monthNames[currentMonth];
    document.querySelector(".date").textContent = currentDate;

    const calendarDate = document.querySelector(".dates");
    calendarDate.innerHTML = "";

    // previous month // add if previous month's last day is Sunday - Friday(0-5), don't add if previous month's last day is Saturday(6)
    if (prevLastDay < 6) {
        for (let i = prevLastDate - prevLastDay; i <= prevLastDate; i++) {
            calendarDate.innerHTML = calendarDate.innerHTML + `<div class="inactive">` + i + `</div>`;
        };
    };

    // this month
    for (let i = 1; i <= currentLastDate; i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + `<div class="active">` + i + `</div>`;

        // highlight today
        const today = new Date();
        if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth()) {
            for (let date of document.querySelectorAll(".active")) {
                if (+date.innerText === today.getDate()) {
                    date.classList.add("todayDate");
                    break;
                }
            }
        }
    };

    // next month // don't add if current month's last day is Saturday(6) i <= 0
    // if (currentLastDay < 6) {
    for (let i = 1; i <= (7 - currentLastDay - 1); i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + `<div class="inactive">` + i + `</div>`;
    };
};

generateCalendar();

// previous button
let prev = document.querySelector(".prev-button");
prev.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    generateCalendar();
});

// next button
let next = document.querySelector(".next-button");
next.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    generateCalendar();
});

// add toggle
const selectedDates = document.querySelectorAll(".dates div");
selectedDates.forEach(function (selected) {
    selected.addEventListener("click", function () {
        selected.classList.toggle("selected");
    })
});

