function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '100%') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '100%';
    }
}

const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');  // Optional for overlay effect

function openSidebar() {
    sidebar.style.width = '100%';  // Adjust width as needed
    overlay.style.display = 'block';  // Show overlay
}

function closeSidebar() {
    sidebar.style.width = '0';
    overlay.style.display = 'none';  // Hide overlay
}

// Detect clicks outside the sidebar
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !event.target.closest('.menu-icon')) {
        closeSidebar();  // Close sidebar if clicked outside
    }
});

// Attach event listener to menu-icon to open the sidebar
document.querySelector('.menu-icon').addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent immediate closing when clicking the menu icon
    openSidebar();
});
