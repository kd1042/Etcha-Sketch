
let gridsize = 16;
let color = 'black';
creategrid();

function getgridsize(){

      let userinput = document.getElementById('userinput').value;
      gridsize = userinput;
      console.log(userinput);
      creategrid();

}


function creategrid(){

      let pad = document.querySelector(".box");
      let box = pad.querySelectorAll("div")
 
      box.forEach((div) => div.remove());
      
      let size = gridsize * gridsize;
      pad.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
      pad.style.gridTemplateRows = `repeat(${gridsize} , 1fr)`;
   
  for(i =0 ; i < size; i++){

     let boxs = document.createElement('div');
       boxs.addEventListener('mouseover',defaultcolor);

       boxs.style.backgroundColor = 'floralwhite';
       pad.insertAdjacentElement("beforeend", boxs);

    }

}

function defaultcolor(){

      if(color === 'random'){
         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%) `;
      }
      else{
         this.style.backgroundColor = color;
      }
}

function changecolor(select){
      
      color = select;

}
 


