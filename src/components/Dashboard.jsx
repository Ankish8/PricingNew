import React, { useState } from 'react';

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [planType, setPlanType] = useState('halfyearly'); // 'halfyearly' or 'yearly'

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
                    onClick={() => setPlanType('halfyearly')}
                    style={{
                      padding: '6px 12px',
                      background: planType === 'halfyearly' ? '#581c60' : 'transparent',
                      color: planType === 'halfyearly' ? 'white' : '#6b7280',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    6-Month User
                  </button>
                  <button 
                    onClick={() => setPlanType('yearly')}
                    style={{
                      padding: '6px 12px',
                      background: planType === 'yearly' ? '#581c60' : 'transparent',
                      color: planType === 'yearly' ? 'white' : '#6b7280',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Yearly User
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
                      {planType === 'halfyearly' ? 'Premium 6-Month' : 'Premium Yearly'}
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
                      {planType === 'halfyearly' ? '₹20,000' : '₹15,000'}
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
                      {planType === 'halfyearly' ? 'June 30, 2025' : 'December 30, 2025'}
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
                {planType === 'halfyearly' ? (
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
                        background: 'rgba(245, 158, 11, 0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(245, 158, 11, 0.2)'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z"/>
                        </svg>
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: 0
                      }}>
                        Upgrade Available
                      </h3>
                    </div>

                    <div style={{
                      background: 'linear-gradient(135deg, #fefbf3 0%, #fdf6e3 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
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
                        background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)'
                      }}></div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: '0 0 6px 0'
                      }}>
                        Switch to Yearly Plan
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: '#92400e',
                        margin: '0 0 14px 0',
                        lineHeight: '1.4'
                      }}>
                        Save ₹5,000 and get priority support
                      </p>
                      <button style={{
                        width: '100%',
                        padding: '12px',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(245, 158, 11, 0.3)'
                      }}>
                        Upgrade to Yearly
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
                          <path d="M9 12l2 2 4-4"/>
                          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                        </svg>
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#111827',
                        margin: 0
                      }}>
                        Premium Benefits
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
                        Yearly Plan Active
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: '#065f46',
                        margin: '0',
                        lineHeight: '1.4'
                      }}>
                        You're saving ₹5,000 annually with priority support included
                      </p>
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
                        All premium features are active and available for use
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '24px'
                }}>
                  {[
                    { name: 'Profile Building', desc: 'Full access + AI resume builder', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', color: '#581c60' },
                    { name: 'Unlimited Applications', desc: 'Apply to unlimited positions', icon: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M8 8h8M8 12h8', color: '#7c3aed' },
                    { name: 'Corporate Visibility', desc: 'Direct employer access to your profile', icon: 'M3 21h18M5 21V7l8-4v18M19 21V11l-6-4', color: '#2563eb' },
                    { name: 'Career Assessment', desc: 'Complete psychometric test suite', icon: 'M9 11H3v8h6m0 0l3-3m6 1h6v-8h-6m0 0l-3 3M9 7h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z', color: '#059669' },
                    { name: 'AI Assistance', desc: 'Smart career guidance & recommendations', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 18 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386L11.663 15a5 5 0 0 1-1.11-2.02', color: '#dc2626' },
                    { name: 'Mentor Support', desc: 'One-on-one mentorship sessions', icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z', color: '#7c2d12' },
                    { name: 'NCET Attempts', desc: '5 premium test attempts included', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z', color: '#16a34a' },
                    { name: 'NCET Plus', desc: 'Advanced features & detailed analytics', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z', color: '#ea580c' },
                    { name: 'Sandbox Instances', desc: 'Unlimited practice environments', icon: 'M5 12V7a1 1 0 0 1 1-1h4l2 2h4a1 1 0 0 1 1 1v3M5 12l-2 7h14l-2-7M5 12h14', color: '#0891b2' },
                    { name: 'Capstone Projects', desc: '3 industry-level projects included', icon: 'M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L6.05 15.21a2 2 0 0 0-1.806.547M8 4h8l-1 1v5.172a2 2 0 0 0 .586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 0 0 9 10.172V5L8 4z', color: '#9333ea' },
                    { name: 'TalentX Program', desc: 'Exclusive opportunities & networking', icon: 'M13.828 10.172a4 4 0 0 0-7.656 0l-.828 2.484a2 2 0 0 0 1.897 2.616h6.518a2 2 0 0 0 1.897-2.616l-.828-2.484zM8 8v4M12 8v4', color: '#be185d' },
                    { name: 'Wave Scholarship', desc: 'Eligible for premium scholarships', icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z', color: '#0f766e' }
                  ].map((feature, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '20px',
                      background: '#fafbfc',
                      borderRadius: '12px',
                      border: '1px solid #f1f5f9',
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                    }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        background: `${feature.color}15`,
                        border: `1px solid ${feature.color}30`,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={feature.color} stroke={feature.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d={feature.icon}/>
                        </svg>
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
                  ))}
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