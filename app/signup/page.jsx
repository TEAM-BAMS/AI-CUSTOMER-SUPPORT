

const SignIn = () => {
    return (
          <div className="w-full relative bg-background h-screen text-center text-mini text-text-color font-inter">
                <div className="absolute top-[346px] left-[577px] w-80 h-[127px] text-left">
                      <div className="absolute top-[75px] left-[0px] rounded border-silver border-[1px] border-solid box-border w-80 h-[52px] overflow-hidden">
                            <div className="absolute top-[0px] left-[53px] leading-[27px] font-medium flex items-center w-[267px] h-[52px]">Continue with Microsoft Account</div>
                            <img className="absolute h-[38.46%] w-[6.25%] top-[30.77%] right-[88.44%] bottom-[30.77%] left-[5.31%] max-w-full overflow-hidden max-h-full" alt="" src="MicrosoftLogo.svg" />
                      </div>
                      <div className="absolute top-[0px] left-[0px] rounded border-silver border-[1px] border-solid box-border w-80 h-[52px] overflow-hidden">
                            <div className="absolute top-[0px] left-[53px] leading-[27px] font-medium flex items-center w-[267px] h-[52px]">Continue with Google</div>
                            <img className="absolute h-[35.19%] w-[5.63%] top-[32.37%] right-[88.8%] bottom-[32.44%] left-[5.57%] max-w-full overflow-hidden max-h-full" alt="" src="GoogleLogo.svg" />
                      </div>
                </div>
                <b className="absolute top-[196px] left-[504px] text-[50px] leading-[27px] inline-block w-[455px] h-[27px]">Welcome To Persi</b>
                <b className="absolute top-[251px] left-[453px] text-[32px] leading-[27px] inline-block w-[569px] h-[27px]">Your Personal assistent</b>
                <img className="absolute top-[121px] left-[716px] w-[61px] h-[47px] object-cover" alt="" src="ArtificialIntelligence.png" />
          </div>);
};

export default SignIn;
