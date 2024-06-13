import { useState } from 'react';
import './AddPartner.css';

const AddPartner = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    logoUrl: '',
    description: '',
    isActive: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/partners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Partner created!');
        setFormData({
          id: '',
          name: '',
          logoUrl: '',
          description: '',
          isActive: false,
        });
        window.location.reload();
      } else {
        alert('Failed to create partner');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Issue creating partner.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="partner-form">
      <h1 className="form-title">Add New Partner</h1>
      <label>
        ID:
        <input type="number" name="id" value={formData.id} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        URL for logo:
        <input type="url" name="logoUrl" value={formData.logoUrl} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <br />
      <label className="checkbox-label">
        Is Active:
        <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Create Partner</button>
    </form>
  );
};

export default AddPartner;
