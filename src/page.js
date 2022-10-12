// const Manager = require("../lib/Manager")

const page = ()=>{


  const HTMLpage = mergedTeam =>{
      return`
      <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
      <title>MY TEAM MEMBERS</title>
    </head>
    <body>
      <nav class="container-fluid">
        <h1>MY TEAM MEMBERS</h1>
      </nav>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
      <script src="./index.js"></script>
    
  </html>
      `
  }
  
  

  const managerHTML= manager => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name:${manager.name}</li>
      <li class="list-group-item">Employee id: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mail to:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office NUmber: ${manager.officeNumber}</li>
    </ul>
  </div>
    `
  }
  
  const engineerHTML= engineer => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    Engineer
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name:${engineer.name}</li>
      <li class="list-group-item">Employee id: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mail to:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item"><a href="http://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
  </div>
    `
  }
  
  const internHTML= intern => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    Intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name:${intern.name}</li>
      <li class="list-group-item">Employee id: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mail to:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School Name:${intern.school}</li>
    </ul>
  </div>
  `}
  
  
  const displayPage = empArray =>{
    listEmpty = []
    for (let i =0; empArray.length>i; i++){
      const role = empArray[i].getRole();
      if (role === 'Manager'){
        listEmpty.push(managerHTML(empArray[i]));
      }
      if (role === 'Engineerr'){
        listEmpty.push(engineerHTML(empArray[i]));
      }
      if (role === 'Intern'){
        listEmpty.push(internHTML(empArray[i]));
      }
    }
    const mergedTeam = listEmpty.join('');
    return HTMLpage(mergedTeam);
  }
}
  
  


module.exports = page;
