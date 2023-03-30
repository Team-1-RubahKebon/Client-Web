import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GrafikKelas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // ambil data dari database dan hitung rata-rata nilai per kelas
    const nilaiPerKelas = [
      { kelas: "A", score: [80, 90, 70, 85] },
      { kelas: "B", score: [75, 85, 80, 90] },
      { kelas: "C", score: [90, 80, 75, 95] },
    ];

    const rataNilaiPerKelas = nilaiPerKelas.map((kelas) => {
      const totalNilai = kelas.score.reduce((a, b) => a + b, 0);
      const rataNilai = totalNilai / kelas.score.length;
      return { kelas: kelas.kelas, score: rataNilai };
    });

    // set data grafik
    setData(rataNilaiPerKelas);
  }, []);

  return (
    <div>
      <BarChart
        width={300}
        height={200}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="kelas" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default GrafikKelas;
