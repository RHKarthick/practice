import React, {useState} from 'react';
import axios from "axios";

export default function FormComp(props) {
    const [formData, setFormData] = useState({
        to: '',
        subject: '',
        content: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        submitForm()
      };
    const submitForm = async () =>{
      // axios.post("http://localhost:5000/api/products",formData)
      axios.post("http://localhost:5000/api/send-mail",formData)
    }
    const updateForm = async () =>{
      axios.put("http://localhost:5000/api/products/:id",formData)
    }
    const deleteForm = async () =>{
      axios.delete("http://localhost:5000/api/products/:id",formData)
    }
    return (
        <div>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              // required
            />
          </div>
          {/* <div>
            <label>price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>image:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div> */}
          {/* <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

