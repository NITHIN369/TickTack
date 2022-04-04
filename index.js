var turn="Player 1";
for(let i=0;i<document.getElementsByClassName('tile').length;i++){
    document.getElementsByClassName('tile')[i].addEventListener("click",function (){
        if(turn=="Player 1"){
            if(!this.innerHTML){                
                turn="Player 2";
                this.innerHTML="1";                
                document.querySelector("h1").innerHTML=turn;
                CheckGameStatus()
            }
            
        }else{
            if(!this.innerHTML){                
                turn="Player 1"
                this.innerHTML="2";                
                document.querySelector("h1").innerHTML=turn;
                CheckGameStatus()
            }
        }
        
    })
}
function CheckGameStatus(){
    var li=document.getElementsByClassName("tile")
    if(li[0].innerHTML && li[4].innerHTML && li[8].innerHTML && li[0].innerHTML==li[4].innerHTML && li[0].innerHTML==li[8].innerHTML){
        console.log("Game over Player: "+li[4].innerHTML+" Wins match");
        document.getElementById("add").style.width="100%";
        console.log("Height: "+window.innerHeight)
        document.getElementById("add").style.height=""+window.innerHeight+"px";
        document.getElementById("add").innerHTML="Player: "+li[4].innerHTML+" Wins match";
        document.getElementById("add").style.paddingTop="100px";
        document.getElementById("add").style.paddingLeft="500px";
        ifMobile()
        
    }else if(li[2].innerHTML && li[4].innerHTML && li[6].innerHTML && li[2].innerHTML==li[4].innerHTML && li[2].innerHTML==li[6].innerHTML){
        console.log("Game over Player: "+li[4].innerHTML+" Wins match")
        document.getElementById("add").style.width="100%";
        console.log("Height: "+window.innerHeight)
        document.getElementById("add").style.height=""+window.innerHeight+"px";
        document.getElementById("add").innerHTML="Player: "+li[4].innerHTML+" Wins match";
        document.getElementById("add").style.paddingTop="100px";
        document.getElementById("add").style.paddingLeft="500px";
        ifMobile()
    }else{
        let i=0;
        while(i<9){
            if(li[i].innerHTML && li[i+1].innerHTML && li[i+2].innerHTML && li[i+1].innerHTML==li[i].innerHTML && li[i+2].innerHTML==li[i].innerHTML){
                console.log("Game over Player: "+li[i].innerHTML+" Wins match");
                document.getElementById("add").style.width="100%";
        console.log("Height: "+window.innerHeight)
        document.getElementById("add").style.height=""+window.innerHeight+"px";
        document.getElementById("add").innerHTML="Player: "+li[i].innerHTML+" Wins match";
        document.getElementById("add").style.paddingTop="100px";
        document.getElementById("add").style.paddingLeft="500px";
        ifMobile()
                break;
            }else{
                i+=3
            }
        }
        i=0;
        while(i<3){
            if(li[i].innerHTML && li[i+3].innerHTML && li[i+6].innerHTML && li[i+3].innerHTML==li[i].innerHTML && li[i+6].innerHTML==li[i].innerHTML){
                console.log("Player: "+li[4].innerHTML+" Wins match");
                document.getElementById("add").style.width="100%";
        console.log("Height: "+window.innerHeight)
        document.getElementById("add").style.height=""+window.innerHeight+"px";
        document.getElementById("add").innerHTML="Player: "+li[i].innerHTML+" Wins match";
        document.getElementById("add").style.paddingTop="100px";
        document.getElementById("add").style.paddingLeft="500px";
        ifMobile()
                break;
            }else{
                i+=1
            }
        }

    }
}
function ifMobile(){
    console.log("Widht: "+window.innerWidth)
    if(window.innerWidth<700){
        document.getElementById("add").style.paddingLeft="100px";
        document.getElementById("add").style.fontSize="30px"
    }
}