import { useMemo, useState } from "react";
import { DynamicFilledWhiteBtn } from "./styled";
import styled from "@emotion/styled";
import { formatAmount } from "../utils/amount";

interface IContactUsFormData {
	businessName: string;
	description: string;
	amount: string;
	email: string;
}

const DEFAULT_FORM_DATA: IContactUsFormData = {
	businessName: "",
	description: "",
	amount: "",
	email: "",
};
export const ContactForm = () => {
	const [formData, setFormData] =
		useState<IContactUsFormData>(DEFAULT_FORM_DATA);

	const isDisabled = useMemo(() => {
		return (
			!formData.businessName ||
			!formData.description ||
			!formData.amount ||
			!formData.email
		);
	}, [formData]);

	const handleInputChange = (
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = evt.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = evt.target;
		const formattedAmt = formatAmount(value);
		if (formattedAmt === "0") {
			return;
		}
		setFormData({
			...formData,
			amount: formattedAmt,
		});
	};

	return (
		<div className="w-full flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<InputWrapper>
					<InputLabel htmlFor="businessName">
						What is the name of your business?
					</InputLabel>
					<Input
						type="text"
						id="businessName"
						name="businessName"
						placeholder="Enter your business name"
						onChange={handleInputChange}
						value={formData.businessName}
					/>
				</InputWrapper>
				<InputWrapper>
					<InputLabel htmlFor="description">
						What does your business do?
					</InputLabel>
					<TextArea
						id="description"
						name="description"
						placeholder="Provide a short description of your business"
						onChange={handleInputChange}
						value={formData.description}
					/>
				</InputWrapper>
				<InputWrapper>
					<InputLabel htmlFor="amount">
						How much do you typically need in loans?
					</InputLabel>
					<Input
						type="text"
						id="amount"
						name="amount"
						placeholder="₦0.00"
						onChange={handleAmountChange}
						value={formData.amount}
					/>
				</InputWrapper>
				<InputWrapper>
					<InputLabel htmlFor="email">
						What is your email address?
					</InputLabel>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email address"
						onChange={handleInputChange}
						value={formData.email}
					/>
				</InputWrapper>
			</div>
			<div className="w-full">
				<DynamicFilledWhiteBtn
					disabled={isDisabled}
					className="w-full"
				>
					Submit
				</DynamicFilledWhiteBtn>
			</div>
		</div>
	);
};

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
`;

const InputLabel = styled.label`
	font-size: 1rem;
	line-height: 1.375rem;
	color: #ffffff;
	font-weight: 500;
`;

const Input = styled.input`
	height: 3.6875rem;
	padding: 0.25rem 0.625rem;
	background-color: #ffffff26;
	font-weight: 500;
	font-size: 1rem;
	color: #ffffff;
	border-radius: 0.75rem;
	outline-style: none;

	&:placeholder {
		color: #ffffff80;
	}
`;

const TextArea = styled.textarea`
	background-color: #ffffff26;
	font-weight: 500;
	font-size: 1rem;
	color: #ffffff;
	height: 8.375rem;
	border-radius: 0.75rem;
	resize: none;
	padding: 1rem 0.625rem;
	outline-style: none;

	&:placeholder {
		color: #ffffff80;
	}
`;
