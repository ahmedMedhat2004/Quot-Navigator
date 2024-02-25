
var x =8
function qouts(){
    
    while (true) { 
        var numOfQouts= Math.floor(Math.random() * 7);
          if (x!=numOfQouts){
              console.log(x);
    x=numOfQouts
    console.log(numOfQouts);
switch (numOfQouts) {
    case 0:
        document.getElementById("qout").innerHTML='"Be yourself; everyone else is already taken."'
        document.getElementById("author").innerHTML=" _Oscar Wilde"
        break;
    case 1:
        document.getElementById("qout").innerHTML='"So many books, so little time."'
        document.getElementById("author").innerHTML=" _Oscar Wilde"
        break;
    case 2:
        document.getElementById("qout").innerHTML='"A room without books is like a body without a soul."'
        document.getElementById("author").innerHTML="_Marcus Tullius Cicero"
        break;
    case 3:
        
    document.getElementById("qout").innerHTML='"A room without books is like a body without a soul."'
    document.getElementById("author").innerHTML="_Marcus Tullius Cicero"
        break;
    case 4:
        
    document.getElementById("qout").innerHTML='"You only live once, but if you do it right, once is enough."'
    document.getElementById("author").innerHTML="_Mae West"
        break;
    case 5:
        
    document.getElementById("qout").innerHTML='"Be the change that you wish to see in the world."'
    document.getElementById("author").innerHTML="_Mahatma Gandhi"
        break;
    case 6:
        
    document.getElementById("qout").innerHTML='"In three words I can sum up everything I have learned about life: it goes on."'
    document.getElementById("author").innerHTML="_Robert Frost"
        break;
    case 7:
        
    document.getElementById("qout").innerHTML='"If you tell the truth, you do not have to remember anything."'
    document.getElementById("author").innerHTML="_Mark Twain"
        break;

   
}
break;
   }
   else if (x==numOfQouts) {
    continue;
   }}
}