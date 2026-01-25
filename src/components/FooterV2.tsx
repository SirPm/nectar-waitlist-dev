import { FilledOrangeBtn } from "./styled";

export const FooterV2 = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(248.97deg, #E55812 4.1%, #913407 76.82%)",
			}}
		>
			<div className="py-[107px] md:px-[122px] px-10 flex justify-between md:flex-row flex-col md:gap-0 gap-[69px]">
				<div className="flex flex-col gap-[69px] w-full md:max-w-[49%]">
					<div className="flex flex-col gap-6">
						<div>
							<img
								src="/assets/nectar-logo-white.svg"
								alt="nectar logo"
							/>
						</div>
						<p className="text-[#FFFFFFC2] font-medium text-base">
							Nectar is a digital banking platform provided in
							partnership with licensed financial institutions in
							Nigeria. All deposits are held with our partner
							banks who are duly regulated by the Central Bank of
							Nigeria (CBN). Lending services are offered in
							compliance with the applicable State Money Lenders’
							license.
						</p>
					</div>
					<div className="bg-[#FFFFFF1A] rounded-3xl py-8 px-6 flex flex-col gap-3">
						<p className="font-medium text-sm text-white">
							Sign up to receive stories, insights, and strategies
							your business can actually use, straight into your
							inbox.
						</p>
						<div className="relative bg-white h-[52px] rounded-[18px] flex items-center justify-between py-1 pr-1 pl-3 border border-[#E6571314]">
							<input
								type="email"
								className="text-black placeholder:text-[#B2B0B0] w-[calc(100%_-_170px)] outline-none bg-transparent"
								placeholder="Join other winning businesses"
							/>
							<FilledOrangeBtn
								className="flex items-center rounded-2xl! whitespace-nowrap"
								style={{ padding: "12px 20px" }}
							>
								Start Growing
							</FilledOrangeBtn>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-[72px] w-full md:max-w-[35%]">
					<div className="flex items-center gap-16 flex-wrap">
						<MenuColumn
							title="RESOURCES"
							items={[
								{
									label: "Blog",
									href: "#",
								},
								{
									label: "Careers",
									href: "#",
								},
								{
									label: "Press",
									href: "#",
								},
							]}
						/>
						<MenuColumn
							title="PRODUCTS"
							items={[
								{
									label: "Account",
									href: "#",
								},
								{
									label: "Credit",
									href: "#",
								},
								{
									label: "Treasury",
									href: "#",
								},
							]}
						/>
						<MenuColumn
							title="MENU"
							items={[
								{
									label: "About",
									href: "#about",
								},
								{
									label: "Why Us?",
									href: "#whyUs",
								},
								{
									label: "FAQs",
									href: "#faq",
								},
							]}
						/>
					</div>
					<div className="flex flex-col gap-[25px]">
						<h6 className="font-medium text-base text-[#FFFFFFC2]">
							CONTACT
						</h6>
						<div className="flex flex-col gap-5">
							<a
								href="mailto:support@nectarng.com"
								className="text-white text-base"
							>
								support@nectarng.com
							</a>
							<p className="text-base font-medium text-white">
								Plot 8, The Providence Street, Lekki Phase 1,
								Lekki, Lagos State, Nigeria — 105102
							</p>
						</div>
						<div className="flex items-center gap-[25.2px]">
							{[
								{
									label: "whatsapp",
									link: "#",
								},
								{ label: "linkedin", link: "#" },
								{ label: "instagram", link: "#" },
								{ label: "twitter", link: "#" },
							].map(({ label, link }, index) => (
								<a
									href={link}
									key={index}
									className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all rounded-[157.5px]"
								>
									<img
										src={`/assets/${label}-icon.svg`}
										alt={label}
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="border-t border-b border-l-0 border-r-0 border-[#FFFFFF80] border-[0.5px]">
				<img
					src="/assets/nectar-footer-logo.svg"
					className="inline-block pl-[31px]"
					alt="nectar"
				/>
			</div>
			<div className="md:h-[143px] flex pt-[50px] pb-[71px] md:pl-[122px] pl-10 md:pr-[127px] pr-10 justify-between md:flex-row flex-col gap-6 md:items-start items-center">
				<p className="font-medium text-base text-[#FFFFFFC2]">
					© {new Date().getFullYear()} Nectarine Technology Limited.
				</p>
				<p className="flex items-center gap-1">
					<span className="font-medium text-base text-[#FFFFFFCC]">
						Yours truly, Nectar
					</span>
					<img
						src="/assets/nectar-footer-logo-sm.svg"
						alt="nectar"
					/>
				</p>
			</div>
		</div>
	);
};

interface IMenuColumnProps {
	title: string;
	items: { label: string; href: string }[];
}

const MenuColumn = (props: IMenuColumnProps) => {
	const { title, items } = props;

	return (
		<div className="flex flex-col gap-[25px]">
			<h6 className="font-medium text-base text-[#FFFFFFC2]">{title}</h6>
			<div className="flex flex-col gap-5">
				{items.map(({ label, href }, index) => (
					<a
						href={href}
						key={index}
						className="text-white text-base whitespace-nowrap hover:text-black"
					>
						{label}
					</a>
				))}
			</div>
		</div>
	);
};
