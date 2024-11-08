import {
    FaBirthdayCake,
    FaMars,
    FaRulerVertical,
    FaWeight,
    FaHeart,
    FaWhatsapp,
    FaEnvelope,
  } from "react-icons/fa";
  
  export default function PersonalInfoSection() {
    const MyInfos = [
      {
        label: "Tanggal Lahir",
        value: "Sumedang, 11 Desember 2002",
        icon: <FaBirthdayCake />,
      },
      { label: "Jenis Kelamin", value: "Laki-laki", icon: <FaMars /> },
      { label: "Tinggi Badan", value: "182 cm", icon: <FaRulerVertical /> },
      { label: "Berat Badan", value: "57 kg", icon: <FaWeight /> },
      { label: "Status Pernikahan", value: "Belum Menikah", icon: <FaHeart /> },
      { label: "Whatsapp", value: "+681214447400", icon: <FaWhatsapp /> },
      { label: "Email", value: "fachri2159@gmail.com", icon: <FaEnvelope /> },
    ];
  
    return (
      <div className="container mx-auto p-5 text-center pt-20">
        <h2 className="text-3xl font-bold text-yellow-700 mb-8">My Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {MyInfos.map((info, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:bg-indigo-50 transition duration-300"
            >
              <div className="text-yellow-500 text-3xl mr-4">{info.icon}</div>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">
                  {info.label}
                </p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }