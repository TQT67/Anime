import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { createContext, useState } from 'react';

export const themeContext = createContext();

function App() {
    const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem('theme')) || 'light');

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            const Layout = route.layout || DefaultLayout;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </themeContext.Provider>
    );
}

export default App;
