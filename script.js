let names = [];

function addName() {
    const input = document.getElementById("inp");
    const name = input.value.trim();

    if (name !== "") {
        names.push(name);
        render();
        input.value = "";
        input.focus();
    }
}

function deleteName(index) {
    names.splice(index, 1);
    render();
}

function render() {
    const list = document.getElementById("namesList");
    list.innerHTML = names
        .map(
            (n, i) => `
        <div class="name-item">
            ${n} <span class="del-btn" onclick="deleteName(${i})">x</span>
        </div>
    `,
        )
        .join("");
    // مسح النتيجة عند التعديل
    document.getElementById("winnerResult").innerText = "";
}

function drawWinner() {
    const result = document.getElementById("winnerResult");
    if (names.length < 2) {
        result.innerText = "Add more names!";
        return;
    }

    const i = Math.floor(Math.random() * names.length);
    result.innerText = `The Winner Is: ${names[i]}`;
}

// إضافة بالإنتر
document.getElementById("inp").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addName();
});
