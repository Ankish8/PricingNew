import React, { useState } from 'react';

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [planType, setPlanType] = useState('premium'); // 'lite' or 'premium'

  const primaryColor = '#581c60'; // From your color palette
  const primaryDark = '#4c1d5c';

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Sidebar - Always Collapsed */}
      <div style={{
        width: '60px',
        background: `linear-gradient(180deg, ${primaryColor} 0%, ${primaryDark} 100%)`,
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Logo Section */}
        <div style={{ 
          padding: '1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '64px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: '#ef4444',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            MA
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '0.5rem 0' }}>
          
          {/* Dashboard */}
          <div style={{
            margin: '0 0.5rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            ⊞
          </div>

          {/* Plus Programs */}
          <div style={{
            margin: '0 0.5rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            opacity: 0.7,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.opacity = '0.7';
          }}>
            ⊟
          </div>

          {/* Calendar */}
          <div style={{
            margin: '0 0.5rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            opacity: 0.7,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.opacity = '0.7';
          }}>
            📅
          </div>

          {/* Programs */}
          <div style={{
            margin: '0 0.5rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            opacity: 0.7,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.opacity = '0.7';
          }}>
            📚
          </div>

          {/* Books */}
          <div style={{
            margin: '0 0.5rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            opacity: 0.7,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.opacity = '0.7';
          }}>
            📋
          </div>

          {/* Assessments */}
          <div style={{
            margin: '0 0.5rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            opacity: 0.7,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.opacity = '0.7';
          }}>
            👥
          </div>

        </nav>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Navbar */}
        <div style={{
          height: '64px',
          background: `linear-gradient(90deg, ${primaryColor} 0%, ${primaryDark} 100%)`,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          
          {/* Left side - breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center'
            }}>
              ←
            </button>
            <h1 style={{ 
              margin: 0, 
              fontSize: '18px', 
              fontWeight: '600',
              color: 'white'
            }}>
              Premium Account
            </h1>
          </div>

          {/* Right side - user profile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            
            {/* Notification Bell */}
            <button style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '0.5rem',
              borderRadius: '4px',
              opacity: 0.8,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}>
              🔔
            </button>

            {/* User Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                NK
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '14px', fontWeight: '500', color: 'white' }}>
                  Niranjan
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  CANDIDATE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ 
          flex: 1, 
          background: '#ffffff',
          padding: '1.5rem',
          overflow: 'auto'
        }}>
          {/* Full Width Dashboard */}
          <div style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            
            {/* Header Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              padding: '0 8px'
            }}>
              <div>
                <h1 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#111827',
                  margin: '0 0 4px 0'
                }}>
                  Premium Account Dashboard
                </h1>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: 0
                }}>
                  Manage your premium subscription and access your benefits
                </p>
              </div>
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                {/* Plan Toggle */}
                <div style={{
                  display: 'flex',
                  background: '#f1f5f9',
                  padding: '4px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1'
                }}>
                  <button 
                    onClick={() => setPlanType('lite')}
                    style={{
                      padding: '6px 12px',
                      background: planType === 'lite' ? '#581c60' : 'transparent',
                      color: planType === 'lite' ? 'white' : '#6b7280',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Premium Lite (₹7K/6mo)
                  </button>
                  <button 
                    onClick={() => setPlanType('premium')}
                    style={{
                      padding: '6px 12px',
                      background: planType === 'premium' ? '#581c60' : 'transparent',
                      color: planType === 'premium' ? 'white' : '#6b7280',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Premium (₹20K/6mo)
                  </button>
                </div>
                
                <button style={{
                  padding: '8px 16px',
                  background: '#581c60',
                  border: 'none',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Download Invoice
                </button>
                <button style={{
                  padding: '8px 16px',
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  color: '#475569',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Contact Support
                </button>
              </div>
            </div>


            {/* Tab Content - Enable Scrolling */}
            <div style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
              gap: '20px',
              paddingBottom: '20px'
            }}>

              {/* Account Status Card */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '24px',
                height: 'fit-content',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(88, 28, 96, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(88, 28, 96, 0.2)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#581c60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: 0
                  }}>
                    Account Status
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gap: '10px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '500' }}>Plan Type</span>
                    <span style={{ color: '#581c60', fontSize: '13px', fontWeight: '600' }}>
                      {planType === 'lite' ? 'Premium Lite' : 'Premium'}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '500' }}>Amount Paid</span>
                    <span style={{ color: '#111827', fontSize: '13px', fontWeight: '600' }}>
                      {planType === 'lite' ? '₹7,000' : '₹20,000'}
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '500' }}>Duration</span>
                    <span style={{ color: '#111827', fontSize: '13px', fontWeight: '600' }}>
                      6 months
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                    <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '500' }}>Next Billing</span>
                    <span style={{ color: '#111827', fontSize: '13px', fontWeight: '600' }}>
                      June 30, 2025
                    </span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0'
                  }}>
                    <span style={{ color: '#6b7280', fontSize: '13px', fontWeight: '500' }}>Payment Method</span>
                    <span style={{ color: '#111827', fontSize: '13px', fontWeight: '600' }}>•••• 1234</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions & Upgrade */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '24px',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}>
                {planType === 'lite' ? (
                  <>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: 0
                      }}>
                        Premium Lite Active
                      </h3>
                    </div>

                    <div style={{
                      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '12px',
                      padding: '18px',
                      marginBottom: '16px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)'
                      }}></div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: '0 0 6px 0'
                      }}>
                        Premium Lite Features Active
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: '#1e40af',
                        margin: '0 0 14px 0',
                        lineHeight: '1.4'
                      }}>
                        ₹7,000 for 6 months of premium access. Contact support to upgrade to full Premium.
                      </p>
                      <button style={{
                        width: '100%',
                        padding: '12px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                      }}>
                        Contact Support for Upgrade
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(5, 150, 105, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(5, 150, 105, 0.2)'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: 0
                      }}>
                        Premium Active - ₹20,000/6 months
                      </h3>
                    </div>

                    <div style={{
                      background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
                      border: '1px solid rgba(5, 150, 105, 0.3)',
                      borderRadius: '12px',
                      padding: '18px',
                      marginBottom: '16px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #059669 0%, #047857 100%)'
                      }}></div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: '0 0 6px 0'
                      }}>
                        All Premium Features Active
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: '#065f46',
                        margin: '0 0 12px 0',
                        lineHeight: '1.4'
                      }}>
                        ₹20,000 for 6 months of premium access & exclusive benefits
                      </p>
                      
                      {/* Key Premium Benefits */}
                      <div style={{ 
                        display: 'grid', 
                        gap: '8px',
                        marginTop: '12px' 
                      }}>
                        {[
                          { icon: 'fas fa-infinity', text: 'Unlimited job applications' },
                          { icon: 'fas fa-video', text: 'Exclusive live training' },
                          { icon: 'fas fa-phone-alt', text: 'Weekly mentor calls' }
                        ].map((benefit, idx) => (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '12px',
                            color: '#047857'
                          }}>
                            <i className={benefit.icon} style={{ 
                              color: '#059669', 
                              fontSize: '10px',
                              width: '12px' 
                            }}></i>
                            <span>{benefit.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div style={{
                  marginTop: 'auto'
                }}>
                  <h4 style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: '0 0 8px 0'
                  }}>
                    Quick Actions
                  </h4>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    background: '#f8fafc',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    </svg>
                    Download All Invoices
                  </button>
                </div>
              </div>

              {/* Premium Features Section - Full Width */}
              <div style={{
                gridColumn: '1 / -1',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #581c60 0%, #7A2187 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 4px 6px -1px rgba(88, 28, 96, 0.3)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#111827',
                        margin: '0 0 4px 0'
                      }}>
                        Premium Features Access
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        margin: 0
                      }}>
                        Both plans have identical features except live training in NCET Plus program
                      </p>
                    </div>
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                    color: '#166534',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '1px solid #bbf7d0',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}>
                    ✓ All Features Active
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '20px'
                }}>
                  {[
                    { name: 'Hackathons', desc: 'Participate in coding competitions and challenges', icon: 'fas fa-trophy', color: '#7A2187' },
                    { name: 'Career Opportunities', desc: 'Unlimited + Priority Job Matching', icon: 'fas fa-briefcase', color: '#7A2187' },
                    { name: 'NCET Test', desc: 'NCET Test + Program + Video Recorded Sessions', icon: 'fas fa-graduation-cap', color: '#7A2187' },
                    { name: 'Career Assessments', desc: 'Unlimited Tests + Advanced Analytics', icon: 'fas fa-clipboard-check', color: '#7A2187' },
                    { name: 'NCET Plus Programs', desc: planType === 'lite' ? 'Live Training Program - Upgrade to Premium' : '1 Program + Live Training + Video Recorded Sessions', icon: 'fas fa-plus-circle', color: '#7A2187', premiumOnly: true },
                    { name: 'Career Guidance & Roadmap', desc: 'Personalized Roadmaps based on your Career Aspirations and Preferences', icon: 'fas fa-map-marked-alt', color: '#7A2187' },
                    { name: 'Courses & Certification', desc: '100% Access + Certificate', icon: 'fas fa-certificate', color: '#7A2187' },
                    { name: 'Sandbox Pro', desc: 'Advanced coding environments for practice', icon: 'fas fa-desktop', color: '#7A2187' },
                    { name: 'Capstone Projects & AI Support', desc: '3 Capstone Projects - With AI Support', icon: 'fas fa-project-diagram', color: '#7A2187' }
                  ].map((feature, index) => {
                    const isUnavailable = feature.premiumOnly && planType === 'lite';
                    
                    return (
                      <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '20px',
                      background: isUnavailable ? '#f9fafb' : '#fafbfc',
                      borderRadius: '12px',
                      border: `1px solid ${isUnavailable ? '#e5e7eb' : '#f1f5f9'}`,
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                      opacity: isUnavailable ? 0.6 : 1,
                      position: 'relative'
                    }}>
                      {isUnavailable && (
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                          color: '#92400e',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '10px',
                          fontWeight: '600',
                          border: '1px solid #fbbf24'
                        }}>
                          UPGRADE REQUIRED
                        </div>
                      )}
                      
                      <div style={{
                        width: '44px',
                        height: '44px',
                        background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                        border: `2px solid ${feature.color}40`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        boxShadow: `0 4px 12px ${feature.color}20`,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = `0 6px 20px ${feature.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = `0 4px 12px ${feature.color}20`;
                      }}>
                        <i className={feature.icon} style={{ color: feature.color, fontSize: '22px' }}></i>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: '#111827',
                          margin: '0 0 4px 0',
                          lineHeight: '1.4'
                        }}>
                          {feature.name}
                        </h5>
                        <p style={{
                          fontSize: '13px',
                          color: '#6b7280',
                          margin: 0,
                          lineHeight: '1.5'
                        }}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;