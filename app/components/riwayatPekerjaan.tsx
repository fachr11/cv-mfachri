export default function RiwayatPendidikan () {
return (
<div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pekerjaan</h2>
<RowRiwayatKerja tahunker="2012 - 2013" instansi="Setia Mudia Junior FC" peran="Pemain Sepak Bola" />
<RowRiwayatKerja tahunker="2017 - 2018" instansi="Selecao FC" peran="Player Futsal" />
<RowRiwayatKerja tahunker="2021 - 2022" instansi="Unemployment E-sports" peran="Player Tim Mobile Legends" />
<RowRiwayatKerja tahunker="2021 - Sekarang" instansi="Tempat Praktek Dokter Mandiri Candra Permana" peran="Perekam Medis" />
</div>
);
}

interface RowRiwayatKerjaProps {
    tahunker: string;
    instansi: string;
    peran: string;
  
  }

  function RowRiwayatKerja (props: RowRiwayatKerjaProps) {
    return (
  <div className="border-2 border-yellow-500/75 rounded-lg bg-white-800 p-2 my-5">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-4">{props.tahunker}</div>
              <div className="col-span-12 md:col-span-4">{props.instansi}</div>
              <div className="col-span-12 md:col-span-4">{props.peran}</div>
            </div>
          </div>
    );
   }
  