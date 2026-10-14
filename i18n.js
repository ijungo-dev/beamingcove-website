const T={
ko:{nav_about:"소개",nav_services:"서비스",nav_contact:"문의",hero_eyebrow:"Salesforce AppExchange 전문",
hero_title:"아이디어에서 AppExchange 출시까지,<br><span>처음부터 제대로.</span>",
hero_lead:"Beaming Cove는 ISV와 제품 팀이 Salesforce AppExchange 애플리케이션을 설계·개발·패키징하고 보안 심사를 통과할 수 있도록 지원합니다.",
cta_start:"상담 시작하기",cta_services:"서비스 보기",about_title:"집중력 있는 실무형 파트너",
about_p1:"Beaming Cove는 Salesforce AppExchange 생태계에 특화된 독립 법인 컨설팅 회사입니다. 1인 기업이기 때문에 실제 작업을 수행하는 담당자와 직접 소통하며, 중간 전달이나 복잡한 관리 단계가 없습니다.",
about_p2:"전문 분야를 의도적으로 좁혔습니다. 상용 수준의 Salesforce 앱을 개발하고, 파트너가 AppExchange에 앱을 출시하고 유지하는 데 필요한 기술 및 절차 전반을 안내합니다.",
services_title:"제공 서비스",s1_t:"앱 개발",s1_d:"여러 구독자 조직에서도 안정적으로 확장되는 관리형 패키지를 위한 Apex, Lightning Web Components 및 플랫폼 네이티브 아키텍처.",
s2_t:"ISV 및 AppExchange 컨설팅",s2_d:"파트너를 위한 제품·기술 가이드: 조직 전략, 패키징 모델 선택, 라이선스 설정, 릴리스 계획.",
s3_t:"보안 심사 지원",s3_d:"심사 전 코드 점검, 스캐너 결과 개선, 제출 문서 준비, 심사 지적 사항 대응 지원.",
s4_t:"패키징 및 릴리스",s4_d:"2세대 관리형 패키지, 버전 관리, 네임스페이스, CI/CD 파이프라인, 업그레이드에 안전한 릴리스 프로세스.",
contact_title:"AppExchange 프로젝트를 계획 중이신가요?",contact_lead:"앱의 내용, 일정, 고민 중인 부분을 알려주세요. 신속하게 회신드리겠습니다.",footer:"© 2026 Beaming Cove. All rights reserved."},
ja:{nav_about:"会社概要",nav_services:"サービス",nav_contact:"お問い合わせ",hero_eyebrow:"Salesforce AppExchange 専門",
hero_title:"アイデアから AppExchange 公開まで、<br><span>最初から確かな品質で。</span>",
hero_lead:"Beaming Cove は、ISV や製品チームによる Salesforce AppExchange アプリの設計・開発・パッケージング、そしてセキュリティレビュー通過を支援します。",
cta_start:"相談する",cta_services:"サービスを見る",about_title:"専門性に特化した実務型パートナー",
about_p1:"Beaming Cove は、Salesforce AppExchange エコシステムに特化した独立系の法人コンサルティング会社です。一人法人のため、実際に作業を行う担当者と直接やり取りでき、引き継ぎや煩雑な窓口対応はありません。",
about_p2:"あえて専門領域を絞っています。商用品質の Salesforce アプリを開発し、AppExchange での公開・運用に必要な技術面とプロセス面をパートナーと共に進めます。",
services_title:"提供サービス",s1_t:"アプリ開発",s1_d:"複数のサブスクライバー組織にスケールする管理パッケージ向けの Apex、Lightning Web Components、プラットフォームネイティブな設計。",
s2_t:"ISV・AppExchange コンサルティング",s2_d:"パートナー向けの製品・技術アドバイス：組織戦略、パッケージモデルの選定、ライセンス設定、リリース計画。",
s3_t:"セキュリティレビュー支援",s3_d:"レビュー前のコード診断、スキャナー指摘の修正、提出書類の準備、レビュー指摘への対応支援。",
s4_t:"パッケージング・リリース",s4_d:"第2世代管理パッケージ、バージョン管理、名前空間、CI/CD パイプライン、アップグレードに安全なリリースプロセス。",
contact_title:"AppExchange のプロジェクトをご検討中ですか？",contact_lead:"アプリの概要、スケジュール、お困りの点をお聞かせください。迅速にご返信いたします。",footer:"© 2026 Beaming Cove. All rights reserved."}};
const EN={};document.querySelectorAll('[data-i18n]').forEach(e=>EN[e.dataset.i18n]=e.innerHTML);T.en=EN;
const titles={en:document.title,ko:"Beaming Cove — Salesforce AppExchange 개발 및 컨설팅",ja:"Beaming Cove — Salesforce AppExchange 開発・コンサルティング"};
function setLang(l){if(!T[l])l='en';document.documentElement.lang=l;document.title=titles[l];
document.querySelectorAll('[data-i18n]').forEach(e=>{const v=T[l][e.dataset.i18n];if(v)e.innerHTML=v});
document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
try{localStorage.setItem('lang',l)}catch(e){}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
let q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem('lang')}catch(e){}
setLang(q||s||'en');
