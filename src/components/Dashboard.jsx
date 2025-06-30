import React, { useState } from 'react';

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const primaryColor = '#581c60'; // From your color palette
  const primaryDark = '#4c1d5c';

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Sidebar */}
      <div style={{
        width: sidebarExpanded ? '240px' : '60px',
        background: `linear-gradient(180deg, ${primaryColor} 0%, ${primaryDark} 100%)`,
        color: 'white',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        
        {/* Logo Section */}
        <div style={{ 
          padding: '1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
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
            fontSize: '14px',
            flexShrink: 0
          }}>
            MA
          </div>
          {sidebarExpanded && (
            <>
              <span style={{ fontWeight: '600', fontSize: '16px' }}>MyAnatomy</span>
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '9px',
                fontWeight: '600',
                marginLeft: 'auto'
              }}>
                PREMIUM
              </span>
            </>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '-12px',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'white',
            border: '2px solid #e5e7eb',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#6b7280',
            zIndex: 10
          }}
        >
          {sidebarExpanded ? '‹' : '›'}
        </button>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '1rem 0' }}>
          
          {/* Dashboard */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <div style={{ width: '20px', textAlign: 'center' }}>⊞</div>
            {sidebarExpanded && <span>Dashboard</span>}
          </div>

          {/* Plus Programs */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
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
            <div style={{ width: '20px', textAlign: 'center' }}>⊟</div>
            {sidebarExpanded && <span>Plus Programs</span>}
          </div>

          {/* Calendar */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
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
            <div style={{ width: '20px', textAlign: 'center' }}>📅</div>
            {sidebarExpanded && <span>Calendar</span>}
          </div>

          {/* Programs */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
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
            <div style={{ width: '20px', textAlign: 'center' }}>⊞</div>
            {sidebarExpanded && <span>Programs</span>}
          </div>

          {/* Books */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
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
            <div style={{ width: '20px', textAlign: 'center' }}>📚</div>
            {sidebarExpanded && <span>Books</span>}
          </div>

          {/* Assessments */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
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
            <div style={{ width: '20px', textAlign: 'center' }}>📋</div>
            {sidebarExpanded && <span>Assessments</span>}
          </div>

          {/* Mentorship */}
          <div style={{
            margin: '0 0.75rem 0.5rem',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
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
            <div style={{ width: '20px', textAlign: 'center' }}>👥</div>
            {sidebarExpanded && <span>Mentorship</span>}
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
          padding: '2rem',
          overflow: 'auto'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#1e293b', 
              marginBottom: '2rem' 
            }}>
              Dashboard Content Will Go Here
            </h2>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              This is where we'll add the billing information, premium features, and upgrade options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;