import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { RainbowButton } from './magicui/rainbow-button';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    message: '',
    otherReason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const reasons = [
    'Sales & Pricing Questions',
    'Technical Support', 
    'Billing & Refunds',
    'Partnership Opportunities',
    'General Feedback',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.reason) {
      newErrors.reason = 'Please select a reason for contact';
    }
    
    if (formData.reason === 'Other' && !formData.otherReason.trim()) {
      newErrors.otherReason = 'Please specify your reason';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_email: formData.email,
        reason: formData.reason === 'Other' ? formData.otherReason : formData.reason,
        message: formData.message || 'No additional message provided',
        submitted_at: new Date().toLocaleString()
      };

      // You'll need to replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID  
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setFormData({ email: '', reason: '', message: '', otherReason: '' });
      }, 2000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
        animation: 'modalFadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(122, 33, 135, 0.1)',
          animation: 'modalSlideUp 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ 
            margin: 0, 
            color: '#7A2187', 
            fontSize: '1.25rem', 
            fontWeight: '600' 
          }}>
            Contact Us
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: '#9CA3AF',
              cursor: 'pointer',
              padding: '0.25rem',
              lineHeight: 1
            }}
          >
            ✕
          </button>
        </div>

        {showSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ 
              color: '#10B981', 
              fontSize: '3rem', 
              marginBottom: '1rem' 
            }}>✓</div>
            <p style={{ 
              color: '#10B981', 
              fontSize: '1.1rem', 
              fontWeight: '600',
              margin: 0 
            }}>
              Message sent! We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#374151', 
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Email Address*
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="your.email@company.com"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${errors.email ? '#EF4444' : '#D1D5DB'}`,
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  transition: 'border-color 0.2s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#7A2187'}
                onBlur={(e) => e.target.style.borderColor = errors.email ? '#EF4444' : '#D1D5DB'}
              />
              {errors.email && (
                <p style={{ color: '#EF4444', fontSize: '0.8rem', margin: '0.25rem 0 0 0' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Reason Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#374151', 
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Reason for Contact*
              </label>
              <select
                value={formData.reason}
                onChange={(e) => handleChange('reason', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${errors.reason ? '#EF4444' : '#D1D5DB'}`,
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  background: 'white',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#7A2187'}
                onBlur={(e) => e.target.style.borderColor = errors.reason ? '#EF4444' : '#D1D5DB'}
              >
                <option value="">Select a reason</option>
                {reasons.map(reason => (
                  <option key={reason} value={reason}>{reason}</option>
                ))}
              </select>
              {errors.reason && (
                <p style={{ color: '#EF4444', fontSize: '0.8rem', margin: '0.25rem 0 0 0' }}>
                  {errors.reason}
                </p>
              )}
            </div>

            {/* Other Reason Field */}
            {formData.reason === 'Other' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  color: '#374151', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Please specify*
                </label>
                <input
                  type="text"
                  value={formData.otherReason}
                  onChange={(e) => handleChange('otherReason', e.target.value)}
                  placeholder="Tell us your specific reason..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${errors.otherReason ? '#EF4444' : '#D1D5DB'}`,
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    transition: 'border-color 0.2s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#7A2187'}
                  onBlur={(e) => e.target.style.borderColor = errors.otherReason ? '#EF4444' : '#D1D5DB'}
                />
                {errors.otherReason && (
                  <p style={{ color: '#EF4444', fontSize: '0.8rem', margin: '0.25rem 0 0 0' }}>
                    {errors.otherReason}
                  </p>
                )}
              </div>
            )}

            {/* Message Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                color: '#374151', 
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Tell us more about your inquiry..."
                rows={3}
                maxLength={500}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#7A2187'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
              <p style={{ 
                fontSize: '0.75rem', 
                color: '#9CA3AF', 
                margin: '0.25rem 0 0 0',
                textAlign: 'right'
              }}>
                {formData.message.length}/500
              </p>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <p style={{ color: '#EF4444', fontSize: '0.9rem', margin: '0 0 1rem 0', textAlign: 'center' }}>
                {errors.submit}
              </p>
            )}

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '1px solid #D1D5DB',
                  background: 'white',
                  color: '#6B7280',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F9FAFB';
                  e.target.style.borderColor = '#9CA3AF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.borderColor = '#D1D5DB';
                }}
              >
                Cancel
              </button>
              
              <RainbowButton 
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </RainbowButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;