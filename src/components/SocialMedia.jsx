import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <div className="mt-10">
        <h2 className="font-semibold">Find Us On</h2>
      <div className="join join-vertical flex  *:bg-base-100  mt-3">
        <button className="btn join-item justify-start">
            <FaFacebook className="text-blue-500"/>
            Facebook
            </button>
        <button className="btn join-item justify-start">
            <FaInstagram className="text-red-400"/>
            Instagram</button>
        <button className="btn join-item justify-start">
            <FaTwitter className="text-blue-500"/>
            Twitter</button>
      </div>
    </div>
  );
};

export default SocialMedia;
