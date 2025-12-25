
import { StartupProject, AdminStats, UserRole, AppUser, SubscriptionLevel } from './types';

export const MOCK_USERS: AppUser[] = [
  { 
    id: 'u1', email: 'guest@catalyst.com', name: '訪客模式', role: UserRole.GUEST, subscription: SubscriptionLevel.NONE, isKycVerified: false 
  },
  { 
    id: 'u2', email: 'wang@catalyst.com', name: '王大同', role: UserRole.INVESTOR, subscription: SubscriptionLevel.ANGEL, isKycVerified: true 
  },
  { 
    id: 'u3', 
    email: 'lee@catalyst.com',
    name: '李新創', 
    role: UserRole.ENTREPRENEUR, 
    subscription: SubscriptionLevel.NONE,
    title: '連續創業家 / 能源轉型專家',
    bio: '擁有超過 10 年的再生能源開發經驗，曾成功帶領三家新創公司進入 A 輪融資。目前專注於智慧微電網的分配效率提升。',
    isKycVerified: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
  },
  { 
    id: 'u4', email: 'admin@catalyst.com', name: '平台管理員', role: UserRole.ADMIN, subscription: SubscriptionLevel.NONE, isKycVerified: true 
  },
];

export const MOCK_ADMIN_STATS: AdminStats = {
  totalSubscribers: 1248,
  activeMatchings: 86,
  totalFundraised: 285000000,
  platformActivity: [
    { day: '週一', visits: 420, matchings: 12 },
    { day: '週二', visits: 550, matchings: 18 },
    { day: '週三', visits: 480, matchings: 15 },
    { day: '週四', visits: 720, matchings: 25 },
    { day: '週五', visits: 610, matchings: 20 },
    { day: '週六', visits: 380, matchings: 8 },
    { day: '週日', visits: 450, matchings: 10 },
  ]
};

export const MOCK_PROJECTS: StartupProject[] = [
  {
    id: '1',
    name: 'EcoNexus 智慧能源',
    tagline: '重新定義城市微電網的分配效率',
    category: '綠色科技',
    description: 'EcoNexus 致力於利用區塊鏈與 AI 技術，優化城市建築間的剩餘電力分配。',
    targetAmount: 50000000,
    currentAmount: 12500000,
    equityOffered: '8% - 12%',
    investorCount: 42,
    status: 'ACTIVE',
    founder: {
      id: 'u3',
      name: '李新創',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      title: '執行長暨創辦人',
      bio: '擁有超過 10 年的再生能源開發經驗，曾成功帶領三家新創公司進入 A 輪融資。',
      isKycVerified: true
    },
    highlights: ['核心演算法專利', '試點效率提升 28%'],
    planSummary: '預計 24 個月內達到損益兩平點。',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
  },
  {
    // Fix: Completed the missing properties for the second project object
    id: '2',
    name: 'MedAI 核心醫療',
    tagline: 'AI 輔助精準癌症早期篩檢系統',
    category: '醫療生技',
    description: 'MedAI 開發的深度學習模型能識別細微病變特徵，輔助臨床醫師提高早期診斷率。',
    targetAmount: 80000000,
    currentAmount: 64000000,
    equityOffered: '5% - 10%',
    investorCount: 85,
    status: 'ACTIVE',
    founder: {
      id: 'u5',
      name: '陳美玲',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      title: '首席醫療官',
      bio: '醫學影像辨識領域專家，擁有超過 15 年臨床經驗。',
      isKycVerified: true
    },
    highlights: ['臨床準確率 98%', '已取得 TFDA 醫材認證'],
    planSummary: '目標在 18 個月內推廣至全台 20 家重點區域醫院，並啟動東南亞擴張計畫。',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
  }
];
