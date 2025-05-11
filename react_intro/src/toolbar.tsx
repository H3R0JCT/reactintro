export default function Toolbar() {
    // This function handles the button click event and throws an alert
    const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (  
    // This function returns a toolbar with three buttons
    <div className="toolbar align-items-center d-flex justify-content-center border-bottom border-2 border-dark p-1 bg-secondary bg-gradient">
      <button className="btn btn-primary m-3" onClick={handleButtonClick}>Add Task</button>
      <button className="btn btn-danger m-3" onClick={handleButtonClick}>Delete Task</button>
      <button className="btn btn-warning m-3" onClick={handleButtonClick}>Edit Task</button>
    </div>
  );
}