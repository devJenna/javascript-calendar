const date = new Date();

const generateCalendar = () => {

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const curretDate = date.getDate();
    const currentLastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevLastDate = new Date(currentYear, currentMonth, 0).getDate();
    const currentLastDay = new Date(currentYear, currentMonth + 1, 0).getDay();
    const prevLastDay = new Date(currentYear, currentMonth, 0).getDay();
    document.querySelector(".year").textContent = currentYear;
    document.querySelector(".month").textContent = monthNames[currentMonth];
    document.querySelector(".date").textContent = curretDate;

    const calendarDate = document.querySelector(".dates");
    calendarDate.innerHTML = "";

    for (let i = prevLastDate - prevLastDay; i <= prevLastDate; i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + `<div class="inactive">` + i + `</div>`;
    };
    for (let i = 1; i <= currentLastDate; i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + `<div class="active">` + i + `</div>`;
    };

    if (7 - currentLastDay !== 7) {
        for (let i = 1; i <= (7 - currentLastDay - 1); i++) {
            calendarDate.innerHTML = calendarDate.innerHTML + `<div class="inactive">` + i + `</div>`;
        };
    }
};

generateCalendar();

let prev = document.querySelector(".prev-button");
prev.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    generateCalendar();
});

let next = document.querySelector(".next-button");
next.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    generateCalendar();
});

