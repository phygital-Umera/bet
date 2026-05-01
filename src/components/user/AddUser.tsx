import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddUserProps {
  onClose?: () => void;
  onSuccess?: () => void;
}

export default function AddUser({ onClose, onSuccess }: AddUserProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    rate: '1',
    balance: '',
    exposureLimit: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.balance) {
      newErrors.balance = 'Balance is required';
    }
    if (!formData.exposureLimit) {
      newErrors.exposureLimit = 'Exposure limit is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Add your API call here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Call success callback
      if (onSuccess) {
        onSuccess();
      }
      
      // Close modal
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError: boolean = false) =>
    `w-full px-3 py-2 bg-[#E9ECEF] border rounded text-[#495057] placeholder:text-[#6C757D] focus:outline-none focus:ring-1 focus:ring-[#80BDFF] focus:border-[#80BDFF] transition-all ${
      hasError ? 'border-red-500' : 'border-[#CED4DA]'
    }`;
  
  const labelClasses = 'text-right font-bold text-[#343A40] text-sm md:text-base pr-4 whitespace-nowrap';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto w-full max-w-[600px] overflow-hidden rounded bg-white font-sans shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stroke bg-white px-6 py-4">
        <h2 className="text-2xl font-bold text-[#344767]">Add User</h2>
        <button
          onClick={onClose}
          className="text-[#344767] transition-colors hover:text-red-500"
        >
          <X size={24} />
        </button>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="space-y-4 p-8">
        <div className="grid grid-cols-[1fr_2fr] items-center gap-y-4">
          {/* User Name */}
          <label className={labelClasses}>
            User Name <span className="text-red-500">*</span>
          </label>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className={inputClasses(!!errors.username)}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          {/* Name */}
          <label className={labelClasses}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name (Optional)"
            className={inputClasses()}
            value={formData.name}
            onChange={handleChange}
          />

          {/* Rate */}
          <label className={labelClasses}>Rate</label>
          <input
            type="text"
            name="rate"
            className={inputClasses()}
            value={formData.rate}
            onChange={handleChange}
          />

          {/* Balance */}
          <label className={labelClasses}>
            Balance <span className="text-red-500">*</span>
          </label>
          <div>
            <input
              type="text"
              name="balance"
              placeholder="Enter Balance"
              className={inputClasses(!!errors.balance)}
              value={formData.balance}
              onChange={handleChange}
            />
            {errors.balance && (
              <p className="text-red-500 text-xs mt-1">{errors.balance}</p>
            )}
          </div>

          {/* Exposure Limit */}
          <label className={labelClasses}>
            Exposure Limit <span className="text-red-500">*</span>
          </label>
          <div>
            <input
              type="text"
              name="exposureLimit"
              placeholder="Enter Exposure Limit"
              className={inputClasses(!!errors.exposureLimit)}
              value={formData.exposureLimit}
              onChange={handleChange}
            />
            {errors.exposureLimit && (
              <p className="text-red-500 text-xs mt-1">{errors.exposureLimit}</p>
            )}
          </div>

          {/* Mobile Number */}
          <label className={labelClasses}>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            className={inputClasses()}
            value={formData.mobileNumber}
            onChange={handleChange}
          />

          {/* Password */}
          <label className={labelClasses}>
            Password <span className="text-red-500">*</span>
          </label>
          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                className={inputClasses(!!errors.password)}
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <label className={labelClasses}>
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="••••••••"
                className={inputClasses(!!errors.confirmPassword)}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        {/* Create Button */}
        <div className="mt-8 flex justify-center pb-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-gradient-to-b from-[#F2C94C] to-[#E2B72E] px-12 py-2.5 text-lg font-bold text-black shadow-md transition-all duration-200 hover:from-[#E2B72E] hover:to-[#D4A626] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating...' : 'Create'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}