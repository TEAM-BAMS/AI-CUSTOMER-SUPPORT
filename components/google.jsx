import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const google = () => {
  	return (
    		<div className="w-full relative h-[127px] text-left text-mini text-text-color font-inter">
      			<div className="absolute top-[75px] left-[0px] rounded border-silver border-[1px] border-solid box-border w-80 h-[52px] overflow-hidden">
        				<div className="absolute top-[0px] left-[53px] leading-[27px] font-medium flex items-center w-[267px] h-[52px]">
          					<FontAwesomeIcon icon={faMicrosoft} className="mr-3" />
          					Continue with Microsoft Account
        				</div>
      			</div>
      			<div className="absolute top-[0px] left-[0px] rounded border-silver border-[1px] border-solid box-border w-80 h-[52px] overflow-hidden">
        				<div className="absolute top-[0px] left-[53px] leading-[27px] font-medium flex items-center w-[267px] h-[52px]">
          					<FontAwesomeIcon icon={faGoogle} className="mr-3" />
          					Continue with Google
        				</div>
      			</div>
    		</div>
  	);
};

export default google;
