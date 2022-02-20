let sizeStairs = prompt("Qual tamanho da escada?") // defina o tamanho da escada

for (let i = 0; i < sizeStairs; i++) {
    for (let j = 0; j < sizeStairs; j++) {
        if(j > (sizeStairs-2-i)){
            document.write("*")
        }else{
            document.write("&nbsp&nbsp")
        }
    }   
    document.write("<br/>"); 
}
