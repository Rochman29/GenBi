export default function DataStunting() {
  return (
    <div className="flex flex-row justify-between items-center min-h-screen px-8 py-8">
      <img
        className="bg-cover bg-center rounded-lg"
        src="dataStunting.png"
        alt="data"
        width="500"
        height="500"
      ></img>
      <div className="flex flex-col justify-center items-center px-10 gap-14">
        <div className="font-bold text-2xl">DATA STUNTING</div>
        <div className="font-serif text-lg">
          Saat ini 1 dari 3 anak Indonesia mengalami stunting (30,8% berdasarkan
          Riskesdes 2018 dan 27,67% berdasarkan SSGBI 2019). Meskipun sudah
          mengalami penurunan dari angka 37,2% di tahun 2013, namun pemerintah
          menargetkan persentase stunting dapat turun menjadi 14% di tahun 2024.
          Data stunting dalam bentuk peta interaktif dapat diakses di Database
          Kesehatan Indonesia hasil Kerjasama Bappenas dengan Unicef.
        </div>
      </div>
    </div>
  );
}
