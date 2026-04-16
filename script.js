let count = 0;
let counted = document.getElementById("counted");
let savedInformation = document.getElementById("savedInformation");

let sumOption = 1;

function userSumOption(amount) {
    sumOption = amount;

    // 1. Update the button text to show what's active
    const dropBtn = document.querySelector('.dropbtn');
    dropBtn.textContent = "Mode: +" + amount;

    // 2. Highlight the active choice in the menu
    const options = document.querySelectorAll('.dropdown-content a');
    options.forEach(opt => opt.classList.remove('active-option'));
    
    // Using a template literal to find the ID based on the amount
    const ids = { 1: "plus-one-option", 5: "plus-five-option", 10: "plus-ten-option" };
    document.getElementById(ids[amount]).classList.add('active-option');

    // 3. Close the dropdown menu immediately
    const menu = document.querySelector('.dropdown-content');
    menu.style.display = 'none';
    setTimeout(() => { menu.style.removeProperty('display'); }, 150);
}

function plus() {
	count = count + sumOption;
	counted.textContent = count;
	updateColor();
}

function minus() {
    // Subtract the current sumOption, but don't go below 0
    if (count - sumOption < 0) {
        count = 0;
    } else {
        count = count - sumOption;
    }
    counted.textContent = count;
    updateColor();
}

function reset() {
    count = 0;
    counted.textContent = count;
    savedInformation.textContent = ''; // Clear the activity log
    updateColor();
}

function save() {
	let savedCount = count + " - ";
	savedInformation.textContent += savedCount;
	count = 0;
	counted.textContent = count;
	updateColor();
}

function updateColor() {
	let counterDisplay = document.getElementById("counted")

	if (count <= 15) {
		counterDisplay.style.color = "#10b981";
	} else if (count >= 16 && count <= 29) {
		counterDisplay.style.color = "#f59e0b"; 
	} else {
		counterDisplay.style.color = "#ef4444";
	}
}

// Local storage save. Keep the counter value after refresh so it feels like a real app instead of a demo.

// Custom step size. Let the user count by 1, 5, 10, or any number they choose.

// Milestone alerts. Show a message or visual effect when the counter hits numbers like 10, 50, or 100.

// Multiple counters. Add more than one counter on the same screen, like “tasks,” “votes,” or “points.”

// Activity log. Record each action, such as increment, decrement, or reset, so the app shows history.