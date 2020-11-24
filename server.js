const express = require('express'); //framework na server
const bodyParser = require('body-parser'); //pomuze zpracovat pozadavky z frontendu
const data = require('./data.json');
const app = express();
const port = process.env.PORT || 5000; //muzu si tuto promennou nadefinovat teoreticky sama, default 5000
//tady napisu funkci, budu psat logiku funkce
const processForm = (form) => {
  //nase logika
  //return {jidelnicek - csita data}
  //neuvidi to zatim uzivatel
  if (form.gender === 'men') {
    return data[0];
  }
  return data[10];
};
app.use(bodyParser.json()); //prevede na json format
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/hello', (req, res) => {
  //tohle uz muzu volat z  frontendu api hello - end point pomoci fetch
  //get = dostaň data, prikaz
  //nezprocesovana data
  res.send(data[5]);
});
app.post('/api/world', (req, res) => {
  //post = data z frontendu zpracuji na backendu
  //muzu si to pojmenovat, ale musi zacinat lomitkem
  console.log(req.body); //tady prijde json vystup //tady budu VOLAT FUNKCI
  const elm = processForm(req.body);
  res.send(elm);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
//zapina server
//npm i nodemon -g - ukaze mi zmeny na backendu a nemusim zapinat a vypinat, automaticky se propisou zmeny
