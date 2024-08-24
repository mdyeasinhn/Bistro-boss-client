import { Link } from 'react-router-dom';
import errorpic from '../../assets/contact/404.gif'

const ErrorElement = () => {
    return (
        <div className='mt-0'>
            <div className="flex justify-center">
                <img src={errorpic} alt="" />
            </div>
            <div className='text-center'>
                <Link to='/' >
                    <button className='btn w-[300px] text-white bg-[#835D23]'>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorElement;