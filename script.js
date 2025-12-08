document.addEventListener('DOMContentLoaded', () => {
    
    let navigationHistory = ['home'];

    // --- DATA ASSET SIMULASI ---
    const assetDataSimulations = {
        "Kasir.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor LG', 'Kasir Ranap', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Kasir Ranap', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Kasir Ranap', 'Normal', '1'],
            ['4', 'CPU', 'Kasir Ranap', 'Normal', '1'],
            ['5', 'UPS', 'Kasir Ranap', 'Menyala Tidak Normal', '1'],
        ],
        "Upp.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor Asus', 'Upp Dea', 'Normal', '1'],
            ['2', 'Keyboard Genius', 'Upp Dea', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Upp Dea', 'Normal', '1'],
            ['4', 'CPU', 'Upp Dea', 'Normal', '1'],
        ],
        "Fisioteraphy.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor Hp', 'Ruang Fisioteraphy', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Ruang Fisioteraphy', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Ruang Fisioteraphy', 'Normal', '1'],
            ['4', 'CPU', 'Ruang Fisioteraphy', 'Normal', '1'],
        ],
        "Apotek Rawat Jalan.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor Lenovo 19"', 'Apotek Rawat Jalan', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Apotek Rawat Jalan', 'Normal', '1'],
            ['3', 'Mouse Kabel Cina', 'Apotek Rawat Jalan', 'Normal', '1'],
            ['4', 'CPU', 'Apotek Rawat Jalan', 'Normal', '1'],
            ['5', 'Printer Epson LQ-310', 'Apotek Rawat Jalan', 'Normal', '1'],
        ],
        "NS Poliklinik.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor HP 19"', 'NS Poli Kanan', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'NS Poli Kanan', 'Normal', '1'],
            ['3', 'Mouse Kabel M90', 'NS Poli Kanan', 'Normal', '1'],
            ['4', 'CPU SPC', 'NS Poli Kanan', 'Normal', '1'],
            ['5', 'Layar Monitor HP 19"', 'NS Poli Kiri', 'Normal', '1'],
        ],
        "Radiologi.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor Hp 19ka 19"', 'Ruang Radiologi', 'Normal', '1'],
            ['2', 'Keyboard HP', 'Ruang Radiologi', 'Normal', '1'],
            ['3', 'CPU', 'Ruang Radiologi', 'Normal', '1'],
            ['4', 'Printer Epson L3210', 'Ruang Radiologi', 'Normal', '1'],
        ],
        "Poli Gigi.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor SPC 19"', 'Poli Gigi', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Poli Gigi', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Poli Gigi', 'Normal', '1'],
            ['4', 'CPU', 'Poli Gigi', 'Normal', '1'],
            ['5', 'Webcam Lenovo', 'Poli Gigi', 'Normal', '1'],
        ],
        "Poli Dalam.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor SPC 19"', 'Poli Dalam', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Poli Dalam', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Poli Dalam', 'Normal', '1'],
            ['4', 'CPU', 'Poli Dalam', 'Normal', '1'],
        ],
        "Poli Anak.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor SPC 19"', 'Poli Anak', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Poli Anak', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Poli Anak', 'Normal', '1'],
            ['4', 'CPU', 'Poli Anak', 'Normal', '1'],
        ],
        "Poli Obgyn.xlsx - Sheet1.csv": [
            ['1', 'Layar Monitor SPC 19"', 'Poli Obgyn', 'Normal', '1'],
            ['2', 'Keyboard Logitech', 'Poli Obgyn', 'Normal', '1'],
            ['3', 'Mouse Kabel Logitech', 'Poli Obgyn', 'Normal', '1'],
            ['4', 'Mouse Wireles Putih', 'Poli Obgyn', 'Normal', '1'],
            ['5', 'USB Extender', 'Poli Obgyn', 'Normal', '1'],
        ],
        "Server.csv": [
            ['1', 'Server Rack Dell', 'Ruang Server LT 1', 'Normal', '1'],
            ['2', 'UPS Server', 'Ruang Server LT 1', 'Normal', '1'],
        ]
    };

    // --- KONFIGURASI MENU DAN ASET ---
    const menuData = {
        home: {
            title: "Pilih Lantai",
            items: ["Lantai 1", "Lantai 2", "Lantai 3" , "Server"]
        },
        "Lantai 1": {
            title: "Lantai 1 - Pilih Ruangan",
            items: ["Kasir", "Upp", "Fisioteraphy", "Admisi", "Apotek Rawat Jalan", "Logistik Farmasi", "Radiologi", "NS Poliklinik", "Poli Anak", "Poli Gigi", "Poli Dalam", "Poli Obgyn", "Poli Umum", "Laboratorium", "VK","Gizi", "Rekam Medis", "IGD", "OK", "Logistik Umum", "Pos Security"]
        },
        "Lantai 2": {
            title: "Lantai 2 - Pilih Ruangan",
            items: ["Kantor 1", "Kantor 2", "Informics" , "Keuangan & Direksi", "Nursestation Lt2", "Intensive", "Perinatologi", "Apotek Rawat Inap", "Aula" , "Ruang Server"]
        },
        "Lantai 3": {
            title: "Lantai 3 - Pilih Ruangan",
            items: ["Nursestation Lt3", "NS IPD", "Ruang Tindakan"]
        },
        
        // --- DEFINISI ASET DENGAN TAUTAN DOWNLOAD LENGKAP ---
        
        // Lantai 1 Assets
        "Kasir": { 
            title: "Aset Ruangan Kasir", assetFile: "Kasir.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1Rk7vex0zxF1SM9aFneG1PTxt3OkxcrJX/edit?usp=drive_link&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Upp": { 
            title: "Aset Ruangan Upp", assetFile: "Upp.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1hCBBu_ljbEUpg3F7a37fSCZRnOj5XMe7/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Fisioteraphy": { 
            title: "Aset Ruangan Fisioteraphy", assetFile: "Fisioteraphy.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1PxBjbAhTGTIhnpA65uJXgXQYdQ6ffXJt/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Apotek Rawat Jalan": { 
            title: "Aset Ruangan Apotek Rawat Jalan", assetFile: "Apotek Rawat Jalan.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1dqENwcbQSwtF6Gq26FdtODk3_EOpWeip/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "NS Poliklinik": { 
            title: "Aset Ruangan NS Poliklinik", assetFile: "NS Poliklinik.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1YUhwY80634Xlg_ycfz-Bb0WP-G9YJgBD/edit?usp=drive_link&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Radiologi": { 
            title: "Aset Ruangan Radiologi", assetFile: "Radiologi.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1M88kJPoC42VE5y8MqvH_9eAWprS7_Bk5/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Poli Gigi": { 
            title: "Aset Ruangan Poli Gigi", assetFile: "Poli Gigi.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1u0hwb3es9Fwx_Wtv1at33CWJGLxQ27Ay/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Poli Dalam": { 
            title: "Aset Ruangan Poli Dalam", assetFile: "Poli Dalam.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1IVZvnkEjIPfiHxcW4jzRO2ijNRin7fEM/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Poli Anak": { 
            title: "Aset Ruangan Poli Anak", assetFile: "Poli Anak.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/18sqBN0ikWDth4nEI2bBE17lXsjCO8z9I/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Poli Obgyn": { 
            title: "Aset Ruangan Poli Obgyn", assetFile: "Poli Obgyn.xlsx - Sheet1.csv", type: "asset",
            downloadUrl: "https://docs.google.com/spreadsheets/d/1-IOBKE3fPXwPzmQAAUKrIpioWThR062E/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true" // Ganti dengan link Anda
        },
        "Server": { 
            title: "Daftar Aset Server", assetFile: "Server.csv", type: "asset", 
            downloadUrl: "https://yourdomain.com/download/Server.csv" // Ganti dengan link Anda
        },

        // Semua ruangan placeholder lainnya (PASTIKAN SEMUA MENGGUNAKAN LINK DOWNLOAD ASLI ANDA)
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
            downloadUrl: "https://docs.google.com/spreadsheets/d/1XLjlW5f_ezo99v1tgQ9lPYpihZWjBiiy/edit?usp=sharing&ouid=107932485586061555789&rtpof=true&sd=true"
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
        "Pos Security": { 
            title: "Aset Ruangan Pos Security", type: "asset",
            downloadUrl: "https://yourdomain.com/download/PosSecurity.xlsx"
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
        "NS Anak": { 
            title: "Aset Ruangan NS Anak", type: "asset",
            downloadUrl: "https://yourdomain.com/download/NSAnak.xlsx"
        },
        "NS OK": { 
            title: "Aset Ruangan NS OK", type: "asset",
            downloadUrl: "https://yourdomain.com/download/NSOK.xlsx"
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
        "Ruang Dokter": { 
            title: "Aset Ruangan Ruang Dokter", type: "asset",
            downloadUrl: "https://yourdomain.com/download/RuangDokter.xlsx"
        },
        "Ruang Perawat": { 
            title: "Aset Ruangan Ruang Perawat", type: "asset",
            downloadUrl: "https://yourdomain.com/download/RuangPerawat.xlsx"
        },
        "Ruang Lain": { 
            title: "Aset Ruangan Ruang Lain", type: "asset",
            downloadUrl: "https://yourdomain.com/download/RuangLain.xlsx"
        },
    };

    // Helper function
    function createElement(tag, className, textContent) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textContent) el.textContent = textContent;
        return el;
    }

    // Fungsi untuk merender Breadcrumb
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

    // Fungsi untuk merender tombol-tombol menu (DIMODIFIKASI DI SINI)
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
                    // JIKA TIDAK ADA LINK DOWNLOAD (Lantai), GUNAKAN FUNGSI NAVIGASI ASLI
                    navButton.onclick = () => navigateTo(item);
                    navButton.title = `Lihat ruangan di ${item}`;
                }

                buttonWrapper.appendChild(navButton);
                
                // Menghapus Tombol Download Tambahan (⬇️) karena sudah diimplementasikan di Tombol Utama

                flexContainer.appendChild(buttonWrapper);
            });
        }
        
        contentArea.appendChild(flexContainer);
    }
    
    /**
     * Memuat dan merender tabel aset dari data simulasi
     * Fungsi ini sekarang hanya dapat diakses jika pengguna mengklik link
     * breadcrumb kembali ke halaman ini (jika sudah menavigasi ke halaman aset
     * sebelum modifikasi dilakukan) atau jika item tidak memiliki downloadUrl.
     */
    function renderAssetTable(assetConfig, contentArea) {
        // Tambahkan Tombol Download di Halaman Aset 
        if (assetConfig.downloadUrl) {
            const downloadLink = createElement('a', 'back-button download-asset-btn', '⬇️ Download File Aset');
            downloadLink.href = assetConfig.downloadUrl;
            downloadLink.target = '_blank';
            downloadLink.style.backgroundColor = '#FFB300';
            downloadLink.style.color = 'white';
            downloadLink.style.textDecoration = 'none';

            const backBtn = contentArea.querySelector('.back-button');
            if (backBtn) {
                // Sisipkan tombol download setelah tombol kembali (back-button)
                contentArea.insertBefore(downloadLink, backBtn.nextSibling);
            } else {
                contentArea.appendChild(downloadLink);
            }
        }
        
        // Cek Data Tersedia
        if (!assetConfig.assetFile || !assetDataSimulations[assetConfig.assetFile]) {
            const errorMsg = createElement('p', 'placeholder-error', `Data aset untuk ruangan '${assetConfig.title.replace('Aset Ruangan ', '')}' belum tersedia. Silakan gunakan tombol download.`);
            errorMsg.style.color = '#D32F2F'; // Merah
            errorMsg.style.fontWeight = 'bold';
            contentArea.appendChild(errorMsg);
            return; 
        }
        
        const dataRows = assetDataSimulations[assetConfig.assetFile];

        // Tampilkan Info Simulasi
        const loadingInfo = createElement('p', null, `(Menampilkan ${dataRows.length} data dari file: ${assetConfig.assetFile})`);
        loadingInfo.style.marginBottom = '20px';
        loadingInfo.style.fontStyle = 'italic';
        loadingInfo.style.color = '#757575';
        contentArea.appendChild(loadingInfo);


        // Bangun Struktur Tabel
        const tableContainer = createElement('div', 'table-container');
        const table = createElement('table', 'asset-table');
        const thead = createElement('thead');
        const tbody = createElement('tbody');
        
        const headerRow = createElement('tr');
        ['No', 'Nama Barang', 'Lokasi', 'Kondisi / Status', 'QTY'].forEach(headerText => {
            const th = createElement('th', null, headerText);
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        
        dataRows.forEach(rowData => {
            const tr = createElement('tr');
            rowData.slice(0, 5).forEach(cellData => {
                const td = createElement('td', null, cellData);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        contentArea.appendChild(tableContainer);
    }

    // Fungsi utama untuk merender halaman
    function renderPage() {
        const currentPage = navigationHistory[navigationHistory.length - 1];
        const config = menuData[currentPage];
        const pageTitle = document.getElementById('pageTitle');
        const contentArea = document.getElementById('contentArea');
        const contentCard = document.querySelector('.content-card');

        pageTitle.textContent = config?.title || currentPage;
        renderBreadcrumb();
        contentArea.innerHTML = '';

        // Tombol Kembali selalu di-render di awal jika bukan home
        if (currentPage !== 'home') {
            const backBtn = createElement('button', 'back-button', '← Kembali');
            backBtn.onclick = goBack;
            contentArea.appendChild(backBtn);
        }

        // Catatan: Karena tombol ruangan kini langsung download, 
        // blok ini hanya diakses untuk halaman "Lantai X" atau jika
        // item asset tidak memiliki downloadUrl
        if (config && config.type === 'asset' && !config.downloadUrl) {
            renderAssetTable(config, contentArea);
        } else if (config) {
            renderMenuButtons(config, contentArea);
        } else {
            const placeholder = createElement('p', 'placeholder-text', `Konfigurasi untuk halaman '${currentPage}' tidak ditemukan.`);
            contentArea.appendChild(placeholder);
        }

        // Animasi
        contentCard.style.animation = 'none';
        void contentCard.offsetWidth; 
        contentCard.style.animation = 'fadeIn 0.5s ease-out';
    }

    // Fungsi navigasi
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
