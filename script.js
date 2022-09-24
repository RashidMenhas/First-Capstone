const menuIcon = document.getElementById('menu');
const crossIcon = document.getElementById('cross-icon');
const menuIconUl = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
  menuIconUl.style.display = 'flex';
});

crossIcon.addEventListener('click', () => {
  menuIconUl.style.display = 'none';
});

const topDevelopers = [
  {
    profileUrl: 'Kane_Brown.png',
    name: 'Kane Brown',
    country: 'American singer',
    description: 'Brown first came to the attention of the public through social media. After Brown signed with RCA Nashville in early 2016, released in March 2016.Brown became the first artist tohave simultaneous number ones on all five main Billboard country charts.',
  },
  {
    profileUrl: 'Chris_Stapleton.png',
    name: 'Chris Stapleton',
    country: 'American singer-songwriter, guitarist, and record producer',
    description: 'Stapleton moved to Nashville, Tennessee, to pursue an engineering degree from VanderbiltUniversity but dropped out to pursue his career in music. Subsequently, Stapleton signed acontract with Sea Gayle Music to write and publish his music.',
  },
  {
    profileUrl: 'dolly.png',
    name: 'Dolly Parton',
    country: 'American singer-songwriter, actress, philanthropist, and businesswoman',
    description: ' After achieving success as a songwriter for others, Parton made her album debut in 1967,which led to success during the 1970s and continued into the 1980s.',
  },
  {
    profileUrl: 'luke_combs.webp',
    name: 'Luke Combs',
    country: 'American country music singer and songwriter',
    description: 'Born and raised in North Carolina, Combs began performing as a child, most notablyperforming at Carnegie Hall, moved to Nashville, Tennessee, where he released his debutextended play, The Way She Rides, in 2014.',
  },
  {
    profileUrl: 'eric_chruch.jpg',
    name: 'Eric Chruch',
    country: 'American country music singer-songwriter',
    description: 'He has released nine studio albums through Capitol Nashville since 2005. His debut album,2006s Sinners Like Me, produced three singles on the Billboard country charts including the top 20 hits "How Bout You", "Two Pink Lines", and "Guys Like Me".',
  },
  {
    profileUrl: 'shania_twain.webp',
    name: 'Shania Twain',
    country: 'Canadian singer and songwriter',
    description: ' She has sold over 100 million records, making her the best-selling female artist in countrymusic history and one of the best-selling music artists of all time. Billboard named her asthe leader of the 90s country-pop crossover stars.',
  },
];
const musiciansModal = document.getElementById('musicians-modal');
const btnMore = document.getElementById('btn-more');
const btnLess = document.getElementById('btn-less');
let developerArea = '';
topDevelopers.forEach((developer) => {
  developerArea = `<div class="musicians-card">
    <div class="card-imgbg">
        <img class="card-img" src="images/${developer.profileUrl}" alt="artist display picture">
    </div>
    <div class="card-detail">
        <div class="name">
            <h3>${developer.name}</h3>
        </div>
        <div class="country">
            <p>
                <i>${developer.country}</i>
            </p>
        </div>
        <div class="hr1"></div>
        <div class="description">
            <p>
                ${developer.description}
            </p>
        </div>
    </div>
</div>`;
  musiciansModal.innerHTML += developerArea;
});

const cardDeveloper = Array.from(document.querySelectorAll('.musicians-card'));
cardDeveloper.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hidden-card');
  }
});

btnMore.addEventListener('click', () => {
  btnMore.style.display = 'none';
  btnLess.style.display = 'flex';
  cardDeveloper.forEach((card, index) => {
    if (index > 1) {
      card.classList.remove('hidden-card');
    }
  });
});

btnLess.addEventListener('click', () => {
  btnMore.style.display = 'flex';
  btnLess.style.display = 'none';
  cardDeveloper.forEach((card, index) => {
    if (index > 1) {
      card.classList.add('hidden-card');
    }
  });
});