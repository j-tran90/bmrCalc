// JavaScript source code

function metric() {
    var bmr;
    var Gender;
    var calories = 0;
    var Age = document.getElementById("age").value;
    var Height = document.getElementById("height").value;
    var Weight = document.getElementById("weight").value;
    var Gender = document.getElementById("Gender").value;

    var activityLevel1 = document.getElementById("activityLevel1");
    var activityLevel2 = document.getElementById("activityLevel2");
    var activityLevel3 = document.getElementById("activityLevel3");
    var activityLevel4 = document.getElementById("activityLevel4");
    var activityLevel5 = document.getElementById("activityLevel5");

    (activityLevel1.checked) ? (calories += 1.2) : (calories += 0);
    (activityLevel2.checked) ? (calories += 1.375) : (calories += 0);
    (activityLevel3.checked) ? (calories += 1.55) : (calories += 0);
    (activityLevel4.checked) ? (calories += 1.725) : (calories += 0);
    (activityLevel5.checked) ? (calories += 1.9) : (calories += 0);

    (Gender == "Male") ? 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age) : bmr = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age);
    (Gender == "Female") ? bmr = 655 + (9.563 * Weight) + (1.850 * Height) - (4.676 * Age) : bmr = 66.5 + (13.75 * Weight) + (5.003 * Height) - (6.755 * Age);

    GrandCalories = bmr + calories;

    document.getElementById('lblResult').innerHTML = Gender + "<br>Your BMR is " + bmr.toFixed(2) + "<br> Daily calories intake is " + GrandCalories.toFixed(2);
}

document.getElementById('submit').addEventListener("click", function () {
    metric();
})

function imperial() {
    var bmr2;
    var Gender2;
    var caloriesi = 0;
    var Age2 = document.getElementById("age2").value;
    //var Feet = document.getElementById("feet").value;
    var Height2 = document.getElementById("height2").value;
    var Weight2 = document.getElementById("weight2").value;
    var Gender2 = document.getElementById("Gender2").value;

    var activityLevel1i = document.getElementById("activityLevel1i");
    var activityLevel2i = document.getElementById("activityLevel2i");
    var activityLevel3i = document.getElementById("activityLevel3i");
    var activityLevel4i = document.getElementById("activityLevel4i");
    var activityLevel5i = document.getElementById("activityLevel5i");

    (activityLevel1i.checked) ? (caloriesi += 1.2) : (caloriesi += 0);
    (activityLevel2i.checked) ? (caloriesi += 1.375) : (caloriesi += 0);
    (activityLevel3i.checked) ? (caloriesi += 1.55) : (caloriesi += 0);
    (activityLevel4i.checked) ? (caloriesi += 1.725) : (caloriesi += 0);
    (activityLevel5i.checked) ? (caloriesi += 1.9) : (caloriesi += 0);

    //Height2 = (Feet * 12) + Inches;
    (Gender2 == "Male") ? bmr2 = 66 + (6.2 * Weight2) + (12.7 * Height2) - (6.76 * Age2) : bmr2 = 655 + (4.35 * Weight2) + (4.7 * Height2) - (4.7 * Age2);
    (Gender2 == "Female") ? bmr2 = 655 + (4.35 * Weight2) + (4.7 * Height2) - (4.7 * Age2) : bmr2 = 66 + (6.2 * Weight2) + (12.7 * Height2) - (6.76 * Age2);

    GrandCalories2 = bmr2 + caloriesi;

    document.getElementById('lblResult2').innerHTML = Gender2 + "<br>Your BMR is " + bmr2.toFixed(2) + "<br> Daily calories intake is " + GrandCalories2.toFixed(2);
}

document.getElementById('submit2').addEventListener("click", function () {
    imperial();
})

function openUnit(evt, unit) {
    var i, tabcontent, tablinks;


    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(unit).style.display = "block";
    evt.currentTarget.className += " active";
}





