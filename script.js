// window.onload = function askName() {
//   const name = prompt('Welcome, please enter your name?');
//   if (name != null) {
//     document.getElementById('name').innerHTML = 'Welcome ' + name + '!';
//   } else {
//     return null;
//   }
// };

// Array to Store
// let presidentsName = [
//   'Calvin Coolidge',
//   'Gerald R. Ford',
//   'Herbert Walker Bush',
//   'Dwight D. "Ike" Eisenhower',
//   'Abraham Lincoln',
//   'Ronald Reagan',
//   'Teddy Roosevelt',
//   'George W. Bush'
// ];

// Object Notation to try out
let presidents = [
  {
    name: 'Calvin Coolidge',
    src: 'public/presidents/coolidge.jpg'
  },
  {
    name: 'Gerald R. Ford',
    src: 'public/presidents/ford.jpg'
  },
  {
    name: 'Herbert Walker Bush',
    src: 'public/presidents/hw-bush.jpg'
  },
  {
    name: 'Dwight D. "Ike" Eisenhower',
    src: 'public/presidents/ike.jpg'
  },
  {
    name: 'Abraham Lincoln',
    src: 'public/presidents/lincoln.jpg'
  },
  {
    name: 'Ronald Reagan',
    src: 'public/presidents/reagan.jpg'
  },
  {
    name: 'Teddy Roosevelt',
    src: 'public/presidents/Teddy.jpg'
  },
  {
    name: 'George W. Bush',
    src: 'public/presidents/w-bush.jpg'
  }
];

// console.log(presidents[3]);

function check() {
  document.getElementById('results').style.visibility = 'visible';
  document.getElementById('prez-name').innerHTML =
    'You are: ' + presidents[3].name;
  document.getElementById('prez-pic').src = presidents[3].src;
}
