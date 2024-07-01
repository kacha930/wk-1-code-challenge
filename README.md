### Challenge 1:  Student Grade Generator (Toy Problem)

       - Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

        The function prompts the user for input, validates the input, and correctly maps the input to the appropriate grade.
        
        instructions : create a file, marks.js 
         run npm install to install the necessary packages
                       run npm test to check if your code is correct
                       use control flow to input condition of students marks
                       when you run your code with example student marks input as 48 the console should provide a grade of E as a fail.

         solution    : create a variable to input a student marks(your choice)
                      the first condition will output a grade of A if stuents marks are above 79, 
                      else if create a condition with logical operators && to create a range of grades for a student to attain a given grade
                      else must complete without a condition and marks the end of the program as a grade F.              
      
### Challenge 2: Speed Detector (Toy Problem)

        - Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

          For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

          instructions :create a file, speed.js 
                       create a function calculateDemeritPoints which takes an input as speed,
                       create variable for the speed limit which is a constant 70km/hr.
                       create a variable for the penaly limit when a car gets beyond the 12 demerit points.
                       the speed of the car when at 70, should return a value ("OK")
                       calculate the demerit points deducted for a car travelling at a speed of 80, if every 5km the demerit points increases by 1 point.
           solution    :create a function, speedDetector, 
                        create three variables, one variable has the value for the speed limit = 70km/hr,
                        second variable calculates the speed limit for licence being suspended, = 12 and the other variable calculates the km/demerit points, which looks at for every 5km/hr = 1 points 
                        create the first condition, i.e if the speed = 70 then it prints = ok, and returns zero points.else... 
                        create the variable for calculting the demerit points abpve the speed limit using math.floor() formula.
                        the lastt condition will check if the difference between the points to see if it is greater than the limit for getting your licence suspended = 12 points.


### Challenge 3: Net Salary Calculator (Toy Problem)

        - Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
           Calculate the payee (i.e.   Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

             NB: Use KRA, NHIF, and NSSF values provided in the link below.

         - https://www.aren.co.ke/payroll/taxrates.htm Links to an external site. 

           Links to an external site.-  Links to an external site.Links to an external site.  

        - www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

        instructions : Create Netsal.js file
                    input employee salary as an input to begin with (your choice of value)

