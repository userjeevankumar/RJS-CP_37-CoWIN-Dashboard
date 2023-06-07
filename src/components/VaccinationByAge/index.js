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
            cx="70%"
            cy="40%"
            data={vaccinationByAgeData}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="44-60" fill="#b3d23f" />
            <Cell name="Above 60" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
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
