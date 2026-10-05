// Дополнительные редакторы стенда. Стили наследуем от существующей ссылки
// PFD; наблюдение сохраняет пункт при переключениях страниц React-приложения.
function addSvgEditorLink() {
  const pfd = document.querySelector('a[href="pid-editor/"]');
  if (!pfd || pfd.parentElement.querySelector('[data-svg-editor-link]')) return;
  const svg = pfd.cloneNode(true);
  svg.href = 'pid-editor/?editor=svg';
  svg.dataset.svgEditorLink = 'true';
  svg.querySelector('span').textContent = 'SVG-редактор';
  svg.setAttribute('aria-label', 'Открыть SVG-редактор в новой вкладке');
  pfd.after(svg);
}

new MutationObserver(addSvgEditorLink).observe(document.getElementById('root'), {
  childList: true,
  subtree: true,
});
addSvgEditorLink();
