export interface GoalItem {
  id: number;
  category: 'members' | 'projects' | 'services' | 'social' | 'cooperation';
  categoryTitleAr: string;
  categoryTitleEn: string;
  shortTitle: string;
  shortTitleEn: string;
  officialText: string;
  officialTextEn: string;
  articleRef: string;
  articleRefEn: string;
  iconName: string;
}

export interface CommitteeMember {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
}

export interface ExecutiveCommittee {
  id: number;
  name: string;
  nameEn: string;
  roleDescription: string;
  roleDescriptionEn: string;
  articleRef: string;
  articleRefEn: string;
  keyResponsibilities: string[];
  keyResponsibilitiesEn: string[];
  iconName: string;
}

export const COOPERATIVE_INFO = {
  name: 'تعاونية عمّتا متعددة الأغراض محدودة المسؤولية',
  nameEn: 'Ammata Cooperative Multi-Purpose Society Ltd.',
  shortName: 'تعاونية عمّتا',
  shortNameEn: 'Ammata Cooperative',
  typeSubtitle: 'متعددة الأغراض / محدودة المسؤولية',
  typeSubtitleEn: 'Multi-Purpose / Limited Liability',
  governorate: 'محافظة البلقاء',
  governorateEn: 'Al-Balqa Governorate',
  center: 'محافظة البلقاء — البلاونة',
  centerEn: 'Al-Balqa Governorate — Al-Balawneh',
  workArea: 'محافظة البلقاء، مع حق فتح فروع في جميع أنحاء المملكة',
  workAreaEn: 'Al-Balqa Governorate, with the right to open branches throughout the Kingdom',
  type: 'متعددة الأغراض / محدودة المسؤولية',
  typeEn: 'Multi-purpose / Limited liability',
  capitalDescription: 'عدد غير محدد من الأسهم، قيمة كل سهم دينار أردني واحد (المادة 10)',
  capitalDescriptionEn: 'An unlimited number of shares, each valued at one Jordanian Dinar (Article 10)',
  shareNominalValueJOD: 1,
  minShares: 500,
  maxShares: 40000,
  membershipFeeJOD: 25,
  installmentDownpaymentFraction: 'خمس المبلغ (20%)',
  installmentDownpaymentFractionEn: 'One-fifth of the total (20%)',
  installmentPeriodMonths: 24,
  phoneRaw: '0790335694',
  phoneDisplay: '079 033 5694',
  phoneInternational: '+962790335694',
  phoneTelLink: 'tel:+962790335694',
  whatsappNumber: '962790335694',
  whatsappPrefilledMessage: 'السلام عليكم، أرغب بالاستفسار عن شروط الانتساب والاكتتاب في تعاونية عمتا وفق النظام الأساسي.',
  whatsappPrefilledMessageEn: 'Hello, I would like to inquire about the conditions for membership and subscription in Ammata Cooperative in accordance with its Bylaws.',
  email: 'amatacooperative@gmail.com',
  emailMailto: 'mailto:amatacooperative@gmail.com',
  logoCleanPath: '/assets/logo_clean.png',
  logoWhitePath: '/assets/logo_white.png',
  cardImagePath: '/assets/amta-card.jpg',
  aboutSummary: 'تعاونية عمّتا جمعية تعاونية أردنية متعددة الأغراض محدودة المسؤولية، تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد. تتخذ من محافظة البلقاء عنواناً لها، ومركزها البلاونة، وتمتد منطقة عملها لتشمل محافظة البلقاء مع حق فتح فروع لها في جميع أنحاء المملكة.',
  aboutSummaryEn: 'Ammata Cooperative is a Jordanian multi-purpose cooperative society with limited liability, established under the Jordanian Cooperatives Law and its approved internal regulations. Its registered address is in Al-Balqa Governorate, with headquarters in Al-Balawneh, and its area of operation covers Al-Balqa Governorate, with the right to open branches throughout the Kingdom.',
  legalStatus: 'وتُعد التعاونية منظمة أهلية يديرها أشخاص منتخبون أو معينون، وفقاً للمبادئ والتشريعات التعاونية المعمول بها في المملكة الأردنية الهاشمية، ولها صفة الشخصية الاعتبارية الاعتيادية، بما يخوّلها امتلاك الأموال المنقولة وغير المنقولة، وذلك تحقيقاً لغاياتها وأهدافها وفقاً لنظامها الأساسي.',
  legalStatusEn: 'The cooperative is a civil-society organization managed by elected or appointed persons in accordance with the cooperative principles and legislation in force in the Hashemite Kingdom of Jordan. It holds legal personality, which entitles it to own movable and immovable property in pursuit of its aims and objectives under its Bylaws.',
  membershipEligibility: 'باب الانتساب للتعاونية مفتوح لكل أردني أتم الثامنة عشرة من عمره ويتمتع بالأهلية القانونية، دون تمييز سياسي أو ديني أو عنصري، وفق الشروط المحددة في النظام الأساسي (المادة 3).',
  membershipEligibilityEn: 'Membership in the cooperative is open to every Jordanian who has completed eighteen years of age and enjoys legal capacity, without political, religious, or racial discrimination, according to the conditions specified in the Bylaws (Article 3).'
};

