
const obterTemp = () =>{
  const cidade = document.getElementById('cidade').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=777fd6c175f16899b669ab9b22be7638&units=metric`;
  
  fetch(url)
        .then(resposta =>{
          // console.log(resposta)
          return resposta.json()
        })
          .then(dados =>{
            let temp;
            document.getElementById('temp').innerText = dados.main.temp;
            document.getElementById('temp-min').innerText = dados.main.temp_min;
            document.getElementById('temp-max').innerText = dados.main.temp_max;
            document.getElementById('desc').innerText = dados.weather[0].description;
            document.getElementById('icon').innerText = dados.weather[0].icon;

            console.log(dados.main.temp);
            console.log(dados.name);
            console.log(dados.weather);
            console.log(dados.sys.country);
            console.log(dados.weather[0].description);
            console.log(dados.weather[0].icon);
          })
          .catch(erro => {
            console.log(erro)
          })
 }