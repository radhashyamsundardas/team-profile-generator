const manager = require("./lib/Manager.js");
test("is for manager section", ()=>{
    const manager = new Manager("saumil", 2222, "saumil@mail.com", "123456" );
    expect (manager.officeNumber).toEqual(expect.any(number));
});