// Grade Calculator Program
// This program calculates letter grades for multiple student scores.


function calculateGrade(score) {
	if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else {
		return "F";
	}
}

function gradeCalculator(studentScores) {
	for (let i = 0; i < studentScores.length; i++) {
		let score = studentScores[i];
		let grade = calculateGrade(score);
		console.log(`Student ${i + 1}: Score = ${score}, Grade = ${grade}`);
	}
}




// usgae example
let scores = [95, 82, 74, 58, 89];
gradeCalculator(scores);
