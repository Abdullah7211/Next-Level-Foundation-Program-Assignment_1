// Question No. 1: Value Detective

function describeValue(value) {
    const type = typeof value;
    const truthyOrFalsy = value ? 'truthy' : 'falsy';
    return `${type} | ${truthyOrFalsy}`;
}

let result1 = describeValue("0");
let result2 = describeValue(NaN);
let result3 = describeValue(null);
console.log(result1);
console.log(result2);
console.log(result3);

// Question No. 2: Bangladesh Weekend Machine

function getDayType(day) {
    const lowerCaseDay = day.toLowerCase();
    switch (lowerCaseDay) {
        case 'friday':
        case 'saturday':
            return "Weekend";
        case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return "Working Day";
        default:
            return "Invalid day";
    }
}

let dayType1 = getDayType("Friday");
let dayType2 = getDayType("friday");
let dayType3 = getDayType("MONDAY");
let dayType4 = getDayType("Bandarban");

console.log(`
    Result1: ${dayType1}
    Result2: ${dayType2}
    Result3: ${dayType3}
    Result4: ${dayType4}`);

// Question No. 3: Username Gatekeeper

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}

let username1 = validateUsername("rahim123");
let username2 = validateUsername("ab");
let username3 = validateUsername("a b");
let username4 = validateUsername("abcd");
let username5 = validateUsername("rahim islam");
let username6 = validateUsername("superadmin99");
let username7 = validateUsername("Admin_Rahim");

console.log(`
    Username1: ${username1}
    Username2: ${username2}
    Username3: ${username3}
    Username4: ${username4}
    Username5: ${username5}
    Username6: ${username6}
    Username7: ${username7}`);

// Question No. 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;m
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare += fare * 0.2;
    }

    return fare;
}

let fare1 = getCngFare(2);
let fare2 = getCngFare(1);
let fare3 = getCngFare(5);
let fare4 = getCngFare(10);
let fare5 = getCngFare(5, false, 10);
let fare6 = getCngFare(5, true);
let fare7 = getCngFare(5, true, 10);

console.log(`
    Fare1: ${fare1}
    Fare2: ${fare2}
    Fare3: ${fare3}
    Fare4: ${fare4}
    Fare5: ${fare5}
    Fare6: ${fare6}
    Fare7: ${fare7}`);

// Question No. 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

let chaseVerdict1 = getChaseVerdict(200, 200, 12);
let chaseVerdict2 = getChaseVerdict(200, 190, 0);
let chaseVerdict3 = getChaseVerdict(100, 90, 12);
let chaseVerdict4 = getChaseVerdict(100, 80, 12);
let chaseVerdict5 = getChaseVerdict(100, 70, 12);
let chaseVerdict6 = getChaseVerdict(150, 149, 1);

console.log(`
    ChaseVerdict1: ${chaseVerdict1}
    ChaseVerdict2: ${chaseVerdict2}
    ChaseVerdict3: ${chaseVerdict3}
    ChaseVerdict4: ${chaseVerdict4}
    ChaseVerdict5: ${chaseVerdict5}
    ChaseVerdict6: ${chaseVerdict6}`);