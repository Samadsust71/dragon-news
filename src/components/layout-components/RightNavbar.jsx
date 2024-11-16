import SocialLogin from "../SocialLogin";
import SocialMedia from "../SocialMedia";

const RightNavbar = () => {
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <SocialLogin/>
      <SocialMedia/>
    </div>
  );
};

export default RightNavbar;
