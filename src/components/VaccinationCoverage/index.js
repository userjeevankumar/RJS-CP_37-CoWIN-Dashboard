// Write your code here

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {VaccinationCoverageData} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="container">
      <h1 className="heading">Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={300}
        data={VaccinationCoverageData}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineData"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontSize: 12,
          }}
        />
        <Bar
          dataKey="dose_1"
          name="Dose 1"
          radius={[10, 10, 0, 0]}
          fill="#5a8dee"
          barSize="20%"
        />
        <Bar
          radius={[5, 5, 0, 0]}
          dataKey="dose_2"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
