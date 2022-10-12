const engineer = require(./lib/Engineer.js);
test ("is for engineer section", ()=>{
    const engineer = new engineer("rahul", 4444, "rahul@mail.com", "rahuldesai");
    expect(engineer.github).toEqual(expect.any(string));
});