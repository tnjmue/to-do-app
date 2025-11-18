import { useState } from 'react'
import tasksData from './assets/tasks.json' 
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import NotFound from './pages/NotFound'
import TaskDetails from './pages/TaskDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    };

  return (
    <>
      <div className="app-container">
        
          <Navbar />
           <Routes>
            <Route path="/"  element={<Dashboard tasks={tasks} handleDelete={handleDelete} />} />
            <Route path="/about" element={<About />} />
            <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        
          <Footer />
        
      </div>

       
     
    </>
  )
}

export default App
