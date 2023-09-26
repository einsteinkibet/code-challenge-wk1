//describes a function that calculates total nssf deductions
function nssfdeduction(salary) {
    return salary * 0.05;
}
//describes a function that calculates total housing levy
function housinglevy(salary) {
    return salary * 0.015;
}
//describes a function that calculates payee for the given salary
function calculatepayee(salary) {
    if (salary <= 24000) {
        return salary * 0.1;
    } else if (salary > 24000 && salary < 32333) {
        return salary * 0.25;
    } else if (salary >= 32333) {
        return salary * 0.3;
    } else {
        return "please enter a valid amount";
    }
}
//calculate nhif based on the basic salary
function calculatenhif(salary) {
    if (salary >= 0 && salary < 6000) {
       deduction = 150;
    } else if (salary >= 6000 && salary < 8000) {
        deduction = 300;
    } else if (salary >= 8000 && salary < 12000) {
        deduction = 400;
    } else if (salary >= 12000 && salary < 15000) {
        deduction = 500;
    } else if (salary >= 15000 && salary < 20000) {
        deduction = 600;
    } else if (salary >= 20000 && salary < 25000) {
        deduction = 750;
    } else if (salary >= 25000 && salary < 30000) {
        deduction = 850;
    } else if (salary >= 30000 && salary < 35000) {
        deduction = 900;
    } else if (salary >= 35000 && salary < 40000) {
        deduction = 950;
    } else if (salary >= 40000 && salary < 45000) {
        deduction     = 1000;
    } else if (salary >= 45000 && salary < 50000) {
        deduction     = 1100;
    } else if (salary >= 50000 && salary < 60000) {
        deduction = 1200;
    } else if (salary >= 60000 && salary < 70000) {
        deduction = 1300;
    } else if (salary >= 70000 && salary < 80000) {
        deduction = 1400;
    } else if (salary >= 80000 && salary < 90000) {
        deduction = 1500;
    } else if (salary >= 90000 && salary < 100000) {
        deduction = 1600;
    } else if (salary >= 100000) {
        deduction = 1700;
    }
    
    return deduction;
 }
//adds all the deductions for payee, nhif, nssf and the housing levy
 function totaldeductions(salary) {
    const payee = calculatepayee(salary);
    const nhif = calculatenhif(salary);
    const nssf = nssfdeduction(salary);
    const housinglevyamount = housinglevy(salary);
//all the deductions returned
    return payee + nhif + nssf + housinglevyamount;
 }
//calculates the remaining amount after all deductions and prints the deductions and finally the net salary
function netsalary(salary) {
    const deductions = totaldeductions(salary);
    const netSalary = salary - deductions;
    console.log(`Salary: ${salary}`);
    console.log(`Deductions: ${totaldeductions(salary)}`);
    console.log(`Your net salary is ${netSalary}`);
}

netsalary(40000);//calls the netsalary calculator withn an amount of 40000