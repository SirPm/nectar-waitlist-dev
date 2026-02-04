import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
// import { FirstBgWrapper } from "../home/HomePage";

export const NotFoundPage = () => {
	return (
		<div className="overflow-hidden">
			<div className="h-[100dvh]">
				<Header />
				<div className="flex justify-center items-center h-48 pt-28">
					<h1 className="text-white">404 - Page Not Found</h1>
				</div>
				<Footer footerContainerClassName="!pt-0 !fixed !max-w-full !bottom-0" />
			</div>
		</div>
	);
};
