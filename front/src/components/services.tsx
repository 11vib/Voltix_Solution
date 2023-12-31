import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchServices} from "../services/api";

interface IService {
  _id: string;
  service_title: string;
  service_description: string;
  service_category: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    fetchServices()
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Services:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Services</h1>
      <div className="row">
        {services.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4">
              <img src={entry.image_url} className="card-img-top" alt={entry.service_title} />
              <h5 className="card-header">{entry.service_category}</h5>
              <div className="card-body">
                <h5 className="card-title">{entry.service_title}</h5>
                <p className="card-text">{entry.service_description}</p>
                <Link to={`/services/id?id=${entry._id}`} className="btn btn-primary">
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

export default Services;