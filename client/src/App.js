import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmailComponent from './EmailComponent';
import Header from "./Header";
import ViewMessage from './ViewMessage';
function App() {
    return (
        <BrowserRouter>
              <Header />
            <Routes>
                <Route exact path="/" element={<EmailComponent />} />
                <Route path="/message" element={<ViewMessage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
