import TaskButton from "./task"; 

// This is an array of task objects for testing purposes
// In a real application, this data would likely come from a database or API
const testTasks = [
  { id: 1, name: "Plan Meals" },
  { id: 2, name: "Make Bed" },
    { id: 3, name: "Do Laundry" },
    { id: 4, name: "Clean Kitchen" },
    { id: 5, name: "Grocery Shopping" },
    { id: 6, name: "Exercise" },
    { id: 7, name: "Read Book" },
    { id: 8, name: "Write Journal" },
    { id: 9, name: "Meditate" },
    { id: 10, name: "Call Mom" }

];

// The Sidebar component renders a list of task buttons
// Each button corresponds to a task in the testTasks array
export default function Sidebar() {
  return (
    <div className="sidebar border-end border-2 border-dark p-1 bg-secondary bg-gradient">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {testTasks.map((task => <li key={task.id} className="m-1"><TaskButton tasks={task}/></li>))}
      </ul>
    </div>
  );
}