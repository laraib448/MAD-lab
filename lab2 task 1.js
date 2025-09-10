function makePerson(pName, pAge, pAddress) {
    var person = {};
    person.name = pName || "";
    person.age = pAge || 0;
    person.address = pAddress || "";
    return person;
}

function makeStudent(sName, sAge, sAddress, sRoll, sCourse) {
    var student = makePerson(sName, sAge, sAddress);
    student.role = "Student";
    student.rollNo = sRoll || "";
    student.course = sCourse || "";
    return student;
}

function makeEmployee(eName, eAge, eAddress, eDept, eDesig, eSalary) {
    var employee = makePerson(eName, eAge, eAddress);
    employee.department = eDept || "";
    employee.designation = eDesig || "";
    employee.salary = eSalary || 0;
    return employee;
}

function makeTeacher(tName, tAge, tAddress, tDept, tSalary, tSubject) {
    var teacher = makeEmployee(tName, tAge, tAddress, tDept, "Teacher", tSalary);
    teacher.subject = tSubject || "";
    return teacher;
}

function makeStaff(stName, stAge, stAddress, stDept, stSalary, stDuty) {
    var staff = makeEmployee(stName, stAge, stAddress, stDept, "Staff", stSalary);
    staff.duty = stDuty || "";
    return staff;
}

function makeCourse(cName, cTeacher, cStudents) {
    var course = {};
    course.courseName = cName || "";
    course.teacher = cTeacher || {};
    course.students = cStudents || [];
    return course;
}


var stud1 = makeStudent("Ali", 20, "Lahore", "S123", "CS");
var stud2 = makeStudent("Sara", 21, "Karachi", "S456", "IT");

var teach1 = makeTeacher("Mr. Ahmed", 40, "Islamabad", "CS Dept", 50000, "Programming");
var staff1 = makeStaff("Mr. Khan", 35, "Rawalpindi", "Admin", 30000, "Clerk");

var course1 = makeCourse("JavaScript", teach1, [stud1, stud2]);

console.log(stud1);
console.log(teach1);
console.log(staff1);
console.log(course1);
