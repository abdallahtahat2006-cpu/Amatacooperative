export interface GoalItem {
  id: number;
  category: 'members' | 'projects' | 'services' | 'social' | 'cooperation';
  categoryTitleAr: string;
  shortTitle: string;
  officialText: string;
  articleRef: string;
  iconName: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
}

export interface ExecutiveCommittee {
  id: number;
  name: string;
  roleDescription: string;
  articleRef: string;
  keyResponsibilities: string[];
  iconName: string;
}

export const COOPERATIVE_INFO = {
  name: 'تعاونية عمّتا متعددة الأغراض محدودة المسؤولية',
  shortName: 'تعاونية عمّتا',
  typeSubtitle: 'متعددة الأغراض / محدودة المسؤولية',
  governorate: 'محافظة البلقاء',
  center: 'محافظة البلقاء — البلاونة',
  workArea: 'محافظة البلقاء، مع حق فتح فروع في جميع أنحاء المملكة',
  type: 'متعددة الأغراض / محدودة المسؤولية',
  capitalDescription: 'عدد غير محدد من الأسهم، قيمة كل سهم دينار أردني واحد (المادة 10)',
  shareNominalValueJOD: 1,
  minShares: 500,
  maxShares: 40000,
  membershipFeeJOD: 25,
  installmentDownpaymentFraction: 'خمس المبلغ (20%)',
  installmentPeriodMonths: 24,
  phoneRaw: '0790335694',
  phoneDisplay: '079 033 5694',
  phoneInternational: '+962790335694',
  phoneTelLink: 'tel:+962790335694',
  whatsappNumber: '962790335694',
  whatsappPrefilledMessage: 'السلام عليكم، أرغب بالاستفسار عن شروط الانتساب والاكتتاب في تعاونية عمتا وفق النظام الأساسي.',
  email: 'amatacooperative@gmail.com',
  emailMailto: 'mailto:amatacooperative@gmail.com',
  logoCleanPath: '/assets/logo_clean.png',
  logoWhitePath: '/assets/logo_white.png',
  cardImagePath: '/assets/amta-card.jpg',
  aboutSummary: 'تعاونية عمّتا جمعية تعاونية أردنية متعددة الأغراض محدودة المسؤولية، تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد. تتخذ من محافظة البلقاء عنواناً لها، ومركزها البلاونة، وتمتد منطقة عملها لتشمل محافظة البلقاء مع حق فتح فروع لها في جميع أنحاء المملكة.',
  legalStatus: 'وتُعد التعاونية منظمة أهلية يديرها أشخاص منتخبون أو معينون، وفقاً للمبادئ والتشريعات التعاونية المعمول بها في المملكة الأردنية الهاشمية، ولها صفة الشخصية الاعتبارية الاعتيادية، بما يخوّلها امتلاك الأموال المنقولة وغير المنقولة، وذلك تحقيقاً لغاياتها وأهدافها وفقاً لنظامها الأساسي.',
  membershipEligibility: 'باب الانتساب للتعاونية مفتوح لكل أردني أتم الثامنة عشرة من عمره ويتمتع بالأهلية القانونية، دون تمييز سياسي أو ديني أو عنصري، وفق الشروط المحددة في النظام الأساسي (المادة 3).'
};

