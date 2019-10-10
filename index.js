
/*

// Question: 1
var eduQualifications = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for(i=0; i<eduQualifications.length; i++){
    document.write(eduQualifications[i] + "<br>");
}

*/

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