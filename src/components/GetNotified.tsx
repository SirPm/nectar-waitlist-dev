import styled from "@emotion/styled";
import { useCallback, useMemo, useState } from "react";
import ReactSelect, {
	components,
	type MultiValue,
	type OptionProps,
} from "react-select";
import { REGEX_VALUES } from "../utils/regex";
import { formatAmount } from "../utils/amount";
import { FilledOrangeBtn } from "./styled";
import { ContactFormSuccessView } from "./ContactFormSuccessView";
import { SUBSTACK_LINK } from "../constants";
// import { WaitlistHero } from "./WaitlistHero";

interface FeatureOption {
	value: string;
	label: string;
}

const featureOptions: FeatureOption[] = [
	{ value: "Business Loans", label: "Business Loans" },
	{
		value: "Interest on Account Balance",
		label: "Interest on Account Balance",
	},
	{ value: "Bookkeeping", label: "Bookkeeping" },
];

const CheckboxOption = (props: OptionProps<FeatureOption, true>) => {
	return (
		<components.Option {...props}>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<input
					type="checkbox"
					checked={props.isSelected}
					onChange={() => null}
					style={{ cursor: "pointer" }}
				/>
				<span>{props.label}</span>
			</div>
		</components.Option>
	);
};

interface INotifyUsFormData {
	businessName: string;
	description: string;
	amount: string;
	email: string;
	preferredFeatures: string[];
}

const DEFAULT_FORM_DATA: INotifyUsFormData = {
	businessName: "",
	description: "",
	amount: "",
	email: "",
	preferredFeatures: [],
};

