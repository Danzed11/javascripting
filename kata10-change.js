 let calculateChange = function(total, cash) {
    let change = cash - total;
    let twenty = 2000; let ten = 1000; let five = 500; let twoonie = 200; let loonie = 100; let quarter = 25; let dime = 10; let nickel = 5; let pennie = 1;
    let tally = {
        twentyDollar: 0,
        tenDollar: 0,
        fiveDollar: 0,
        twoonieDollar: 0,
        loonieDollar: 0,
        quarterDollar: 0,
        dimeDollar: 0,
        nickelDollar: 0,
        pennieDollar: 0
    };
        while (change > 0){
            if (change - ten >= 0) {
                tally.tenDollar += 1;
                change -= 1000;
            } else if (change - five >= 0) {
                tally.fiveDollar += 1;
                change -= 500;
            } else if (change - twoonie >= 0) {
                tally.twoonieDollar += 1;
                change -= 200;
            } else if (change - loonie >= 0) {
                tally.loonieDollar += 1;
                change -= 100;
            } else if (change - quarter >= 0) {
                tally.quarterDollar += 1;
                change -= 25;
            } else if (change - dime >= 0) {
                tally.dimeDollar += 1;
                change -= 10;
            } else if (change - nickel >= 0) {
                tally.nickelDollar += 1;
                change -= 5;
            } else if (change - pennie >=0) {
                tally.pennieDollar += 1;
                change-= 1;
            } 
                    if (tally.twentyDollar ===0) {
                        delete tally.twentyDollar;
                    }
                    if (tally.tenDollar ===0) {
                        delete tally.tenDollar;
                    }
                    if (tally.fiveDollar ===0) {
                        delete tally.fiveDollar;
                    }
                    if (tally.twoonieDollar ===0) {
                        delete tally.twoonieDollar;
                    }
                    if (tally.loonieDollar ===0) {
                        delete tally.loonieDollar;
                    }
                    if (tally.quarterDollar ===0) {
                        delete tally.quarterDollar;
                    }
                    if (tally.dimeDollar ===0) {
                        delete tally.dimeDollar;
                    }
                    if (tally.nickelDollar ===0) {
                        delete tally.nickelDollar;
                    }
                    if (tally.pennieDollar ===0) {
                        delete tally.pennieDollar;
                    }
        }     
        return tally;
    };

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000)); 

/////// SOMEONES

 var calculateChange = function(total, cash) {
    // Variables
    var change = (cash - total);
    var TwentyDollar = 2000;
    var TenDollar = 1000;
    var FiveDollar = 500;
    var TwoDollar  = 200;
    var OneDollar = 100;
    var Quarter = 25;
    var Dime = 10;
    var Nickel = 5;
    var Penny = 1;
  
  var cashCount = {tenDollar:0, fiveDollar:0, twoDollar:0, oneDollar:0,
   quarter:0, dime:0, nickel:0, penny:0};
  
  while (change > 0){
  
  if (change - TenDollar >= 0 ) {
      cashCount.tenDollar += 1;
      change -= 1000;
  }
  else if (change - FiveDollar >= 0 ) {
      cashCount.fiveDollar += 1;
      change -= 500;
  }
  else if (change - TwoDollar >= 0 ) {
      cashCount.twoDollar += 1;
      change -= 200;
  }
  else if (change - OneDollar >= 0 ) {
      cashCount.oneDollar += 1;
      change -= 100;
  }
  else if (change - Quarter >= 0 ) {
      cashCount.quarter += 1;
      change -= 25;
  }
  else if (change - Dime >= 0 ) {
      cashCount.dime += 1;
      change -= 10;
  }
  else if (change - Nickel >= 0 ) {
      cashCount.nickel += 1;
      change -= 5;
  }
  else if (change - Penny >= 0 ) {
      cashCount.penny += 1;
      change -= 1;
  }
  if (cashCount.tenDollar === 0){
    delete cashCount.tenDollar;
     }
   if (cashCount.fiveDollar === 0){
    delete cashCount.fiveDollar;
     }
     if (cashCount.toonie === 0){
    delete cashCount.toonie;
     }
     if (cashCount.loonie === 0){
    delete cashCount.loonie;
     }
     if (cashCount.quarter === 0){
    delete cashCount.quarter;
     }
     if (cashCount.nickel === 0){
    delete cashCount.nickel;
     }
     if (cashCount.penny === 0){
    delete cashCount.penny;
     }

 }
  return cashCount;
  };

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));  

///////// THE FOR LOOP EFFICIENT WAY... ?? THE LOGIC ??

var calculateChange = function(total, cash) {
    var change = cash - total
    var outputChange = {}
    var tenChange = "ten: "
    var com = ", "
    var changeArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
    var changeText = ["twenty: ", "ten: ", "five: ", "twoDollar: ",
    "dollar: ", "quarter: ", "dime: ", "nickel: ", "penny: "]
  
  for(i = 0; i <= changeArray.length; i++) {
    if(change - changeArray[i] > 0) {
      outputChange += changeText[i] += Math.floor(change / changeArray[i]);
      if(i <= changeArray.length - 2) {
        outputChange += com;
      }
      change -= (Math.floor(change / changeArray[i]) * changeArray[i]);
    }
  }
  
  return outputChange;
  
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));