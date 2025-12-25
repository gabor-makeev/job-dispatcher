import DndMonsterJob from "./components/DndMonsterJob";
import WeatherJob from "./components/WeatherJob";
import { dndMonster } from "@/pages/welcome";

export default function Jobs({ dndMonsters }: { dndMonsters: dndMonster[] }) {
	return (
		<div className="flex gap-3 flex-wrap">
			<WeatherJob />
			<DndMonsterJob dndMonsters={dndMonsters} />
		</div>
	)
}