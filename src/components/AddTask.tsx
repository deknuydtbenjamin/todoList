import type { AddTaskProps } from "@/types";

export default function AddTask({
	task,
	setTask,
	handleCreateTask,
}: AddTaskProps) {
	return (
		<form>
			<label>
				<input
					type="text"
					placeholder="Nouvelle tâche"
					onChange={(e) => setTask(e.target.value)}
					value={task}
				/>
			</label>
			<button type="button" onClick={() => handleCreateTask}>
				Ajouter
			</button>
		</form>
	);
}
