import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Cell,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
} from "recharts";
import OrderPieChart from "../components/OrderPieChart";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/signin");
  };

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const pieData = [
    { name: "Group A", value: 1 },
    { name: "Group B", value: 2 },
    { name: "Group C", value: 3 },
    { name: "Group D", value: 4 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className=" flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Log Out
        </button>
      </div>

      <div className="p-10">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-10">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart outerRadius={90} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 10000]} />
            <Radar
              name="PV"
              dataKey="pv"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="UV"
              dataKey="uv"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-10">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[pieData.indexOf(entry) % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-10 ">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            {/* Pie 1 */}
            <Pie
              data={data}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="uv"
              name="User Visits"
            >
              {data.map((entry) => (
                <Cell
                  key={`inner-cell-${entry.name}`}
                  fill={COLORS[data.indexOf(entry) % COLORS.length]}
                />
              ))}
            </Pie>

            {/* Pie 2 */}
            <Pie
              data={data}
              cx={500}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              paddingAngle={5}
              dataKey="pv"
            >
              {data.map((entry) => (
                <Cell
                  key={`outer-cell-${entry.name}`}
                  fill={COLORS[data.indexOf(entry) % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="">
          <ResponsiveContainer>
            <OrderPieChart />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
