export const formatAmount = (amount: string): string => {
	// Remove non-numeric characters except for the decimal point
	const cleanedValue = amount.replace(/[^\d.]/g, "");
	const [integerPart, decimalPart] = cleanedValue.split(".");
	// Remove leading zeros from integer part, or use "0" if empty
	const cleanedInteger = integerPart.replace(/^0+/, "") || "";
	// Add thousand separators
	const formattedInteger = cleanedInteger.replace(
		/\B(?=(\d{3})+(?!\d))/g,
		","
	);
	let formattedValue = formattedInteger;
	if (decimalPart !== undefined) {
		formattedValue += "." + decimalPart.slice(0, 2);
	}
	return formattedValue ? `₦${formattedValue}` : formattedValue;
};

export const convertFormattedAmtToNum = (amount: string): number => {
	return Number(amount?.replace("₦", "")?.split(",").join(""));
};
