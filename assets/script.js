// script.js

// Fungsi untuk membuka atau menutup dropdown
function toggleDropdown() {
    const dropdownMenu = document.getElementById('myDropdown');
    
    // Jika menu sudah terlihat, sembunyikan
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

// Menutup dropdown jika pengguna mengklik di luar area dropdown
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdownMenus = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdownMenus.length; i++) {
            const openDropdown = dropdownMenus[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}


// Ambil elemen tombol
const fixedButton = document.getElementById("fixedButton");

// Fungsi untuk scroll ke atas halaman
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Animasi scroll ke atas yang halus
    });
}

// Menambahkan event listener untuk tombol
fixedButton.addEventListener("click", scrollToTop);
