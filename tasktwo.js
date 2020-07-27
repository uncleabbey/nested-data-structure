var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
    french: {
          hello: "Bonjour"
      }
    }
  }
  
}

// one

nestedObject.addSpeaker = function (name) {
   this.speakers.push({name})
    return this.speakers
}
var addSpeaker = nestedObject.addSpeaker('Ade')
console.log(addSpeaker)

// two
nestedObject.addLanguage = function (language, greeting) {
  this.data.languages[language] = {
    "hello": greeting
  }
  return this.data.languages
}
var addLanguage = nestedObject.addLanguage('Hausa', 'Saanu Nku')
console.log(addLanguage)

// three

nestedObject.addCountry = function (country, capital, population) {
  this.data.continents.europe.countries[country] = {capital, population}
  return this.data.continents.europe.countries
}

var addCountry = nestedObject.addCountry('Italy', 'Rome', 100000)
console.log(addCountry)