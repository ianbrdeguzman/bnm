import { Routes, Route } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { SitePerformance } from './pages/SitePerformance';
import { Traffic } from './pages/Traffic';

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
