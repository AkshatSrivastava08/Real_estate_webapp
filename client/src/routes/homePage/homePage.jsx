import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage(){

    const {currentUser} = useContext(AuthContext)

    console.log(currentUser)
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>
                    Find Real Estate & Get Your Dream Place
                    {/* Discover Your Perfect Home in the Heart of Lucknow */}
                    </h1>
                    <p>
                    Discover the perfect home with ease. Whether you're buying or renting, we make finding your dream property simple and stress-free!                    </p>
                    <SearchBar/>
                    <div className='boxes'>
                    <div className='box'>
                            <h1>
                               16+ 
                            </h1>
                            <h2>
                                Years of Experience
                            </h2>
                        </div><div className='box'>
                            <h1>
                               200 
                            </h1>
                            <h2>
                                Award Gained
                            </h2>
                        </div><div className='box'>
                            <h1>
                               1200+
                            </h1>
                            <h2>
                                Property Ready
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src='/bg.png' alt=''/>
            </div>
         </div>
    )
}

export default HomePage