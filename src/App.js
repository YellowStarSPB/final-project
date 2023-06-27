import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RequireAuth from './hoc/RequireAuth';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchResult from './pages/SearchResult/SearchResult';

function App() {
    const { isAuth } = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();
    const fromPage = location.state?.from?.pathname || '/';
    console.log(fromPage)

    useEffect(() => {
        navigate(fromPage, { replace: true });
    }, [isAuth]);

    return (
        <>
            <Header />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/search"
                        element={
                            <RequireAuth>
                                <SearchPage />
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
