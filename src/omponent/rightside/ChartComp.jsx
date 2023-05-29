import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComp = () => {

    const data = [
    { name: 'January', value: 40 },
    { name: 'February', value: 350 },
    { name: 'March', value: 300 },
    { name: 'April', value: 100 },
    { name: 'May', value: 300 },
    { name: 'June', value: 180 },
  ];
  return (
    <div className="chart-page">
      <div className="chart-container">
        <LineChart width={700} height={180} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  )
}

export default ChartComp