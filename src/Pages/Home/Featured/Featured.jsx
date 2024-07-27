import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">

            <SectionTitle subHeading='Check it Out' heading='Featured Item'/>
            
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque magnam labore id possimus vel, ad mollitia, hic pariatur officia, provident minus dolorem eveniet. Debitis excepturi corporis temporibus minus placeat.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;