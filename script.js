document.addEventListener("DOMContentLoaded", function () {
    console.log("KawanUMKM Script Loaded Successfully!");

    const katalogForms = document.querySelectorAll("#katalog-alat form");

    katalogForms.forEach((form) => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const article = form.closest("article");
            const namaAlat = article.querySelector("h3").innerText;
            const selectSkema = form.querySelector("select");
            const nominalInput = form.querySelector("input[type='number']");

            const skemaTeks = selectSkema.options[selectSkema.selectedIndex].text;
            const nominalValue = parseInt(nominalInput.value);

            if (!nominalValue || nominalValue < 10000) {
                alert("Mohon masukkan nominal dukungan minimal Rp10.000!");
                return;
            }

            const nominalFormatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            }).format(nominalValue);

            alert(`Terima kasih! Dukungan Anda sebesar ${nominalFormatted} untuk "${namaAlat}" dengan skema "${skemaTeks}" berhasil dicatat.`);

            nominalInput.value = "";
        });
    });

    const qrisForm = document.querySelector("#pembayaran-qris form");

    if (qrisForm) {
        qrisForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const pilihUMKM = document.getElementById("pilih_umkm");
            const umkmText = pilihUMKM.options[pilihUMKM.selectedIndex].text;
            const nominalInput = document.getElementById("nominal_qris");
            const nominalValue = parseInt(nominalInput.value);

            if (!pilihUMKM.value) {
                alert("Silakan pilih UMKM penerima terlebih dahulu.");
                return;
            }

            if (!nominalValue || nominalValue < 10000) {
                alert("Nominal pembayaran minimal adalah Rp10.000.");
                return;
            }

            const nominalFormatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            }).format(nominalValue);

            alert(`Konfirmasi Berhasil!\n\nTerima kasih telah melakukan konfirmasi pembayaran sebesar ${nominalFormatted} untuk ${umkmText}. Tim kami akan melakukan verifikasi mutasi.`);

            qrisForm.reset();
        });
    }

    const pengajuanForm = document.querySelector("#pengajuan form");

    if (pengajuanForm) {
        pengajuanForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const namaPemilik = document.getElementById("nama_pemilik").value.trim();
            const namaUsaha = document.getElementById("nama_usaha").value.trim();
            const alat = document.getElementById("alat_dibutuhkan").value.trim();

            if (!namaPemilik || !namaUsaha || !alat) {
                alert("Harap lengkapi semua kolom yang wajib diisi!");
                return;
            }

            alert(`Pengajuan Berhasil!\n\nTerima kasih Bapak/Ibu ${namaPemilik} (${namaUsaha}). Pengajuan bantuan alat "${alat}" telah kami terima dan akan masuk ke tahap verifikasi tim KawanUMKM.`);

            pengajuanForm.reset();
        });
    }

    const daftarForm = document.querySelector("#daftar form");

    if (daftarForm) {
        daftarForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const peranSelect = document.getElementById("peran");
            const peranTeks = peranSelect.options[peranSelect.selectedIndex].text;

            alert(`Pendaftaran Berhasil!\n\nSelamat datang ${nama}! Anda telah terdaftar sebagai ${peranTeks}. Konfirmasi pendaftaran telah dikirimkan ke ${email}.`);

            daftarForm.reset();
        });
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.style.color = ""; 
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.style.color = "var(--primary-orange)";
            }
        });
    });
});