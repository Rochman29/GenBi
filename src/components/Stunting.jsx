import { useEffect, useState } from "react";

export default function Stunting() {
  return (
    <header id="stunting" className="px-8 py-8 min-h-screen">
      <div className="flex flex-row justify-between items-center min-h-screen">
        <img
          className="bg-cover bg-center rounded-lg"
          src="stunting.png"
          alt="stunting"
          width="500"
          height="500"
        ></img>
        <div className="flex flex-col justify-center items-center px-10 gap-14">
          <div className="font-bold text-2xl">APA ITU STUNTING?</div>
          <div className="font-serif text-lg">
            Stunting adalah gangguan pertumbuhan dan perkembangan yang dialami
            anak-anak akibat gizi buruk, infeksi berulang, dan stimulasi
            psikososial yang tidak memadai. Permasalahan stunting terjadi mulai
            dari dalam kandungan dan baru akan terlihat ketika anak sudah
            menginjak usia dua tahun.
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center min-h-screen">
        <div className="flex flex-col justify-center items-center px-10 gap-14">
          <div className="font-semibold text-2xl">
            Gejala Stunting Pada Anak
          </div>
          <div className="flex flex-col gap-7">
            <div className="font-serif text-lg text-left">
              Berikut beberapa gejala stunting pada anak yang harus diwaspadai
              oleh orang tua yakni:
            </div>
            <div className="font-serif text-lg text-left">
              <p>
                - Anak berbadan lebih pendek dari anak seusianya
                <br />
                <br />
                - Proporsi tubuh cenderung normal tetapi anak tampak lebih
                muda/kecil untuk usianya
                <br />
                <br />
                - Berat badan rendah apabila dibandingkan dengan anak seusianya
                <br />
                <br />- Pertumbuhan tulang tertunda.
              </p>
            </div>
          </div>
        </div>
        <img
          className="bg-cover bg-center rounded-lg"
          src="stunting2.png"
          alt="stunting2"
          width="500"
          height="500"
        ></img>
      </div>
      <div className="flex flex-row justify-between items-center min-h-screen pt-24">
        <img
          className="bg-cover bg-center rounded-lg"
          src="stunting3.jpg"
          alt="stunting3"
          width="500"
          height="500"
        ></img>
        <div className="flex flex-col justify-center items-center px-10 gap-14">
          <div className="font-semibold text-2xl">
            Penyebab Stunting Pada Anak
          </div>
          <div className="flex flex-col gap-7">
            <div className="font-serif text-lg text-left">
              Situs Adoption Nutrition menyebutkan, bahwa stunting berkembang
              dalam jangka panjang karena kombinasi dari beberapa faktor-faktor
              berikut:
            </div>
            <div className="font-serif text-lg text-left">
              <p>
                Kurang gizi kronis dalam waktu lama
                <br />
                <br />
                    Retardasi pertumbuhan intrauterine
                <br />
                <br />
                    Tidak cukup protein dalam proporsi total asupan kalori
                <br />
                <br />
                    Perubahan hormon yang dipicu oleh stres
                <br />
                <br />
                 Sering menderita infeksi di awal kehidupan seorang anak.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center min-h-screen">
        <div className="flex flex-col justify-center items-center px-10 gap-14">
          <div className="font-bold text-2xl">STUNTING</div>
          <div className="font-serif text-lg">
            Mungkin sebagian besar masyarakat belum tahu mengenai apa itu
            stunting. Stunting adalah masalah kurang gizi kronis yang disebabkan
            oleh kurangnya asupan gizi dalam waktu yang cukup lama, sehingga
            mengakibatkan gangguan pertumbuhan pada anak yakni tinggi badan anak
            lebih rendah atau pendek (kerdil) dari standar usianya. Hal ini
            biasanya terjadi pada 1000 hari pertama kehidupan (HPK) dan apabila
            tidak tertangani maka akan berpengaruh  terhadap  tingkat kecerdasan
            anak dan status kesehatan pada saat dewasa.
          </div>
        </div>
        <img
          className="bg-cover bg-center rounded-lg"
          src="stunting4.png"
          alt="stunting"
          width="500"
          height="500"
        ></img>
      </div>
    </header>
  );
}
