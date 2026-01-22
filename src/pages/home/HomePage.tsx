import { Header } from "../../components/Header";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { HeaderContent } from "../../components/HeaderContent";
import { EverythingYouNeedToThrive } from "../../components/everything-you-need-to-thrive";

export const HomePage = () => {
	return (
		<div>
			<HeaderWrapper>
				<Header />
				<HeaderContent />
			</HeaderWrapper>
			<div className="w-full">
				<EverythingYouNeedToThrive />
			</div>
		</div>
	);
};
