import { Routes, Route } from 'react-router-dom'
import { Index } from './layouts/DefaultLayout/Index'
import { History } from './pages/History'
import { Home } from './pages/Home'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

export { Router }
