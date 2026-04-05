"use client";

import { useEffect, useState } from "react";

export const BirthdayCounter = () => {
	const SEBASTIAN_BIRTHDAY = new Date("05 Mar 2026 11:41:12 GMT")
	const [timeDiff, setTimeDiff] = useState<number | null>(null);

	useEffect(() => {
		getDiff();
	}, []);

	const getDiff = () => {
		const miliDiff: number = (new Date()).getTime() - SEBASTIAN_BIRTHDAY.getTime();
		setTimeDiff(miliDiff);
	}

	return (
		<div className="w-full flex flex-col gap-6 justify-center items-center">
			<div className="flex flex-wrap justify-center gap-4">
				{timeDiff && <>
					<div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center min-w-[100px]">
						<div className="text-3xl font-bold text-amber-700">
							{Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))}
						</div>
						<div className="text-sm text-amber-600 font-medium">years</div>
					</div>
					<div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center min-w-[100px]">
						<div className="text-3xl font-bold text-orange-700">
							{Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 365)}
						</div>
						<div className="text-sm text-orange-600 font-medium">days</div>
					</div>
					<div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center min-w-[100px]">
						<div className="text-3xl font-bold text-red-700">
							{Math.floor((timeDiff / (1000 * 60 * 60)) % 24)}
						</div>
						<div className="text-sm text-red-600 font-medium">hours</div>
					</div>
					<div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center min-w-[100px]">
						<div className="text-3xl font-bold text-rose-700">
							{Math.floor((timeDiff / (1000 * 60)) % 60)}
						</div>
						<div className="text-sm text-rose-600 font-medium">minutes</div>
					</div>
					<div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl px-6 py-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center min-w-[100px]">
						<div className="text-3xl font-bold text-pink-700">
							{Math.floor((timeDiff / 1000) % 60)}
						</div>
						<div className="text-sm text-pink-600 font-medium">seconds</div>
					</div>
				</>}
			</div>
			<button
				className="px-8 py-3 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-amber-500 hover:to-orange-500 hover:scale-105 transition-all duration-300"
				onClick={() => getDiff()}
			>
				How old is he now?
			</button>
		</div>
	);
}
