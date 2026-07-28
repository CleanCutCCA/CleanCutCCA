/* =========================================================
   CleanCut CCA — script.js
   Single source of truth for all card data.
   Add a new card by adding one object below — no other
   HTML/CSS/JS edits are ever required.
   ========================================================= */

var CARDS = [
  { serial: '1001', title: 'Raphael vs Shredder', image: 'raphael-vs-shredder.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1002', title: 'Obi-Wan vs Maul', image: 'obi-wan-vs-maul.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1003', title: 'Cambridge vs Carter', image: 'cambridge-vs-carter.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1004', title: 'Batman vs Joker', image: 'batman-vs-joker.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1005', title: 'Tony vs Thanos', image: 'tony-vs-thanos.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1006', title: 'Buzz vs Zerg', image: 'buzz-vs-zerg.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1007', title: 'Plankton vs SpongeBob', image: 'plankton-vs-spongebob.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '1008', title: 'Magic vs Bird', image: 'magic-vs-bird.png', season: 'Season One', status: 'claimed', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2001', title: 'Wemby', image: '1wemby-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2002', title: 'Derek Jeter', image: '2jeter-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2003', title: 'MJ', image: '3jordan-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2004', title: 'MJ Space Jam', image: '4jordant-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2005', title: 'MJ Team USA', image: '5jordan-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2006', title: 'MJ All-Star', image: '6jordana-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2007', title: 'Michael Vick', image: '7vick-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2008', title: 'Dez Bryant', image: '8dez-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2009', title: 'Jimmy Butler', image: '9jimmy-manga.png', season: 'Season Two', status: 'claimed', owner: 'Waco, Texas', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2010', title: 'Ochocinco', image: '10chad-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2011', title: 'Jalen Brunson', image: '11jalen-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2012', title: 'Tom Brady', image: '12brady-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2013', title: 'Steve Smith Sr.', image: '13steve-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2014', title: 'D-Rose', image: '14rose-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2015', title: 'Patrick Mahomes', image: '15mahomes-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2016', title: 'Nolan Ryan', image: '16nolan-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2017', title: 'Josh Allen', image: '17allen-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2018', title: 'Lamar Jackson', image: '18lamar-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2019', title: 'LT', image: '19lt-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2020', title: 'Barry Sanders', image: '20barry-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2021', title: 'Primetime', image: '21deion-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2022', title: 'Emmitt Smith', image: '22emmitt-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2023', title: 'LeBron James', image: '23lebron-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2024', title: 'Kobe Bryant', image: '24kobe-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2025', title: 'Ken Griffey Jr.', image: '25griffey-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2026', title: 'Rickey Henderson', image: '26rickey-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2027', title: 'Carter/Iverson', image: '27aicarter-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2028', title: 'Sho-time', image: '28ohtani-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2029', title: 'Dr. J', image: '29drj-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2030', title: 'Steph Curry', image: '30steph-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2031', title: 'Dirk Nowitzki', image: '31drik-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2032', title: 'Paul George', image: '32pg-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2033', title: 'Shaq', image: '33shaq-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2034', title: 'Bo Jackson', image: '34bo-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2035', title: 'Sweetness', image: '35sweet-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2036', title: 'Steve Nash', image: '36nash-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2037', title: 'Ben Wallace', image: '37ben-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2038', title: 'Burrow/Chase', image: '38off-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2039', title: 'Lewis/Reed', image: '39def-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null },
  { serial: '2040', title: 'T-Mac', image: '40tmac-manga.png', season: 'Season Two', status: 'available', owner: 'Unknown', releasePrice: null, lastVerifiedSale: null, releaseDate: null }
];

function findCard(serial){
    for(var i = 0; i < CARDS.length; i++){
        if(CARDS[i].serial === serial) return CARDS[i];
    }
    return null;
}

function statusLabel(status){
    if(status === 'available') return 'Available';
    if(status === 'claimed') return 'Claimed';
    if(status === 'coming-soon') return 'Coming Soon';
    if(status === 'archived') return 'Archived';
    return status;
}

