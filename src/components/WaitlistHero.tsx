import React, { useState } from "react";

interface WaitlistHeroProps {
	onSubmit?: (email: string) => void;
}

export const WaitlistHero: React.FC<WaitlistHeroProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email && onSubmit) {
			onSubmit(email);
		}
	};

	return (
		<div className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
			{/* Top left envelope flap */}
			<svg
				className="absolute top-0 left-0 w-64 h-64"
				viewBox="0 0 200 200"
			>
				<polygon
					points="0,0 200,0 0,200"
					fill="#e8c4b8"
					opacity="0.7"
				/>
			</svg>

			{/* Top right envelope flap */}
			<svg
				className="absolute top-0 right-0 w-64 h-64"
				viewBox="0 0 200 200"
			>
				<polygon
					points="0,0 200,0 200,200"
					fill="#e8c4b8"
					opacity="0.7"
				/>
			</svg>

			{/* Bottom left envelope flap */}
			<svg
				className="absolute bottom-16 left-0 w-64 h-64"
				viewBox="0 0 200 200"
			>
				<polygon
					points="0,0 0,200 200,200"
					fill="#e8c4b8"
					opacity="0.7"
				/>
			</svg>

			{/* Bottom right envelope flap */}
			<svg
				className="absolute bottom-16 right-0 w-64 h-64"
				viewBox="0 0 200 200"
			>
				<polygon
					points="200,0 0,200 200,200"
					fill="#e8c4b8"
					opacity="0.7"
				/>
			</svg>

			{/* Main card */}
			<div className="relative z-10 w-full max-w-5xl">
				<div className="bg-white rounded-[3rem] shadow-xl p-12 md:p-20">
					<h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-center mb-6 leading-tight">
						Be the first to
						<br />
						experience Nectar
					</h1>

					<p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
						Join like-minded businesses waiting to unlock growth
						with Nectar
					</p>

					<form
						onSubmit={handleSubmit}
						className="flex gap-0 max-w-2xl mx-auto shadow-md rounded-full"
					>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							required
							className="flex-1 px-8 py-4 rounded-l-full bg-gray-50 text-gray-800 text-base focus:outline-none border border-gray-200"
						/>
						<button
							type="submit"
							className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-r-full transition-colors text-base whitespace-nowrap"
						>
							Join Waitlist
						</button>
					</form>
				</div>
			</div>

			{/* Bottom brown bar */}
			<div className="absolute bottom-0 left-0 right-0 h-16 bg-orange-900" />
		</div>
	);
};
