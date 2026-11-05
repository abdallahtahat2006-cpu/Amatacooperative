export interface Translations {
  // Navigation
  navHome: string;
  navAbout: string;
  navGoals: string;
  navGovernance: string;
  navMembership: string;
  navContact: string;
  inquireButton: string;
  pageDirectory: string;
  exploreTitle: string;
  exploreSubtitle: string;
  quickDirectCall: string;
  quickWhatsApp: string;
  switchLanguage: string;
  langName: string;

  // Common UI
  readMore: string;
  viewDetails: string;
  backToHome: string;
  officialText: string;
  articleLabel: string;
  close: string;
  callDirect: string;
  allRightsReserved: string;
  jordanKingdom: string;
  coopTypeTag: string;

  // Titles
  siteTitle: string;
  homeTitle: string;
  aboutTitle: string;
  goalsTitle: string;
  governanceTitle: string;
  membershipTitle: string;
  contactTitle: string;
  notFoundTitle: string;
  pageNotFoundDesc: string;

  // Header & Footer
  coopQuote: string;
  siteSections: string;
  hqAndContact: string;

  // Home Specific
  heroEyebrow: string;
  heroAboutButton: string;
  heroMembershipButton: string;
  heroLegalTag: string;
  statGoalsNum: string;
  statGoalsLabel: string;
  statGoalsSub: string;
  statExecCommitteesNum: string;
  statExecCommitteesLabel: string;
  statExecCommitteesSub: string;
  statOneVoteNum: string;
  statOneVoteLabel: string;
  statOneVoteSub: string;
  hqLabel: string;
  workAreaLabel: string;
  lawEstablishedBadge: string;
  civilSocietySub: string;
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillarsExploreAll: string;
  quickFactsTitle: string;
  quickFactsSubtitle: string;
  quickContactTitle: string;
  quickContactSubtitle: string;
  fullContactPageLink: string;

  // About Specific
  aboutPageTitle: string;
  aboutRegistrationTitle: string;
  aboutRegistrationSub: string;
  aboutWhoWeAre: string;
  aboutCommitteesButton: string;
  aboutExploreGoalsButton: string;
  aboutBylawsProvisionsTitle: string;
  aboutBylawsRef: string;
  aboutPurposesTitle: string;
  aboutPurposesSubtitle: string;
  aboutMembershipPromptTitle: string;
  aboutMembershipPromptButton: string;

  // Goals Specific
  goalsPageTitle: string;
  goalsPageSubtitle: string;
  goalsSearchPlaceholder: string;
  goalsResultsCount: (count: number, total: number) => string;
  goalsEmptySearch: string;
  goalsResetSearch: string;
  goalNumberPrefix: (id: number) => string;

  // Governance Specific
  governancePageTitle: string;
  governancePageSubtitle: string;
  govBodiesTitle: string;
  govBodiesSubtitle: string;
  govGeneralAssemblyTitle: string;
  govGeneralAssemblyDesc: string;
  govOneVoteRule: string;
  govMajorityRule: string;
  govManagementTitle: string;
  govManagementDesc: string;
  govManagementMembersCount: string;
  govSupervisoryTitle: string;
  govSupervisoryDesc: string;
  govSupervisoryMembersCount: string;
  govExecTitle: string;
  govExecSubtitle: string;
  govExecNotice: string;
  govKeyTasks: string;

  // Membership Specific
  membershipPageTitle: string;
  membershipPageSubtitle: string;
  membershipConditionsTitle: string;
  membershipProvisionsTitle: string;
  membershipShareLimitsTitle: string;
  membershipCalcSectionTitle: string;
  membershipCalcSectionSub: string;
  membershipWhatsAppPrompt: string;
  membershipWhatsAppButton: string;
  membershipCallButton: string;
  feeNonRefundable: string;

  // Calculator Specific
  calcTitle: string;
  calcSubtitle: string;
  calcSharesCountLabel: string;
  calcSharesUnit: string;
  calcMinLabel: string;
  calcMaxLabel: string;
  calcQuickPresets: string;
  calcSummaryTitle: string;
  calcEstimatedCost: string;
  calcDownpayment: string;
  calcMonthlyInstallment: string;
  calcEntranceFee: string;
  calcCurrency: string;
  calcOverMonths: string;
  calcInquireWhatsApp: string;

  // Contact Specific
  contactPageTitle: string;
  contactPageSubtitle: string;
  contactPhoneCardTitle: string;
  contactPhoneCardDesc: string;
  contactApprovedNumber: string;
  contactPhoneAction: string;
  contactWhatsAppCardTitle: string;
  contactWhatsAppCardDesc: string;
  contactWhatsAppAction: string;
  contactEmailCardTitle: string;
  contactEmailCardDesc: string;
  contactEmailApproved: string;
  contactEmailSub: string;
  contactEmailAction: string;
  contactLocationCardTitle: string;
  contactLocationCardDesc: string;
  contactCenterLabel: string;
  contactWorkAreaLabel: string;
  contactJordan: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  contactFormNameLabel: string;
  contactFormNamePlaceholder: string;
  contactFormTopicLabel: string;
  contactFormNotesLabel: string;
  contactFormNotesPlaceholder: string;
  contactFormSubmit: string;
  contactDataTitle: string;
  contactNameLabel: string;
  contactTypeLabel: string;
  contactPhoneApprovedLabel: string;
  contactEmailApprovedLabel: string;
}

