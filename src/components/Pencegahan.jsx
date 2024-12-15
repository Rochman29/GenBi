export default function Pencegahan() {
  return (
    <div className="flex flex-row justify-between items-center min-h-screen px-8 py-8">
      <img
        className="bg-cover bg-center rounded-lg"
        src="makanan.png"
        alt="data"
        width="500"
        height="500"
      ></img>
      <div className="flex flex-col justify-center items-center px-10 gap-6 pt-24">
        <div className="font-bold text-2xl">CARA MENCEGAH STUNTING</div>
        <div className="flex flex-col gap-7">
          <div className="font-serif text-lg text-left">
            Penting untuk memperhatikan angka kecukupan gizi (AKG) dalam
            menyusun menu harian untuk mencegah stunting. Ada beberapa bahan
            makanan murah meriah dan mudah didapatkan di sekitar kita , yaitu :
          </div>
          <div className="font-serif text-lg text-left flex flex-col justify-between items-center">
            <div className="flex flex-row gap-2">
              <div>1.</div>
              <div>
                Tempe dan tahu makanan berbahan dasar kedelai. Dengan kandungan
                protein setiap 100 gram untuk tempe kurang lebih sebesar 14 gram
                dan 100 gram tahu sebesar 10,9 gram.
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div>2.</div>
              <div>
                Kacang – kacangan, salah satunya kacang hijau yang setiap 100
                gramnya memiliki kandungan protein sebesar 8,7 gram yang banyak
                digunakan sebagai PMT pada Posyandu Balita
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div>3.</div>
              <div>
                Telur ternyata juga dapat mencegah stunting, salah satunya
                dengan menambahkan 1 butir telur pada menu harian baik itu untuk
                ibu hamil, ibu menyusui maupun balita
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div>4.</div>
              <div>
                Hati ayam, ternyata dalam setiap 100 gram hati ayam mentah
                memiliki protein sebesar 27,4 gram jauh lebih tinggi proteinnya
                jika dibandingkan dengan daging ayam,proteinnya sebesar 18,2
                gram.
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div>5.</div>
              <div>
                Ikan, Indonesia terkenal sebagai negara penghasil ikan. Salah
                satunya adalah ikan kembung yang nilai gizinya hampir sama
                dengan dengan ikan salmon. Jadi tak harus merogoh kocek yang
                dalam untuk mendapatkan bahan makanan yang bergizi.
              </div>
            </div>
          </div>
        </div>
        <div className="font-serif text-lg"></div>
      </div>
    </div>
  );
}
