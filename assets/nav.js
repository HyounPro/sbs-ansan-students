const NAV_ITEMS = [
  { label: '홈', path: '/' },
  { label: '격일시간표', path: '/schedule/' },
  { label: '수업준비물', path: '/materials/' },
  { label: '학습자료', path: '/learning/' },
  { label: '연간시험일정', path: '/exam/' },
  { label: '제휴혜택', path: '/benefits/' },
];

function renderNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const currentPath = window.location.pathname;

  const links = NAV_ITEMS.map(item => {
    const isActive = currentPath === item.path ||
      (item.path !== '/' && currentPath.startsWith(item.path));
    return `<li><a href="${item.path}" class="${isActive ? 'active' : ''}">${item.label}</a></li>`;
  }).join('');

  const drawerLinks = NAV_ITEMS.map(item => {
    const isActive = currentPath === item.path ||
      (item.path !== '/' && currentPath.startsWith(item.path));
    return `<li><a href="${item.path}" class="${isActive ? 'active' : ''}" onclick="closeMenu()">${item.label}</a></li>`;
  }).join('');

  // nav 내부 (로고 + 데스크탑 메뉴 + 햄버거)
  nav.innerHTML = `
    <a href="/" class="nav-logo">
      <img src="/assets/logo.png" alt="SBS아카데미 안산" style="height:36px;width:auto;object-fit:contain;" />
    </a>
    <ul class="nav-links">${links}</ul>
    <button class="nav-hamburger" id="hamburgerBtn" onclick="toggleMenu()" aria-label="메뉴 열기">
      <span></span><span></span><span></span>
    </button>
  `;

  // 드로어 + 오버레이는 body에 직접 추가
  if (!document.getElementById('navDrawer')) {
    const drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    drawer.id = 'navDrawer';
    drawer.innerHTML = `<ul class="drawer-links">${drawerLinks}</ul>`;
    document.body.appendChild(drawer);

    const overlay = document.createElement('div');
    overlay.className = 'drawer-overlay';
    overlay.id = 'drawerOverlay';
    overlay.onclick = closeMenu;
    document.body.appendChild(overlay);
  }
}

function toggleMenu() {
  const drawer = document.getElementById('navDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const btn = document.getElementById('hamburgerBtn');
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMenu();
  } else {
    drawer.classList.add('open');
    overlay.classList.add('show');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMenu() {
  const drawer = document.getElementById('navDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const btn = document.getElementById('hamburgerBtn');
  if (!drawer) return;
  drawer.classList.remove('open');
  overlay.classList.remove('show');
  if (btn) btn.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', renderNav);
