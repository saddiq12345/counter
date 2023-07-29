
function add() {

    document.getElementById('khan').innerHTML="isdp";
}




let counter='0';
let Element=document.getElementById('khan');
function addone() {
counter++;
Element.innerHTML=counter



}
function reset(){
    counter=0;
    Element.innerHTML=counter
}



function OddEven(){
    addone()
    if (counter%2==0)
    {document.getElementById('talha').innerHTML= 'Even';}
else
{document.getElementById('talha').innerHTML= 'odd';}
}