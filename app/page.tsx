import { BirthdayCounter } from "./components/birthday-counter";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100">
			<div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6">
				<div className="text-2xl md:text-3xl font-medium text-amber-800 tracking-wide">
					How old is Sebasti&#225;n Otto Rodr&#x00ED;guez?
				</div>
				<BirthdayCounter />
			</div>
		</div>
	);
}
