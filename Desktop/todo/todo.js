$('#taskInput').keypress(function(event){
    let keycode = event.keyCode; 
    if(keycode == '13'){
        newElement();
    }
});
function newElement() {

  let li = document.createElement("li");
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  li.appendChild(checkbox);


  let inputValue = document.getElementById("taskInput").value;

  let input = document.createElement('input');
  input.type="text";
  input.id="text-input";
  input.value=inputValue;
  input.className="items";
  input.disabled="true";
  li.appendChild(input);



  if (inputValue === '') {
    alert("Enter task");
  } else {
    document.getElementById("todolist").appendChild(li);
  }

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
     div.remove(div);
    }
  }
  // input.addEventListener('dblclick', function(){
  //   input.disabled="false";
  // }, false); 
  
  // $("input").dblclick(function(){
  //   $("input").attr("disabled","false");{

  //   }
    
  // });  
}
