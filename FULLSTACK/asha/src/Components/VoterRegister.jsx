import { useState } from "react";
import "../CSS/VoterRegister.css"; // Import CSS file

const VoterRegister = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      age: "",
      voterId: "",
      address: "",
      photo: null,
    });
  
    const [preview, setPreview] = useState(null);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({ ...formData, photo: file });
        setPreview(URL.createObjectURL(file));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Voter Registered Successfully!");
      console.log(formData);
    };
  
    return (
      <div className="register-container">
        <div className="register-box">
          <h2>Voter Registration</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
  
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
  
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required min="18" />
  
            <input type="text" name="voterId" value={formData.voterId} onChange={handleChange} placeholder="Voter ID" required />
  
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required></textarea>
  
            <label className="file-label">Upload Photo</label>
            <input type="file" name="photo" accept="image/*" onChange={handleFileChange} required />
  
            {/* Image Preview */}
            {preview && <img src={preview} alt="Preview" className="preview-img" />}
  
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default VoterRegister;