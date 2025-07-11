// Updated Pricing Page for First Release
import React, { useState, useEffect, useRef } from 'react';
import { ShimmerButton } from './src/components/magicui/shimmer-button';
import { MagicCard } from './src/components/magicui/magic-card';
import { ShineBorder } from './src/components/magicui/shine-border';
import { BorderBeam } from './src/components/magicui/border-beam';
import { NumberTicker } from './src/components/magicui/number-ticker';
import { AuroraText } from './src/components/magicui/aurora-text';
import { RainbowButton } from './src/components/magicui/rainbow-button';
import { InteractiveGridPattern } from './src/components/magicui/interactive-grid-pattern';
import ContactModal from './src/components/ContactModal';
import { GridPattern } from './src/components/magicui/grid-pattern';
import { Ripple } from './src/components/magicui/ripple';
import { FlickeringGrid } from './src/components/magicui/flickering-grid';
import { RetroGrid } from './src/components/magicui/retro-grid';
import Marquee from './src/components/magicui/marquee';
import FAQAccordion from './src/components/magicui/faq-accordion';

// Info Button Component with Click Tooltip
const InfoButton = ({ content, side = 'top' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const handleClickOutside = React.useCallback((e) => {
    setIsVisible(false);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isVisible, handleClickOutside]);

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          background: 'rgba(122, 33, 135, 0.1)',
          border: '1px solid rgba(122, 33, 135, 0.2)',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginLeft: '8px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#7A2187',
          transition: 'all 0.2s ease',
          outline: 'none',
          verticalAlign: 'middle'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(122, 33, 135, 0.15)';
          e.target.style.borderColor = 'rgba(122, 33, 135, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(122, 33, 135, 0.1)';
          e.target.style.borderColor = 'rgba(122, 33, 135, 0.2)';
        }}
      >
        i
      </button>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            transform: 'translateX(-50%) translateY(-100%)',
            zIndex: 1000,
            pointerEvents: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '12px',
              fontSize: '0.875rem',
              lineHeight: '1.4',
              maxWidth: '320px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'tooltipFadeIn 0.2s ease-out'
            }}
          >
            {content}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #1a1a2e'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

// Updated Pointer Component for backward compatibility
const Pointer = ({ children, content, side = 'top' }) => {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {children}
      <InfoButton content={content} side={side} />
    </span>
  );
};

