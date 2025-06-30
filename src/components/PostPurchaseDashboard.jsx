import React, { useState } from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { MagicCard } from './magicui/magic-card';
import { ShineBorder } from './magicui/shine-border';
import { RainbowButton } from './magicui/rainbow-button';
import { ShimmerButton } from './magicui/shimmer-button';

const PostPurchaseDashboard = () => {
  const { user, loading, billingInfo } = useSubscription();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Force premium user for post-purchase dashboard
  const premiumUser = {
    isAuthenticated: true,
    user: {
      name: "Niranjan Kumar",
      email: "niranjan@example.com"
    },
    subscription: {
      status: "active",
      plan: "premium",
      billingCycle: "halfyearly", // Show upgrade option
      currentPeriodEnd: "2025-06-30",
      amount: 20000,
      currency: "INR"
    }
  };

  const premiumBillingInfo = {
    amount: 20000,
    period: '6 months',
    nextBilling: '30 Jun, 2025',
    billingCycle: 'halfyearly'
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        background: '#f8fafc'
      }}>
        <p style={{ color: '#64748b' }}>Loading...</p>
      </div>
    );
  }

  const features = [
    { name: 'Profile Building', value: 'Full Access + AI Resume', active: true },
    { name: 'Corporate Visibility', value: 'Enabled', active: true },
    { name: 'Career Opportunities', value: 'Unlimited Applications', active: true },
    { name: 'NCET Attempts', value: '5 Attempts', active: true },
    { name: 'Career Assessment', value: 'Full Suite', active: true },
    { name: 'NCET Plus', value: 'Premium Access', active: true },
    { name: 'Sandbox Instances', value: 'Unlimited', active: true },
    { name: 'Capstone Projects', value: '3 Projects', active: true },
    { name: 'AI Assistance', value: 'Full Access', active: true },
    { name: 'Mentor Support', value: '1-on-1 Sessions', active: true },
    { name: 'TalentX Program', value: 'Exclusive Access', active: true },
    { name: 'Wave Scholarship', value: 'Eligible', active: true }
  ];

  const canUpgrade = premiumBillingInfo?.billingCycle === 'halfyearly';

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f8fafc' }}>
      {/* Sidebar - matching dashboard structure */}
      <div style={{
        width: '240px',
        background: 'linear-gradient(180deg, #581c60 0%, #4c1d5c 100%)',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            marginBottom: '2rem'
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
            <span style={{ fontWeight: '600', fontSize: '16px' }}>MyAnatomy</span>
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: '600',
              marginLeft: '0.5rem'
            }}>
              PREMIUM
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1 }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '14px'
            }}>
              <span>📊</span>
              <span>Dashboard</span>
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '14px',
              opacity: 0.7
            }}>
              <span>📚</span>
              <span>Programs</span>
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              padding: '0.75rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '14px',
              opacity: 0.7
            }}>
              <span>💳</span>
              <span>Billing</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header - matching dashboard structure */}
        <div style={{
          background: 'white',
          borderBottom: '1px solid #e2e8f0',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: '#1e293b' 
          }}>
            Premium Account
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {premiumUser.user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>
                {premiumUser.user.name}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                PREMIUM USER
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ 
          flex: 1, 
          padding: '2rem', 
          background: 'white',
          overflowY: 'auto'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Billing Information Section */}
            <MagicCard
              className="h-auto"
              gradientColor="#7A2187"
              style={{ marginBottom: '2rem', padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ 
                    margin: '0 0 1rem 0', 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#1e293b' 
                  }}>
                    Billing Information
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        color: '#64748b', 
                        marginBottom: '0.25rem' 
                      }}>
                        Current Plan
                      </label>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '1rem', 
                        fontWeight: '600', 
                        color: '#7A2187' 
                      }}>
                        Premium {premiumBillingInfo?.period === 'year' ? 'Yearly' : '6-Month'}
                      </p>
                    </div>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        color: '#64748b', 
                        marginBottom: '0.25rem' 
                      }}>
                        Amount
                      </label>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '1rem', 
                        fontWeight: '600', 
                        color: '#1e293b' 
                      }}>
                        ₹{premiumBillingInfo?.amount?.toLocaleString()} / {premiumBillingInfo?.period}
                      </p>
                    </div>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        color: '#64748b', 
                        marginBottom: '0.25rem' 
                      }}>
                        Next Billing
                      </label>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '1rem', 
                        fontWeight: '600', 
                        color: '#1e293b' 
                      }}>
                        {premiumBillingInfo?.nextBilling}
                      </p>
                    </div>
                    <div>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.875rem', 
                        color: '#64748b', 
                        marginBottom: '0.25rem' 
                      }}>
                        Status
                      </label>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: '#dcfce7',
                        color: '#166534',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: '#22c55e' 
                        }}></span>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Upgrade Option */}
                {canUpgrade && (
                  <ShineBorder
                    className="relative"
                    color={["#7A2187", "#A855F7", "#D946EF"]}
                    style={{ padding: '1rem', borderRadius: '12px', background: 'white' }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <h4 style={{ 
                        margin: '0 0 0.5rem 0', 
                        fontSize: '1rem', 
                        fontWeight: '600', 
                        color: '#1e293b' 
                      }}>
                        Upgrade to Yearly
                      </h4>
                      <p style={{ 
                        margin: '0 0 1rem 0', 
                        fontSize: '0.875rem', 
                        color: '#64748b',
                        lineHeight: '1.4'
                      }}>
                        Save ₹5,000 by switching to yearly billing
                      </p>
                      <RainbowButton
                        onClick={() => setShowUpgradeModal(true)}
                        style={{
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        Upgrade Plan
                      </RainbowButton>
                    </div>
                  </ShineBorder>
                )}
              </div>
            </MagicCard>

            {/* Premium Features Section */}
            <MagicCard
              className="h-auto"
              gradientColor="#7A2187"
              style={{ padding: '1.5rem' }}
            >
              <h3 style={{ 
                margin: '0 0 1.5rem 0', 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                color: '#1e293b' 
              }}>
                Your Premium Features
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1rem' 
              }}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '1rem',
                      background: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <h4 style={{ 
                        margin: '0 0 0.25rem 0', 
                        fontSize: '0.875rem', 
                        fontWeight: '600', 
                        color: '#1e293b' 
                      }}>
                        {feature.name}
                      </h4>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '0.75rem', 
                        color: '#64748b' 
                      }}>
                        {feature.value}
                      </p>
                    </div>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#22c55e',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </MagicCard>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div style={{
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
          padding: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              margin: '0 0 1rem 0', 
              fontSize: '1.25rem', 
              fontWeight: '600', 
              color: '#1e293b' 
            }}>
              Upgrade to Yearly Plan
            </h3>
            <p style={{ 
              margin: '0 0 1.5rem 0', 
              fontSize: '0.875rem', 
              color: '#64748b',
              lineHeight: '1.5'
            }}>
              Switch to yearly billing and save ₹5,000. Your current billing cycle will be adjusted and you'll receive a prorated credit.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'flex-end' 
            }}>
              <button
                onClick={() => setShowUpgradeModal(false)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '1px solid #d1d5db',
                  background: 'white',
                  color: '#6b7280',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <RainbowButton
                onClick={() => {
                  // Handle upgrade logic here
                  setShowUpgradeModal(false);
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                Upgrade Now
              </RainbowButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPurchaseDashboard;