import Link from 'next/link';

const WelcomeScreen = () => {
    return (
        <div className="w-full relative bg-background h-screen overflow-hidden text-center text-sm text-text-color font-inter">
            <Link href="/login">
                <div className="absolute top-[427px] left-[639px] rounded bg-mediumslateblue w-[66px] h-[38px] flex items-center justify-center cursor-pointer">
                    <span className="leading-[27px] font-medium text-white">Log in</span>
                </div>
            </Link>
            <Link href="/signup">
                <div className="absolute top-[427px] left-[717px] rounded bg-mediumblue w-[75px] h-[38px] flex items-center justify-center cursor-pointer">
                    <span className="leading-[27px] font-medium text-white">Sign up</span>
                </div>
            </Link>
            <div className="absolute top-[386px] left-[556px] text-mini leading-[27px] font-medium text-left inline-block w-[319px] h-[27px]">Log in with your Pirsi account to continue</div>
            <div className="absolute top-[354px] left-[556px] text-mini leading-[27px] font-medium inline-block w-[319px] h-[27px]">Welcome to Pirsi</div>
            <img className="absolute top-[283px] left-[693px] w-[61px] h-[47px] object-cover" alt="AI" src="/ArtificialIntelligence.png" />
        </div>
    );
};

export default WelcomeScreen;
