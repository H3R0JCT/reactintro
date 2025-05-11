import Sidebar from "./sidebar.tsx"
import Toolbar from "./toolbar.tsx"
import TaskView from "./taskdisplay.tsx"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return ( 
    <div>
      <div>
        <Toolbar /> 
      </div>
      <div className="d-flex">
        <Sidebar />
        <TaskView />
      </div>
    </div>
  )
} 