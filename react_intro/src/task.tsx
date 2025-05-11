export default function TaskButton({tasks}: {tasks: {id: number, name: string}}) {

    // This function handles the button click event
    const handleButtonClick = () => {
        alert("Task button clicked!");
    };
// This funciton returns a button for each task
// The button displays the task name and triggers the handleButtonClick function when clicked
  return (
    <div className="task-button">
      <button className="btn btn-primary" onClick={handleButtonClick}>{tasks.name}</button>
    </div>
  );
}   

