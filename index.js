//criar promisas
const myPromise = new Promise((resolve, reject) =>{ 
    const name ="luciano";

    if (name === "luciano") {
        resolve('Usuário encontrado');

    }else{
        reject('Usuário não encontrado ');
    }
}) 

myPromise.then((data) => {
    console.log(data)
}).catch(() => {
    console.log(`ERRO:: ${error}`)

})

//Encadeamento de .then 's
myPromise.then((data) => {
    return data.toLowerCase()
}).then((stringModified) =>{
    console.log(stringModified)
})

//resolvendo várias promises em 'race' - a partir da primeira que for resolvida 

const p1 = new Promise((resolve, reject)=> {
  setTimeout(() =>{
        console.log('P1 ok! Timeout');
  },2000 )
})    
const p2 =new Promise((resolve, reject) => {
    console.log('P2 ok!');
})
const p3 =new Promise((resolve, reject) => {
    console.log('P3 ok!');
})

const resolveRace = Promise.all([p1, p2, p3]).then((data)=> {
    console.log(data)

})

//fetch API- API do github

//const username= 'Rafael';

//metodo 'fetch' retorna uma promisse
/*fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'applicatin/vnd.github.v3+json'
    },
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(dat.name)
    //console.log(data)
}).catch((error) => {
    console.log(error)
})*/

var characters = ''
var clans = ''

fetch(`https://dattebayo-api.onrender.com/characters/${characters}`, {
    method: 'GET',
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
    //console.log(data)
}).catch((error) => {
    console.log(error)
})

fetch(`https://dattebayo-api.onrender.com/clans/${clans}`, {
    method: 'GET',
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
    //console.log(data)
}).catch((error) => {
    console.log(error)
})