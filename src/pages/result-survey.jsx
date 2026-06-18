import { useState } from "react";

export default function ResultSurvey() {
  const [data] = useState(() => {
    const stored = localStorage.getItem("dataSurvey");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div className="flex items-center m-auto gap-4 flex-col max-w-[867px] w-full px-4 pt-4">
      <div className="bg-white rounded-xl border border-black/30 p-6 w-full overflow-hidden shadow-sm">
        <h1 className="text-2xl font-normal text-black mb-4">
          Data Survey
        </h1>

        {data.length === 0 ? (
          <div className="text-gray-500">Belum ada data survey.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-black/20">
                <th className="p-2">No</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Umur</th>
                <th className="p-2">Jenis Kelamin</th>
                <th className="p-2">Perokok</th>
                <th className="p-2">Rokok yang Pernah Dicoba</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-black/10"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.age}</td>
                  <td className="p-2">{item.gender}</td>
                  <td className="p-2">{item.perokok}</td>
                  <td className="p-2">
                    {Array.isArray(item.cig)
                      ? item.cig.join(", ")
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}