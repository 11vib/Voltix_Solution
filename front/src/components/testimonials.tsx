import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTestimonials } from "../services/api";

interface ITestimonial {
    _id:string;
  testimonial_author: string;
  testimonial_content: string;
  created_at: Date;
  created_by: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  useEffect(() => {
      fetchTestimonials()
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the testimonials:", error);
      });
  }, []);

  return(
    <div className="container">
        <h1>Testimonials</h1>
        <div className="card-deck">
            {testimonials.map((entry)=>(
                <div className="card" key={entry._id}>
                    <div className="card-body">
                        <h5 className="card-title">{entry.testimonial_author}</h5>
                        <p className="card-text">{entry.testimonial_content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonials;