const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
    console.log("Tombol Ubah Tema dikli");

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "#4b6035";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "blue";
    }
});


const btnSapa = document.getElementById("btnSapa");
const greeting = document.getElementById("greeting");

btnSapa.addEventListener("click", () => {
    console.log("Tombol Sapa Saya diklik");

    let nama = prompt("FEBRIAN MUHARRAM:");

    if (nama && nama.trim() !== "") {
        greeting.innerText = Halo, {nama} ;
    } else {
        greeting.innerText = "HALO! NAMA SAYA FEBRIAN MUHARRAM";
    }});

/*
Refleksi:
Bagian yang paling sulit dipahami bagi saya adalah penggunaan event listener. ElementByI Awalnya saya
masih bingung menghubungkan antara tombol di HTML dengan aksi di JavaScript. Namun setelah
mencoba beberapa kali dan melihat hasilnya berjalan, saya merasa sangat senang dan bangga
karena halaman yang awalnya statis menjadi hidup. Momen ketika tombol berhasil mengubah
warna dan menampilkan nama pengunjung adalah momen "WAHHHH KAGETT DAN HARU" bagi saya sendiri.
*/