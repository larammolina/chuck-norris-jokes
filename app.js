
const url = 'https://api.chucknorris.io/jokes/random';
let searchBtn = document.getElementById('searchBtn');

function search(){
    async function newsSearch() {
       
        try {
            const resp = await fetch(url);
            const info = await resp.json();
            return info;

        } catch (error) {
            console.log(error);
        }
    }

    let info = newsSearch();
    info.then(response => {
        console.log(response);
        //let chiste = document.getElementById("chiste");
        //chiste.innerHTML = response.info.value;
        //console.log(chiste);
        //document.appendChild(chiste.innerHTML);

        var para = document.createElement("P");
        var t = document.createTextNode(response.value);
        para.appendChild(t);
        document.getElementById("chiste").appendChild(para);
    }).catch(error => {
       // console.log(error);
    })

}

search();

searchBtn.addEventListener('click', ()=>{
    search();
})