export const GetNotified = () => {
	const [formData, setFormData] =
		useState<INotifyUsFormData>(DEFAULT_FORM_DATA);
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const isDisabled = useMemo(() => {
		return (
			formData.businessName.length < 3 ||
			formData.description.length < 5 ||
			!formData.amount ||
			!REGEX_VALUES.EMAIL.test(formData.email)
		);
	}, [formData]);

	const handleInputChange = (
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

	const handleSubmit = useCallback(async () => {
		setIsLoading(true);
		const formdata = new FormData();
		formdata.append("Business Name", formData.businessName);
		formdata.append("Nature of Business", formData.description);
		formdata.append("Average Loan Amount", formData.amount);
		formdata.append("Email Address", formData.email);
		formdata.append("Feature", formData.preferredFeatures.join(", "));

		const requestOptions: RequestInit = {
			method: "POST",
			body: formdata,
			redirect: "follow" as RequestRedirect,
		};

		try {
			const resp = await fetch(
				"https://script.google.com/macros/s/AKfycbzLv1Dv1e_C451jguocS05MtLt4YkfzfSNZ5hZwsWr-IAcH0gG1_tbr_rrc6HH6_DoHbA/exec",
				requestOptions,
			);
			await resp.json();

			setIsLoading(false);
			setFormData(DEFAULT_FORM_DATA);
			setIsSubmitted(true);
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	}, [formData]);

	return (
		<div className="mt-[125px] flex flex-col gap-[145px]">
			<div className="flex flex-col gap-[39px] md:mx-[122px] mx-10">
				<div className="flex flex-col gap-[25px]">
					<h3 className="font-semibold md:text-7xl text-5xl text-[#E65713] text-center">
						Get Notified When <br className="hidden md:block" /> We
						Go Live
					</h3>
					<p className="md:text-xl text-base leading-6 text-[#252525] text-center">
						Join our waitlist for exclusive launch access&nbsp;
						<br className="hidden md:block" />
						and real-time updates.
					</p>
				</div>
				<div className="border border-[#E7E7E7] rounded-3xl w-full max-w-[528px] p-6 gap-8 flex flex-col items-center mx-auto scroll-mt-14" id="waitListForm">
					{isSubmitted ? (
						<ContactFormSuccessView />
					) : (
						<>
							<div className="flex flex-col gap-6 w-full">
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
										disabled={isLoading}
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
										disabled={isLoading}
									/>
								</InputWrapper>
								<SelectWrapper>
									<SelectLabel htmlFor="features">
										What feature are you looking forward to?
									</SelectLabel>
									<ReactSelect
										isMulti
										options={featureOptions}
										isDisabled={isLoading}
										value={featureOptions.filter((opt) =>
											formData.preferredFeatures.includes(
												opt.value,
											),
										)}
										onChange={(
											selected: MultiValue<FeatureOption>,
										) => {
											setFormData({
												...formData,
												preferredFeatures: selected.map(
													(opt) => opt.value,
												),
											});
										}}
										placeholder="Select your preferred features"
										closeMenuOnSelect={false}
										hideSelectedOptions={false}
										components={{ Option: CheckboxOption }}
										styles={{
											control: (base) => ({
												...base,
												minHeight: "60px",
												backgroundColor: "#fafafa",
												border: "1px solid #e6571314",
												borderRadius: "20px",
												padding: "0 8px",
												boxShadow: "none",
												"&:hover": {
													borderColor: "#e6571314",
												},
											}),
											placeholder: (base) => ({
												...base,
												color: "#8e8e93",
												fontWeight: 500,
											}),
											multiValue: (base) => ({
												...base,
												backgroundColor: "#E65713",
												borderRadius: "12px",
											}),
											multiValueLabel: (base) => ({
												...base,
												color: "#fff",
												fontWeight: 500,
											}),
											multiValueRemove: (base) => ({
												...base,
												color: "#fff",
												"&:hover": {
													backgroundColor: "#c44a0f",
													color: "#fff",
												},
											}),
											option: (base, state) => ({
												...base,
												backgroundColor: state.isFocused
													? "#f5f5f5"
													: "#fff",
												color: "#000",
												cursor: "pointer",
											}),
										}}
									/>
								</SelectWrapper>
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
										disabled={isLoading}
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
										disabled={isLoading}
									/>
								</InputWrapper>
							</div>
							<FilledOrangeBtn
								disabled={isLoading || isDisabled}
								onClick={handleSubmit}
								style={{
									padding: "12px 20px",
									borderRadius: "17px",
									height: "48px",
									boxShadow:
										"0px 4px 4px 0px #FFFFFF40 inset",
									width: "100%",
								}}
								className={`${isDisabled ? "cursor-not-allowed! opacity-30" : ""}`}
							>
								{isLoading ? "Loading..." : "Join Waitlist"}
							</FilledOrangeBtn>
						</>
					)}
				</div>
			</div>
			<div className="relative envelope-section">
				<img
					src="/assets/envelope.svg"
					alt=""
					className="w-full max-w-full xl:max-w-[80%] mx-auto"
				/>
				<div className="flex flex-col gap-[48.34px] w-full max-w-[89%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 envelope-content">
					<div className="flex flex-col gap-[32.23px] envelope-content-text">
						<h6 className="font-semibold xl:text-7xl md:text-5xl text-2xl text-[#252525] text-center">
							Be the first to <br /> experience Nectar
						</h6>
						<p className="xl:text-2xl md:text-xl text-base text-[#535353] text-center font-medium">
							Join like-minded businesses waiting to unlock growth
							with <br /> Nectar
						</p>
					</div>
					<div className="flex items-center justify-center">
						<a
							href={SUBSTACK_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FilledOrangeBtn
								className="flex items-center rounded-2xl! whitespace-nowrap md:h-12! h-fit!"
								style={{ padding: "12px 20px" }}
							>
								Subscribe
							</FilledOrangeBtn>
						</a>
					</div>
					{/* <div
						className="relative bg-white md:h-[52px] h-fit rounded-[18px] flex items-center justify-between py-1 pr-1 pl-3 border border-[#E6571314] w-full lg:max-w-[50%] max-w-[70%] mx-auto"
						style={{
							backdropFilter: "blur(40.283843994140625px)",
							boxShadow:
								"2.01px 2.01px 12.09px 0px #0000001F inset",
						}}
					>
						<input
							type="email"
							className="text-black placeholder:text-[#535353] w-[calc(100%_-_170px)] outline-none bg-transparent"
							placeholder="Enter your email"
						/>
						<FilledOrangeBtn
							className="flex items-center rounded-2xl! whitespace-nowrap md:h-12! h-fit!"
							style={{ padding: "12px 20px" }}
						>
							Subscribe
						</FilledOrangeBtn>
					</div> */}
				</div>
			</div>
		</div>
	);
};

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
`;

const InputLabel = styled.label`
	font-size: 1rem;
	line-height: 1.375rem;
	color: #000000;
	font-weight: 500;
`;

const Input = styled.input`
	height: 60px;
	padding: 4px;
	padding-left: 12px;
	background-color: #fafafa;
	border: 1px solid #e6571314;
	font-weight: 500;
	font-size: 1rem;
	color: #000000;
	border-radius: 20px;
	outline-style: none;

	&:placeholder {
		color: #8e8e93;
	}
`;

const TextArea = styled.textarea`
	background-color: #fafafa;
	font-weight: 500;
	font-size: 1rem;
	color: #000000;
	height: 143px;
	border-radius: 20px;
	resize: none;
	padding: 12px 4px 4px 12px;
	outline-style: none;

	&:placeholder {
		color: #8e8e93;
	}
`;

const SelectWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
`;

const SelectLabel = styled.label`
	font-size: 1rem;
	line-height: 1.375rem;
	color: #000000;
	font-weight: 500;
`;
