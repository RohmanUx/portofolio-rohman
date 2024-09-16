
# Header 1
## Header 2
### Header 3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~
**Label:** This is the description or value.

**Label:** This is the description.





## index 0 (sometime index & value 2 non index)
**.chartAt** 
**.indexOf (index ke berapa (string value))** 
**// .search ((value string) ditentukan: apakah ada sama dan keluar index & index keberapa (value string) (jika tidak lengkap: ada berbeda someone, -1))** 
// .slice     ((apakah dimulai (value awal) = (2) maka keluar 3, selanjutnya) .. singgle = tanpa string tanpa koma (jika koma terhitung), di var awal)                                           &   ((jika style (koma = dibagi element etc) maka awal 2 keluar 2 = (value kedua) tanpa index) can use array & string)  & value pertama sebelumnya tidak keluar, value kedua batas jumlah keluar keseluruhan (dengan number) & jika -number (akan tanpa index dari kanan = (spasi kosong,etc) tetap di hitung dari kanan) & jika (3,2) output kosong // 5 role * 
// .subString ((apakah dimulai (value awal) = (2) maka keluar 3, selanjutnya) .. singgle = tanpa string tanpa koma (jika koma terhitung) dan tanpa array (jika array error), di var awal)        &   ((jika style (koma = dibagi element etc) maka awal 2 keluar 2 = (value kedua) tanpa index) can use string)          & value pertama sebelumnya tidak keluar, value kedua batas jumlah keluar keseluruhan (dengan number) & jika -number (akan tampilkan semua walaupun use -number(seolah tidak berguna) atau tidak)  & (1,2,3,4) (3,1) output 2,3 = (batas akhir,index mulai(besar,kecil)) // (1,3) output 2,3 = (index mulai, batas akhir(kecil,besar))   // 5 role 
// .splice * 
// non index ## 
// .padStart * 

// should string ## 
// parseFloat * 
// .startsWith (check awal apakah ada jika ada true) .starstEnd(check akhir jika true) 
// .includes (check apakah ada sama jika sama true) 
// .padStart (add untuk dari awal & jika lebih dari keseluruhan maka tertambah ke selanjutnya (dari awal) (walaupun singgle number akan kosong, jika (2,'hallo'(double)) akan keluar hallo)) / .padEnd * 
// .chartAt (number: hasilnya singgle text / number) * 
// .repeat (dua kali di tambahkan berdasarkan number untuk hasil banyak brp) 
// .replace (change text utama ke text ditentukan untuk change & string, string: textnya berubah) 
// .split (di pecahkaan berdasarkan string, hasilnya array & jika ada (text / number string) ditentukan (2) terhapus 2, selanjutnya tidak dipecahkan)

// should array ## 
// .splice (berdasarkan number index & sebagian output = [1,2,3,4,5,6,7] (3): 4 (3,2): 5) ((1,0,'h','b'): 1,h,b,2,3,4,5,6,7 manambah dari value ke dua) ((1,2,'h','b'): 1,h,b,4,5,6,7 menhapus dari value kedua) 

// should array & string ##
// .concat (add text yg udah ada) 
// .toString (string / array ke string) 
// isNaN * 
// array.from * 

// only tool ## 
// .trim (hapus spasi kosong)   .trimStart .tringEnd 
// .toLowwerCase (ke hurup kecil semua) .toUpperCase 

// tool output ##
// paseFloat (keluar hanya number berdasarkan 2.5 / 2) parseInt (2.5 keluar 2) *  
// iseNaN (check bukan number jika number: false)  * 
// toFixed (dari 2.4000 toFixed(2) : 2.40) (no string array)
// isFinite (check only output only number / number string without var)
// valueOf (use nameVar.valueOf (build in project like a string number date))

// Object.value (use nameVar (ambil nilai akhir object)) 
// Object.keys (use nameVar (ambil nilai awal object)) 
// Object.entries (dari object convert ke array) fromEntries (dari array convert ke object)


// type inside() ## 
// (text string / number (singgle)), 
// (string, number), 
// (string, string), 
// (string can '1' , '2' (can infinity want))
// (number, number), 
// (output style method())  
//  output 2 number & 1 string / 2 string 


// Hitungan var pertama Output (var kedua alat untuk pertama)
// pop (hapus akhir array)
// push (tambah akhir array)
// shift (hapus akhir array)
// unshift (tambah akhir array)

// map (berdasarkan arematic per item berubah)
// filter (berdasarkan conditional)
// forEach (berdasarkan arematic per item berubah)

// math.ceil floor round max min abs (kecil 2,1: 2, sedang (2,4: 2) (2,6: 2), tertinggi (2,6:3) , nilai tertinggi 1,2,3= 3, nilai terendah 1,2,3 =1, nilai negatif jadi positif)
  
// reduce (use acc,cur arimatic di keduanya ke hasil singgle dari total keseluruhan)
// findIndex (index keberapa nomor / text pakai contional untuk hasil singgle) .find (tanpa index)
// flatMap (dari satu-persatu di arematic, output satu-persatu dari hasil arematic (a=>[a*a]) & bisa selipkan number jika duluar array maka nilai tetap jika dalam array maka di hitung dua kali dgn arimatic  (a=>[a*2]) = 1,2,4,4,9,8,16 / (a=>[a*a],2) = 1,2,4,2,9,2,16 )
// .append (menambahkan value doc / img ke value selanjutnya)
// toLocalTimeString (format waktu dari new Date())
// toLocalDateString (format tanngal dari new Date())
// array.from (convert array biasa, sebelumnya tidak biasa / string)
