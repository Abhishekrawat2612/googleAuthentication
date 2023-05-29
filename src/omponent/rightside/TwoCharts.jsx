import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const TwoCharts = () => {

    const data = [
        { name: 'Category 1', value: 400 },
        { name: 'Category 2', value: 300 },
        { name: 'Category 3', value: 200 },
        { name: 'Category 4', value: 100 },
      ];
    
      const COLORS = ['#b4cc48', '#495773', '#8dd1e1', '#725fd8'];
    

  return (
    <div className="circle-chart-page">
      <div className="chart-container">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#ec0808"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend align="center" layout="vertical" verticalAlign="middle" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default TwoCharts