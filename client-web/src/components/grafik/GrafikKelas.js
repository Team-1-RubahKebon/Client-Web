import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchClass } from "../../stores/action/classActionCreator";

const GrafikKelas = () => {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state?.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClass());
  }, []);

  const nilaiPerKelas = data.classes.map((kelas) => {
    const studentAnswers = data.classes
      .filter(
        (data) => data.name === kelas.name && data.Assignments.length > 0
      )[0]
      ?.Assignments?.map((assignment) => assignment.StudentAnswers[0]?.score);
    return { kelas: kelas.name, score: kelas.classAvg };
  });

  return (
    <div>
      <BarChart
        width={400}
        height={250}
        data={nilaiPerKelas}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="kelas" fill="#ffb703" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#1a759f" />
      </BarChart>
    </div>
  );
};

export default GrafikKelas;
