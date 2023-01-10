export default function openSearchSection(value) {
    const searchSeaction = document.querySelector
        ('section.search');
    const cityForm = document.querySelector('div.cityForm');
    const guestForm = document.querySelector('div.guest-form');
    const detailCity = document.querySelector('div.detail-city');
    const detailGuest = document.querySelector('div.detail-guest');
    searchSeaction.style.display = 'flex';
    switch (value) {
        case 'guest': guestForm.style.border = 'solid 1px #333333'; cityForm.style.border = 'none'; console.log('GUEST'); detailGuest.style.display='block'; detailCity.style.display='none'; break;
        case 'city': cityForm.style.border = 'solid 1px #333333'; guestForm.style.border = 'none';console.log('CITY'); detailGuest.style.display='none'; detailCity.style.display='block'; break;
    }
}