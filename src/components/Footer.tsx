import { Link } from "react-router-dom";

const SOCIAL_MEDIA_LINKS: {
	iconSrc: string;
	url: string;
	name: string;
}[] = [
	{
		iconSrc: "/assets/twitter.svg",
		url: "#",
		name: "Twitter",
	},
	{
		iconSrc: "/assets/instagram.svg",
		url: "#",
		name: "Instagram",
	},
	{
		iconSrc: "/assets/linkedin.svg",
		url: "#",
		name: "LinkedIn",
	},
	{
		iconSrc: "/assets/youtube.svg",
		url: "#",
		name: "YouTube",
	},
];
export const Footer = () => {
	return (
		<div className="pt-[20.4375rem] app-container">
			<div className="flex flex-col gap-6 w-full max-w-[81%] mx-auto">
				<div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between">
					<p className="text-[#FFFFFF9C] text-sm leading-[1.1875rem]">
						&copy; {new Date().getFullYear()} 2025 All Rights
						Reserved
					</p>
					<div className="flex items-center gap-2.5">
						{SOCIAL_MEDIA_LINKS.map(
							({ iconSrc, url, name }, idx) => (
								<Link
									to={url}
									target="_blank"
									rel="noopener noreferrer"
									key={`${iconSrc}-${idx}`}
								>
									<img
										src={iconSrc}
										alt={`${name}'s icon`}
									/>
								</Link>
							)
						)}
					</div>
				</div>
				<div className="h-[16rem]">
					<img
						src="/assets/nectar-text-footer.svg"
						alt="nectar text"
						className="h-full w-full"
					/>
				</div>
			</div>
		</div>
	);
};
