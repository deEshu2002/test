const banner = document.getElementById('banner');
const removeBannerButton = document.getElementById('banner-remove-button');

removeBannerButton?.addEventListener(
  'click',
  () => {
    banner?.remove();
  },
  { once: true },
);

const dropdownButtons = document.querySelectorAll(
  '[data-dropdown-toggle="dropdown"]',
);

dropdownButtons.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    // console.log((e.currentTarget as HTMLElement).nextElementSibling);
    const options = (e.currentTarget as HTMLElement)
      .nextElementSibling as HTMLDivElement;
    if (options.classList.contains('hidden')) {
      options.classList.remove('hidden');
    } else {
      options.classList.add('hidden');
    }
  });
});