export const OFFICIAL_GOALS: GoalItem[] = [
  {
    id: 1,
    category: 'members',
    categoryTitleAr: 'دعم الأعضاء والمشاريع',
    categoryTitleEn: 'Member & Project Support',
    shortTitle: 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية',
    shortTitleEn: "Supporting Members' Projects",
    officialText: 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية وغيرها بتقديم الخبرة والسعي لتوفير التمويل والخدمات اللازمة لها.',
    officialTextEn: "Encouraging and supporting members' professional, industrial, educational and other projects by providing expertise and seeking to secure the financing and services they need.",
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Briefcase'
  },
  {
    id: 2,
    category: 'members',
    categoryTitleAr: 'دعم الأعضاء والمشاريع',
    categoryTitleEn: 'Member & Project Support',
    shortTitle: 'إنشاء وتأسيس الشركات والمؤسسات والمشاريع المشتركة',
    shortTitleEn: 'Establishing Joint Ventures',
    officialText: 'إنشاء وتأسيس الشركات والمؤسسات والمشاريع المشتركة العائدة بالنفع العام على الأعضاء.',
    officialTextEn: 'Creating and establishing companies, institutions and joint projects of general benefit to members.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Building2'
  },
  {
    id: 3,
    category: 'projects',
    categoryTitleAr: 'المشاريع والإنتاج والطاقة',
    categoryTitleEn: 'Projects, Production & Energy',
    shortTitle: 'إنشاء المشاريع وعقد الاتفاقيات المتعلقة بالطاقة المتجددة',
    shortTitleEn: 'Renewable Energy',
    officialText: 'إنشاء المشاريع وعقد الاتفاقيات المتعلقة بالطاقة المتجددة ضمن الأنظمة الناظمة.',
    officialTextEn: 'Encouraging and supporting renewable energy projects for the benefit of members.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Zap'
  },
  {
    id: 4,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    categoryTitleEn: 'Cooperation, Resources & Funding',
    shortTitle: 'نشر الحركة التعاونية والتعاون مع التعاونيات الأخرى',
    shortTitleEn: 'Promoting Cooperative Work',
    officialText: 'نشر الحركة التعاونية والتعاون مع التعاونيات الأخرى والانتساب للهيئات المعنية.',
    officialTextEn: 'Spreading the cooperative movement, cooperating with other cooperatives and joining the relevant bodies.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Users'
  },
  {
    id: 5,
    category: 'projects',
    categoryTitleAr: 'المشاريع والإنتاج والطاقة',
    categoryTitleEn: 'Projects, Production & Energy',
    shortTitle: 'تأسيس وإدارة المحلات التجارية والمخازن',
    shortTitleEn: 'Shops and Warehouses',
    officialText: 'تأسيس وإدارة المحلات التجارية والمخازن اللازمة لتنفيذ غايات التعاونية.',
    officialTextEn: "Establishing and managing the shops and warehouses needed to achieve the cooperative's objectives.",
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Store'
  },
  {
    id: 6,
    category: 'services',
    categoryTitleAr: 'الخدمات والاحتياجات الأساسية',
    categoryTitleEn: 'Essential Services & Supplies',
    shortTitle: 'تزويد الأعضاء بمواد غذائية ولوازم استهلاكية وسلع',
    shortTitleEn: 'Supplying Goods to Members',
    officialText: 'تزويد الأعضاء بمواد غذائية ولوازم استهلاكية وسلع بأسعار معقولة.',
    officialTextEn: 'Providing members with foodstuffs, consumer supplies and goods at reasonable prices.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'ShoppingBag'
  },
  {
    id: 7,
    category: 'projects',
    categoryTitleAr: 'المشاريع والإنتاج والطاقة',
    categoryTitleEn: 'Projects, Production & Energy',
    shortTitle: 'إنتاج وتصنيع واستيراد المواد التموينية والسلع',
    shortTitleEn: 'Production, Manufacturing and Import',
    officialText: 'إنتاج وتصنيع واستيراد المواد التموينية والسلع، وعقد الاتفاقيات والمناقصات اللازمة لذلك.',
    officialTextEn: 'Producing, manufacturing and importing provisions and goods, and concluding the agreements and tenders required for this purpose.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Factory'
  },
  {
    id: 8,
    category: 'members',
    categoryTitleAr: 'دعم الأعضاء والمشاريع',
    categoryTitleEn: 'Member & Project Support',
    shortTitle: 'تملّك الأموال المنقولة وغير المنقولة',
    shortTitleEn: 'Owning Funds and Assets',
    officialText: 'تملّك الأموال المنقولة وغير المنقولة لتنفيذ غاياتها، باستثناء الاتجار بالعقارات.',
    officialTextEn: 'Owning movable and immovable property to achieve its objectives, excluding trading in real estate.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Landmark'
  },
  {
    id: 9,
    category: 'services',
    categoryTitleAr: 'الخدمات والاحتياجات الأساسية',
    categoryTitleEn: 'Essential Services & Supplies',
    shortTitle: 'مساعدة الأعضاء على إنشاء أماكن للخدمات العامة',
    shortTitleEn: 'Public Services',
    officialText: 'مساعدة الأعضاء على إنشاء أماكن للخدمات العامة وتنظيمها والقيام بالأشغال العامة نيابة عنهم.',
    officialTextEn: 'Helping members establish and organize public-service facilities, and carrying out public works on their behalf.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Wrench'
  },
  {
    id: 10,
    category: 'social',
    categoryTitleAr: 'التنمية الاجتماعية والتكافل',
    categoryTitleEn: 'Social Development & Solidarity',
    shortTitle: 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ',
    shortTitleEn: 'Education, Social Services & Emergencies',
    officialText: 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ لمنفعة الأعضاء.',
    officialTextEn: 'Establishing a fund for education, social services and emergencies for the benefit of members.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'ShieldAlert'
  },
  {
    id: 11,
    category: 'social',
    categoryTitleAr: 'التنمية الاجتماعية والتكافل',
    categoryTitleEn: 'Social Development & Solidarity',
    shortTitle: 'مكافحة البطالة وتقديم العون المادي للمحتاجين',
    shortTitleEn: 'Combating Unemployment & Community Work',
    officialText: 'مكافحة البطالة وتقديم العون المادي للمحتاجين والمساهمة في أعمال البر.',
    officialTextEn: 'Combating unemployment, providing financial assistance to those in need, and contributing to charitable work.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'HeartHandshake'
  },
  {
    id: 12,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    categoryTitleEn: 'Cooperation, Resources & Funding',
    shortTitle: 'إيجاد وتوفير الأموال اللازمة عبر المساهمات والرسوم والقروض والتبرعات',
    shortTitleEn: 'Securing Financial Resources',
    officialText: 'إيجاد وتوفير الأموال اللازمة عبر مساهمات الأعضاء، ورسوم الانتساب، والقروض، والتبرعات.',
    officialTextEn: "Raising and securing the necessary funds through members' contributions, membership fees, loans and donations.",
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Coins'
  },
  {
    id: 13,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    categoryTitleEn: 'Cooperation, Resources & Funding',
    shortTitle: 'قبول الرهونات والتأمينات والكمبيالات وتحصيل القروض',
    shortTitleEn: 'Mortgages, Guarantees and Loans',
    officialText: 'قبول الرهونات والتأمينات والكمبيالات وتحصيل القروض التي تمنحها للأعضاء.',
    officialTextEn: 'Accepting mortgages, guarantees and bills of exchange, and collecting loans granted to members.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Receipt'
  },
  {
    id: 14,
    category: 'cooperation',
    categoryTitleAr: 'التعاون والموارد والتمويل',
    categoryTitleEn: 'Cooperation, Resources & Funding',
    shortTitle: 'تنفيذ البرامج بالتعاون والتنسيق مع الجهات ذات العلاقة',
    shortTitleEn: 'Programmes and Partnerships',
    officialText: 'تنفيذ البرامج بالتعاون والتنسيق مع الجهات ذات العلاقة في مختلف القطاعات.',
    officialTextEn: 'Implementing programmes in cooperation and coordination with relevant stakeholders across various sectors.',
    articleRef: 'النظام الأساسي — الباب الثاني (المادتان 7–8)',
    articleRefEn: 'Bylaws — Chapter Two (Articles 7–8)',
    iconName: 'Network'
  }
];

