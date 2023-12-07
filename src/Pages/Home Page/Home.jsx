import React from 'react'
import Landing_sec from './Landing section/Landing_sec'
import ValueCalculator from './Value calculator/ValueCalculator'
import Loan_sec from './Loans section/Loan_sec'
import Timeline from './Time line/Timeline'
import Faq from './FAQ/Faq'

const Home = () => {
  return (
   <>
   <Landing_sec/>
   <ValueCalculator/>
   <Loan_sec/>
   <Timeline/>
   <Faq/>
   </>
  )
}

export default Home