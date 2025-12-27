document.addEventListener('DOMContentLoaded', () => {
    
    let navigationHistory = ['Home'];

    // Helper function
    function createElement(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    }

    // --- KONFIGURASI MENU DAN ASET ---
    const menuData = {

        Home:{
            title: "Lihat Aset",
            // Mengubah "Data Router/Switch" dari download langsung menjadi menu navigasi
            items: ["Perlantai", "Data Printer", "Data UPS", "Data Router/Switch"] 
        },

        // --- KONFIGURASI BARU ROUTER/SWITCH ---
        "Data Router/Switch": {
            title: "Daftar Aset Router & Switch",
            items: ["Lantai 1 (R/S)", "Lantai 2 (R/S)", "Lantai 3 (R/S)", "Ruang CCTV"]
        },

        // --- DEFINISI ASET ROUTER/SWITCH PER LOKASI (BARU) ---
        // PENTING: GANTI placeholder URL di bawah ini dengan link Google Sheet Anda yang sebenarnya
        "Lantai 1 (R/S)": {
            title: "Aset Router/Switch Lantai 1",
            type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/11jZONC6FNlBgoKoR66sNg2whQbbx_-a6/edit?usp=sharing&ouid=107932485542159021273" 
        },
        "Lantai 2 (R/S)": {
            title: "Aset Router/Switch Lantai 2",
            type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/11jZONC6FNlBgoKoR66sNg2whQbbx_-a6/edit?usp=sharing&ouid=107932485542159021273"
        },
        "Lantai 3 (R/S)": {
            title: "Aset Router/Switch Lantai 3",
            type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/11jZONC6FNlBgoKoR66sNg2whQbbx_-a6/edit?usp=sharing&ouid=107932485542159021273"
        },
        "Ruang CCTV": {
            title: "Aset Router/Switch Ruang CCTV",
            type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/11jZONC6FNlBgoKoR66sNg2whQbbx_-a6/edit?usp=sharing&ouid=107932485542159021273" 
        },
        
        // --- DATA PRINTER DAN UPS (TIDAK BERUBAH) ---
        "Data Printer": {
            title: "Data Printer",
            downloadUrl: "https://docs.google.com/spreadsheets/d/15EJGekrS3KLbDezKtYFzF1OLZHvIEEdk/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
         "Data UPS": {
            title: "Data UPS",
            downloadUrl: "https://docs.google.com/spreadsheets/d/13kbJTI8qbJvG8LJyf5TZxPxEmZzec2UL/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        
        // --- SISA MENU UTAMA (TIDAK BERUBAH) ---
        "Perlantai": {
            title: "Aset Perlantai",
            items: ["Lantai 1", "Lantai 2", "Lantai 3"]
        },
        "Lantai 1": {
            title: "Lantai 1 - Aset Perlantai",
            items: ["Kasir", "Upp", "Fisioteraphy", "Admisi", "Apotek Rawat Jalan", "Logistik Farmasi", "Radiologi", "NS Poliklinik", "Poli Anak", "Poli Gigi", "Poli Dalam", "Poli Obgyn", "Poli Umum", "Laboratorium", "VK","Gizi", "Rekam Medis", "IGD", "OK", "Logistik Umum"]
        },
        "Lantai 2": {
            title: "Lantai 2 - Aset Perlantai",
            items: ["Kantor 1", "Kantor 2", "Informics" , "Keuangan & Direksi", "Nursestation Lt2", "Intensive", "Perinatologi", "Apotek Rawat Inap", "Aula" , "Ruang Server"]
        },
        "Lantai 3": {
            title: "Lantai 3 - Aset Perlantai",
            items: ["Nursestation Lt3", "NS IPD", "Ruang Tindakan"]
        },

        // --- DEFINISI ASET RUANGAN (Download URLs, tidak berubah) ---

        "Kasir": {
            title: "Aset Ruangan Kasir", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1Rk7vex0zxF1SM9aFneG1PTxt3OkxcrJX/edit?usp=drive_link&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Upp": {
            title: "Aset Ruangan Upp", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1hCBBu_ljbEUpg3F7a37fSCZRnOj5XMe7/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Fisioteraphy": {
            title: "Aset Ruangan Fisioteraphy", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1PxBjbAhTGTIhnpA65uJXgXQYdQ6ffXJt/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Apotek Rawat Jalan": {
            title: "Aset Ruangan Apotek Rawat Jalan", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1dqENwcbQSwtF6Gq26FdtODk3_EOpWeip/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "NS Poliklinik": {
            title: "Aset Ruangan NS Poliklinik", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1YUhwY80634Xlg_ycfz-Bb0WP-G9YJgBD/edit?usp=drive_link&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Radiologi": {
            title: "Aset Ruangan Radiologi", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1M88kJPoC42VE5y8MqvH_9eAWprS7_Bk5/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Poli Gigi": {
            title: "Aset Ruangan Poli Gigi", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1u0hwb3es9Fwx_Wtv1at33CWJGLxQ27Ay/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Poli Dalam": {
            title: "Aset Ruangan Poli Dalam", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1IVZvnkEjIPfiHxcW4jzRO2ijNRin7fEM/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Poli Anak": {
            title: "Aset Ruangan Poli Anak", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/18sqBN0ikWDth4nEI2bBE17lXsjCO8z9I/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Poli Obgyn": {
            title: "Aset Ruangan Poli Obgyn", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1-IOBKE3fPXwPzmQAAUKrIpioWThR062E/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" 
        },
        "Server": {
            title: "Daftar Aset Server", type: "asset",
            downloadUrl: "https://yourdomain.com/download/Server.csv" 
        },
        "Admisi": {
            title: "Aset Ruangan Admisi", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1_aoGhpvyqu2c2FLjxQfTfXmDQZM0eszj/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Logistik Farmasi": {
            title: "Aset Ruangan Logistik Farmasi", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/18_pYy14vteq3lZD2uW9FmRSTEcj__5_H/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Poli Umum": {
            title: "Aset Ruangan Poli Umum", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1yh_LoCP54vgQ_aharHqB-xh1X17osUjd/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Laboratorium": {
            title: "Aset Ruangan Laboratorium", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1XLjlW5f_ezo99v1tgQ9lPYpiHZWjBiiy/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Gizi": {
            title: "Aset Ruangan Gizi", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1C-KU6u5htoCu_GYLctM8vwz5hH6Hg5GR/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Rekam Medis": {
            title: "Aset Ruangan Rekam Medis", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1Fg3BsG_2wJ0lq2xEe6JeymW1srgI9sTZ/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "IGD": {
            title: "Aset Ruangan IGD", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1Qmg13jk0OTKgrl_NeoxaTJal4-rko-b2/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "OK": {
            title: "Aset Ruangan OK", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/11a4luU1siPHN2tosM135GaNHIsIfvR7H/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Logistik Umum": {
            title: "Aset Ruangan Logistik Umum", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/198IR9cjXjWFJJ6BFWdjJkqTtiq_BqSSX/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Kantor 1": {
            title: "Aset Ruangan Kantor 1", type: "asset",
            downloadUrl: "https://yourdomain.com/download/Kantor1.xlsx"
        },
        "Kantor 2": {
            title: "Aset Ruangan Kantor 2", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1rNXqMhL9ZaSQrGCf52gHEdN9Nl9G3hfS/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Keuangan & Direksi": {
            title: "Aset Ruangan Keuangan & Direksi", type: "asset",
            downloadUrl: "https://yourdomain.com/download/KeuanganDireksi.xlsx"
        },
        "Nursestation Lt3": {
            title: "Aset Ruangan Nursestation Lt3", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/15d7rsUIkxF58QMpq84HSWyvHf1ay9uoi/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Intensive": {
            title: "Aset Ruangan Intensive", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/139KTc6lNbwBDYubEOBoyAE-hheDnR2h6/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Perinatologi": {
            title: "Aset Ruangan Perinatologi", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1BGk-eBbcK3WeWxXEZ1i5FlRj-Zw8S5ND/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Aula": {
            title: "Aset Ruangan Aula", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1mMi0g0DCNFjuJqLIOF8cbjlCM89LEsJH/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Ruang Server": {
            title: "Aset Ruangan Server Lantai 2", type: "asset",
            downloadUrl: "https://yourdomain.com/download/RuangServerL2.xlsx"
        },
        "Nursestation Lt2": {
            title: "Aset Ruangan Nursestation Lt2", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1SCSM3kGtGSTqS6gPJytShSsgy3X3EfHP/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "VK": {
            title: "Aset Ruangan VK", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1DV88tGyh6jtwI_4ZrRPphr5_aaUI6Q9u/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Apotek Rawat Inap": {
            title: "Aset Ruangan Apotek Rawat Inap", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/18i0RIHa2gyOs2qnVUKnit8ZOtg47Uf35/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
        "Ruang Tindakan": {
            title: "Aset Ruangan Ruang Tindakan", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1Jc5QcSzDLslhjreTOcehXrJkkZXbR53k/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
        },
    };

    // Fungsi untuk merender Breadcrumb (TIDAK BERUBAH)
    function renderBreadcrumb() {
        const breadcrumbContainer = document.getElementById('breadcrumbContainer');
        breadcrumbContainer.innerHTML = '';

        navigationHistory.forEach((page, index) => {
            const isLast = index === navigationHistory.length - 1;

            const link = createElement('a', 'breadcrumb-item', page);
            link.href = '#';
            link.onclick = (e) => {
                e.preventDefault();
                if (!isLast) {
                    navigateToIndex(index);
                }
            };

            breadcrumbContainer.appendChild(link);

            if (!isLast) {
                const separator = createElement('span', 'breadcrumb-separator', ' / ');
                breadcrumbContainer.appendChild(separator);
            }
        });
    }

    // Fungsi untuk merender tombol-tombol menu (TIDAK BERUBAH)
    function renderMenuButtons(config, contentArea) {
        const flexContainer = createElement('div', 'flex-menu-container');

        if (Array.isArray(config.items)) {
            config.items.forEach(item => {
                const itemConfig = menuData[item];
                const buttonWrapper = createElement('div', 'button-wrapper');

                // 1. Tombol Navigasi Utama
                const navButton = createElement('button', 'menu-button', item);

                // Cek apakah ada link download untuk item ini (Ruangan Aset)
                if (itemConfig && itemConfig.downloadUrl) {
                    // JIKA ADA, UBAH FUNGSI KLIK MENJADI DOWNLOAD
                    navButton.onclick = (e) => {
                        e.stopPropagation();
                        window.open(itemConfig.downloadUrl, '_blank'); // Buka link download di tab baru
                    };
                    navButton.title = `Klik untuk Download Aset ${item}`;
                    // Menambahkan kelas untuk sedikit perbedaan styling di CSS
                    navButton.classList.add('menu-button-download');
                } else {
                    // JIKA TIDAK ADA LINK DOWNLOAD (Lantai/Menu Navigasi), GUNAKAN FUNGSI NAVIGASI ASLI
                    navButton.onclick = () => navigateTo(item);
                    navButton.title = `Lihat ruangan di ${item}`;
                }

                buttonWrapper.appendChild(navButton);

                flexContainer.appendChild(buttonWrapper);
            });
        }

        contentArea.appendChild(flexContainer);
    }

    // Fungsi utama untuk merender halaman (Diperbarui)
    function renderPage() {
        const currentPage = navigationHistory[navigationHistory.length - 1];
        const config = menuData[currentPage];
        const pageTitle = document.getElementById('pageTitle');
        const contentArea = document.getElementById('contentArea');
        const contentCard = document.querySelector('.content-card');

        pageTitle.textContent = config?.title || currentPage;
        renderBreadcrumb();
        contentArea.innerHTML = '';

        // Tombol Kembali selalu di-render di awal jika bukan Home
        if (currentPage !== 'Home') {
            const backBtn = createElement('button', 'back-button', '← Kembali');
            backBtn.onclick = goBack;
            contentArea.appendChild(backBtn);
        }

        if (config) {
            renderMenuButtons(config, contentArea);
        } else {
            const errorMsg = createElement('p', 'placeholder-error', `Halaman untuk '${currentPage}' tidak dapat ditampilkan. Silakan kembali.`);
            errorMsg.style.color = '#D32F2F';
            errorMsg.style.fontWeight = 'bold';
            contentArea.appendChild(errorMsg);
        }

        // Animasi
        contentCard.style.animation = 'none';
        void contentCard.offsetWidth;
        contentCard.style.animation = 'fadeIn 0.5s ease-out';
    }

    // Fungsi navigasi (TIDAK BERUBAH)
    function navigateTo(page) {
        if (page !== navigationHistory[navigationHistory.length - 1]) {
            navigationHistory.push(page);
            renderPage();
        }
    }

    function navigateToIndex(index) {
        navigationHistory = navigationHistory.slice(0, index + 1);
        renderPage();
    }

    function goBack() {
        if (navigationHistory.length > 1) {
            navigationHistory.pop();
            renderPage();
        }
    }

// Inisialisasi Aplikasi
    renderPage();
});
