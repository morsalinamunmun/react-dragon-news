import { AiOutlineGoogle, AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import {  BsFacebook } from 'react-icons/bs';
import qZone1 from '../../../assets/qZone1.png' 
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RigthSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='font-semibold'>Login with</h2>
                <button className="btn btn-outline w-full">
                  <AiOutlineGoogle></AiOutlineGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                  <AiFillGithub></AiFillGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4 mb-6 text-blue-500'>
                <h2 className='font-semibold text-black'>Find us on</h2>
                <a href=''  className='flex p-3 border rounded-t-lg items-center gap-2'>
                  <BsFacebook></BsFacebook>
                    <span>Facebook</span>
                </a>
                <a href='' className='flex p-3 border items-center gap-2'>
                  <AiFillTwitterCircle></AiFillTwitterCircle>
                    <span>Twitter</span>
                </a>
                <a href='' className='flex p-3 border rounded-b-lg items-center gap-2'>
                  <AiOutlineInstagram></AiOutlineInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className='p-4 mb-6 '>
                <h2 className='font-semibold'>Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RigthSideNav;