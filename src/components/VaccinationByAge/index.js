// Write your code here

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const vaccinationByAge = props => {
  const {vaccinationByAgeData} = props
  return (
    <div className="container">
      <h1 className="heading">Vaccination by Age</h1>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAgeData}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              padding: 10,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default vaccinationByAge
