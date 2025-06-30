import { useState, useEffect } from 'react';

// Demo user states - replace with actual API calls in production
const mockUserData = {
  freemium: {
    isAuthenticated: true,
    user: {
      name: "Demo User",
      email: "demo@example.com"
    },
    subscription: {
      status: "freemium",
      plan: "freemium",
      billingCycle: null,
      currentPeriodEnd: null,
      features: {
        profileBuilding: "basic",
        hackathons: "full",
        corporateVisibility: false,
        careerOpportunities: "limited", // 1 per category
        ncetAttempts: 1,
        careerAssessment: "limited", // 2 tests
        ncetPlus: false,
        sandboxInstances: 5,
        capstoneProjects: 1,
        aiAssistance: false,
        mentorSupport: false,
        rewards: "capped",
        leaderboard: "basic",
        talentX: false,
        waveScholarship: false
      }
    }
  },
  premium: {
    isAuthenticated: true,
    user: {
      name: "Premium User",
      email: "premium@example.com"
    },
    subscription: {
      status: "active",
      plan: "premium",
      billingCycle: "yearly", // yearly | halfyearly
      currentPeriodEnd: "2025-06-30",
      amount: 15000, // yearly: 15000, halfyearly: 20000
      currency: "INR",
      features: {
        profileBuilding: "full", // video resume + AI
        hackathons: "full",
        corporateVisibility: true,
        careerOpportunities: "unlimited",
        ncetAttempts: 5,
        careerAssessment: "full",
        ncetPlus: true,
        sandboxInstances: "unlimited",
        capstoneProjects: 3,
        aiAssistance: true,
        mentorSupport: true,
        rewards: "unlimited",
        leaderboard: "premium",
        talentX: true,
        waveScholarship: true,
        moneyBackGuarantee: true
      }
    },
    billing: {
      nextBillingDate: "2025-06-30",
      paymentMethod: "card_****1234"
    }
  }
};

export const useSubscription = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Demo: Randomly show freemium or premium user
      // In production, replace with actual API call
      const userType = Math.random() > 0.5 ? 'premium' : 'freemium';
      setUser(mockUserData[userType]);
      setLoading(false);
    }, 500);
  }, []);

  const isPremium = () => user?.subscription?.status === 'active' && user?.subscription?.plan === 'premium';
  const isFreemium = () => user?.subscription?.status === 'freemium';
  const isAuthenticated = () => user?.isAuthenticated;

  const getPlanDisplayName = () => {
    if (!user) return null;
    if (isPremium()) return 'Premium';
    if (isFreemium()) return 'Freemium';
    return null;
  };

  const getBillingInfo = () => {
    if (!isPremium()) return null;
    
    const { billingCycle, amount, currentPeriodEnd } = user.subscription;
    const period = billingCycle === 'yearly' ? 'year' : '6 months';
    const nextBilling = new Date(currentPeriodEnd).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    
    return {
      amount,
      period,
      nextBilling,
      billingCycle
    };
  };

  return {
    user,
    loading,
    isPremium: isPremium(),
    isFreemium: isFreemium(),
    isAuthenticated: isAuthenticated(),
    planDisplayName: getPlanDisplayName(),
    billingInfo: getBillingInfo()
  };
};