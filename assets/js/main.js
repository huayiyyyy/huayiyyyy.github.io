/* ============ 主题切换 ============ */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function syncIcon() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';
  }
  syncIcon();

  btn.addEventListener('click', function () {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (dark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    syncIcon();
  });
})();

/* ============ Blog 页：视图切换 / 标签筛选 / 搜索 ============ */
(function () {
  var yearView = document.getElementById('view-year');
  var tagView = document.getElementById('view-tag');
  if (!yearView || !tagView) return; // 不在 blog 页

  var toggleBtns = document.querySelectorAll('.toggle-btn');
  var filterBar = document.getElementById('tag-filter-bar');
  var searchInput = document.getElementById('post-search');
  var activeFilter = '*';
  var keyword = '';

  // 视图切换
  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var isYear = btn.dataset.view === 'year';
      yearView.classList.toggle('hidden', !isYear);
      tagView.classList.toggle('hidden', isYear);
      applyFilter();
    });
  });

  // 标签筛选
  if (filterBar) {
    filterBar.querySelectorAll('.tag-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBar.querySelectorAll('.tag-filter-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilter();
      });
    });
  }

  // 搜索
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      keyword = searchInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  function matches(li) {
    var tagOk = activeFilter === '*' || (' ' + li.dataset.tags + ' ').indexOf(' ' + activeFilter + ' ') !== -1;
    var text = li.textContent.toLowerCase();
    var kwOk = !keyword || text.indexOf(keyword) !== -1;
    return tagOk && kwOk;
  }

  function applyFilter() {
    var visibleGroups = document.querySelectorAll('.post-groups:not(.hidden) .year-group');
    visibleGroups.forEach(function (group) {
      var any = false;
      group.querySelectorAll('.post-item').forEach(function (li) {
        var show = matches(li);
        li.classList.toggle('hidden', !show);
        if (show) any = true;
      });
      group.classList.toggle('hidden', !any);
    });
  }

  // 支持 blog.html#tag-xxx 直接进入对应标签筛选（解码以支持中文标签）
  if (window.location.hash.indexOf('#tag-') === 0) {
    var slug = decodeURIComponent(window.location.hash.slice(5));
    if (filterBar) {
      var target = filterBar.querySelector('[data-filter="' + slug + '"]');
      if (target) target.click();
    }
  }
})();
