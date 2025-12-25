import { dndMonster } from "@/pages/welcome";
import { Form } from "@inertiajs/react";

export default function({ dndMonsters }: { dndMonsters: dndMonster[] }) {
  	return (
		<div className="border rounded-2xl p-4">
			<span className="font-bold">👾 Get DnD Monster info</span>
			<Form action="/dnd-monster" method="post" resetOnSuccess className="flex flex-col mt-2">
				<label htmlFor="monster">Monster</label>
				<select name="monster" id="monster" required className="border p-1">
					<option value="">Select a DnD monster</option>
					{dndMonsters.map((monster) => (
						<option value={monster.index} key={monster.index}>{ monster.name }</option>
					))}
				</select>
				<button type="submit" className='cursor-pointer mt-1 self-center duration-150 bg-gray-200 hover:bg-gray-300 p-0.5 rounded'>Submit</button>
			</Form>
		</div>
	)
}