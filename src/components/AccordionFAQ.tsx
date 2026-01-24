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
		<div className="p-6 flex flex-col gap-[27px]">
			{faqData.map((item, index) => (
				<div
					key={index}
					className={`bg-[#2C0C00] border border-[#8080808C] rounded-3xl overflow-hidden backdrop-blur-sm p-6 flex flex-col gap-5.5 ${openIndex === index ? "min-h-[104px]" : "h-[104px]"}`}
				>
					<div className="w-full flex items-center justify-between">
						<span className="font-semibold text-xl text-white">
							{item.question}
						</span>
						<button
							className="flex-shrink-0 w-[68px] h-[56px] rounded-[100px] py-3 px-4.5 bg-[#0000000D] flex items-center justify-center transition-all cursor-pointer border border-[#8080808C]"
							onClick={() => toggleItem(index)}
						>
							<img
								src={
									openIndex === index
										? "/assets/minus-white.svg"
										: "/assets/plus-white.svg"
								}
								alt=""
							/>
						</button>
					</div>
					<div
						className={`transition-all duration-300 ease-in-out ${
							openIndex === index
								? "max-h-48 opacity-100"
								: "max-h-0 opacity-0"
						} overflow-hidden`}
					>
						<div className="font-medium text-xl text-white">
							{item.answer}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
