let disp=document.getElementById("disp")
async function joke(){
    try{
        disp.innerHTML=`fteching a joke`
        const data=await fetch('https://official-joke-api.appspot.com/random_joke')
        const jok=await data.json()
        disp.innerHTML=`<h1>${jok.setup}</h1><br>`
        setTimeout(()=>disp.innerHTML+=`<h2>${jok.punchline}</h2>`,2000)
    }catch(error){
        disp.innerHTML+=`<h2>unable to fetch</h2>`
    } 
}
