import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchProjects } from "../services/api";

interface IProject {
  _id: string;
  project_title: string;
  project_description: string;
  project_category: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    fetchProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Projects:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="row">
        {projects.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4">
              <img src={entry.image_url} className="card-img-top" alt={entry.project_title} />
              <h5 className="card-header">{entry.project_category}</h5>
              <div className="card-body">
                <h5 className="card-title">{entry.project_title}</h5>
                <p className="card-text">{entry.project_description}</p>
                <Link to={`/projects/id?id=${entry._id}`} className="btn btn-primary">
                  More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
