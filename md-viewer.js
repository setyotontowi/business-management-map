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

    // Build collapsible sections
    const children = Array.from(contentEl.children);
    let currentBody = null;

    children.forEach(child => {
      if (child.tagName === 'H2') {
        const toggle = document.createElement('button');
        toggle.className = 'section-toggle';
        toggle.innerHTML = `<span class="toggle-icon">▶</span>`;
        
        // Move H2 into toggle
        const h2 = child.cloneNode(true);
        toggle.appendChild(h2);
        child.replaceWith(toggle);

        currentBody = document.createElement('div');
        currentBody.className = 'section-body';
        toggle.after(currentBody);

        toggle.addEventListener('click', () => {
          toggle.classList.toggle('open');
        });
      } else if (currentBody && child.tagName !== 'HR') {
        currentBody.appendChild(child);
      } else if (child.tagName === 'HR') {
        child.remove(); // Style guide says remove HR when building toggles
      }
    });

  } catch (err) {
    contentEl.innerHTML = '<p style="color:var(--error); padding: 40px; text-align: center;">Error loading markdown: ' + err.message + '</p>';
  }
})();
