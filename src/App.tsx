import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import InsurancePage from './pages/insurance/InsurancePage'
import { ROUTES } from './routes/routes'
import { ProductIds } from './utils/productIds'


const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path={ROUTES.INSURANCE.DEVELOPER_INSURANCE}
            element={<InsurancePage productId={ProductIds.DeveloperInsurance} />}
          />
          <Route
            path={ROUTES.INSURANCE.DESIGNER_INSURANCE}
            element={<InsurancePage productId={ProductIds.DesignerInsurance} />}
          />
          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