export const OFFICIAL_GOALS: GoalItem[] = [
  {
    id: 1,
    category: 'members',
    categoryTitleAr: 'دعم الأعضاء والمشاريع',
    shortTitle: 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية',
    officialText: 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية وغيرها بتقديم الخبرة والسعي لتوفير التمويل والخدمات اللازمة لها.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Briefcase'
  },
  {
    id: 2,
    category: 'members',
    categoryTitleAr: 'دعم الأعضاء والمشاريع',
    shortTitle: 'إنشاء وتأسيس الشركات والمؤسسات والمشاريع المشتركة',
    officialText: 'إنشاء وتأسيس الشركات والمؤسسات والمشاريع المشتركة العائدة بالنفع العام على الأعضاء.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Building2'
  },
  {
    id: 3,
    category: 'projects',
    categoryTitleAr: 'المشاريع والإنتاج والطاقة',
    shortTitle: 'إنشاء المشاريع وعقد الاتفاقيات المتعلقة بالطاقة المتجددة',
    officialText: 'إنشاء المشاريع وعقد الاتفاقيات المتعلقة بالطاقة المتجددة ضمن الأنظمة الناظمة.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Zap'
  },
  {
    id: 4,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    shortTitle: 'نشر الحركة التعاونية والتعاون مع التعاونيات الأخرى',
    officialText: 'نشر الحركة التعاونية والتعاون مع التعاونيات الأخرى والانتساب للهيئات المعنية.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Users'
  },
  {
    id: 5,
    category: 'projects',
    categoryTitleAr: 'المشاريع والإنتاج والطاقة',
    shortTitle: 'تأسيس وإدارة المحلات التجارية والمخازن',
    officialText: 'تأسيس وإدارة المحلات التجارية والمخازن اللازمة لتنفيذ غايات التعاونية.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Store'
  },
  {
    id: 6,
    category: 'services',
    categoryTitleAr: 'الخدمات والاحتياجات الأساسية',
    shortTitle: 'تزويد الأعضاء بمواد غذائية ولوازم استهلاكية وسلع',
    officialText: 'تزويد الأعضاء بمواد غذائية ولوازم استهلاكية وسلع بأسعار معقولة.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'ShoppingBag'
  },
  {
    id: 7,
    category: 'projects',
    categoryTitleAr: 'المشاريع والإنتاج والطاقة',
    shortTitle: 'إنتاج وتصنيع واستيراد المواد التموينية والسلع',
    officialText: 'إنتاج وتصنيع واستيراد المواد التموينية والسلع، وعقد الاتفاقيات والمناقصات اللازمة لذلك.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Factory'
  },
  {
    id: 8,
    category: 'members',
    categoryTitleAr: 'دعم الأعضاء والمشاريع',
    shortTitle: 'تملّك الأموال المنقولة وغير المنقولة',
    officialText: 'تملّك الأموال المنقولة وغير المنقولة لتنفيذ غاياتها، باستثناء الاتجار بالعقارات.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Landmark'
  },
  {
    id: 9,
    category: 'services',
    categoryTitleAr: 'الخدمات والاحتياجات الأساسية',
    shortTitle: 'مساعدة الأعضاء على إنشاء أماكن للخدمات العامة',
    officialText: 'مساعدة الأعضاء على إنشاء أماكن للخدمات العامة وتنظيمها والقيام بالأشغال العامة نيابة عنهم.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Wrench'
  },
  {
    id: 10,
    category: 'social',
    categoryTitleAr: 'التنمية الاجتماعية والتكافل',
    shortTitle: 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ',
    officialText: 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ لمنفعة الأعضاء.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'ShieldAlert'
  },
  {
    id: 11,
    category: 'social',
    categoryTitleAr: 'التنمية الاجتماعية والتكافل',
    shortTitle: 'مكافحة البطالة وتقديم العون المادي للمحتاجين',
    officialText: 'مكافحة البطالة وتقديم العون المادي للمحتاجين والمساهمة في أعمال البر.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'HeartHandshake'
  },
  {
    id: 12,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    shortTitle: 'إيجاد وتوفير الأموال اللازمة عبر المساهمات والرسوم والقروض والتبرعات',
    officialText: 'إيجاد وتوفير الأموال اللازمة عبر مساهمات الأعضاء، ورسوم الانتساب، والقروض، والتبرعات.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Coins'
  },
  {
    id: 13,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    shortTitle: 'قبول الرهونات والتأمينات والكمبيالات وتحصيل القروض',
    officialText: 'قبول الرهونات والتأمينات والكمبيالات وتحصيل القروض التي تمنحها للأعضاء.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Receipt'
  },
  {
    id: 14,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    shortTitle: 'تنفيذ البرامج بالتعاون والتنسيق مع الجهات ذات العلاقة',
    officialText: 'تنفيذ البرامج بالتعاون والتنسيق مع الجهات ذات العلاقة في مختلف القطاعات.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    iconName: 'Network'
  }
];

export const GOAL_CATEGORIES = [
  { id: 'all', titleAr: 'جميع الغايات (14)' },
  { id: 'members', titleAr: 'دعم الأعضاء والمشاريع' },
  { id: 'projects', titleAr: 'المشاريع والإنتاج والطاقة' },
  { id: 'services', titleAr: 'الخدمات والاحتياجات الأساسية' },
  { id: 'social', titleAr: 'التنمية الاجتماعية والتكافل' },
  { id: 'cooperation', titleAr: 'التعاون والموارد والتمويل' }
];

