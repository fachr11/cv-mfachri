import foto from "../fotokuu.jpeg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-yellow-300 font-bold">CV Online</h1>
          <h1 className="text-yellow-250 font-bold">Muhamad Fachri Husaeni</h1>
          <Profile />
          <p>
          Halo !!! Nama saya Muhamad Fachri Husaeni, saya adalah anak pemalas yang punya mimpi besar (tidur mulu)
          </p>
        </div>
        );
    }
    
   

function Profile() {
    return <img src={foto.src} alt="Muhamad Fachri Husaeni Profile" className="fotoku" />;
   }