import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
    return (
        <>
            <Header />

            <main className="container">
                {/* <Home /> */}
                {/* <Login /> */}
                <SearchPage />
            </main>

            <Footer />
        </>
    );
}

export default App;
