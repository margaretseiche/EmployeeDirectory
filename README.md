# Employee Directory

Demo link at https://youtu.be/yS8ZmDgy3n8

![tes](/Develop/output/EmployeeDirectory.JPG)

## Technologies
Node Command Line Interface, Node Inquirer, Jest (testing)

## Description
Teams need keep track of team member details in a simple format.  This app allows managers to build a team contact list with each person's name, position, ID number, email address, and role-specific information (office number for managers, Github name for engineers, and school for interns).  

## Methodology

* Since we have been talking about 'test driven development', I thought that starting with the tests would be appropriate.

- In Employee.test.js, the first test was confirming that Employee is set as an object.
- Next, the test confirmed that the name, id, and email could all be set through the constructor arguments.  
- The test also confirmed that we can get the name, id, and email through the methods set in the constructor --- getName(), getId(), getEmail().
- The test finally confirms that getRole() shows that all employees are classified as employees.

- The other tests confirm that data in Manager, Engineer, and Intern can be set correctly and retrieved as expected.

* I also used the ReadMeInstructions as a guide.

* From there, I tried to better understand how all of the files fit together, as it was quite confusing.  I understood that Employee would be the overall constructor, that Manager, Engineer, and Intern would be subtypes / constructors, and that each person would be an instance of Manager, Engineer, or Intern constructor.  

* I started the prompts at the employee level (common to everyone), leaving the role-specific question for the end.  The prompts work correctly at the beginning.  But after answering the checkbox question on role, it exits the program, when it should be using switch/case for the final role-specific question.  I tried making that question into a function, called by .then just after the initial questions, but that did not work.  I also tried to comment out the separate part so that the last question was a 'function within the overall function', but that didn't work either.

* The tutor explained that Manager should be the first employee and will complete the field for the other staff members.  There is definitely a way to make the code less repetitive, but I have not figured that out yet.

* The tests all pass.  (I had to rework the tests, because I split name into firstname and lastname, so had errors on Employee.test.js until I added the correct components for each test.  So actually, going through that, I understand tests a little more.)

## Usage

* npm run test

* node app.js --- Follow the prompts.  Then open /output/team.html in the browser.

## Authors
* Margaret Seiche, Github: margaretseiche
<img alt="Margaret Seiche" src="https://avatars.githubusercontent.com/margaretseiche?s=200" width="200" height="200">

## Contact
seichemargaret@gmail.com