export const ADMINISTRATION_COMMITTEE: CommitteeMember[] = [
  { name: 'د. فهمي البلاونة', role: 'رئيس اللجنة' },
  { name: 'م. يحيى أبو زنيمه', role: 'عضو' },
  { name: 'د. معتصم الغوشة', role: 'عضو' },
  { name: 'م. براءة الياسين', role: 'السكرتير' },
  { name: 'م. سجود البلاونة', role: 'أمين الصندوق' }
];

export const OVERSIGHT_COMMITTEE: CommitteeMember[] = [
  { name: 'م. ياسين أبو زنيمه', role: 'رئيس اللجنة' },
  { name: 'عدنان الخدام', role: 'عضو' },
  { name: 'ظاهر الفقير', role: 'عضو' }
];

export const EXECUTIVE_COMMITTEES: ExecutiveCommittee[] = [
  {
    id: 1,
    name: 'لجنة التدريب والتشغيل',
    roleDescription: 'تُعنى بربط الأعضاء بفرص التدريب والتشغيل، تفعيلاً لغاية مكافحة البطالة (المادة 8/ج)، وحصر الاحتياجات التدريبية والتنسيق مع مراكز التدريب المهني.',
    articleRef: 'المادة (30/د) والمادة (8/ج) من النظام الأساسي',
    keyResponsibilities: [
      'ربط الأعضاء بفرص التدريب والتشغيل تفعيلاً لغاية مكافحة البطالة (المادة 8/ج)',
      'حصر الاحتياجات التدريبية',
      'التنسيق مع مراكز التدريب المهني'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 2,
    name: 'لجنة المشاريع الصغيرة والمتوسطة',
    roleDescription: 'تستقبل وتُقيّم أفكار المشاريع الفردية للأعضاء، وتضع معايير فرز أولية، وتُشرف على المسابقة الربع سنوية.',
    articleRef: 'المادة (30/د) من النظام الأساسي',
    keyResponsibilities: [
      'استقبال وتقييم أفكار المشاريع الفردية للأعضاء',
      'وضع معايير فرز أولية',
      'الإشراف على المسابقة الربع سنوية'
    ],
    iconName: 'Lightbulb'
  },
  {
    id: 3,
    name: 'لجنة التسويق والإعلام الرقمي',
    roleDescription: 'مسؤولة عن الحضور الرقمي للتعاونية، وإخراج المواد الترويجية، وإدارة قنوات التواصل الاجتماعي، وتوثيق زيارات التشبيك المؤسسي.',
    articleRef: 'المادة (30/د) من النظام الأساسي',
    keyResponsibilities: [
      'المسؤولية عن الحضور الرقمي للتعاونية',
      'إخراج المواد الترويجية',
      'إدارة قنوات التواصل الاجتماعي',
      'توثيق زيارات التشبيك المؤسسي'
    ],
    iconName: 'Share2'
  },
  {
    id: 4,
    name: 'لجنة المشاريع الكبرى والمنح',
    roleDescription: 'تتابع مشروعي قاعة المناسبات والمدرسة النموذجية، وتبحث عن فرص تمويل ومنح خارجية، وتُعد وثائق التقديم الأولية.',
    articleRef: 'المادة (30/د) من النظام الأساسي',
    keyResponsibilities: [
      'متابعة مشروعي قاعة المناسبات والمدرسة النموذجية',
      'البحث عن فرص تمويل ومنح خارجية',
      'إعداد وثائق التقديم الأولية'
    ],
    iconName: 'Target'
  },
  {
    id: 5,
    name: 'اللجنة الاستشارية العليا',
    roleDescription: 'تضم خبراء ومختصين من الهيئة العامة، وتقدّم رأياً استشارياً رفيع المستوى للجنة الإدارة في القرارات الكبرى ومراجعة دراسات الجدوى.',
    articleRef: 'المادة (30/د) من النظام الأساسي',
    keyResponsibilities: [
      'تضم خبراء ومختصين من الهيئة العامة',
      'تقديم رأي استشاري رفيع المستوى للجنة الإدارة في القرارات الكبرى',
      'مراجعة دراسات الجدوى'
    ],
    iconName: 'Award'
  }
];
