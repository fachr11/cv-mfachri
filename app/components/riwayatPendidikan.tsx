export default function RiwayatPendidikan() {
return (
<div className="container mx-auto p-2 text-center pt-20">
<h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pendidikan</h2>
<RowRiwayat jenjang="SD" sekolah="SDN Parakanmuncang 2" tahun="2008-2015" />
<RowRiwayat jenjang="SMP" sekolah="SMPN 1 Cimanggung" tahun="2015-2018" />
<RowRiwayat jenjang="SMA" sekolah="SMAN 1 Cicalengka" tahun="2018-2021" />
<RowRiwayat jenjang="Universitas" sekolah="Masoem University" tahun="2022-Tepat Waktu😁 " />
</div>
);
}


interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }

function RowRiwayat (props: RowRiwayatProps) {
    return (
  <div className="border-2 border-yellow-500/75 rounded-lg bg-white-800 p-2 my-5">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
              <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
              <div className="col-span-12 md:col-span-4">{props.tahun}</div>
            </div>
          </div>
    );
   }