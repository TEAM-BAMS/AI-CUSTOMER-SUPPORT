import google from "@/components/google";
const SignIn = () => {
    return (
        <>
          <div className="w-full relative bg-background h-[745px] text-center text-[50px] text-text-color font-inter">
                <b className="absolute top-[196px] left-[504px] leading-[27px] inline-block w-[455px] h-[27px]">Welcome To Persi</b>
                <b className="absolute top-[251px] left-[453px] text-[32px] leading-[27px] inline-block w-[569px] h-[27px]">Your Personal assistent</b>
                {/* <img className="absolute top-[121px] left-[716px] w-[61px] h-[47px] object-cover" alt="" src="Artificial Intelligence.png" /> */}
          </div>
          <google />
          </>);
};

export default SignIn;
