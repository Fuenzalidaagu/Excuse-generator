function myonLoad(){
    document.querySelector("button").addEventListener("click", () =>{
     document.querySelector("#excuse").innerHTML = onLoad();
    })
}
function onLoad() {

    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    
    let who1 = Math.floor(Math.random()* who.length);
    let what1 = Math.floor(Math.random()* what.length);
    let when1 = Math.floor(Math.random()* when.length);

    return who[who1] + " " + what[what1] + " " + when[when1];
}

console.log("Hello World") 