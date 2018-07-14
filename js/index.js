$(document).ready(function() {
    setRates();
    setRows();
});

function setRates() {
    for (let i = 0; i < 6; i++) {
        if (i == 0) {
            $("#rate").append(`<th>&nbsp;</th>`);
        }
        else {
            $("#rate").append(`<th>${i}</th>`);
        }
    }
}

function setRows() {
    const rowHeaders = [
        "Employee submits high quality work.",
        "Employee delivers work on time and meets deadlines.",
        "Employee arrives to work on time.",
        "Employee conduct him/herself in a professional manner.",
        "Employee takes initiative when working.",
        "Employee has a positive attitude at work.",
        "Employee perform well in high pressure situations.",
        "Employee seeks out opportunities for growth.",
        "Employee gets along with coworkers.",
        "Employee clearly communicates with others."
    ];

    const rowNames = [
        "quality",
        "deadline",
        "onTime",
        "manner",
        "initiative",
        "attitude",
        "highPressure",
        "growth",
        "friendly",
        "communication"
    ];

    for (let i = 0; i < 10; i++) {
        $("#categories").append(`<tr id="categoryRow${i + 1}"></tr>`)

        for (let j = 0; j < 6; j++) {
            if (j == 0) {
                $(`#categoryRow${i + 1}`).append(`<td>${rowHeaders[i]}</td>`);
            }
            else {
                $(`#categoryRow${i + 1}`).append(
                    `<td><input type="radio" name="${rowNames[i]}" value="${j}"></td>`
                );
            }
        } 
    }
}
