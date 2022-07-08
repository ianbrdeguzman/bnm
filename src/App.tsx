import { Routes, Route } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { Traffic } from './pages/Traffic';
import { SitePerformance } from './pages/SitePerformance';
import { Layout } from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="/traffic" element={<Traffic />} />
        <Route path="/performance" element={<SitePerformance />} />
      </Route>
    </Routes>
  );
}
