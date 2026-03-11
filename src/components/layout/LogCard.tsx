interface LogCardProps {
	id: number
	date: Date
	title: string
	description: string
	tags: string[]
}


const LogCard: React.FC<LogCardProps> = ({ id, date, title, description, tags }) => {
	return (
		
		<div key={id} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#CEE8F2] transition-all flex flex-col justify-between">
			<div>
				<div className="flex justify-between items-start mb-3">
					<span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{new Date(date).toLocaleDateString("pt-BR")}</span>
					<div className="flex gap-1">
						{tags.slice(0, 1).map(t => (
							<div key={t} className="w-2 h-2 rounded-full bg-[#0487D9]"></div>
						))}
					</div>
				</div>
				<h3 className="text-lg font-bold text-[#022859] mb-2 transition-colors">{title}</h3>
				<p className="text-gray-500 text-sm leading-relaxed mb-6">
					{description}
				</p>
			</div>

			<div className="flex flex-wrap gap-2">
				{tags.map(t => (
					<span key={t} className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded border border-gray-100">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}

export default LogCard;