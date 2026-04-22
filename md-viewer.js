/**
 * Markdown Viewer Helper
 * Usage: <script src="md-viewer.js" data-src="knowledge_base/filename.md"></script>
 */
(async function () {
  // Dark mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Get the markdown source path from the script tag's data-src attribute
  const scriptTag = document.currentScript;
  const mdSrc = scriptTag && scriptTag.getAttribute('data-src');

  if (!mdSrc) {
    console.error('md-viewer.js: No data-src attribute found.');
    return;
  }

  const contentEl = document.getElementById('markdown-content');
  if (!contentEl) {
    console.error('md-viewer.js: No #markdown-content element found.');
    return;
  }

  try {
    const response = await fetch(mdSrc);
    if (!response.ok) throw new Error('File not found: ' + mdSrc);
    const text = await response.text();

    marked.setOptions({ gfm: true, breaks: true });
    contentEl.innerHTML = marked.parse(text);
  } catch (err) {
    contentEl.innerHTML = '<p style="color:var(--error); padding: 40px; text-align: center;">Error loading markdown: ' + err.message + '</p>';
  }
})();
