//sorting student and search student

let student = [
    {
        name: "John",
        age: 15,
        mentor: "xyz",
        id: 1
    },
    {
        name: "Tom",
        age: 18,
        id: 2
    },
    {
        name: "Kenny",
        age: 13,
        mentor: "abc",
        id: 3
    },
    {
        name: "Win",
        age: 14,
        id: 4
    },
    {
        name: "Alice",
        age: 15,
        id: 5
    }
];

//sorting of student
function sortStudents(students) {
    let unassignedStudents = [];
    let assignedStudents = [];
    for (let student of students) {
        if (student.mentor === undefined) {
            unassignedStudents.push(student);
        } else {
            assignedStudents.push(student);
        }
    }
    unassignedStudents.sort((a, b) => a.id - b.id);
    return unassignedStudents.concat(assignedStudents);
}

//searching of student
function searchStudent(students, value) {
    let start = 0;
    let end = students.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + ((value - students[start].id) * (end - start)) / (students[end].id - students[start].id));
        if (students[mid].id === value) {
            return students[mid];
        } else if (students[mid].id < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return null;
}

//sorted student
let sortedStudents = sortStudents(student);
console.log('Sorted students:');
console.log(sortedStudents);

// Search Student       
let searchResult = searchStudent(sortedStudents, 3);
console.log('Search result:');
console.log(searchResult);






