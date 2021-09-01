const button = document.querySelector("button")
const body = document.querySelector("body")
buttonClick = () => {
  axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
      let residents = res.data.results[0].residents
      for(let i =0; i < residents.length;i++){
        axios.get(`${residents[i]}`)
        .then((res) =>{
          console.log(res.data.name)
          const newH2 = document.createElement("h2")
          newH2.textContent = res.data.name
          body.appendChild(newH2)
          
        }).catch((err)=> console.log(err))
      }
    })
    .catch((err) => console.log(err))
}


button.addEventListener('click', buttonClick)

