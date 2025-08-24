import React from 'react'
import WelcomeSection from '../components/dashboard/WelcomeSection'
import SavedCourses from '../components/dashboard/SavedCourses'
import GraphTabs from '../components/dashboard/graph/GraphTabs'

const Dashboard = () => {
  return (
    <>
   <div className='space-y-3 mb-2 '>
    <WelcomeSection/>
    <GraphTabs/>
    <SavedCourses/>
   </div>
    </>
  )
}

export default Dashboard