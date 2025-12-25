
export enum TabType {
  PROJECT = '創業項目',
  INVESTMENT = '投資數據',
  BUSINESS_PLAN = '深度企劃',
  CONTACT = '啟動媒合'
}

export enum UserRole {
  GUEST = '訪客',
  INVESTOR = '投資人',
  ENTREPRENEUR = '創業者',
  ADMIN = '管理員'
}

export enum SubscriptionLevel {
  NONE = 'FREE',
  ANGEL = 'ANGEL_TIER',
  INSTITUTIONAL = 'VC_TIER'
}

/* Added missing InvestorType enum */
export enum InvestorType {
  PROFESSIONAL = 'PROFESSIONAL',
  GENERAL = 'GENERAL'
}

export interface AppUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  subscription: SubscriptionLevel;
  title?: string;
  bio?: string;
  avatar?: string;
  isKycVerified: boolean;
  company?: string;
}

export interface StartupProject {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  equityOffered: string;
  investorCount: number;
  status: 'PENDING' | 'ACTIVE' | 'FUNDED';
  founder: {
    id: string;
    name: string;
    avatar: string;
    title: string;
    bio?: string;
    isKycVerified: boolean;
  };
  highlights: string[];
  planSummary: string;
  imageUrl: string;
}

export interface AdminStats {
  totalSubscribers: number;
  activeMatchings: number;
  totalFundraised: number;
  platformActivity: { day: string; visits: number; matchings: number }[];
}