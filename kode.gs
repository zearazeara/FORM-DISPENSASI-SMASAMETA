/**
 * Menampilkan halaman index.html sebagai Web App
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("E-Dispensasi | SMAN 1 Magetan");
}

/**
 * Menyimpan data form ke Google Spreadsheet
 * @param {string} nama
 * @param {string} kelas
 * @param {string} nis
 * @param {string} alasan
 * @param {string} tanggal
 */
function simpanDispensasi(nama, kelas, nis, alasan, tanggal) {
  // Ganti "Dispensasi" dengan nama sheet-mu
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dispensasi");
  if (!sheet) {
    throw new Error('Sheet "Dispensasi" tidak ditemukan!');
  }

  sheet.appendRow([
    new Date(), // Timestamp
    nama,
    kelas,
    nis,
    alasan,
    tanggal
  ]);

  return "Sukses";
}
