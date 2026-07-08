// Second way 
document.getElementById("img-2").onclick = function (){
    alert("img-2 click second approche");
}
//Third way : Third parameter by deafult false
document.getElementById("img-3").addEventListener('click',function(){
    alert("img-3 click third approche");
})
//Target an event
document.querySelector('#images').addEventListener('click' ,function(e){
    //to get target Parent
     console.log(e.target.parentNode);  
     //to avoid whole list item remove in once when you click ul
     // after effect now on image click it remove 
     if(e.target.tagName === 'IMG'){
     let removeIt = e.target.parentNode;
     //First Way
     //removeIt.remove();
     //second way
     removeIt.parentNode.removeChild(removeIt);
     }
}) 