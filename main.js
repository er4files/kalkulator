document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan referensi ke elemen input
    let input = document.getElementById('inputbox');
    // Mendapatkan semua elemen tombol
    let buttons = document.querySelectorAll('button');

    // String untuk menyimpan ekspresi matematika
    let string = "";

    // Menambahkan event listener untuk setiap tombol
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Jika tombol '=' diklik, hitung hasil ekspresi
            if (e.target.innerHTML === '=') {
                string = eval(string);
                input.value = string;
            }
            // Jika tombol 'AC' diklik, bersihkan ekspresi
            else if (e.target.innerHTML === 'AC') {
                string = "";
                input.value = string;
            }
            // Jika tombol 'DE' diklik, hapus karakter terakhir dari ekspresi
            else if (e.target.innerHTML === 'DE') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }
            // Jika tombol lain diklik, tambahkan karakter ke ekspresi
            else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});
