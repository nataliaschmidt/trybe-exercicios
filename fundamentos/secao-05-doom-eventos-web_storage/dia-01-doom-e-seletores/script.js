const h3 = document.querySelectorAll('.emergency-tasks h3');
//console.log(h3);
for (let index = 0; index < h3.length; index +=1){
    h3[index].style.backgroundColor = '#a500f2'
}


const h3NoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
console.log(h3NoEmergency);
for (let index = 0; index < h3NoEmergency.length; index += 1){
    h3NoEmergency[index].style.backgroundColor = '#212522'
}