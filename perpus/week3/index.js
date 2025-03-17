let daftarBuku = [
  { judulBuku: "namamu", namaPenulis: "yanto", tahunTerbit: 2014 },
  { judulBuku: "pertarungan sihir", namaPenulis: "ilyas", tahunTerbit: 2019 },
  { judulBuku: "serangan raksasa", namaPenulis: "ariel", tahunTerbit: 2014 },
  { judulBuku: "pedang penghancur", namaPenulis: "fadli", tahunTerbit: 2016 },
  {
    judulBuku: "mengubah cuaca bersamamu",
    namaPenulis: "alif",
    tahunTerbit: 2019,
  },
];
//tambah buku
function tambahBuku(judul, penulis, tahun) {
  if (isNaN(tahun) || !isNaN(penulis) || !isNaN(judul)) {
    return alert(
      "tahun harus berupa angka dan nama penulis harus berupa huruf"
    );
  }

  daftarBuku.push({
    judulBuku: judul,
    namaPenulis: penulis,
    tahunTerbit: tahun,
  });
  return alert("menambah kan buku berhasil");
}
//hapus buku
function hapusBuku(index) {
  if (isNaN(index)) {
    return alert("index harus berupa angka");
  }
  for (let i = 0; i < daftarBuku.length; i++) {
    if (index == i) {
      daftarBuku.splice(index, 1);
      return alert("buku index tersebut berhasil dihapus");
    }
  }
  return alert("buku index tersebut tidak ada");
}
//editBuku
function editBuku(index) {
  if (isNaN(index)) {
    return alert("index harus berupa angka");
  }
  for (let i = 0; i < daftarBuku.length; i++) {
    if (index == i) {
      let judul = prompt("masukan judul", daftarBuku[i].judulBuku);

      do {
        var penulis = prompt("masukan penulis", daftarBuku[i].namaPenulis);
        var tahun = parseInt(
          prompt(
            "masukan tahun (harus berupa angka)",
            daftarBuku[i].tahunTerbit
          )
        );
      } while (isNaN(tahun) || !isNaN(penulis));
      daftarBuku[i] = {
        judulBuku: judul,
        namaPenulis: penulis,
        tahunTerbit: tahun,
      };
      return alert("buku index tersebut berhasil di edit");
    }
  }
  return alert("buku index tersebut tidak ada");
}
//tampilkanBuku
function tampilkanBuku() {
  if (daftarBuku.length == 0) {
    return alert("daftar buku kosong");
  }
  let daftarBukuTeks = "Daftar Buku: \n";
  for (let i = 0; i < daftarBuku.length; i++) {
    daftarBukuTeks += `${i + 1} . ${daftarBuku[i].judulBuku},${
      daftarBuku[i].namaPenulis
    },${daftarBuku[i].tahunTerbit} \n`;
  }
  return alert(daftarBukuTeks);
}
//tampilan
function main() {
  let input = parseInt(
    prompt(
      "masukan pilihan anda 1-5! \n \n 1. Tambah Buku \n 2. Hapus Buku \n 3. Edit Buku \n 4. Tampilkan Buku \n 5. Keluar"
    )
  );
  while (input != 5) {
    if (input <= 0 || input > 5 || isNaN(input) || input == null) {
      alert("masukan tidak valid");
      break;
      //   console.log(input);
    } else if (input == 1) {
      let judul = prompt("masukan judul buku :");
      let penulis = prompt("masukan nama penulis :");
      let tahun = prompt("masukan tahun terbit buku");
      tambahBuku(judul, penulis, tahun);
    } else if (input == 2) {
      let index = prompt("masukan index buku");
      hapusBuku(index);
    } else if (input == 3) {
      let index = prompt("masukan index buku");
      editBuku(index);
    } else if (input == 4) {
      tampilkanBuku();
    }
  }
}

main();
