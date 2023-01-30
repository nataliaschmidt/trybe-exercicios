// O index 0 do array `students` equivale ao index 0 do array `grades`

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];

const calcAverage = (grades) => {
return grades.map((grade) => {
const sum = grade.reduce((acc, value) => {
return acc + value;
})
return sum / grade.length
})
}

// console.log(calcAverage(grades));

const studentAverage = (studants, grades) => {
return studants.map((studant, index)=>{
return {
  name: studant,
  average: calcAverage(grades)[index],
}
})
}

console.log(studentAverage(students, grades));