import { BrowserRouter, Routes, Route } from "react-router-dom";

import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import CreateUser from "./pages/CreateUser";
import ViewUser from "./pages/ViewUser";
import EditUser from "./pages/EditUser";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from './pages/TeacherDashboard'; 
import GeneratedQuestions from "./pages/GeneratedQuestions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperAdminDashboard />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/view-user/:id" element={<ViewUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/generated-questions/:docId" element={<GeneratedQuestions />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;