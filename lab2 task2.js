function makeEmployee(eName, eDept) {
    var employee = {};
    employee.name = eName || "";
    employee.dept = eDept || "general";
    return employee;
}

function makeManager(mName, mDept, mReports) {
    var manager = makeEmployee(mName, mDept);
    manager.reports = mReports || [];  // employees under manager
    return manager;
}

function makeWorkerBee(wName, wDept, wProjects) {
    var worker = makeEmployee(wName, wDept);
    worker.projects = wProjects || []; // list of projects
    return worker;
}

function makeSalesPerson(sName, sQuota) {
    var sales = makeWorkerBee(sName, "sales", []);
    sales.quota = sQuota || 100;
    return sales;
}

function makeEngineer(eName, eMachine) {
    var engineer = makeWorkerBee(eName, "engineering", []);
    engineer.machine = eMachine || "";
    return engineer;
}


var emp1 = makeEmployee("Ali", "");
var mgr1 = makeManager("Zara", "IT", [emp1]);
var worker1 = makeWorkerBee("Hassan", "IT", ["Project A", "Project B"]);
var sales1 = makeSalesPerson("Ayesha", 150);
var eng1 = makeEngineer("Bilal", "Lathe Machine");

console.log(emp1);
console.log(mgr1);
console.log(worker1);
console.log(sales1);
console.log(eng1);