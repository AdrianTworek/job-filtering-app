import { useState, useEffect } from 'react'
import {
  JobsContainer,
  Job,
  JobCompany,
  JobButton,
  JobTitle,
  JobDetailsContainer,
  JobDetails,
  JobTechDetailsContainer,
  JobTechDetails,
  JobImage,
} from './Jobs.styles'
import { jobs } from '../../data'
import Filters from '../Filters/Filters'

const JobsList = () => {
  const [filters, setFilters] = useState([])
  const [jobsData, setJobsData] = useState(jobs)

  useEffect(() => {
    if (filters.length > 0) {
      const filteredJobs = []

      jobs.forEach((job) => {
        const details = job.techDetails

        if (filters.every((filter) => details.includes(filter))) {
          filteredJobs.push(job)
        }
      })

      setJobsData(filteredJobs)
    } else {
      // If there are no filters show the initial jobs
      setJobsData(jobs)
    }
  }, [filters])

  const handleClick = (detail) => {
    if (filters.includes(detail)) return

    setFilters([...filters, detail])
  }

  const handleClear = () => setFilters([])

  const handleRemove = (detail) => {
    const filteredDetails = filters.filter((item) => item !== detail)
    setFilters(filteredDetails)
  }

  return (
    <JobsContainer>
      {/* This component renders when there is more than 1 element
          selected by user to be filtered */}
      {filters.length > 0 && (
        <Filters
          filters={filters}
          handleRemove={handleRemove}
          handleClear={handleClear}
        />
      )}

      {/* Job offers, information is being taken from data.js file */}
      {jobsData.map((job, idx) => (
        <Job key={idx} featured={job.featured}>
          <div className="desktop-grid">
            <div className="desktop-grid-left">
              <JobImage bgImage={job.image}></JobImage>
              <JobCompany>{job.company}</JobCompany>
              {job.new && (
                <JobButton
                  bgColor="hsl(180, 29%, 50%)"
                  color="hsl(180, 31%, 95%)"
                >
                  NEW!
                </JobButton>
              )}
              {job.featured && (
                <JobButton
                  bgColor="hsl(180, 14%, 20%)"
                  color="hsl(180, 31%, 95%)"
                >
                  FEATURED
                </JobButton>
              )}
              <JobTitle>{job.title}</JobTitle>
              <JobDetailsContainer>
                {job.details.map((detail, idx) => (
                  <JobDetails key={idx}>{detail}</JobDetails>
                ))}
              </JobDetailsContainer>
            </div>
            <div className="desktop-grid-right">
              <JobTechDetailsContainer>
                {job.techDetails.map((detail, idx) => (
                  <JobTechDetails key={idx} onClick={() => handleClick(detail)}>
                    {detail}
                  </JobTechDetails>
                ))}
              </JobTechDetailsContainer>
            </div>
          </div>
        </Job>
      ))}
    </JobsContainer>
  )
}

export default JobsList
