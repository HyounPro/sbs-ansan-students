// ── NAV 공통 렌더링 ──
const NAV_ITEMS = [
  { label: '홈', path: '/' },
  { label: '수업시간표', path: '/schedule/' },
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

  nav.innerHTML = `
    <a href="/" class="nav-logo">
      <span class="red">SBS</span><span class="blue">아카데미</span>&nbsp;안산
    </a>
    <ul class="nav-links">${links}</ul>
  `;
}

document.addEventListener('DOMContentLoaded', renderNav);