// Feature Row Component with MagicUI Tooltips
const FeatureRow = ({ 
  icon, 
  title, 
  description, 
  freemiumIcon, 
  freemiumText, 
  premiumIcon, 
  premiumText, 
  freemiumColor = '#FFC107', 
  premiumColor = '#7A2187',
  strategicRationale
}) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '2rem',
    padding: '1.25rem 1rem',
    borderBottom: '1px solid #f1f3f4',
    alignItems: 'center',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    position: 'relative'
  }}
  className="feature-row"
  onMouseEnter={(e) => e.target.style.backgroundColor = '#fafbfc'}
  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
  >
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
        {strategicRationale ? (
          <Pointer content={strategicRationale}>
            <h4 style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              color: '#202124', 
              margin: 0,
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#7A2187'}
            onMouseLeave={(e) => e.target.style.color = '#202124'}
            >
              <i className={`fas fa-${icon}`} style={{ color: '#7A2187', marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
              {title}
            </h4>
          </Pointer>
        ) : (
          <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#202124', margin: 0 }}>
            <i className={`fas fa-${icon}`} style={{ color: '#7A2187', marginRight: '0.5rem', fontSize: '0.875rem' }}></i>
            {title}
          </h4>
        )}
      </div>
      <p style={{ fontSize: '0.875rem', color: '#5F6368', margin: 0, lineHeight: '1.4' }}>
        {description}
      </p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
        <i className={`fas fa-${freemiumIcon}`} style={{ color: freemiumColor, fontSize: '1.125rem' }}></i>
        <p style={{ fontSize: '0.875rem', color: '#5F6368', margin: 0 }}>{freemiumText}</p>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
        <i className={`fas fa-${premiumIcon}`} style={{ color: premiumColor, fontSize: '1.125rem' }}></i>
        <p style={{ fontSize: '0.875rem', color: '#202124', margin: 0, fontWeight: '500' }}>
          {premiumText}
        </p>
      </div>
    </div>
  </div>
);

// Custom hook for animated numbers
const useAnimatedNumber = (initialValue, duration = 700) => {
  const [displayValue, setDisplayValue] = useState(initialValue);
  const animationRef = useRef(null);

  const animateTo = (targetValue) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startValue = displayValue;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (targetValue - startValue) * easeOut;
      setDisplayValue(Math.round(currentValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return [displayValue, animateTo];
};

const PricingPage = () => {
  const [selectedCycle, setSelectedCycle] = useState('annual');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [userPreviousPurchases, setUserPreviousPurchases] = useState(0); // Amount user has already spent
  
  // Demo: Simulate different user scenarios (remove in production)
  useEffect(() => {
    // Always show previous purchases coupon - set to 350 as shown in design
    setUserPreviousPurchases(350);
  }, []);
  
  const priceData = {
    halfyearly: { price: '₹10,000', period: '/6 months', savings: 2000, originalPrice: '₹12,000' },
    annual: { price: '₹15,000', period: '/year', savings: 9000, originalPrice: '₹24,000' }
  };

  // Use animated number hook for savings
  const [animatedSavings, animateSavings] = useAnimatedNumber(priceData[selectedCycle].savings);
  
  // Use animated number hook for badge display
  const getBadgeValue = (cycle) => {
    return priceData[cycle].savings;
  };
  
  const [animatedBadgeNumber, animateBadgeNumber] = useAnimatedNumber(getBadgeValue(selectedCycle));
  
  // Format the display savings
  const displaySavings = animatedSavings > 0 ? `₹${animatedSavings.toLocaleString('en-IN')} savings` : '';
  
  // Format badge display
  const formatBadgeDisplay = (number, cycle) => {
    return `₹${number.toLocaleString('en-IN')} savings`;
  };

  // Handle cycle change with animation
  const handleCycleChange = (newCycle) => {
    const newSavings = priceData[newCycle].savings;
    const newBadgeValue = getBadgeValue(newCycle);
    animateSavings(newSavings);
    animateBadgeNumber(newBadgeValue);
    setSelectedCycle(newCycle);
  };

  // Premium Checkout Modal Component
  const PremiumCheckoutModal = () => {
    if (!showCheckoutModal) return null;

    const selectedPrice = parseInt(priceData[selectedCycle].price.replace(/[₹,]/g, ''));
    const earlyBirdDiscount = 0;
    const totalDiscount = earlyBirdDiscount + userPreviousPurchases;
    const finalPrice = selectedPrice - totalDiscount;
    const originalPrice = selectedCycle === 'annual' ? 24000 : selectedCycle === 'halfyearly' ? 12000 : 2000;

    // Mock course data for credit display
    const previousCourses = userPreviousPurchases > 0 ? [
      { name: 'Python Fundamentals', amount: Math.min(299, userPreviousPurchases) },
      ...(userPreviousPurchases > 299 ? [{ name: 'Data Analytics Basics', amount: userPreviousPurchases - 299 }] : [])
    ] : [];

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        style={{ 
          backdropFilter: 'blur(12px)',
          animation: 'modalFadeIn 0.3s ease-out'
        }}
        onClick={() => setShowCheckoutModal(false)}
      >
        <div 
          className="w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)',
            borderRadius: '16px',
            padding: '1.25rem',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(122, 33, 135, 0.08)',
            animation: 'modalSlideUp 0.3s ease-out'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowCheckoutModal(false)}
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.25rem',
              color: '#9AA0A6',
              cursor: 'pointer',
              zIndex: 10,
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#5F6368'}
            onMouseLeave={(e) => e.target.style.color = '#9AA0A6'}
          >
            ×
          </button>

          {/* Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '1.25rem'
          }}>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#202124',
              margin: '0 0 0.5rem 0',
              letterSpacing: '-0.01em'
            }}>
              Get <AuroraText>Premium</AuroraText> Access
            </h2>
            
            <p style={{
              color: '#5F6368',
              fontSize: '0.95rem',
              margin: 0,
              lineHeight: '1.4'
            }}>
              Unlock unlimited access to advance your career
            </p>
          </div>

          {/* Pricing Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.125rem',
            border: '1px solid #e8eaed',
            marginBottom: '0.875rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
          }}>
            <h3 style={{
              fontSize: '1.0625rem',
              fontWeight: '600',
              color: '#202124',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              letterSpacing: '-0.005em'
            }}>
              <i className="fas fa-receipt" style={{ color: '#7A2187', fontSize: '0.9375rem' }}></i>
              Pricing
            </h3>

            {/* Price Items */}
            <div style={{ fontSize: '0.875rem' }}>
              {/* Selected Plan */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.375rem'
              }}>
                <span style={{ color: '#5F6368' }}>
                  {selectedCycle === 'annual' ? 'Annual' : selectedCycle === 'halfyearly' ? '6-Month' : 'Monthly'} Plan
                </span>
                <span style={{
                  color: '#9AA0A6',
                  textDecoration: 'line-through',
                  fontSize: '0.875rem'
                }}>
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Launch Price Discount */}
              {(selectedCycle === 'annual' || selectedCycle === 'halfyearly') && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.375rem',
                  color: '#5F6368',
                  fontSize: '0.8rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <i className="fas fa-tag" style={{ fontSize: '0.75rem', color: '#FF6B35' }}></i>
                    <span>Launch Price Discount</span>
                    <span style={{
                      fontSize: '0.65rem',
                      color: '#FF6B35',
                      fontWeight: '500',
                      padding: '0.125rem 0.25rem',
                      background: 'rgba(255, 107, 53, 0.1)',
                      borderRadius: '3px',
                      marginLeft: '0.25rem'
                    }}>
                      LIMITED
                    </span>
                  </div>
                  <span style={{ color: '#FF6B35', fontWeight: '600' }}>-₹{(originalPrice - selectedPrice).toLocaleString('en-IN')}</span>
                </div>
              )}


              {/* Pre-Applied Coupon / Course Credits */}
              {userPreviousPurchases > 0 && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.375rem',
                  padding: '0.625rem',
                  background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f9f0 100%)',
                  borderRadius: '8px',
                  border: '1px solid #28A745',
                  borderStyle: 'dashed'
                }}>
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.375rem',
                      color: '#28A745',
                      fontWeight: '600'
                    }}>
                      <i className="fas fa-tag" style={{ fontSize: '0.875rem' }}></i>
                      Pre-Applied Coupon
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#1e7e34',
                      fontWeight: '500',
                      marginTop: '0.25rem',
                      lineHeight: '1.3'
                    }}>
                      Course credit from previous purchases
                    </div>
                    {previousCourses.length > 0 && (
                      <div style={{
                        fontSize: '0.7rem',
                        color: '#6c757d',
                        fontStyle: 'italic',
                        marginTop: '0.125rem',
                        lineHeight: '1.3'
                      }}>
                        {previousCourses.map(course => course.name).join(', ')}
                      </div>
                    )}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      color: '#28A745',
                      fontWeight: '700',
                      fontSize: '0.9rem'
                    }}>
                      -₹{userPreviousPurchases.toLocaleString('en-IN')}
                    </span>
                    <div style={{
                      fontSize: '0.65rem',
                      color: '#1e7e34',
                      fontWeight: '500',
                      marginTop: '0.125rem'
                    }}>
                      AUTO APPLIED
                    </div>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div style={{
                height: '1px',
                background: '#e8eaed',
                margin: '0.5rem 0'
              }}></div>

              {/* Total Amount */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#202124'
                }}>
                  Total
                </span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '1.375rem',
                    fontWeight: '700',
                    color: '#7A2187',
                    letterSpacing: '-0.02em'
                  }}>
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#5F6368',
                    fontStyle: 'italic'
                  }}>
                    ₹{Math.round(finalPrice / (selectedCycle === 'annual' ? 12 : 6)).toLocaleString('en-IN')}/month
                  </div>
                  {totalDiscount > 0 && (
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#28A745',
                      fontWeight: '500'
                    }}>
                      Saving ₹{totalDiscount.toLocaleString('en-IN')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div style={{
            background: '#f8f9fa',
            padding: '0.9375rem',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '1.125rem',
            border: '1px solid rgba(248, 249, 250, 0.8)'
          }}>
            <div style={{
              fontSize: '0.875rem',
              color: '#5F6368',
              marginBottom: '0.375rem',
              lineHeight: '1.4',
              fontWeight: '500'
            }}>
              Join early adopters transforming their careers
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: '#9AA0A6'
            }}>
              Be among the first
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ marginBottom: '1rem' }}>
            <RainbowButton
              className="w-full text-lg font-semibold"
              style={{ 
                padding: '1rem 2rem', 
                borderRadius: '12px'
              }}
            >
              Buy Now
            </RainbowButton>
          </div>

          {/* Trust Signals */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: '#5F6368',
            marginBottom: '0.625rem',
            fontWeight: '500'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <i className="fas fa-shield-alt" style={{ color: '#28A745', fontSize: '0.8125rem' }}></i>
              <span>7-day money back guarantee</span>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Inject CSS Variables and Styles */}
      <style>
        {`
          body {
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            min-height: 100vh;
          }
          
          :root {
            /* Primary Colors */
            --primary: #7A2187;
            --primary-light: #9B4AA3;
            --primary-dark: #5A1865;
            --primary-lighter: #E8D5EA;
            
            /* Neutral Colors */
            --white: #FFFFFF;
            --gray-50: #F8F9FA;
            --gray-100: #F1F3F4;
            --gray-200: #E8EAED;
            --gray-300: #DADCE0;
            --gray-400: #BDC1C6;
            --gray-500: #9AA0A6;
            --gray-600: #80868B;
            --gray-700: #5F6368;
            --gray-800: #3C4043;
            --gray-900: #202124;
            
            /* Semantic Colors */
            --success: #28A745;
            --warning: #FFC107;
            --error: #DC3545;
            --info: #17A2B8;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
          .badge-dot {
            animation: pulse 2s infinite;
          }
          
          @keyframes urgency-pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }
            50% { transform: scale(1.02); box-shadow: 0 0 0 4px rgba(255, 107, 107, 0); }
          }

          @keyframes tooltipFadeIn {
            0% { opacity: 0; transform: translateY(10px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes gentle-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.02); }
          }

          @keyframes modalFadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes modalSlideUp {
            0% { 
              opacity: 0; 
              transform: translateY(10px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes ripple {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .transformation-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            
            .pricing-cards {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
              padding: 0 1rem !important;
            }
            
            .pricing-card {
              padding: 2rem 1.5rem !important;
              margin: 0 auto !important;
              max-width: 400px !important;
            }
            
            .premium-card.featured {
              transform: none !important;
            }
            
            .premium-card.featured:hover {
              transform: translateY(-4px) !important;
            }
            
            .section-title {
              font-size: 2.25rem !important;
              line-height: 1.2 !important;
            }
            
            .container {
              padding: 0 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .pricing-cards {
              padding: 0 0.5rem !important;
            }
            
            .pricing-card {
              padding: 1.5rem 1rem !important;
            }
            
            .section-title {
              font-size: 1.875rem !important;
            }
            
            .price {
              font-size: 2.5rem !important;
            }
            
            .container {
              padding: 0 0.5rem !important;
            }
          }
          
          /* Feature Comparison Table Mobile Styles */
          @media (max-width: 768px) {
            .feature-row {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
              padding: 1rem 0.5rem !important;
              text-align: left !important;
            }
            
            .feature-row > div:first-child {
              margin-bottom: 1rem !important;
              padding-bottom: 1rem !important;
              border-bottom: 1px solid #f1f3f4 !important;
            }
            
            .feature-row > div:nth-child(2),
            .feature-row > div:nth-child(3) {
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              padding: 0.75rem 1rem !important;
              margin: 0.5rem 0 !important;
              border-radius: 8px !important;
              background: #f8f9fa !important;
            }
            
            .feature-row > div:nth-child(3) {
              background: rgba(122, 33, 135, 0.05) !important;
              border: 1px solid rgba(122, 33, 135, 0.1) !important;
            }
            
            /* Mobile sticky headers adjustment */
            [data-comparison-section] > div:first-child {
              position: relative !important;
              top: 0 !important;
              background: white !important;
              padding: 1rem !important;
              margin-bottom: 1rem !important;
              border-radius: 8px !important;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
            }
            
            [data-section-id] > div:first-child {
              position: relative !important;
              top: 0 !important;
              background: white !important;
              margin-bottom: 1rem !important;
              border-radius: 8px !important;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) !important;
            }
          }
          
          /* Mobile testimonials improvements */
          @media (max-width: 768px) {
            .testimonials-section {
              padding: 3rem 0 !important;
            }
            
            .testimonials-section h2 {
              font-size: 1.75rem !important;
              line-height: 1.3 !important;
            }
            
            .testimonials-section p {
              font-size: 1rem !important;
            }
          }
          
          /* Additional mobile improvements */
          @media (max-width: 768px) {
            .pricing-header {
              margin-bottom: 2rem !important;
            }
            
            .section-subtitle {
              font-size: 1rem !important;
              margin-bottom: 2rem !important;
            }
            
            /* Mobile billing toggle */
            .pricing-header > div:nth-child(3) {
              margin-bottom: 1.5rem !important;
            }
            
            .pricing-header > div:nth-child(3) > div {
              flex-direction: column !important;
              gap: 0.5rem !important;
              width: 100% !important;
              max-width: 300px !important;
              margin: 0 auto !important;
            }
            
            .pricing-header > div:nth-child(3) > div > button {
              width: 100% !important;
              margin: 0 !important;
            }
            
            .pricing-header > div:nth-child(3) > div > div:last-child {
              position: static !important;
              transform: none !important;
              width: 100% !important;
              height: 44px !important;
              background: transparent !important;
              box-shadow: none !important;
            }
            
            /* Mobile CTA sections */
            .cta-button {
              font-size: 1rem !important;
              padding: 0.875rem 1.5rem !important;
            }
            
            /* Mobile FAQ adjustments */
            .faq-section {
              padding: 3rem 0 !important;
            }
          }
          
          @media (max-width: 480px) {
            .section-subtitle {
              font-size: 0.95rem !important;
            }
            
            .pricing-header > div:nth-child(3) > div {
              max-width: 280px !important;
            }
            
            .popular-badge {
              font-size: 0.8125rem !important;
              padding: 0.375rem 1rem !important;
            }
          }

          .pricing-section {
            background: var(--white);
            padding: 6rem 0;
            position: relative;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          .pricing-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .section-title {
            font-size: 3rem;
            font-weight: 800;
            color: var(--gray-900);
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
            line-height: 1.1;
          }

          .section-subtitle {
            font-size: 1.125rem;
            color: var(--gray-600);
            margin-bottom: 3rem;
            line-height: 1.5;
            font-weight: 400;
          }

          /* Pricing Cards */
          .pricing-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            max-width: 800px;
            margin: 0 auto;
            padding-top: 2rem;
          }

          .pricing-card {
            background: var(--white);
            border: 2px solid var(--gray-200);
            border-radius: 20px;
            padding: 2.5rem 2rem;
            position: relative;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .pricing-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          }

          .freemium-card {
            border: 1px solid rgba(218, 220, 224, 0.4);
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          }

          .freemium-card:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          }

          .premium-card {
            border: 1px solid rgba(130, 83, 194, 0.2);
            background: linear-gradient(135deg, rgba(122, 33, 135, 0.02) 0%, var(--white) 100%);
            box-shadow: 0 8px 32px rgba(130, 83, 194, 0.15);
          }

          .premium-card:hover {
            box-shadow: 0 16px 48px rgba(130, 83, 194, 0.2);
          }

          .premium-card.featured {
            transform: scale(1.05);
            position: relative;
            z-index: 10;
          }

          .premium-card.featured:hover {
            transform: scale(1.05) translateY(-4px);
          }


          .popular-badge {
            position: absolute;
            top: -1rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: var(--white);
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            font-size: 0.875rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .card-header {
            text-align: center;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--gray-200);
          }

          .plan-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--gray-900);
            margin-bottom: 1rem;
            letter-spacing: -0.01em;
          }

          .price-container {
            display: flex;
            align-items: baseline;
            justify-content: center;
            margin-bottom: 0.5rem;
          }

          .price {
            font-size: 3rem;
            font-weight: 800;
            color: var(--primary);
            line-height: 1;
          }

          .period {
            font-size: 1rem;
            color: var(--gray-600);
            margin-left: 0.5rem;
          }

          .price-note {
            font-size: 0.875rem;
            color: var(--success);
            font-weight: 600;
            background: rgba(40, 167, 69, 0.1);
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            display: inline-block;
            margin-bottom: 1rem;
          }

          .plan-description {
            color: var(--gray-600);
            font-size: 1rem;
          }

          .features-list {
            margin-bottom: 2rem;
          }

          .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem 0;
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .feature-item.limited {
            opacity: 0.6;
          }

          .feature-icon {
            color: var(--primary);
            font-size: 0.875rem;
            margin-top: 0.125rem;
            flex-shrink: 0;
          }

          .feature-item.limited .feature-icon {
            color: var(--gray-400);
          }

          .cta-button {
            width: 100%;
            padding: 1rem 2rem;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: none;
          }

          .cta-button.primary {
            background: var(--primary);
            color: var(--white);
          }

          .cta-button.primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(122, 33, 135, 0.3);
          }

          .cta-button.secondary {
            background: transparent;
            color: var(--gray-500);
            border: 2px solid var(--gray-300);
            cursor: default;
          }

          .trial-note {
            text-align: center;
            margin-top: 1rem;
            font-size: 0.875rem;
            color: var(--gray-600);
          }
        `}
      </style>

      {/* Header Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)',
          padding: '3rem 0 8rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="pricing-header">
            {/* Launch Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(122, 33, 135, 0.1)',
                border: '1px solid rgba(122, 33, 135, 0.2)',
                color: '#7A2187',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '1.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="badge-dot"
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#7A2187',
                  borderRadius: '50%'
                }}
              />
              <span>Special Launch Pricing</span>
            </div>
            
            <h2 className="section-title">Choose Your <AuroraText>Premium</AuroraText> Plan</h2>
            <p className="section-subtitle">
              <strong style={{ color: '#7A2187', fontWeight: '700' }}>94% never reach their potential</strong> because they lack the right tools.
            </p>
            
            {/* Billing Toggle */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '0.625rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  display: 'flex',
                  gap: '0.375rem',
                  width: 'fit-content'
                }}
              >
                {['annual', 'halfyearly'].map((cycle) => {
                  const isAnnual = cycle === 'annual';
                  const isSelected = selectedCycle === cycle;
                  
                  return (
                    <button
                      key={cycle}
                      onClick={() => handleCycleChange(cycle)}
                      title={
                        isAnnual && !isSelected ? 'Save ₹9,000 annually - Only ₹1,250/month' :
                        cycle === 'halfyearly' && !isSelected ? 'Save ₹4,000 - Only ₹1,667/month' :
                        undefined
                      }
                      style={{
                        height: '44px',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: 'transparent',
                        borderRadius: '8px',
                        fontWeight: isAnnual ? '700' : '600',
                        fontSize: '0.9rem',
                        margin: '0',
                        color: isSelected ? '#FFFFFF' : (isAnnual ? '#202124' : '#80868B'),
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        letterSpacing: isAnnual ? '-0.01em' : '0',
                        boxShadow: isAnnual && !isSelected ? '0 0 0 1px rgba(122, 33, 135, 0.1)' : 'none',
                        flex: 1,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {isAnnual ? '★ Annual' : '6 Months'}
                    </button>
                  );
                })}
                {/* Selector Indicator */}
                <div 
                  style={{
                    position: 'absolute',
                    background: selectedCycle === 'annual' ? 
                      'linear-gradient(135deg, #7A2187 0%, #9B4AA3 100%)' : '#7A2187',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    top: '0.625rem',
                    left: '0.625rem',
                    width: 'calc(50% - 0.8125rem)',
                    height: 'calc(100% - 1.25rem)',
                    zIndex: 1,
                    transform: selectedCycle === 'annual' ? 'translateX(0%)' : 'translateX(calc(100% + 0.375rem))',
                    boxShadow: selectedCycle === 'annual' ? 
                      '0 4px 12px rgba(122, 33, 135, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset' : 
                      '0 2px 4px rgba(122, 33, 135, 0.1)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards">
            {/* Freemium Card */}
            <div className="pricing-card freemium-card">
              <div className="card-header">
                <h3 className="plan-name">Freemium</h3>
                <div className="price-container">
                  <span className="price">₹0</span>
                  <span className="period">/forever</span>
                </div>
              </div>
              
              <div className="features-list">
                <div className="feature-item limited">
                  <i className="fas fa-exclamation-triangle feature-icon" style={{ color: '#FFC107' }}></i>
                  <span>1 opportunity per category</span>
                </div>
                <div className="feature-item limited">
                  <i className="fas fa-exclamation-triangle feature-icon" style={{ color: '#FFC107' }}></i>
                  <span>1 NCET test/year</span>
                </div>
                <div className="feature-item limited">
                  <i className="fas fa-exclamation-triangle feature-icon" style={{ color: '#FFC107' }}></i>
                  <span>Complete access to 2 courses*</span>
                </div>
                <div className="feature-item limited">
                  <i className="fas fa-ban feature-icon" style={{ color: '#DC3545' }}></i>
                  <span>No NCET Plus program access*</span>
                </div>
                <div className="feature-item limited">
                  <i className="fas fa-ban feature-icon" style={{ color: '#DC3545' }}></i>
                  <span>No certificates</span>
                </div>
                <div className="feature-item limited">
                  <i className="fas fa-ban feature-icon" style={{ color: '#DC3545' }}></i>
                  <span>No live mentorship support</span>
                </div>
              </div>
              
              <button 
                className="cta-button secondary"
                style={{ 
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.95rem',
                  height: 'auto'
                }}
              >
                Your current Plan
              </button>
              
              {/* Individual Services Note */}
              <div style={{
                textAlign: 'center',
                marginTop: '0.75rem',
                fontSize: '0.75rem',
                color: '#9AA0A6',
                fontStyle: 'italic',
                lineHeight: '1.3'
              }}>
                * Individual services available for purchase separately
              </div>
            </div>

            {/* Premium Card */}
            <div className="pricing-card premium-card featured" style={{ overflow: 'visible', position: 'relative' }}>
              <BorderBeam 
                size={400} 
                duration={6} 
                delay={0} 
                className="from-transparent via-[#8253C2] via-[#8253C2] to-transparent"
              />
              <BorderBeam 
                size={400} 
                duration={6} 
                delay={1.5} 
                className="from-transparent via-[#F45346] via-[#F45346] to-transparent"
              />
              <BorderBeam 
                size={400} 
                duration={6} 
                delay={3} 
                className="from-transparent via-[#9B4AA3] via-[#9B4AA3] to-transparent"
              />
              <BorderBeam 
                size={400} 
                duration={6} 
                delay={4.5} 
                className="from-transparent via-[#E8D5EA] via-[#E8D5EA] to-transparent"
              />
              
              {selectedCycle === 'annual' && (
                <div className="popular-badge" style={{
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  opacity: 1,
                  transform: 'translateX(-50%) scale(1)',
                  zIndex: 20
                }}>
                  <i className="fas fa-star"></i>
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="card-header">
                <h3 className="plan-name">Premium</h3>
                
                {/* Original Price (Launch Pricing) */}
                {priceData[selectedCycle].originalPrice && (
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '0.25rem'
                  }}>
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#9AA0A6',
                      textDecoration: 'line-through',
                      fontWeight: '400'
                    }}>
                      {priceData[selectedCycle].originalPrice}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#FF6B35',
                      fontWeight: '500',
                      marginLeft: '0.5rem',
                      padding: '0.125rem 0.375rem',
                      background: 'rgba(255, 107, 53, 0.1)',
                      borderRadius: '4px'
                    }}>
                      LAUNCH PRICE
                    </span>
                  </div>
                )}
                
                <div className="price-container">
                  <span className="price">{priceData[selectedCycle].price}</span>
                  <span className="period">{priceData[selectedCycle].period}</span>
                </div>
                
                {/* Effective Monthly Cost */}
                <div style={{
                  textAlign: 'center',
                  marginTop: '0.25rem',
                  marginBottom: '0.25rem'
                }}>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#5F6368',
                    fontWeight: '500',
                    fontStyle: 'italic'
                  }}>
