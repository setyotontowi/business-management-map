/**
 * Index Page Logic (Tree Dashboard)
 */
document.addEventListener('DOMContentLoaded', () => {
    // Tooltip Logic
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('mouseenter', (e) => {
            // Prioritize explicit data-tooltip or look for child data-tooltip
            let target = node;
            if (!target.hasAttribute('data-tooltip') && target.querySelector('[data-tooltip]')) {
                target = target.querySelector('[data-tooltip]');
            }
            const info = target.getAttribute('data-tooltip');
            if (info) {
                tooltip.innerHTML = info;
                tooltip.style.display = 'block';
                tooltip.style.left = e.pageX + 15 + 'px';
                tooltip.style.top = e.pageY + 15 + 'px';
            }
        });

        node.addEventListener('mousemove', (e) => {
            if (tooltip.style.display === 'block') {
                tooltip.style.left = (e.pageX + 15) + 'px';
                tooltip.style.top = (e.pageY + 15) + 'px';
            }
        });

        node.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
            tooltip.innerHTML = '';
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Initialize state (though handled by head script, we sync here if needed)
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }
});
