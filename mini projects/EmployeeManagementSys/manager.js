const employees = [
    {
        "name": "Amanuel Zelalem",
        "id": "UGR/2723/15",
        "department": "Med",
        "position": "manager"
    },
    {
        "name": "Marta Tesfaye",
        "id": "UGR/2771/15",
        "department": "Computer Science",
        "position": "secretary"
    },
    {
        "name": "Kaleab Kassa",
        "id": 2772,
        "department": "Civil Engineering",
        "position": "teacher"
    },
];

const jsonEmployees = JSON.stringify(employees);
const employeesList = JSON.parse(jsonEmployees)


// functions
const addEmployee = (name, id, position, department) => {
    employeesList.push({name: name, id: id, position: position, department: department});
    return employeesList;
}
const listEmployees = () => {
    return employeesList.map(employee => {
        return {name: employee.name, id: employee.id, position: employee.position};
    });
}
const findEmployee = (id) => {
    return employeesList.find(employee => employee.id === id);

    // for (let employee of employeesList) {
    //     if (employee.id === id) {
    //         return employee
    //     }
    // }
}
const updateEmployee = (id, newName, newPosition, newDepartment) => {
    const emp = employeesList.find(employee => employee.id === id)
    emp.name = newName;
    emp.position = newPosition;
    emp.department = newDepartment;
    return employeesList;
}
const deleteEmployee = (id) => {
    return employeesList.find((employee, index) => employee.id === id? employeesList.splice(index, 1): null);
}


console.log(addEmployee("Kal", 123, "Leader", "Security"));
console.log(listEmployees());
console.log(findEmployee("UGR/2771/15"))
console.log(updateEmployee(123, "Leal", "ola", "reading"))
console.log(deleteEmployee("UGR/2771/15"))

console.log(employeesList)
console.log(employees)
// ain't updating the original json file tho???