Only ₹{selectedCycle === 'annual' ? '1,250' : '1,667'}/month
                  </span>
                </div>
                
                {/* Unified Animated Badge */}
                <div style={{
                  textAlign: 'center',
                  marginTop: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: selectedCycle === 'annual' ? 'rgba(40, 167, 69, 0.15)' : 'rgba(40, 167, 69, 0.1)',
                    color: '#28A745',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8125rem',
                    fontWeight: '500',
                    border: `1px solid ${selectedCycle === 'annual' ? 'rgba(40, 167, 69, 0.3)' : 'rgba(40, 167, 69, 0.2)'}`,
                    boxShadow: selectedCycle === 'annual' ? '0 2px 8px rgba(40, 167, 69, 0.15)' : 'none',
                    transition: 'all 0.7s ease'
                  }}>
                    {formatBadgeDisplay(animatedBadgeNumber, selectedCycle)}
                  </span>
                </div>
              </div>
              
              <div className="features-list">
                <div className="feature-item">
                  <i className="fas fa-infinity feature-icon" style={{ color: '#7A2187' }}></i>
                  <span><strong style={{ fontWeight: '700' }}>Unlimited</strong> job applications</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-star feature-icon" style={{ color: '#7A2187' }}></i>
                  <span><strong style={{ fontWeight: '700' }}>Premium badge</strong> & corporate visibility</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-graduation-cap feature-icon" style={{ color: '#7A2187' }}></i>
                  <span><strong style={{ fontWeight: '700' }}>Full course access</strong> + certificates</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-gem feature-icon" style={{ color: '#7A2187' }}></i>
                  <span><strong style={{ fontWeight: '700' }}>NCET Plus program</strong> access</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-user feature-icon" style={{ color: '#7A2187' }}></i>
                  <span><strong style={{ fontWeight: '700' }}>Live mentor support</strong></span>
                </div>
              </div>
              
              <RainbowButton 
                className="w-full text-lg font-semibold"
                style={{ 
                  padding: '1rem 2rem', 
                  borderRadius: '12px',
                  background: '#7A2187',
                  color: 'white'
                }}
                onClick={() => setShowCheckoutModal(true)}
              >
                Get Premium Now
              </RainbowButton>
              <div className="trial-note" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#28A745', fontSize: '0.875rem' }}></i>
                  <span>7-day money back guarantee*</span>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Pricing Contact Support */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '2.5rem',
            marginBottom: '-3rem',
            position: 'relative',
            zIndex: 10
          }}>
            <p style={{ 
              fontSize: '0.95rem', 
              color: '#5F6368',
              margin: 0
            }}>
              Questions about pricing? 
              <button 
                onClick={() => setShowContactModal(true)}
                style={{ 
                  color: '#7A2187', 
                  textDecoration: 'none', 
                  marginLeft: '0.5rem',
                  fontWeight: '600',
                  transition: 'color 0.2s ease',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  padding: 0
                }}
                onMouseEnter={(e) => e.target.style.color = '#9B4AA3'}
                onMouseLeave={(e) => e.target.style.color = '#7A2187'}
              >
                Contact our team →
              </button>
            </p>
          </div>
        </div>
      </section>


      {/* Feature Comparison Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        padding: '2rem 0 0 0',
        position: 'relative',
        marginTop: '-5rem',
        paddingTop: '5rem'
      }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#202124',
              marginBottom: '1rem'
            }}>
              Compare Plans in Detail
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#5F6368',
              marginBottom: '3rem'
            }}>
              See exactly what you get with Premium across all platform features
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories Section */}
      <section data-comparison-section style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        padding: '0 0 0 0',
        position: 'relative'
      }}>
        
        {/* Sticky Table Header */}
        <div style={{
          position: 'sticky',
          top: '0',
          background: 'rgba(248, 249, 250, 0.95)',
          backdropFilter: 'blur(8px)',
          zIndex: 10,
          padding: '1rem 0',
          borderBottom: '1px solid #e8eaed'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            alignItems: 'center',
            padding: '0 1rem'
          }}>
            <div>
              <h4 style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                color: '#202124', 
                margin: 0, 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px'
              }}>
                Features
              </h4>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ 
                fontSize: '1rem', 
                fontWeight: '600', 
                color: '#5F6368', 
                margin: 0, 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px'
              }}>
                Freemium
              </h4>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ 
                fontSize: '1rem', 
                fontWeight: '700', 
                margin: 0, 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px'
              }}>
                <AuroraText>Premium</AuroraText>
              </h4>
            </div>
          </div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Feature Categories */}
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Career Gateway */}
            <div data-section-id="career-gateway" style={{ marginBottom: '2.5rem' }}>
              <div style={{
                position: 'sticky',
                top: '57px',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 9,
                padding: '1rem 1rem',
                borderBottom: '2px solid #7A2187',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: '#202124',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: 0
                }}>
                  <i className="fas fa-door-open" style={{ color: '#7A2187', fontSize: '1.125rem' }}></i>
                  Career Gateway
                </h3>
              </div>
              

              <FeatureRow 
                icon="trophy"
                title="Hackathons"
                description="Participate in coding competitions and challenges"
                freemiumIcon="check-circle"
                freemiumText="Full Access"
                freemiumColor="#7A2187"
                premiumIcon="check-circle"
                premiumText="Full Access"
                premiumColor="#7A2187"
                strategicRationale="Builds platform engagement by offering full hackathon access to all users, demonstrating platform value while other exclusive features drive Premium upgrades."
              />


              <FeatureRow 
                icon="briefcase"
                title="Career Opportunities"
                description="Apply to opportunities across all categories"
                freemiumIcon="lock"
                freemiumText="1 Opportunity Per Category"
                freemiumColor="#9AA0A6"
                premiumIcon="infinity"
                premiumText="Unlimited + Priority Job Matching"
                strategicRationale="Creates clear value differentiation by limiting freemium users to one opportunity per category, showcasing the unlimited access and priority job matching benefits of Premium."
              />

            </div>

            {/* Assessments */}
            <div data-section-id="assessments" style={{ marginBottom: '2.5rem' }}>
              <div style={{
                position: 'sticky',
                top: '57px',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 9,
                padding: '1rem 1rem',
                borderBottom: '2px solid #7A2187',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: '#202124',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: 0
                }}>
                  <i className="fas fa-clipboard-check" style={{ color: '#7A2187', fontSize: '1.125rem' }}></i>
                  Assessments
                </h3>
              </div>
              
              <FeatureRow 
                icon="graduation-cap"
                title="NCET Test"
                description="National Competence and Employability Test"
                freemiumIcon="exclamation-triangle"
                freemiumText="1 Test Per Year"
                freemiumColor="#FFC107"
                premiumIcon="chart-bar"
                premiumText="5 Tests + Score Analytics"
                strategicRationale="Motivates upgrades by offering comprehensive NCET preparation - Premium users get full test access plus live training and recorded video sessions for maximum career advancement."
              />

              <FeatureRow 
                icon="clipboard-check"
                title="Career Assessments"
                description="Personality and skill assessment tests"
                freemiumIcon="exclamation-triangle"
                freemiumText="2 Free Tests Only"
                freemiumColor="#FFC107"
                premiumIcon="infinity"
                premiumText="Unlimited Tests + Advanced Analytics"
                strategicRationale="Builds upgrade desire through strategic limitation - freemium users get 2 assessments to experience value, while Premium offers unlimited tests plus advanced analytics for deep career insights."
              />
            </div>

            {/* Upskill Hub */}
            <div data-section-id="upskill-hub" style={{ marginBottom: '2.5rem' }}>
              <div style={{
                position: 'sticky',
                top: '57px',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 9,
                padding: '1rem 1rem',
                borderBottom: '2px solid #7A2187',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: '#202124',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: 0
                }}>
                  <i className="fas fa-rocket" style={{ color: '#7A2187', fontSize: '1.125rem' }}></i>
                  Upskill Hub
                </h3>
              </div>
              
              <FeatureRow 
                icon="plus-circle"
                title="NCET Plus Programs"
                description="Advanced career enhancement programs"
                freemiumIcon="ban"
                freemiumText="Not Available"
                freemiumColor="#9AA0A6"
                premiumIcon="video"
                premiumText="1 Program + Live Training Access + 1 Video Recorded Sessions"
                strategicRationale="Represents premium exclusivity through access to the National Competence and Employability Test Plus program, providing specialized training and expert mentorship unavailable elsewhere."
              />

              <FeatureRow 
                icon="map-marked-alt"
                title={
                  <span>
                    Career Guidance & Roadmap
                    <InfoButton content="Drives Premium conversions by offering basic career insights to freemium users while providing comprehensive, personalized AI-powered roadmaps based on individual aspirations and preferences to Premium subscribers." />
                  </span>
                }
                description="AI-powered career planning and development strategies"
                freemiumIcon="lock"
                freemiumText="Basic Insights Only (20%)"
                freemiumColor="#9AA0A6"
                premiumIcon="brain"
                premiumText="Personalized Roadmaps based on your Career Aspirations and Preferences"
              />

              <FeatureRow 
                icon="certificate"
                title="Courses & Certification"
                description="Access to skill development courses and certificates"
                freemiumIcon="lock"
                freemiumText="Complete access to 2 courses"
                freemiumColor="#9AA0A6"
                premiumIcon="award"
                premiumText="100% Access + Certificate"
                strategicRationale="Drives conversions by offering substantial value in freemium (2 complete courses) while reserving full access and official certification for Premium subscribers."
              />
            </div>

            {/* Code Playground and Practice */}
            <div data-section-id="code-playground" style={{ marginBottom: '2.5rem' }}>
              <div style={{
                position: 'sticky',
                top: '57px',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 9,
                padding: '1rem 1rem',
                borderBottom: '2px solid #7A2187',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: '#202124',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: 0
                }}>
                  <i className="fas fa-code" style={{ color: '#7A2187', fontSize: '1.125rem' }}></i>
                  Code Playground and Practice
                </h3>
              </div>
              
              <FeatureRow 
                icon="desktop"
                title="Sandbox Pro"
                description="Advanced coding environments for practice"
                freemiumIcon="infinity"
                freemiumText="Unlimited"
                freemiumColor="#7A2187"
                premiumIcon="infinity"
                premiumText="Unlimited"
                strategicRationale="Demonstrates platform value by providing unlimited sandbox access to all users, establishing trust while other premium features create upgrade motivation."
              />

              <FeatureRow 
                icon="project-diagram"
                title="Capstone Projects"
                description="Real-world project development"
                freemiumIcon="exclamation-triangle"
                freemiumText="1 Capstone Project"
                freemiumColor="#FFC107"
                premiumIcon="project-diagram"
                premiumText="3 Capstone Projects"
                strategicRationale="Creates learning progression incentive - freemium users get basic project experience while Premium unlocks advanced capstone projects with AI support for career portfolio development."
              />

            </div>


            {/* Gamified Learning and Additional Programs */}
            <div data-section-id="gamified-learning" style={{ marginBottom: '2.5rem' }}>
              <div style={{
                position: 'sticky',
                top: '57px',
                background: 'rgba(248, 249, 250, 0.95)',
                backdropFilter: 'blur(10px)',
                zIndex: 9,
                padding: '1rem 1rem',
                borderBottom: '2px solid #7A2187',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: '600',
                  color: '#202124',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: 0
                }}>
                  <i className="fas fa-gamepad" style={{ color: '#7A2187', fontSize: '1.125rem' }}></i>
                  Gamified Learning and Additional Programs
                </h3>
              </div>
              

              <FeatureRow 
                icon="rocket"
                title="Virtual Job Fairs"
                description="Future Job Fairs - Free access"
                freemiumIcon="ban"
                freemiumText="Not Available"
                freemiumColor="#9AA0A6"
                premiumIcon="unlock"
                premiumText="Full Access"
                strategicRationale="Creates significant Premium value through exclusive access to future virtual job fairs, directly impacting career opportunities and employment prospects."
              />

              <FeatureRow 
                icon="graduation-cap"
                title="WAVE Scholarship Program"
                description="Exclusive scholarship opportunities for top performers"
                freemiumIcon="ban"
                freemiumText="Not Available"
                freemiumColor="#9AA0A6"
                premiumIcon="money-bill-wave"
                premiumText="Exclusive Access + ₹25,000 Scholarship Chance"
                premiumColor="#7A2187"
                strategicRationale="Provides aspirational upgrade motivation through exclusive ₹25,000 scholarship opportunities, available only to Premium members who meet performance criteria."
              />
            </div>

          </div>
        </div>
        
        {/* Spacer to ensure sticky headers unstick */}
        <div style={{ height: '120px' }}></div>
      </section>


      {/* Career Transformation Section */}
      <section style={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 20%, #ffffff 100%)',
        padding: '2rem 0 4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Dashed Grid Background */}
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className="opacity-20"
          style={{
            maskImage: 'radial-gradient(400px circle at center, white, transparent)',
            WebkitMaskImage: 'radial-gradient(400px circle at center, white, transparent)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0
          }}
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.95rem',
              fontStyle: 'italic',
              color: '#7A2187',
              marginBottom: '0.5rem'
            }}>
              Is Your Career Stuck In The Slow Lane?
            </p>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#202124',
              marginBottom: '0.5rem'
            }}>
              Transform Wasted Time Into Career Success
            </h2>
          </div>
          
          <div className="transformation-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* BEFORE Card */}
            <MagicCard
              className="relative overflow-hidden"
              gradientColor="rgba(220, 53, 69, 0.1)"
            >
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                height: '100%'
              }}>
                <div style={{
                  background: 'rgba(220, 53, 69, 0.1)',
                  color: '#DC3545',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  width: 'fit-content'
                }}>
                  BEFORE
                </div>
                
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#202124',
                  marginBottom: '1rem'
                }}>
                  Without Premium
                </h4>
                
                <p style={{
                  fontSize: '0.95rem',
                  color: '#5F6368',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5'
                }}>
                  Struggling to break through career barriers
                </p>
                
                <div>
                  {[
                    'Missing 94% of relevant job opportunities',
                    'No access to NCET Plus program advantages',
                    'Invisible to premium recruiters and employers',
                    'Limited to 1 NCET attempt per year'
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.3}s forwards`
                    }}>
                      <i className="fas fa-times" style={{ 
                        color: '#DC3545', 
                        fontSize: '0.875rem' 
                      }} />
                      <p style={{
                        margin: 0,
                        color: '#5F6368',
                        fontSize: '0.875rem'
                      }}>
                        {item.includes('94%') ? (
                          <>
                            Missing <NumberTicker value={94} suffix="% of relevant job opportunities" delay={index * 0.1 + 0.8} />
                          </>
                        ) : item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </MagicCard>
            
            {/* AFTER Card */}
            <ShineBorder
              className="relative overflow-hidden rounded-2xl"
              color={["#E8D5EA", "#FFFFFF", "#F8F9FA"]}
              borderWidth={2}
            >
              <MagicCard
                className="relative overflow-hidden"
                gradientColor="rgba(255, 255, 255, 0.1)"
              >
                <div style={{
                  background: 'linear-gradient(135deg, #7A2187 0%, #9B4AA3 100%)',
                  borderRadius: '16px',
                  padding: '2rem',
                  color: 'white',
                  height: '100%'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    width: 'fit-content'
                  }}>
                    AFTER
                  </div>
                  
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    With Premium Access
                  </h4>
                  
                  <p style={{
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5',
                    opacity: 0.95
                  }}>
                    Fast-track your career with proven strategies
                  </p>
                  
                  <div>
                    {[
                      'Full NCET Plus program + live training',
                      '5 NCET attempts + advanced analytics',
                      'Access 12x more relevant opportunities',
                      '4x higher recruiter response rates'
                    ].map((item, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.8}s forwards`
                      }}>
                        <i className="fas fa-check" style={{ 
                          color: 'white', 
                          fontSize: '0.875rem' 
                        }} />
                        <p style={{
                          margin: 0,
                          color: 'rgba(255, 255, 255, 0.95)',
                          fontSize: '0.875rem'
                        }}>
                          {item.includes('12x') ? (
                            <>
                              Access <NumberTicker value={12} suffix="x more relevant opportunities" delay={index * 0.1 + 1.3} className="text-white font-semibold" />
                            </>
                          ) : item.includes('4x') ? (
                            <>
                              <NumberTicker value={4} suffix="x higher recruiter response rates" delay={index * 0.1 + 1.3} className="text-white font-semibold" />
                            </>
                          ) : item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </ShineBorder>
          </div>
          
          
          {/* CTA Section */}
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '2rem auto 3rem auto',
            position: 'relative',
            zIndex: 3
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              <RainbowButton onClick={() => setShowCheckoutModal(true)}>
                Get Premium Now
              </RainbowButton>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '0.875rem',
                color: '#5F6368',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#FFD700' }} />
                  <span>7-day money back guarantee*</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" style={{
        background: '#f8f9fa',
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#202124',
              marginBottom: '1rem'
            }}>
              Join 10,000+ NCET Program Graduates Who Advanced Their Careers
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#5F6368',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Real stories from NCET training programs and career transformations
            </p>
          </div>
          
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: 'linear-gradient(to right, #f8f9fa, transparent)',
              zIndex: 10
            }} />
            <div style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '100px',
              background: 'linear-gradient(to left, #f8f9fa, transparent)',
              zIndex: 10
            }} />
            
            <Marquee pauseOnHover className="[--duration:60s]">
              {[
                {
                  name: "Hitin Sharma",
                  role: "Data Analytics Professional",
                  content: "NCET Data Analytics training provided an incredible platform for hands-on learning and skill-building. The Live Training Program was exceptional!",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Nimisha Kulshrestha",
                  role: "Data Analytics Graduate",
                  content: "Successfully completed the 30-Hour Data Analytics Program! This journey equipped me with essential skills in data processing, visualization, and machine learning.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Rajesh Kumar",
                  role: "Business Analyst at TCS",
                  content: "NCET's comprehensive training program transformed my understanding of data analytics. The hands-on projects prepared me for real-world challenges in my new role.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Priya Mehta",
                  role: "Machine Learning Engineer",
                  content: "The NCET Plus program's live training sessions and expert mentorship helped me transition from traditional software development to ML engineering successfully.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Amit Patel",
                  role: "Data Scientist at Infosys",
                  content: "The practical approach of NCET training with real industry datasets made all the difference. I could immediately apply what I learned in my current position.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face"
                },
                {
                  name: "Sneha Reddy",
                  role: "Analytics Consultant",
                  content: "NCET's career-focused training approach and industry connections helped me land my dream role. The program's emphasis on practical skills sets it apart from other courses.",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                }
              ].map((testimonial, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  margin: '0 1rem',
                  width: '300px',
                  flexShrink: 0,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e8eaed'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        marginRight: '1rem',
                        objectFit: 'cover'
                      }}
                    />
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#202124',
                        margin: 0,
                        marginBottom: '0.25rem'
                      }}>
                        {testimonial.name}
                      </h4>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#5F6368',
                        margin: 0
                      }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    marginBottom: '0.75rem'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star" style={{ 
                        color: '#FFC107', 
                        fontSize: '0.875rem',
                        marginRight: '0.125rem'
                      }} />
                    ))}
                  </div>
                  
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#202124',
                    lineHeight: '1.4',
                    margin: 0
                  }}>
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Call to Action Bridge */}
      <section style={{
        background: 'linear-gradient(135deg, #fafbfc 0%, #ffffff 100%)',
        padding: '2rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #f1f3f4',
        borderBottom: '1px solid #f1f3f4'
      }}>
        {/* MagicUI Grid Pattern */}
        <GridPattern
          width={80}
          height={80}
          x={-1}
          y={-1}
          className="text-gray-200"
          style={{
            opacity: 0.4,
            zIndex: 1,
            maskImage: 'radial-gradient(600px circle at center, white, transparent)',
            WebkitMaskImage: 'radial-gradient(600px circle at center, white, transparent)'
          }}
        />
        
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 3
          }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '700',
              color: '#202124',
              marginBottom: '0.75rem',
              lineHeight: '1.2'
            }}>
              Your Peers Aren't Waiting. Why Are You?
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
              color: '#5F6368',
              lineHeight: '1.6',
              margin: '0 0 1.5rem 0'
            }}>
              See the exact difference Premium makes in <strong style={{ color: '#7A2187' }}>real careers</strong>, <strong style={{ color: '#7A2187' }}>real numbers</strong>, <strong style={{ color: '#7A2187' }}>real results</strong>.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <RainbowButton onClick={() => setShowCheckoutModal(true)}>
                Get Premium Now
              </RainbowButton>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '0.875rem',
                color: '#5F6368',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#FFD700' }} />
                  <span>7-day money back guarantee*</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        background: 'white',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#202124',
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#5F6368',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Everything you need to know about Premium access
            </p>
          </div>
          
          <FAQAccordion faqs={[
            {
              question: "Can I access individual features while on the Freemium plan?",
              answer: "Yes! You can purchase specific services (like a course, mock test, or NCET Plus program) individually without upgrading to Premium."
            },
            {
              question: "What's the difference between 6-month and annual plans?",
              answer: "The annual plan offers significant savings - you pay ₹15,000 instead of ₹24,000 (₹9,000 savings). The 6-month plan costs ₹10,000, saving you ₹4,000 compared to ₹12,000. All plans include the same premium features, but longer commitments offer better value."
            },
            {
              question: "How does the 7-day money back guarantee work?",
              answer: "Our money back guarantee ensures you can try Premium risk-free. If you're not satisfied with your Premium experience, simply contact our support team within 7 days for a full refund. No questions asked - we want you to be completely confident in your upgrade decision."
            },
            {
              question: "What happens to my existing subscriptions when I upgrade to Premium?",
              answer: "When you upgrade to Premium, your existing NCET Plus subscription is automatically included at no extra cost. We'll calculate the remaining value of any current subscriptions and apply it toward your Premium upgrade, ensuring you get maximum value."
            },
            {
              question: "Will recruiters really notice my Premium badge?",
              answer: "Yes! Our Premium badge makes you visible in the exclusive recruiter pool where 85% of top-tier positions are filled. Premium members report 4x higher recruiter response rates and get priority consideration for quality opportunities."
            },
            {
              question: "What support do I get as a Premium member?",
              answer: "Premium members get priority support through multiple channels including weekly video/audio calls with industry mentors, priority customer support, 5 NCET attempts per year, and exclusive Premium member resources to ensure maximum value from your subscription."
            }
          ]} />
          
          {/* Final Conversion CTA */}
          <div style={{ marginTop: '4rem' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #7A2187 0%, #9B4AA3 50%, #5A1865 100%)',
              padding: '4rem 2rem',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}>
              {/* Subtle Grid Pattern Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  zIndex: 1,
                  backgroundImage: `
                    repeating-conic-gradient(
                      from 0deg at 0% 0%,
                      rgba(255, 255, 255, 0.08) 0deg 90deg,
                      transparent 90deg 180deg,
                      rgba(255, 255, 255, 0.08) 180deg 270deg,
                      transparent 270deg 360deg
                    )
                  `,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Subtle Flickering Grid Overlay */}
              <FlickeringGrid
                className="absolute inset-0"
                squareSize={2}
                gridGap={8}
                color="rgb(255, 255, 255)"
                maxOpacity={0.15}
                flickerChance={0.03}
                style={{
                  zIndex: 2
                }}
              />
              
              <div style={{
                position: 'relative',
                zIndex: 3,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                <AuroraText 
                  className="text-4xl font-bold mb-6"
                  colors={["#ffffff", "#f8f9fa", "#e2e8f0", "#ffffff"]}
                  speed={2}
                  style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '2rem',
                    display: 'block',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    color: 'white'
                  }}
                >
                  Your Career Can't Wait Any Longer
                </AuroraText>
                
                <p style={{
                  fontSize: '1.25rem',
                  color: '#f1f5f9',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  While you're thinking about it, your peers are already getting ahead with Premium.
                </p>
                
                <p style={{
                  fontSize: '1.125rem',
                  color: '#e2e8f0',
                  fontWeight: '500',
                  marginBottom: '3rem',
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                  fontStyle: 'italic'
                }}>
                  Don't let another opportunity slip by.
                </p>
                
                <div style={{ 
                  marginBottom: '3rem',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  <RainbowButton 
                    variant="outline"
                    style={{ 
                      fontSize: '1.2rem',
                      padding: '1.25rem 3rem',
                      fontWeight: '600',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    Get Premium
                  </RainbowButton>
                  
                  {/* Animated Rainbow glow underneath */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '180px',
                    height: '25px',
                    background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b)',
                    backgroundSize: '400% 100%',
                    borderRadius: '50px',
                    filter: 'blur(15px)',
                    opacity: 0.7,
                    zIndex: 0,
                    animation: 'rainbow-flow 3s ease-in-out infinite'
                  }} />
                  
                  <style jsx>{`
                    @keyframes rainbow-flow {
                      0%, 100% { background-position: 0% 50%; }
                      50% { background-position: 100% 50%; }
                    }
                  `}</style>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '1.5rem'
                }}>
                  <span>
                    <i className="fas fa-shield-alt" style={{ color: 'white', marginRight: '0.5rem' }}></i>
                    <strong style={{ color: 'white' }}>7-day money back guarantee*</strong>
                  </span>
                </div>
                
                {/* CTA Contact Support */}
                <div style={{
                  textAlign: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  paddingTop: '1.5rem'
                }}>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0
                  }}>
                    Need help choosing the right plan? 
                    <button 
                      onClick={() => setShowContactModal(true)}
                      style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        marginLeft: '0.5rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                        transition: 'all 0.2s ease',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 'inherit',
                        padding: 0
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderBottomColor = 'white';
                        e.target.style.color = '#f8f9fa';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderBottomColor = 'rgba(255, 255, 255, 0.5)';
                        e.target.style.color = 'white';
                      }}
                    >
                      Talk to our experts
                    </button>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Checkout Modal */}
      <PremiumCheckoutModal />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </div>
  );
};

export default PricingPage;