// For a pie chart
console.log('inicia');
document.addEventListener("DOMContentLoaded", function(event) {
    const boton = document.querySelector('#boton');
    const menu = document.querySelector('#menu');
    
    boton.addEventListener('click', () => {
        console.log('click')
        menu.classList.toggle('hidden')
    })
//   icono_menu.addEventListener('click', ()=>{
//       menu.classList.toggle('hidden')
//       const existe = menu.classList.contains("sm:flex-col");
//       console.log('click menu', existe);
//     //   close_menu.classList.toggle('hidden')
      
//       menu.classList.toggle('flex-col')
//   })
//   close_menu.addEventListener('click', ()=>{
//     console.log('click close_menu');
//     menu.classList.toggle('hidden')
//     // element.classList.add("element.classList.add("mystyle");");
//     menu.classList.toggle('flex-col')

// })
// document.getElementById("hamburger").onclick = function toggleMenu() {
//     const navToggle = document.getElementsByClassName("toggle");
//     for (let i = 0; i < navToggle.length; i++) {
//       navToggle.item(i).classList.toggle("hidden");
//     }
//   };
  // Your code to run since DOM is loaded and ready
  var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: ['Alimnetación', 'Servicios', 'Aseo', 'Transporte', 'Comunicación', 'Salud'],
              datasets: [{
                  label: '# of Votes',
                  data: [120000, 190000, 3000, 5000, 2000, 3000],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  // borderWidth: 1
              }]
          },
          options: {
              // scales: {
              //     yAxes: [{
              //         ticks: {
              //             beginAtZero: true
              //         }
              //     }]
              // }
          }
      });
});
