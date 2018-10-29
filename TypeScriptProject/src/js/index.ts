let input: HTMLInputElement = <HTMLInputElement>document.getElementById("conversion");
let toGramButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ToG");
let toOuncesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ToO");
let outputdiv: HTMLDivElement = <HTMLDivElement>document.getElementById("output");

function convToG(){
    
    let weight: number = Number(input.value);
    let result:number = weight* 28.3495231;
    outputdiv.textContent = (""+result);
    
}
function convToO(){
    let weight: number = Number(input.value);
    let result:number = weight * 0.0352739619;
    outputdiv.textContent = (""+result);
}

toOuncesButton.addEventListener("click", convToO);
toGramButton.addEventListener("click", convToG);