export const translations: Record<'ar' | 'en', Translations> = {
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'عن التعاونية',
    navGoals: 'غاياتنا',
    navGovernance: 'الهيكل التنظيمي',
    navMembership: 'العضوية والانتساب',
    navContact: 'تواصل معنا',
    inquireButton: 'استفسر عن الانتساب',
    pageDirectory: 'دليل الصفحات',
    exploreTitle: 'استكشف تعاونية عمتا',
    exploreSubtitle: 'اختر الصفحة التي تريد الوصول إليها',
    quickDirectCall: 'اتصال هاتفي',
    quickWhatsApp: 'محادثة واتساب',
    switchLanguage: 'English',
    langName: 'EN',

    readMore: 'المزيد',
    viewDetails: 'التفاصيل',
    backToHome: 'العودة إلى الصفحة الرئيسية',
    officialText: 'النص المعتمد في النظام الأساسي',
    articleLabel: 'المرجعية:',
    close: 'إغلاق',
    callDirect: 'اتصال مباشر',
    allRightsReserved: 'جميع الحقوق محفوظة © 2026 تعاونية عمّتا متعددة الأغراض محدودة المسؤولية.',
    jordanKingdom: 'المملكة الأردنية الهاشمية',
    coopTypeTag: 'متعددة الأغراض / محدودة المسؤولية',

    siteTitle: 'تعاونية عمّتا متعددة الأغراض محدودة المسؤولية',
    homeTitle: 'تعاونية عمّتا | متعددة الأغراض / محدودة المسؤولية',
    aboutTitle: 'عن التعاونية | تعاونية عمّتا',
    goalsTitle: 'غاياتنا (14 غاية معتمدة) | تعاونية عمّتا',
    governanceTitle: 'الهيكل التنظيمي | تعاونية عمّتا',
    membershipTitle: 'العضوية والانتساب | تعاونية عمّتا',
    contactTitle: 'تواصل معنا | تعاونية عمّتا',
    notFoundTitle: 'الصفحة غير موجودة',
    pageNotFoundDesc: 'عذراً، الرابط الذي تحاول الوصول إليه غير متاح.',

    coopQuote: '«نرحّب بانتساب كل من يشاركنا غايات النظام الأساسي ورؤية خطة الربع الرابع 2026»',
    siteSections: 'أقسام الموقع',
    hqAndContact: 'المقر والتواصل',

    heroEyebrow: 'منظمة أهلية تعاونية مسجلة',
    heroAboutButton: 'عن التعاونية وبيانات التسجيل',
    heroMembershipButton: 'شروط الانتساب والاكتتاب',
    heroLegalTag: 'تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد.',
    statGoalsNum: '14',
    statGoalsLabel: 'غاية معتمدة',
    statGoalsSub: 'بالنظام الأساسي',
    statExecCommitteesNum: '5',
    statExecCommitteesLabel: 'لجان تنفيذية',
    statExecCommitteesSub: 'تغطي مجالات العمل',
    statOneVoteNum: '1',
    statOneVoteLabel: 'صوت لكل عضو',
    statOneVoteSub: 'ديمقراطية القرار',
    hqLabel: 'المركز الرئيسي:',
    workAreaLabel: 'نطاق العمل:',
    lawEstablishedBadge: 'تأسست بموجب قانون التعاون',
    civilSocietySub: 'منظمة أهلية ذات شخصية اعتبارية مستقلة',
    pillarsTitle: 'أبرز ركائز العمل التعاوني',
    pillarsSubtitle: 'محاور رئيسية مستمدة من نصوص النظام الأساسي المعتمد',
    pillarsExploreAll: 'استعراض جميع الغايات الـ 14 المعتمدة',
    quickFactsTitle: 'بيانات التسجيل الأساسية',
    quickFactsSubtitle: 'البيانات الرسمية المعتمدة لتعاونية عمّتا',
    quickContactTitle: 'تواصل معنا',
    quickContactSubtitle: 'بيانات الاتصال والعنوان الرسمية المعتمدة للتعاونية',
    fullContactPageLink: 'صفحة التواصل الكاملة',

    aboutPageTitle: 'عن تعاونية عمّتا',
    aboutRegistrationTitle: 'بيانات التسجيل الأساسية',
    aboutRegistrationSub: 'البيانات الرسمية المعتمدة لتعاونية عمّتا',
    aboutWhoWeAre: 'من نحن',
    aboutCommitteesButton: 'الهيكل التنظيمي واللجان',
    aboutExploreGoalsButton: 'استعراض الغايات الـ 14',
    aboutBylawsProvisionsTitle: 'نصوص وأحكام النظام الأساسي',
    aboutBylawsRef: 'المرجعية: أحكام النظام الأساسي المعتمد لتعاونية عمّتا.',
    aboutPurposesTitle: 'غايات التعاونية',
    aboutPurposesSubtitle: 'نصّ الباب الثاني من النظام الأساسي على غايات التعاونية في تنمية روح التعاون بين أعضائها، وتحسين أحوالهم الاجتماعية والاقتصادية والثقافية وتضافر الجهود في تحقيق هذه الغايات.',
    aboutMembershipPromptTitle: 'باب الانتساب للتعاونية',
    aboutMembershipPromptButton: 'الاطلاع على شروط الانتساب والاكتتاب',

    goalsPageTitle: 'غاياتنا',
    goalsPageSubtitle: 'نصّ الباب الثاني من النظام الأساسي على غايات التعاونية في تنمية روح التعاون بين أعضائها، وتحسين أحوالهم الاجتماعية والاقتصادية والثقافية وتضافر الجهود في تحقيق هذه الغايات، من خلال الأوجه التالية (المادتان 7–8):',
    goalsSearchPlaceholder: 'ابحث في نصوص الغايات...',
    goalsResultsCount: (count, total) => `عدد الغايات المعروضة: ${count} من أصل ${total} غاية معتمدة`,
    goalsEmptySearch: 'لم يتم العثور على أي غايات مطابقة لبحثك.',
    goalsResetSearch: 'إعادة ضبط البحث',
    goalNumberPrefix: (id) => `الغاية (${id})`,

    governancePageTitle: 'الهيكل التنظيمي',
    governancePageSubtitle: 'يستند الهيكل الإداري للتعاونية إلى الأبواب الرابع والسادس من نظامها الأساسي، ويقوم على ثلاث هيئات رئيسية تتكامل أدوارها في إدارة الشأن التعاوني ومراقبته.',
    govBodiesTitle: 'الهيئات الرئيسية في التعاونية',
    govBodiesSubtitle: 'وفقاً للنظام الأساسي والهيكل الإداري المعتمد للتعاونية',
    govGeneralAssemblyTitle: 'الهيئة العامة',
    govGeneralAssemblyDesc: 'السلطة العليا في التعاونية، تضم الأعضاء المؤسسين والمنتسبين، وتشرف على أعمالها وتنتخب لجنتي الإدارة والمراقبة (المادة 28).',
    govOneVoteRule: '(المادة 28/ج): لكل عضو صوت واحد بغض النظر عن عدد أسهمه',
    govMajorityRule: 'تُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين',
    govManagementTitle: 'لجنة الإدارة',
    govManagementDesc: 'تتولى إدارة شؤون التعاونية اليومية، وتتألف من خمسة أعضاء منتخبين بالاقتراع السري لمدة أربع سنوات (المادة 30).',
    govManagementMembersCount: '5 أعضاء منتخبين',
    govSupervisoryTitle: 'لجنة المراقبة',
    govSupervisoryDesc: 'تتولى الرقابة على أعمال لجنة الإدارة ومتابعة تنفيذ قرارات الهيئة العامة (المادة 35).',
    govSupervisoryMembersCount: '3 أعضاء منتخبين',
    govExecTitle: 'اللجان التنفيذية الاستشارية',
    govExecSubtitle: 'لجان شُكلت بموجب المادة (30/د) من النظام الأساسي لتعزيز مشاركة الأعضاء وتقسيم العمل التخصصي',
    govExecNotice: 'ملاحظة نظامية: جميع هذه اللجان ذات طابع استشاري وتوصياتها غير ملزمة وترفع إلى لجنة الإدارة.',
    govKeyTasks: 'المهام والاختصاصات:',

    membershipPageTitle: 'العضوية والانتساب',
    membershipPageSubtitle: 'الشروط والأحكام الخاصة بالانتساب والاكتتاب المنصوص عليها في النظام الأساسي للتعاونية.',
    membershipConditionsTitle: 'شروط الانتساب للتعاونية',
    membershipProvisionsTitle: 'أحكام الاكتتاب والأسهم والرسوم',
    membershipShareLimitsTitle: 'حدود الاكتتاب المعتمدة في النظام الأساسي',
    membershipCalcSectionTitle: 'حاسبة تقدير الاكتتاب والأقساط',
    membershipCalcSectionSub: 'احسب قيمة الدفعة الأولى والأقساط الشهرية حسب عدد الأسهم التي ترغب بالاكتتاب بها',
    membershipWhatsAppPrompt: 'للبدء بإجراءات الانتساب أو الاستفسار المباشر:',
    membershipWhatsAppButton: 'محادثة استفسار عبر واتساب',
    membershipCallButton: 'اتصال هاتفي مباشر',
    feeNonRefundable: 'غير مستردة تدفع لمرة واحدة',

    calcTitle: 'حاسبة الاكتتاب التقديرية',
    calcSubtitle: 'احتساب تقديري لقيمة الأسهم والدفعة الأولى وفق شروط الاكتتاب المعتمدة',
    calcSharesCountLabel: 'عدد الأسهم:',
    calcSharesUnit: 'سهم',
    calcMinLabel: 'الحد الأدنى: 500 سهم',
    calcMaxLabel: 'الحد الأعلى: 40,000 سهم',
    calcQuickPresets: 'خيارات سريعة لعدد الأسهم:',
    calcSummaryTitle: 'تفاصيل الدفع التقديرية',
    calcEstimatedCost: 'إجمالي قيمة الأسهم (1 دينار/سهم):',
    calcDownpayment: 'الدفعة الأولى (20% - خمس المبلغ):',
    calcMonthlyInstallment: 'القسط الشهري المقدر (على 24 شهراً):',
    calcEntranceFee: 'رسوم الانتساب لمرة واحدة (المادة 11):',
    calcCurrency: 'دينار أردني',
    calcOverMonths: 'على 24 شهراً',
    calcInquireWhatsApp: 'طلب استفسار عن هذا الاكتتاب عبر واتساب',

    contactPageTitle: 'تواصل معنا',
    contactPageSubtitle: 'بيانات الاتصال والعنوان الرسمية المعتمدة لتعاونية عمّتا.',
    contactPhoneCardTitle: 'الاتصال الهاتفي',
    contactPhoneCardDesc: 'رقم الهاتف المعتمد لإدارة التعاونية للتواصل المباشر.',
    contactApprovedNumber: 'الرقم المعتمد:',
    contactPhoneAction: 'اتصال هاتفي مباشر',
    contactWhatsAppCardTitle: 'المراسلة عبر واتساب',
    contactWhatsAppCardDesc: 'محادثة فورية للاستفسار عبر الهاتف المعتمد (0790335694).',
    contactWhatsAppAction: 'بدء محادثة واتساب',
    contactEmailCardTitle: 'البريد الإلكتروني',
    contactEmailCardDesc: 'البريد الرسمي المعتمد لتلقي المراسلات والاستفسارات.',
    contactEmailApproved: 'البريد المعتمد:',
    contactEmailSub: 'متابعة مستمرة للمراسلات الواردة',
    contactEmailAction: 'إرسال بريد إلكتروني',
    contactLocationCardTitle: 'المقر والمركز',
    contactLocationCardDesc: 'بيانات العنوان والمركز المعتمدة للتعاونية.',
    contactCenterLabel: 'مركز التعاونية:',
    contactWorkAreaLabel: 'منطقة العمل:',
    contactJordan: 'المملكة الأردنية الهاشمية',
    contactFormTitle: 'إرسال استفسار مباشر إلى إدارة التعاونية',
    contactFormSubtitle: 'اكتب اسمك ونوع استفسارك لفتح محادثة واتساب موجهة مباشرة إلى رقم هاتف التعاونية.',
    contactFormNameLabel: 'الاسم:',
    contactFormNamePlaceholder: 'اكتب اسمك هنا',
    contactFormTopicLabel: 'موضوع الاستفسار:',
    contactFormNotesLabel: 'تفاصيل الاستفسار (اختياري):',
    contactFormNotesPlaceholder: 'اكتب أي ملاحظة أو سؤال ترغب بتضمينه...',
    contactFormSubmit: 'إرسال الاستفسار عبر واتساب',
    contactDataTitle: 'بيانات التعاونية',
    contactNameLabel: 'الاسم:',
    contactTypeLabel: 'النوع:',
    contactPhoneApprovedLabel: 'الهاتف المعتمد:',
    contactEmailApprovedLabel: 'البريد الإلكتروني:',
  },

  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navGoals: 'Our Objectives',
    navGovernance: 'Governance',
    navMembership: 'Membership',
    navContact: 'Contact Us',
    inquireButton: 'Join the Cooperative',
    pageDirectory: 'Directory',
    exploreTitle: 'Explore Ammata Cooperative',
    exploreSubtitle: 'Select the page you wish to visit',
    quickDirectCall: 'Direct Call',
    quickWhatsApp: 'WhatsApp Chat',
    switchLanguage: 'العربية',
    langName: 'عربي',

    readMore: 'Read More',
    viewDetails: 'Details',
    backToHome: 'Back to Home Page',
    officialText: 'Official Text from Bylaws',
    articleLabel: 'Reference:',
    close: 'Close',
    callDirect: 'Call Us',
    allRightsReserved: 'All Rights Reserved © 2026 Ammata Cooperative Society Ltd.',
    jordanKingdom: 'The Hashemite Kingdom of Jordan',
    coopTypeTag: 'Multi-Purpose / Limited Liability',

    siteTitle: 'Ammata Cooperative — Multi-Purpose / Limited Liability',
    homeTitle: 'Ammata Cooperative | Multi-Purpose / Limited Liability',
    aboutTitle: 'About Us | Ammata Cooperative',
    goalsTitle: 'Our Objectives (14 Approved) | Ammata Cooperative',
    governanceTitle: 'Organizational Structure | Ammata Cooperative',
    membershipTitle: 'Membership & Subscription | Ammata Cooperative',
    contactTitle: 'Contact Us | Ammata Cooperative',
    notFoundTitle: 'Page Not Found',
    pageNotFoundDesc: 'Sorry, the link you are trying to reach is unavailable.',

    coopQuote: '"Welcoming all who share our Bylaws objectives and Q4 2026 roadmap."',
    siteSections: 'Site Directory',
    hqAndContact: 'Headquarters & Contact',

    heroEyebrow: 'Registered Civil Society Cooperative Organization',
    heroAboutButton: 'About the Cooperative & Registration',
    heroMembershipButton: 'Membership & Subscription Terms',
    heroLegalTag: 'Established under the Jordanian Cooperatives Law and approved internal regulations.',
    statGoalsNum: '14',
    statGoalsLabel: 'Approved Objectives',
    statGoalsSub: 'Under the Bylaws',
    statExecCommitteesNum: '5',
    statExecCommitteesLabel: 'Executive Committees',
    statExecCommitteesSub: 'Covering All Operations',
    statOneVoteNum: '1',
    statOneVoteLabel: 'Vote Per Member',
    statOneVoteSub: 'Democratic Governance',
    hqLabel: 'Headquarters:',
    workAreaLabel: 'Scope of Operation:',
    lawEstablishedBadge: 'Established under Cooperatives Law',
    civilSocietySub: 'Civil-society organization with independent legal personality',
    pillarsTitle: 'Core Pillars of Cooperative Work',
    pillarsSubtitle: 'Key operational pillars derived from the approved statutory Bylaws',
    pillarsExploreAll: 'Explore all 14 statutory objectives',
    quickFactsTitle: 'Key Registration Facts',
    quickFactsSubtitle: 'Official verified identity data for Ammata Cooperative',
    quickContactTitle: 'Contact Us',
    quickContactSubtitle: 'Official verified contact channels and headquarters location',
    fullContactPageLink: 'Full Contact Page',

    aboutPageTitle: 'About Ammata Cooperative',
    aboutRegistrationTitle: 'Key Registration Facts',
    aboutRegistrationSub: 'Official verified identity data for Ammata Cooperative',
    aboutWhoWeAre: 'Who We Are',
    aboutCommitteesButton: 'Governance & Committees',
    aboutExploreGoalsButton: 'Explore All 14 Objectives',
    aboutBylawsProvisionsTitle: 'Key Statutory Provisions & Bylaws',
    aboutBylawsRef: 'Reference: Approved Bylaws of Ammata Cooperative Society.',
    aboutPurposesTitle: 'Our Core Objectives',
    aboutPurposesSubtitle: 'Chapter Two of the Bylaws defines the cooperative\'s objectives: fostering the spirit of cooperation among its members, improving their social, economic and cultural conditions, and pooling efforts to achieve these objectives.',
    aboutMembershipPromptTitle: 'Cooperative Membership Gateway',
    aboutMembershipPromptButton: 'View Membership & Subscription Terms',

    goalsPageTitle: 'Our Objectives',
    goalsPageSubtitle: 'Chapter Two of the Bylaws defines the cooperative\'s objectives: fostering the spirit of cooperation among its members, improving their social, economic and cultural conditions, and pooling efforts to achieve these objectives through the following activities (Articles 7–8):',
    goalsSearchPlaceholder: 'Search within statutory objectives...',
    goalsResultsCount: (count, total) => `Displaying ${count} of ${total} approved statutory objectives`,
    goalsEmptySearch: 'No objectives matched your search criteria.',
    goalsResetSearch: 'Reset Search',
    goalNumberPrefix: (id) => `Objective (${id})`,

    governancePageTitle: 'Organizational Structure',
    governancePageSubtitle: 'The cooperative\'s administrative structure is based on Chapters Four and Six of its Bylaws and rests on three main bodies whose roles complement one another in managing and overseeing the cooperative\'s affairs.',
    govBodiesTitle: 'Main Bodies of the Cooperative',
    govBodiesSubtitle: 'In accordance with the Bylaws and approved administrative governance',
    govGeneralAssemblyTitle: 'General Assembly',
    govGeneralAssemblyDesc: 'The supreme authority of the cooperative, comprising founding and affiliated members. It oversees the cooperative\'s work and elects the Management and Supervisory Committees (Article 28).',
    govOneVoteRule: '(Article 28/c): Each member has one vote regardless of the number of shares held',
    govMajorityRule: 'General Assembly resolutions are adopted by the majority of members present',
    govManagementTitle: 'Management Committee',
    govManagementDesc: 'Manages the cooperative\'s day-to-day affairs. It consists of five members elected by secret ballot for a four-year term (Article 30).',
    govManagementMembersCount: '5 Elected Members',
    govSupervisoryTitle: 'Supervisory Committee',
    govSupervisoryDesc: 'Oversees the work of the Management Committee and follows up on the implementation of General Assembly resolutions (Article 35).',
    govSupervisoryMembersCount: '3 Elected Members',
    govExecTitle: 'Executive Advisory Committees',
    govExecSubtitle: 'Formed by the Management Committee under Article 30(d) of the Bylaws to strengthen member participation and divide work by specialization',
    govExecNotice: 'Statutory Note: All are advisory; their recommendations are non-binding and are submitted to the Management Committee.',
    govKeyTasks: 'Key Responsibilities:',

    membershipPageTitle: 'Membership & Subscription',
    membershipPageSubtitle: 'Terms, conditions, and provisions governing membership and share subscription as set forth in the cooperative\'s Bylaws.',
    membershipConditionsTitle: 'Membership Eligibility Conditions',
    membershipProvisionsTitle: 'Subscription, Shares & Fee Provisions',
    membershipShareLimitsTitle: 'Share Subscription Limits in the Bylaws',
    membershipCalcSectionTitle: 'Subscription & Installment Calculator',
    membershipCalcSectionSub: 'Calculate your estimated downpayment and monthly installments based on your intended share subscription',
    membershipWhatsAppPrompt: 'To initiate your membership application or speak with management:',
    membershipWhatsAppButton: 'Inquire via WhatsApp',
    membershipCallButton: 'Direct Phone Call',
    feeNonRefundable: 'Non-refundable one-time fee',

    calcTitle: 'Subscription Estimation Calculator',
    calcSubtitle: 'Estimated breakdown of share costs, downpayment, and installments according to approved Bylaws terms',
    calcSharesCountLabel: 'Number of Shares:',
    calcSharesUnit: 'Shares',
    calcMinLabel: 'Minimum: 500 shares',
    calcMaxLabel: 'Maximum: 40,000 shares',
    calcQuickPresets: 'Quick Share Presets:',
    calcSummaryTitle: 'Estimated Payment Summary',
    calcEstimatedCost: 'Total Share Value (1 JOD / Share):',
    calcDownpayment: 'Initial Downpayment (20% - One-fifth):',
    calcMonthlyInstallment: 'Estimated Monthly Installment (over 24 months):',
    calcEntranceFee: 'One-time Application Fee (Article 11):',
    calcCurrency: 'JOD',
    calcOverMonths: 'over 24 months',
    calcInquireWhatsApp: 'Inquire about this subscription on WhatsApp',

    contactPageTitle: 'Contact Us',
    contactPageSubtitle: 'Official verified contact channels and headquarters address for Ammata Cooperative.',
    contactPhoneCardTitle: 'Telephone',
    contactPhoneCardDesc: 'Official phone line for direct communication with cooperative management.',
    contactApprovedNumber: 'Official Number:',
    contactPhoneAction: 'Direct Phone Call',
    contactWhatsAppCardTitle: 'WhatsApp Messaging',
    contactWhatsAppCardDesc: 'Instant messaging support via the official number (+962 79 033 5694).',
    contactWhatsAppAction: 'Start WhatsApp Chat',
    contactEmailCardTitle: 'Official Email',
    contactEmailCardDesc: 'Official email address for formal correspondence and inquiries.',
    contactEmailApproved: 'Official Email:',
    contactEmailSub: 'Regularly monitored for incoming correspondence',
    contactEmailAction: 'Send Email',
    contactLocationCardTitle: 'Headquarters & Location',
    contactLocationCardDesc: 'Official registered address and center of operations.',
    contactCenterLabel: 'Headquarters:',
    contactWorkAreaLabel: 'Scope of Operation:',
    contactJordan: 'The Hashemite Kingdom of Jordan',
    contactFormTitle: 'Send a Direct Inquiry to Management',
    contactFormSubtitle: 'Enter your name and inquiry topic to initiate a WhatsApp message directed to the cooperative.',
    contactFormNameLabel: 'Your Name:',
    contactFormNamePlaceholder: 'Enter your name',
    contactFormTopicLabel: 'Inquiry Topic:',
    contactFormNotesLabel: 'Inquiry Details (Optional):',
    contactFormNotesPlaceholder: 'Write your question or message here...',
    contactFormSubmit: 'Send Inquiry via WhatsApp',
    contactDataTitle: 'Cooperative Identity',
    contactNameLabel: 'Name:',
    contactTypeLabel: 'Type:',
    contactPhoneApprovedLabel: 'Official Phone:',
    contactEmailApprovedLabel: 'Official Email:',
  }
};

