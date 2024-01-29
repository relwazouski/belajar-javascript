var x = prompt("Masukan Angka : ");
// alert("Selamat Datang " + nama);

if (x % 2 == 0) {
    alert(x + " bilangan genap ");
} else if (x % 2 == 1) {
    alert(x + " bilangan ganjil ");
} else {
    alert("Data bukan angka");
}

if(confirm("Apakah anda manusia ?")) {
    location = "https://google.com";
} else {
    alert(" anda dipenjara ");
}