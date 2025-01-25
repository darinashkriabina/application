// script.js

// Функції для перемикання між екраном реєстрації, входу та головним меню
function showRegistration() {
    document.getElementById("home").style.display = "none";
    document.getElementById("registration").style.display = "block";
    document.getElementById("login").style.display = "none";
}

function showLogin() {
    document.getElementById("home").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
}

function showMainMenu() {
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("trainingHistory").style.display = "none";
    document.getElementById("statistics").style.display = "none";
    document.getElementById("goals").style.display = "none";
    document.getElementById("settings").style.display = "none";
}

// Функції для показу окремих секцій
function showTrainingHistory() {
    document.getElementById("trainingHistory").style.display = "block";
    document.getElementById("mainMenu").style.display = "none";
}

function showStatistics() {
    document.getElementById("statistics").style.display = "block";
    document.getElementById("mainMenu").style.display = "none";
}

function showGoals() {
    document.getElementById("goals").style.display = "block";
    document.getElementById("mainMenu").style.display = "none";
}

function showSettings() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("mainMenu").style.display = "none";
}

// Логіка реєстрації та входу
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    // Тут можна додати перевірку та збереження даних у базі
    alert("Реєстрація завершена! Ласкаво просимо, " + name);
    showHome();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Тут можна додати перевірку для входу
    if (email && password) {
        document.getElementById("userName").innerText = email;
        showMainMenu();
    } else {
        alert("Невірні дані.");
    }
});

// Мокова реалізація для історії тренувань, статистики та цілей
document.getElementById("historyList").innerHTML = "<p>Тренування 1: Біг 5 км, 300 калорій</p>";
document.getElementById("stats").innerHTML = "<p>Сьогодні: 5000 кроків, 400 калорій</p>";
document.getElementById("goalList").innerHTML = "<p>Мета: 10,000 кроків на день</p>";
