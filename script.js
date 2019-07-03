// Presidents Data
let presidents = [
  {
    name: 'Calvin Coolidge',
    description:
      'Calvin Coolidge was an American politician and lawyer who served as the 30th president of the United States from 1923 to 1929. A Republican lawyer from New England, born in Vermont, Coolidge worked his way up the ladder of Massachusetts state politics, eventually becoming governor.',
    src: 'public/presidents/coolidge.jpg'
  },
  {
    name: 'Gerald R. Ford',
    description:
      'Gerald Rudolph Ford Jr. was an American politician who served as the 38th president of the United States from August 1974 to January 1977. Before his accession to the presidency, Ford served as the 40th vice president of the United States from December 1973 to August 1974.',
    src: 'public/presidents/ford.jpg'
  },
  {
    name: 'Herbert Walker Bush',
    description:
      'George Herbert Walker Bush was an American politician who served as the 41st president of the United States from 1989 to 1993 and the 43rd vice president from 1981 to 1989. A member of the Republican Party, he held posts that included those of congressman, ambassador, and CIA director.',
    src: 'public/presidents/hw-bush.jpg'
  },
  {
    name: 'Dwight D. "Ike" Eisenhower',
    description:
      'Dwight David "Ike" Eisenhower was an American army general and statesman who served as the 34th president of the United States from 1953 to 1961. During World War II, he was a five-star general in the United States Army. ',
    src: 'public/presidents/ike.jpg'
  },
  {
    name: 'Abraham Lincoln',
    description:
      'Abraham Lincoln was an American statesman, politician, and lawyer who served as the 16th president of the United States from 1861 until his assassination in April 1865. Lincoln led the nation through the American Civil War, its bloodiest war and its greatest moral, constitutional, and political crisis.',
    src: 'public/presidents/lincoln.jpg'
  },
  {
    name: 'Ronald Reagan',
    description:
      'Ronald Wilson Reagan was an American politician and film actor who served as the 40th president of the United States from 1981 to 1989. Prior to his presidency, he was a Hollywood actor and union leader before serving as the 33rd governor of California from 1967 to 1975.',
    src: 'public/presidents/reagan.jpg'
  },
  {
    name: 'Teddy Roosevelt',
    description:
      'Roosevelt has also been deemed the country"s environmentalist president. In 1906, he signed the National Monument Act, protection sites like the Grand Canyon and preserving countless wildlife sanctuaries, national forests, and federal game reserves.',
    src: 'public/presidents/Teddy.jpg'
  },
  {
    name: 'George W. Bush',
    description:
      'George Walker Bush is an American politician and businessman who served as the 43rd president of the United States from 2001 to 2009. He had previously served as the 46th governor of Texas from 1995 to 2000.',
    src: 'public/presidents/w-bush.jpg'
  }
];

// On Load - immediately prompt for Name
window.onload = function askName() {
  const name = prompt('Welcome, please enter your name?');
  if (name != null) {
    document.getElementById('name').innerHTML = 'Welcome ' + name;
  } else {
    return null;
  }
};

// Reset Button Feature
function resetPage() {
  location.reload(true);
}

// Added method Random() for Testing
function check() {
  let randomX = Math.floor(Math.random() * 8);
  console.log(randomX);
  document.getElementById('results').style.display = 'inline';
  document.getElementById('prez-name').innerHTML =
    'You are: ' + presidents[randomX].name;
  document.getElementById('description').innerHTML =
    presidents[randomX].description;
  document.getElementById('prez-pic').src = presidents[randomX].src;
}
