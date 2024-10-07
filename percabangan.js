// lari = bakar 60 kal/5 min || 12kal/min
// push-up = bakar 200 kal/30 min || 6.67kal/min
// plank = bakar 5 kal/min
// buat program menghitung berapa jumlah kalori setelah melakukan olahraga tsb
// dngan ketentuan setap orang boleh melakukan aktivitasnya lebih dari 1

const kaloriPerMinAktivitas = {
  lari: 12,
  pushup: 6.67,
  plank: 5,
};

let totalKalori = 0;

function hitungKalori() {
  while (true) {
    const aktivitas = prompt("Masukan aktivitas (lari/pushup/plank) atau 'selesai' untuk menghentikan: ");
    if (aktivitas === 'selesai') {
      break;
    }

    const durasi = parseFloat(prompt('Masukan durasi dalam menit: '));
    if (kaloriPerMinAktivitas[aktivitas] && durasi > 0) {
      const kalori = kaloriPerMinAktivitas[aktivitas] * durasi;
      totalKalori += kalori;
      alert('Kalori yang terbakar untuk ' + aktivitas + ' selama ' + durasi + ' menit: ' + kalori.toFixed(2) + ' kalori');
    } else {
      alert('Aktivitas yang anda masukan salah');
    }
  }
  alert('Total kalori terbakar dari olahraga: '  + totalKalori.toFixed(2) + ' kalori');
}
hitungKalori();
