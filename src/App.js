import logo from './logo.svg';
import './App.css';
import { darkTheme } from '../src/Theme/DarkTheme';
import { Navbar } from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  return (
    <div>
     <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
     <Navbar />
     </ThemeProvider>
    </div>
  );
}
export default App;