function buildCardElement(card){
    var a = document.createElement('a');
    a.className = 'card-link';
    a.setAttribute('data-status', card.status);
    a.setAttribute('data-serial', card.serial);
    a.href = (card.status === 'coming-soon') ? '#' : ('#card-' + card.serial);

    a.innerHTML =
        '<div class="card">' +
            '<div class="card-image-wrap">' +
                '<img src="images/' + card.image + '" alt="' + card.title + '" loading="lazy">' +
            '</div>' +
            '<div class="info">' +
                '<div class="title">' + card.title + '</div>' +
                '<div class="serial">#' + card.serial + '</div>' +
                '<div class="owner-label">CURRENT OWNER</div>' +
                '<div class="owner-name">' + card.owner + '</div>' +
            '</div>' +
        '</div>';

    if(card.status === 'coming-soon'){
        a.setAttribute('title', 'Available Soon');
        a.addEventListener('click', function(e){
            e.preventDefault();
        });
    }

    return a;
}

function renderCards(){
    var season1Grid = document.getElementById('season1-grid');
    var season2Grid = document.getElementById('season2-grid');

    CARDS.forEach(function(card){
        var el = buildCardElement(card);
        if(card.season === 'Season One' && season1Grid){
            season1Grid.appendChild(el);
        } else if(card.season === 'Season Two' && season2Grid){
            season2Grid.appendChild(el);
        }
    });
}

/* ---------- CARD MODAL ---------- */

function openModalForSerial(serial){
    var card = findCard(serial);
    if(!card) return;

    var overlay = document.getElementById('card-modal-overlay');
    var modal = document.getElementById('card-modal');
    if(!overlay || !modal) return;

    document.getElementById('modal-img').src = 'images/' + card.image;
    document.getElementById('modal-img').alt = card.title;
    document.getElementById('modal-season').textContent = card.season;
    document.getElementById('modal-title').textContent = card.title;
    document.getElementById('modal-serial').textContent = '#' + card.serial;
    document.getElementById('modal-owner').textContent = card.owner || 'Unknown';
    document.getElementById('modal-price').textContent = card.releasePrice || '—';
    document.getElementById('modal-sale').textContent = card.lastVerifiedSale || '—';
    document.getElementById('modal-status').textContent = statusLabel(card.status);
    document.getElementById('modal-date').textContent = card.releaseDate || '—';

    overlay.classList.add('modal-active');
    modal.classList.add('modal-active');
    document.body.classList.add('modal-open');
}

function closeModal(clearHash){
    var overlay = document.getElementById('card-modal-overlay');
    var modal = document.getElementById('card-modal');
    if(!overlay || !modal) return;

    overlay.classList.remove('modal-active');
    modal.classList.remove('modal-active');
    document.body.classList.remove('modal-open');

    if(clearHash && window.location.hash.indexOf('#card-') === 0){
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}

function syncModalWithHash(){
    var hash = window.location.hash;
    if(hash.indexOf('#card-') === 0){
        var serial = hash.replace('#card-', '');
        var card = findCard(serial);
        if(card && card.status !== 'coming-soon'){
            var splash = document.getElementById('splash');
            if(splash) splash.classList.add('splash-skip');
            openModalForSerial(serial);
        }
    } else {
        closeModal(false);
    }
}

/* ---------- HAMBURGER MENU ---------- */

function setupMenu(){
    var menuToggle = document.getElementById('menu-toggle');
    var menuPanel = document.getElementById('menu-panel');
    var menuOverlay = document.getElementById('menu-overlay');
    var menuClose = document.getElementById('menu-close');

    if(!menuToggle || !menuPanel || !menuOverlay || !menuClose) return;

    function openMenu(){
        menuPanel.classList.add('menu-open');
        menuOverlay.classList.add('overlay-visible');
        document.body.classList.add('menu-active');
    }

    function closeMenu(){
        menuPanel.classList.remove('menu-open');
        menuOverlay.classList.remove('overlay-visible');
        document.body.classList.remove('menu-active');
    }

    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            closeMenu();
        }
    });
}

/* ---------- INIT ---------- */

document.addEventListener('DOMContentLoaded', function(){

    renderCards();
    setupMenu();
    syncModalWithHash();

    var modalClose = document.getElementById('card-modal-close');
    var modalOverlay = document.getElementById('card-modal-overlay');

    if(modalClose){
        modalClose.addEventListener('click', function(){
            closeModal(true);
        });
    }

    if(modalOverlay){
        modalOverlay.addEventListener('click', function(){
            closeModal(true);
        });
    }

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            closeModal(true);
        }
    });

    window.addEventListener('hashchange', syncModalWithHash);

});
