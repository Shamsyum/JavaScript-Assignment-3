
/*

// Question: 1
var eduQualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for(i=0; i<eduQualifications.length; i++){
    document.write(eduQualifications[i] + "<br>");
}


//Question: 2
var students = ["Michail", "John", "Tony"];
var obtainedMarks = [320, 230, 480];
var totalMarks = 500;
var michailPercentage = ( obtainedMarks[0] * 100 ) / totalMarks;
var johnPercentage = ( obtainedMarks[1] * 100 ) / totalMarks;
var tonyPercentage = ( obtainedMarks[2] * 100 ) / totalMarks;

document.write("Score of " + students[0] + " is " + obtainedMarks[0] + " Percentage " + michailPercentage + "%" + "<br>");
document.write("Score of " + students[1] + " is " + obtainedMarks[0] + " Percentage " + johnPercentage + "%" + "<br>");
document.write("Score of " + students[2] + " is " + obtainedMarks[0] + " Percentage " + tonyPercentage + "%");


//Question: 3
var colors = ["Green", "yellow", "red"];
alert(colors);

var colorAtStart = prompt("Which color you want to add to the list at begining");
colors.unshift(colorAtStart);
alert(colors);

colors.unshift("White", "Black");
alert(colors);

colors.shift();
alert(colors);

colors.pop();
alert(colors);

var indexPositionToAddNewElement = prompt("At what position you want to add new color?");
var newElement = prompt("Which color you want to add?");
colors.splice(indexPositionToAddNewElement, 0, newElement);
alert(colors);

var indexPositionToDeleteElements = prompt("At what position you want to delete the elements");
var numbrOfElementsToDelete = prompt("How many elements to delete");
colors.splice(indexPositionToDeleteElements,numbrOfElementsToDelete);
alert(colors);


//Question: 4
var cities = ["Karachi", "Lahore", "Islamabad", "Quettta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
alert("Cities List: " + cities);
alert("Selected cities list: " + selectedCities);

*/
//Question: 6
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
document.write("1"+o[1]+" choice is "+aCities[0]+"<br>");
document.write("2"+o[2]+" choice is "+aCities[1]+"<br>");
document.write("3"+o[3]+" choice is "+aCities[2]);