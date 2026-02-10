import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question: "Is Nectar a bank?",
		answer: "Nectar is a digital banking platform built in partnership with licensed financial institutions in Nigeria.",
	},
	{
		question: "How long does it take to open a business account?",
		answer: "Most businesses finish onboarding in under 10 minutes.",
	},
	{
		question: "Are loan approvals guaranteed?",
		answer: "No. Approvals depend on your business performance, documentation, and creditworthiness—but we ensure a fast and fair process.",
	},
	{
		question: "What types of loans does Nectar offer?",
		answer: "Asset finance, invoice discounting, and purchase order financing. We do not offer unsecured working-capital loans.",
	},
	{
		question: "Can I earn interest on my account?",
		answer: "Yes, your balances can earn daily interest from day one.",
	},
	{
		question: "How does the AI assistant work?",
		answer: "It helps you answer questions, and when you categorise your transactions, it helps you generate insights, review cash flow, and assist with financial planning using some of the world's most intelligent AI models.",
	},
];

export const AccordionFAQ = () => {
	const [openIndex, setOpenIndex] = useState<number>(0);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<div className="p-0 md:p-6 flex flex-col gap-[27px]">
			{faqData.map((item, index) => (
				<div
					key={index}
					className={`bg-[#2C0C00] border border-[#8080808C] rounded-3xl overflow-hidden backdrop-blur-sm py-[16.41px] px-[18px] md:py-6 md:px-6 flex flex-col gap-2 md:gap-5.5 ${openIndex === index ? "h-fit md:min-h-[104px]" : "h-fit md:min-h-[104px]"}`}
				>
					<div className="w-full flex items-center justify-between">
						<span className="font-semibold text-sm md:text-2xl text-white">
							{item.question}
						</span>
						<button
							className="flex-shrink-0 w-[35px] md:w-[68px] h-[28.82px] md:h-[56px] rounded-[51.47px] md:rounded-[100px] py-[6.18px] md:py-3 px-[9.26px] md:px-4.5 bg-[#0000000D] flex items-center justify-center transition-all cursor-pointer border border-[#8080808C]"
							onClick={() => toggleItem(index)}
						>
							<img
								src={
									openIndex === index
										? "/assets/minus-white.svg"
										: "/assets/plus-white.svg"
								}
								alt=""
								className="w-[80%] md:w-full"
							/>
						</button>
					</div>
					<div
						className={`transition-all duration-300 ease-in-out ${
							openIndex === index
								? "max-h-48 opacity-100 block"
								: "max-h-0 opacity-0 hidden"
						} overflow-hidden mr-14`}
					>
						<div className="text-xs font-medium md:text-xl text-white">
							{item.answer}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
