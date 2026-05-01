
import { ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export interface BattleCardProps {
    key?: number | string;
    id: number;
    matchTitle: string;
    team1: {
        name: string;
        short: string;
        logo: string;
    };
    team2: {
        name: string;
        short: string;
        logo: string;
    };
    min: number;
    max: number;
    date: string;
    minSelect: number;
}

export const BattleCard = ({ matchTitle, team1, team2, min, max, date, minSelect }: BattleCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden"
        >
            {/* Card Header */}
            <div className="px-4 py-2 flex justify-between items-center border-bottom border-gray-100 bg-white">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-tight">{matchTitle}</span>
                <button className="flex items-center gap-1 text-[10px] font-bold text-gray-700 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm hover:bg-gray-50 transition-colors uppercase">
                    <ExternalLink size={10} strokeWidth={3} />
                    View
                </button>
            </div>

            <div className="h-[1px] bg-gray-200 w-full" />

            {/* Card Body */}
            <div className="p-4 flex justify-between items-center relative gap-4">
                {/* Team 1 */}
                <div className="flex flex-col items-center flex-1">
                    <img src={team1.logo} alt={team1.name} className="w-16 h-16 object-contain mb-2" referrerPolicy="no-referrer" />
                    <div className="text-center">
                        <span className="hidden md:block text-[10px] text-gray-400 uppercase font-medium">{team1.name}</span>
                    </div>
                </div>

                {/* VS Center */}
                <div className="flex flex-col items-center justify-center -mt-4">
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-black text-gray-800 leading-none">{team1.short}</span>
                        <span className="text-2xl font-black text-red-500 italic drop-shadow-sm leading-none">VS</span>
                        <span className="text-2xl font-black text-gray-800 leading-none">{team2.short}</span>
                    </div>
                    <div className="flex justify-between w-full mt-1">
                        <span className="md:hidden text-[8px] text-gray-400 uppercase font-medium">{team1.short}</span>
                        <span className="md:hidden text-[8px] text-gray-400 uppercase font-medium">{team2.short}</span>
                    </div>
                    <div className="hidden md:flex justify-between w-[200%] absolute top-[70%] left-1/2 -translate-x-1/2 text-center pointer-events-none">
                        <div className="flex-1 text-[8px] text-gray-400 uppercase px-4">{team1.name}</div>
                        <div className="flex-1 text-[8px] text-gray-400 uppercase px-4">{team2.name}</div>
                    </div>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center flex-1">
                    <img src={team2.logo} alt={team2.name} className="w-16 h-16 object-contain mb-2" referrerPolicy="no-referrer" />
                    <div className="text-center">
                        {/* Full name hidden on small, shown in center logic above or here */}
                    </div>
                </div>
            </div>

            {/* Card Footer */}
            <div className="bg-[#f2f2ef] px-4 py-1.5 flex justify-between items-center text-[10px] font-bold text-gray-700">
                <div>
                    Min {min.toFixed(1)} | Max {max.toFixed(1)}
                </div>
                <div className="text-red-600">
                    {date}
                </div>
                <div>
                    Min Select : {minSelect}
                </div>
            </div>
        </motion.div>
    );
};

function PlayerBattle() {
    const battles: BattleCardProps[] = [
        {
            id: 1,
            matchTitle: "Rajasthan Royals V Delhi Capitals",
            team1: {
                name: "RAJASTHAN ROYALS",
                short: "RR",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg",
            },
            team2: {
                name: "DELHI CAPITALS",
                short: "DC",
                logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/Delhi_Capitals_Logo.svg",
            },
            min: 5.0,
            max: 30000.0,
            date: "01/05/2026 19:30:00",
            minSelect: 4,
        },
        {
            id: 2,
            matchTitle: "Rajasthan Royals V Delhi Capitals",
            team1: {
                name: "RAJASTHAN ROYALS",
                short: "RR",
                logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg",
            },
            team2: {
                name: "DELHI CAPITALS",
                short: "DC",
                logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/Delhi_Capitals_Logo.svg",
            },
            min: 5.0,
            max: 3000.0,
            date: "01/05/2026 19:30:00",
            minSelect: 4,
        },
    ];

    const handleExportData = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(battles, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "player_battles.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <div className="border-stroke flex h-[600px] flex-col rounded border bg-white shadow-sm">
            {/* Player Battle Header */}
            <div className="bg-[#2a3a4a] px-4 py-2 shadow-md flex justify-between items-center">
                <h1 className="  text-white text-sm font-bold tracking-wide">Player Battle</h1>
                <button
                    onClick={handleExportData}
                    className="flex items-center gap-1.5 text-[10px] font-bold text-white bg-green-600/20 border border-green-500/30 px-3 py-1 rounded hover:bg-green-600/40 transition-all cursor-pointer"
                >
                    <Download size={12} />
                    EXPORT DATA
                </button>
            </div>

            {/* Tabs Section */}
            <div className="mx-4 mt-4 bg-[#e6e6e6]/60 rounded-t-lg overflow-hidden border-b border-gray-200">
                <div className="flex">
                    <button className="bg-white px-6 py-2 text-[11px] font-bold text-gray-800 border-t-2 border-red-500 relative">
                        OPEN
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-500 opacity-20" />
                    </button>
                    <button className="px-6 py-2 text-[11px] font-bold text-gray-600 hover:text-gray-800 transition-colors">
                        SETTLE
                    </button>
                </div>
            </div>

            {/* Battles Grid */}
            <div className="p-6 bg-white mx-4 shadow-sm min-h-[70vh]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl">
                    {battles.map((battle) => (
                        <BattleCard
                            key={battle.id}
                            id={battle.id}
                            matchTitle={battle.matchTitle}
                            team1={battle.team1}
                            team2={battle.team2}
                            min={battle.min}
                            max={battle.max}
                            date={battle.date}
                            minSelect={battle.minSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlayerBattle;