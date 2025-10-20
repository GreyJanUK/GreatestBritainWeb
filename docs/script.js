document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.getElementById('page-body');

    // 1. Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    
    // Logic: Default to dark mode (add the class)
    body.classList.add('dark-mode'); 
    
    // If user explicitly saved light mode, remove the class
    if (savedMode === 'disabled') {
        body.classList.remove('dark-mode');
    }

    // Update the icon based on the current mode
    function updateIcon() {
        const isDark = body.classList.contains('dark-mode');
        
        // If dark mode is active, show the sun (to toggle light mode)
        // If light mode is active, show the moon (to toggle dark mode)
        toggleButton.innerHTML = isDark 
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    }

    // Initial icon setup
    updateIcon();

    // 2. Handle the toggle click
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const isDark = body.classList.contains('dark-mode');
        
        // 3. Save the preference to local storage
        if (isDark) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        // Update the icon after the toggle
        updateIcon();
    });
});