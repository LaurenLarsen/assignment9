// CREATE AN ARRAY OF EMPLOYEES
    let fiveEmployees = [
        [12345678, 'Brent Larsen', 1234, "blarsen@company.com", "Administrative"],
        [23456789, 'Lauren Larsen', 2345, "llarsen@company.com","Executive"], 
        [34567891, 'Katie Hehir', 3456, "khehir@company.com","Sales"],
        [45678912, 'Dawson Leary', 4567, "dleary@company.com","Marketing"],
        [65789123, 'Pacey Whitter', 5678, "pwhitter@company.com","Quality Assurance" ]
    ];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("") === null) {
    //return 
  }


// GET DOM ELEMENTS
    let form     = document.querySelector('#addForm');
    let empTable    = document.querySelector('#employees');
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
 window.addEventListener('load', () => {

    function createTable(tableData) {
       
        var tableBody = document.querySelector('table');
      
        tableData.forEach(function(rowData) {
          var row = document.createElement('tr');
      
          rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
          });
      
          tableBody.appendChild(row);
        });
      
      }
      
      createTable([ 
        [12345678, 'Brent Larsen', 1234, "blarsen@company.com", "Administrative"],
        [23456789, 'Lauren Larsen', 2345, "llarsen@company.com","Executive"], 
        [34567891, 'Katie Hehir', 3456, "khehir@company.com","Sales"],
        [45678912, 'Dawson Leary', 4567, "dleary@company.com","Marketing"],
        [65789123, 'Pacey Whitter', 5678, "pwhitter@company.com","Quality Assurance" ]
    ]);
       
    
 });
 

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
        e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;
    let empRow      = empTable.insertRow();
    let cellID      = empRow.insertCell();
    let cellName    = empRow.insertCell();
    let cellExt     = empRow.insertCell();
    let cellEmail   = empRow.insertCell();
    let cellDept    = empRow.insertCell();
    
    
    cellID.appendChild(document.createTextNode(empID));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(empExt));
    cellEmail.appendChild(document.createTextNode(empEmail));
    cellDept.appendChild(document.createTextNode(empDept));
    
    
        

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
        let newEmployee = [];
        
       
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
        newEmployee = fiveEmployees.push();
    // BUILD THE GRID
      

    // RESET THE FORM
        document.querySelector('#addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
        document.querySelector('#id').focus();

});

// DELETE EMPLOYEE

empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        }
    }

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
         document.querySelector('tbody').reset();
    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};