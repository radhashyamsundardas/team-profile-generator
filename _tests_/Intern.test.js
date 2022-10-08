const intern = require("./lib/Intern.js");
test("is for intern section", ()=>{
    const intern = new Intern("rushi", 3333, "Upper Iowa University");
    expect (intern.school).toEqual(expect.any(string));
});