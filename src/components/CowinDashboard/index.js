// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const cowinDashboardDetails = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    isLoading: cowinDashboardDetails.initial,
    fetchedData: {},
  }

  componentDidMount() {
    this.getFullDetailsOfVaccination()
  }

  getFullDetailsOfVaccination = async () => {
    this.setState({isLoading: cowinDashboardDetails.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok === true) {
      const convertData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      this.setState({
        fetchedData: convertData,
        isLoading: cowinDashboardDetails.success,
      })
    } else {
      this.setState({isLoading: cowinDashboardDetails.failure})
    }
  }

  renderCharts = () => {
    const {fetchedData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = fetchedData

    return (
      <div>
        <VaccinationCoverage VaccinationCoverageData={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGenderData={vaccinationByGender} />
        <VaccinationByAge vaccinationByAgeData={vaccinationByAge} />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="img-failure"
      />
      <h1 className="failure-head">Something went wrong</h1>
    </div>
  )

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  switchCasesCheck = () => {
    const {isLoading} = this.state
    switch (isLoading) {
      case cowinDashboardDetails.success:
        return this.renderCharts()
      case cowinDashboardDetails.pending:
        return this.renderLoadingView()
      case cowinDashboardDetails.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="img-head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="img-website-logo"
          />
          <h1>Co-WIN</h1>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        <div>{this.switchCasesCheck()}</div>
      </div>
    )
  }
}

export default CowinDashboard
