
// function getHTML(){
//     document.getElementById("day-dropdown").innerHTML=Option;
// }



var min = 1,
max = 31,
select = document.getElementById('day-dropdown');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
month = document.getElementById('month-dropdown')
for (var i = 0; i<months.length; i++){
    var opt = document.createElement('option');
    opt.value = months[i];
    opt.innerHTML = months[i];
    month.appendChild(opt);
}

year = document.getElementById('year-dropdown')
for (var i = 2022; i>=1900; i--){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    year.appendChild(opt);
}


// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("day-dropdown");
//       for (var i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }