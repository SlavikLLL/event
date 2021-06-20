let enter = document.getElementById('enter');


function clearText(){
    
    text.value = "";
}
function eventText(){
    let  text = document.getElementById('text');
    let value = text.value;
    let ul = document.createElement('ul');
    document.body.append(ul);
   if(value == ""){
       alert("Ошибка");
   }
   else{
     let li = document.createElement('li');
     li.innerHTML = value;
     clearText();
     ul.appendChild(li);
     
    

     

     
      
   }
  
}


//

enter.onclick = eventText;


