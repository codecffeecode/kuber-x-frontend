'use client'
import React, { useState } from 'react';
import Input from './index';

const InputDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    search: '',
    phone: '',
    bio: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Simple validation
    if (field === 'email' && value && !value.includes('@')) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else if (field === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    
    if (field === 'password' && value && value.length < 6) {
      setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
    } else if (field === 'password') {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Input Component Demo</h1>
      
      {/* Basic Inputs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={!!errors.email}
            errorMessage={errors.email}
            required
          />
        </div>
      </div>

      {/* Variants */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Default Variant"
            placeholder="Default input"
            variant="default"
          />
          <Input
            label="Outline Variant"
            placeholder="Outline input"
            variant="outline"
          />
          <Input
            label="Filled Variant"
            placeholder="Filled input"
            variant="filled"
          />
          <Input
            label="Unstyled Variant"
            placeholder="Unstyled input"
            variant="unstyled"
            className="border-b border-gray-300 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Small Size"
            placeholder="Small input"
            size="sm"
          />
          <Input
            label="Medium Size (Default)"
            placeholder="Medium input"
            size="md"
          />
          <Input
            label="Large Size"
            placeholder="Large input"
            size="lg"
          />
          <Input
            label="Extra Large Size"
            placeholder="Extra large input"
            size="xl"
          />
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">With Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Search"
            placeholder="Search..."
            leftIcon={<span>🔍</span>}
            value={formData.search}
            onChange={(e) => handleInputChange('search', e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            leftIcon={<span>📧</span>}
            rightIcon={<span>✓</span>}
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Enter phone number"
            leftIcon={<span>📞</span>}
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            leftIcon={<span>🔒</span>}
            rightIcon={<span>👁️</span>}
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            error={!!errors.password}
            errorMessage={errors.password}
          />
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Normal Input"
            placeholder="Normal state"
          />
          <Input
            label="Disabled Input"
            placeholder="Disabled state"
            disabled
          />
          <Input
            label="Error Input"
            placeholder="Error state"
            error
            errorMessage="This field has an error"
          />
          <Input
            label="With Helper Text"
            placeholder="With helper text"
            helperText="This is some helpful text below the input"
          />
        </div>
      </div>

      {/* Full Width */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Full Width</h2>
        <div className="space-y-2">
          <Input
            label="Full Width Input"
            placeholder="This input takes full width"
            fullWidth
          />
          <Input
            label="Full Width with Icon"
            placeholder="Full width with left icon"
            leftIcon={<span>🔍</span>}
            fullWidth
          />
        </div>
      </div>

      {/* Different Types */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Input Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Text Input"
            type="text"
            placeholder="Text input"
          />
          <Input
            label="Email Input"
            type="email"
            placeholder="Email input"
          />
          <Input
            label="Password Input"
            type="password"
            placeholder="Password input"
          />
          <Input
            label="Number Input"
            type="number"
            placeholder="Number input"
          />
          <Input
            label="Date Input"
            type="date"
          />
          <Input
            label="Time Input"
            type="time"
          />
          <Input
            label="URL Input"
            type="url"
            placeholder="https://example.com"
          />
          <Input
            label="Tel Input"
            type="tel"
            placeholder="Phone number"
          />
        </div>
      </div>

      {/* Form Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Form Example</h2>
        <form className="space-y-4 p-6 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="Enter first name"
              required
            />
            <Input
              label="Last Name"
              placeholder="Enter last name"
              required
            />
          </div>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            leftIcon={<span>📧</span>}
            required
            fullWidth
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            leftIcon={<span>🔒</span>}
            required
            fullWidth
            helperText="Password must be at least 8 characters long"
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit Form
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputDemo; 