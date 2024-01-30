var siswa = new Object();
siswa.namaDepan = "Farrel";
siswa.namaBelakang = "Rabbani";
siswa.alamat = "Bandung";
siswa.namaLengkap = function () {
    return this.namaDepan + " " + this.namaBelakang;
};

var siswa2 = {
    namaDepan: "Qeyra",
    namaBelakang: "Azzahra",
    alamat: "Cijagra",
    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang;
    },
    
};

alert("Nama :" + siswa.namaLengkap());
alert("Nama :" + siswa2.namaLengkap());

// function namaLengkap() {

// }