export const GOAL_CATEGORIES = [
  { id: 'all', titleAr: 'جميع الغايات (14)', titleEn: 'All Objectives (14)' },
  { id: 'members', titleAr: 'دعم الأعضاء والمشاريع', titleEn: 'Member & Project Support' },
  { id: 'projects', titleAr: 'المشاريع والإنتاج والطاقة', titleEn: 'Production & Energy' },
  { id: 'services', titleAr: 'الخدمات والاحتياجات الأساسية', titleEn: 'Public Services & Supplies' },
  { id: 'social', titleAr: 'التنمية الاجتماعية والتكافل', titleEn: 'Social Development' },
  { id: 'cooperation', titleAr: 'التعاون والموارد والتمويل', titleEn: 'Cooperation & Finance' }
];

export const ADMINISTRATION_COMMITTEE: CommitteeMember[] = [
  { name: 'د. فهمي البلاونة', nameEn: 'Dr. Fahmi Al-Balawneh', role: 'رئيس اللجنة', roleEn: 'Chair' },
  { name: 'م. براءة الياسين', nameEn: 'Eng. Baraa Al-Yaseen', role: 'السكرتير', roleEn: 'Secretary' },
  { name: 'م. سجود البلاونة', nameEn: 'Eng. Sujood Al-Balawneh', role: 'أمين الصندوق', roleEn: 'Treasurer' },
  { name: 'م. يحيى أبو زنيمه', nameEn: 'Eng. Yahya Abu Zneimeh', role: 'عضو', roleEn: 'Member' },
  { name: 'د. معتصم الغوشة', nameEn: 'Dr. Mutasem Al-Ghousheh', role: 'عضو', roleEn: 'Member' }
];

export const OVERSIGHT_COMMITTEE: CommitteeMember[] = [
  { name: 'م. ياسين أبو زنيمه', nameEn: 'Eng. Yaseen Abu Zneimeh', role: 'رئيس اللجنة', roleEn: 'Chair' },
  { name: 'عدنان الخدام', nameEn: 'Adnan Al-Khaddam', role: 'عضو', roleEn: 'Member' },
  { name: 'ظاهر الفقير', nameEn: 'Thaher Al-Faqeer', role: 'عضو', roleEn: 'Member' }
];

export const EXECUTIVE_COMMITTEES: ExecutiveCommittee[] = [
  {
    id: 1,
    name: 'لجنة التدريب والتشغيل',
    nameEn: 'Training and Employment Committee',
    roleDescription: 'تُعنى بربط الأعضاء بفرص التدريب والتشغيل، تفعيلاً لغاية مكافحة البطالة (المادة 8/ج)، وحصر الاحتياجات التدريبية والتنسيق مع مراكز التدريب المهني.',
    roleDescriptionEn: 'Connects members with training and employment opportunities in line with the objective of combating unemployment (Article 8/c), identifies training needs and coordinates with vocational training centres.',
    articleRef: 'المادة (30/د) والمادة (8/ج) من النظام الأساسي',
    articleRefEn: 'Articles 30(d) and 8(c) of the Bylaws',
    keyResponsibilities: [
      'ربط الأعضاء بفرص التدريب والتشغيل تفعيلاً لغاية مكافحة البطالة (المادة 8/ج)',
      'حصر الاحتياجات التدريبية',
      'التنسيق مع مراكز التدريب المهني'
    ],
    keyResponsibilitiesEn: [
      'Connects members with training and employment opportunities (Article 8/c)',
      'Identifies vocational training needs',
      'Coordinates with vocational training centres'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 2,
    name: 'لجنة المشاريع الصغيرة والمتوسطة',
    nameEn: 'Small and Medium Projects Committee',
    roleDescription: 'تستقبل وتُقيّم أفكار المشاريع الفردية للأعضاء، وتضع معايير فرز أولية، وتُشرف على المسابقة الربع سنوية.',
    roleDescriptionEn: "Receives and evaluates members' individual project ideas, sets initial screening criteria and supervises the quarterly competition.",
    articleRef: 'المادة (30/د) من النظام الأساسي',
    articleRefEn: 'Article 30(d) of the Bylaws',
    keyResponsibilities: [
      'استقبال وتقييم أفكار المشاريع الفردية للأعضاء',
      'وضع معايير فرز أولية',
      'الإشراف على المسابقة الربع سنوية'
    ],
    keyResponsibilitiesEn: [
      "Receiving and evaluating members' individual project ideas",
      'Setting initial screening criteria',
      'Supervising the quarterly project competition'
    ],
    iconName: 'Lightbulb'
  },
  {
    id: 3,
    name: 'لجنة التسويق والإعلام الرقمي',
    nameEn: 'Marketing and Digital Media Committee',
    roleDescription: 'مسؤولة عن الحضور الرقمي للتعاونية، وإخراج المواد الترويجية، وإدارة قنوات التواصل الاجتماعي، وتوثيق زيارات التشبيك المؤسسي.',
    roleDescriptionEn: "Responsible for the cooperative's digital presence, producing promotional materials, managing social media channels and documenting institutional networking visits.",
    articleRef: 'المادة (30/د) من النظام الأساسي',
    articleRefEn: 'Article 30(d) of the Bylaws',
    keyResponsibilities: [
      'المسؤولية عن الحضور الرقمي للتعاونية',
      'إخراج المواد الترويجية',
      'إدارة قنوات التواصل الاجتماعي',
      'توثيق زيارات التشبيك المؤسسي'
    ],
    keyResponsibilitiesEn: [
      "Managing the cooperative's digital presence",
      'Producing promotional materials and publications',
      'Managing official social media channels',
      'Documenting institutional networking visits'
    ],
    iconName: 'Share2'
  },
  {
    id: 4,
    name: 'لجنة المشاريع الكبرى والمنح',
    nameEn: 'Major Projects and Grants Committee',
    roleDescription: 'تتابع مشروعي قاعة المناسبات والمدرسة النموذجية، وتبحث عن فرص تمويل ومنح خارجية، وتُعد وثائق التقديم الأولية.',
    roleDescriptionEn: 'Follows up on the events hall and model school projects, seeks external funding and grant opportunities, and prepares initial application files.',
    articleRef: 'المادة (30/د) من النظام الأساسي',
    articleRefEn: 'Article 30(d) of the Bylaws',
    keyResponsibilities: [
      'متابعة مشروعي قاعة المناسبات والمدرسة النموذجية',
      'البحث عن فرص تمويل ومنح خارجية',
      'إعداد وثائق التقديم الأولية'
    ],
    keyResponsibilitiesEn: [
      'Following up on the events hall and model school projects',
      'Seeking external funding and grant opportunities',
      'Preparing initial grant application files'
    ],
    iconName: 'Target'
  },
  {
    id: 5,
    name: 'اللجنة الاستشارية العليا',
    nameEn: 'Higher Advisory Committee',
    roleDescription: 'تضم خبراء ومختصين من الهيئة العامة، وتقدّم رأياً استشارياً رفيع المستوى للجنة الإدارة في القرارات الكبرى ومراجعة دراسات الجدوى.',
    roleDescriptionEn: 'Comprises experts and specialists from the General Assembly and provides high-level advice to the Management Committee on major decisions and the review of feasibility studies.',
    articleRef: 'المادة (30/د) من النظام الأساسي',
    articleRefEn: 'Article 30(d) of the Bylaws',
    keyResponsibilities: [
      'تضم خبراء ومختصين من الهيئة العامة',
      'تقديم رأي استشاري رفيع المستوى للجنة الإدارة في القرارات الكبرى',
      'مراجعة دراسات الجدوى'
    ],
    keyResponsibilitiesEn: [
      'Comprising experts and specialists from the General Assembly',
      'Providing high-level counsel to the Management Committee on major decisions',
      'Reviewing economic feasibility studies'
    ],
    iconName: 'Award'
  }
];
