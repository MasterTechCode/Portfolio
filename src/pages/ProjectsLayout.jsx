import { Outlet } from 'react-router-dom';

function ProjectsLayout() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "30px 0" }}>My Projects</h1>
      <Outlet />   {/* This will show Projects or ProjectDetail */}
    </div>
  );
}

export default ProjectsLayout;