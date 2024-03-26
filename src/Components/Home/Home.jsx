
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();

    console.log(location);
    return (
        <div>
            <Header></Header>
            <h4>This is the Home Section</h4>
            {
                navigation.state === "loading"
                ? <h1>Data Loading..</h1>
                :<Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;