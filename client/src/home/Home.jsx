import '../App.css';
import Header from '../templates/Header';
import Timer from '../templates/Timer';

const Home = () => {
    return (
        <div className="main-wrap">
           <Header />
           
           <div className="content-home">
           <Timer />
               <h1>Together we are strong</h1>
               <p className="desc">
               On the morning of February 24, 2022, Russia launched a full-scale invasion of Ukraine without declaring war. All the money will be used to help Ukraine.
               </p>
               <div className="btn">
                   <a href="#">
                       <p>Join us now</p>
                   </a>
                   <a href="#">
                       <p>Donate now</p>
                   </a>
               </div>
           </div>
        </div>
    );
}

export default Home;
