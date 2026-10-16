const T={
ko:{nav_about:"소개",nav_services:"하는 일",nav_contact:"문의",hero_eyebrow:"독립 Salesforce ISV",
hero_title:"Salesforce AppExchange를 위한<br><span>자체 앱을 만듭니다.</span>",
hero_lead:"Beaming Cove는 Salesforce 네이티브 애플리케이션을 직접 설계·개발하여 AppExchange에 출시하고 유지보수합니다. 무료 앱과 유료 앱을 모두 선보일 예정입니다.",
cta_start:"소식 받기",cta_services:"하는 일 보기",about_title:"독립 Salesforce ISV",
about_p1:"Beaming Cove는 Salesforce 생태계의 독립 소프트웨어 벤더(ISV)입니다. 자체 제품을 직접 개발·소유하며, Beaming Cove의 이름으로 Salesforce AppExchange에 출시합니다.",
about_p2:"설치가 쉽고 안전하게 사용할 수 있으며 장기적으로 유지보수되는 실용적인 플랫폼 네이티브 앱에 집중합니다. 무료 앱과 유료 앱을 모두 제공할 계획입니다.",
services_title:"주요 분야",s1_t:"Salesforce 네이티브 앱",s1_d:"Apex와 Lightning Web Components를 활용해 Salesforce Platform 위에서 네이티브로 앱을 개발하므로, 고객의 조직 내에서 바로 동작합니다.",
s2_t:"AppExchange 출시",s2_d:"각 앱은 Salesforce 보안 심사를 통과한 후 관리형 패키지로 AppExchange에 출시됩니다.",
s3_t:"지속적인 유지보수 및 지원",s3_d:"Salesforce 릴리스에 맞춰 앱을 최신 상태로 유지하고, 기능을 개선하며, 앱을 사용하는 고객을 지원합니다.",
s4_t:"무료 앱과 유료 앱",s4_d:"다양한 규모의 팀이 유용하게 쓸 수 있도록 무료 앱과 유료 앱을 모두 제공할 계획입니다.",
note:"<strong>출시 준비 중:</strong> 첫 번째 앱들을 현재 개발하고 있으며, 아직 AppExchange에는 공개되지 않았습니다.",
contact_title:"문의하기",contact_lead:"일반 문의, 파트너십 제안, 얼리 액세스 및 앱 출시 소식을 원하시면 이메일로 연락해 주세요.",footer:"© 2026 Beaming Cove. All rights reserved."},
ja:{nav_about:"会社概要",nav_services:"事業内容",nav_contact:"お問い合わせ",hero_eyebrow:"独立系 Salesforce ISV",
hero_title:"Salesforce AppExchange 向けの<br><span>自社アプリを開発しています。</span>",
hero_lead:"Beaming Cove は、Salesforce ネイティブアプリケーションを自社で設計・開発し、AppExchange で公開・保守しています。無料アプリと有料アプリの両方を提供する予定です。",
cta_start:"最新情報を受け取る",cta_services:"事業内容を見る",about_title:"独立系 Salesforce ISV",
about_p1:"Beaming Cove は、Salesforce エコシステムにおける独立系ソフトウェアベンダー（ISV）です。自社製品を開発・保有し、Beaming Cove の名前で Salesforce AppExchange に公開します。",
about_p2:"導入しやすく、安心して使え、長期的に保守される実用的なプラットフォームネイティブアプリに注力しています。無料アプリと有料アプリの両方を提供する予定です。",
services_title:"注力分野",s1_t:"Salesforce ネイティブアプリ",s1_d:"Apex と Lightning Web Components を用いて Salesforce Platform 上でネイティブに開発するため、お客様の組織内でそのまま動作します。",
s2_t:"AppExchange で公開",s2_d:"各アプリは Salesforce のセキュリティレビューを通過した後、管理パッケージとして AppExchange で公開されます。",
s3_t:"継続的な保守とサポート",s3_d:"Salesforce のリリースに合わせてアプリを最新の状態に保ち、改善を続け、ご利用のお客様をサポートします。",
s4_t:"無料アプリと有料アプリ",s4_d:"さまざまな規模のチームにお役立ていただけるよう、無料アプリと有料アプリの両方を提供する予定です。",
note:"<strong>近日公開：</strong>最初のアプリは現在開発中で、まだ AppExchange では公開されていません。",
contact_title:"お問い合わせ",contact_lead:"一般的なお問い合わせ、パートナーシップのご相談、早期アクセスやアプリ公開のお知らせをご希望の方は、メールでご連絡ください。",footer:"© 2026 Beaming Cove. All rights reserved."}};
const EN={};document.querySelectorAll('[data-i18n]').forEach(e=>EN[e.dataset.i18n]=e.innerHTML);T.en=EN;
const titles={en:document.title,ko:"Beaming Cove — Salesforce AppExchange 앱 개발사",ja:"Beaming Cove — Salesforce AppExchange 向けアプリ"};
function setLang(l){if(!T[l])l='en';document.documentElement.lang=l;document.title=titles[l];
document.querySelectorAll('[data-i18n]').forEach(e=>{const v=T[l][e.dataset.i18n];if(v)e.innerHTML=v});
document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
try{localStorage.setItem('lang',l)}catch(e){}}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
let q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem('lang')}catch(e){}
setLang(q||s||'en');
