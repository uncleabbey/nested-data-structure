// One: loop primenumbers

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}


var primeNumbers = nestedData.innerData.numberData.primeNumbers

for (var i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i])
}


// two: 

var fibonnaci = nestedData.innerData.numberData.fibonnaci

for (var i = 0; i < fibonnaci.length; i++) {
    console.log(fibonnaci[i])
}

// three

var order = nestedData.innerData.order

console.log(order[1])

// four
var addSnack = nestedData.innerData.addSnack('chocolate')

var snacks = nestedData.innerData.snacks


console.log(snacks)



// five



// this keyword refers to the owner object