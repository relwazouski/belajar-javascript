var siswa = new Object();
siswa.namaDepan = "Farrel";
siswa.namaBelakang = "Rabbani";
siswa.alamat = "Bandung";
siswa.namaLengkap = function () {
    return this.namaDepan + " " + this.namaBelakang;
};

alert("Nama :" + siswa.namaLengkap());

// function namaLengkap() {

// }