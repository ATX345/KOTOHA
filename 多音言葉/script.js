window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  const bannerImage = document.querySelector('.banner-image');

  const banners = {
    home: 'home-banner.jpg',
    music: 'music-banner.jpg',
    news: 'news-banner.jpg',
    store: 'store-banner.jpg',
    development: 'development-banner.jpg',
    download: 'download-banner.jpg'
  };

  setTimeout(() => {
    splashScreen.style.opacity = '0'; // フェードアウト
    splashScreen.addEventListener('transitionend', () => {
      splashScreen.style.display = 'none';
      mainContent.style.opacity = '1'; // メインコンテンツをフェードイン
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
  }, 3000);

  window.addEventListener('scroll', () => {
    const sections = ['home', 'music', 'news', 'store', 'development', 'download-section'];
    let currentSection = 'home';

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= window.innerHeight / 2) {
        currentSection = sectionId;
      }
    });

    bannerImage.src = banners[currentSection];
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const submenu = dropdown.querySelector('.dropdown-submenu');
    const submenuContent = submenu.querySelector('.dropdown-content');
    const submenuBtn = submenu.querySelector('.submenu-btn');

    // 親ドロップダウンのホバーで開く
    dropdown.addEventListener('mouseenter', () => {
      dropdownContent.style.display = 'block';
      dropbtn.setAttribute('aria-expanded', 'true');
    });

    // 親ドロップダウンのホバー外で閉じる
    dropdown.addEventListener('mouseleave', () => {
      dropdownContent.style.display = 'none';
      dropbtn.setAttribute('aria-expanded', 'false');
    });

    // 子ドロップダウンのホバーで開く
    submenu.addEventListener('mouseenter', () => {
      submenuContent.style.display = 'block';
    });

    // 子ドロップダウンのホバー外で閉じる
    submenu.addEventListener('mouseleave', () => {
      submenuContent.style.display = 'none';
    });

    // 外部クリック時にドロップダウンを閉じる
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdownContent.style.display = 'none';
        dropbtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
