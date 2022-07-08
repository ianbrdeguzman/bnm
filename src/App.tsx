import { Routes, Route } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Traffic } from './pages/Traffic';
import { SitePerformance } from './pages/SitePerformance';

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Overview />} />
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/site-performance" element={<SitePerformance />} />
      </Route>
    </Routes>
  );
}
