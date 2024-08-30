import { createRoot } from 'react-dom/client';
import { ParentComp } from './components/ParentComp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ParentComp />);
