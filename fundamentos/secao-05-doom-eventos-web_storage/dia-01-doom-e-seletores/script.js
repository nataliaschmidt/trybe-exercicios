//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();

function newText(){
  let future =  document.getElementsByTagName('p')[1];
    future.innerHTML = `Daqui 02 anos me vejo trabalhando como desenvolvedora e decolando na minha carreira!`;   
}

newText()

function newColor (){
    let newColor = document.getElementsByClassName('main-content')[0]
    newColor.style.background = 'rgb(76,164,109)';
}

newColor ();