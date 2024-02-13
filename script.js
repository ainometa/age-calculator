function calculateAge() {
    // Check if both date fields are filled
    var dobValue = document.getElementById("dob").value;
    var ageDateValue = document.getElementById("ageDate").value;

    if (!dobValue || !ageDateValue) {
        alert("Please submit the dates.");
        return;
    }

    const dob = new Date(dobValue);
    const ageDate = new Date(ageDateValue);

    // Check if ageDate is not earlier than dob
    if (ageDate < dob) {
        alert("Please select valid dates");
        return;
    }

    // Check if dates are valid JavaScript dates
    if (isNaN(dob) || isNaN(ageDate)) {
        alert("Please enter valid dates.");
        return;
    }

    var ageInMilliseconds = ageDate - dob;

    var years = ageDate.getFullYear() - dob.getFullYear();
    var months = ageDate.getMonth() - dob.getMonth();
    var days = ageDate.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(ageDate.getFullYear(), ageDate.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    var result = "<h2>RESULT</h2><table><tr><th>Years</th><th>Months</th><th>Days</th></tr>";
    result += "<tr><td>" + years + "</td><td>" + months + "</td><td>" + days + "</td></tr></table>";

    var ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));
    var ageInHours = Math.floor(ageInMilliseconds / (60 * 60 * 1000));
    var ageInMinutes = Math.floor(ageInMilliseconds / (60 * 1000));
    var ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    var ageInMonths = (years * 12) + months;

    result += "<h2>Exact Age in Different Units</h2>";
    result += "<table><tr><th>Unit</th><th>Value</th></tr>";
    result += "<tr><td>Month and Days</td><td>" + ageInMonths + " months " + days + " days</td></tr>";

    if (ageInDays >= 7) {
        var fullWeeks = Math.floor(ageInDays / 7);
        var remainingDays = ageInDays % 7;
        result += "<tr><td>Weeks</td><td>" + fullWeeks + " weeks and " + remainingDays + " days</td></tr>";
    } else {
        result += "<tr><td>Weeks</td><td>0 weeks and " + ageInDays + " days</td></tr>";
    }

    result += "<tr><td>Days</td><td>" + ageInDays + " days</td></tr>";
    result += "<tr><td>Hours</td><td>" + ageInHours + " hours</td></tr>";
    result += "<tr><td>Minutes</td><td>" + ageInMinutes + " minutes</td></tr>";
    result += "<tr><td>Seconds</td><td>" + ageInSeconds + " seconds</td></tr></table>";

    document.getElementById("result").innerHTML = result;
}
