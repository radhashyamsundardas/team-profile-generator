const employee = require('.lib/Employee.js');

test("is for employee section", () =>{
    const employee = new Employee("hiren", 5555, "iamghost@email.com");
    expect (employee.name).toEqual(expect.any(string));
    expect (employee.id).toEqual(expect.any(number));
    expect(employee.email).toContain(expect.any("@"));
});