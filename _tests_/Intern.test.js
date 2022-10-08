const intern = require("./lib/intern.js");
test("is for intern section", ()=>{
    const intern = new Intern("rushi", 3333, "Upper Iowa University");
    expect (intern.school).toEqual(expect.any(string));
});