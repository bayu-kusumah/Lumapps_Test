"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;/**
 *  Create-LumApps-Widget config file
 *  update the following to fit your needs
 */ /**
 * The ids of your partner and extension
 */var partnerId={beta:'',production:'',dev:'c93261d1-7e1a-44dc-afa7-16621cb62150'};var extensionId={beta:'',production:'',dev:'205542301179093275489070837427186164334'};var description={en:'Test Extension'};var name={en:'Test Extension'};var icon={en:'https://lh3.googleusercontent.com/-6F_iwel8KGY/WD8MdGS0PkI/AAAAAAAAGDI/KaqvKtZCK_AsdK6BcKp6Cy1MpwoEWCUvgCKgB/s400/logo.png'// a working link to your widget icon
};var oauth=false;/**
 * Define the availability of your extension :
 * - open : available for everyone
 * - marketplace : the customer need to have access to the marketplace
 */var availability='open';/**
 * Define if your extension needs to connect to external service through an application declare on provider side.
 *
 * Uncomment the following block to declare application usage for your extension.
 * Do not forget to add the application attribute in the config object.
 */ /*const application = {
    providerType: '',
};*/ /**
 * The documentation's url of the extension.
 */var links={documentation:''};/**
 * The components available for your extensions
 * 'content' : For the Widget content itself (required)
 * 'settings' : For your widget settings
 * 'globalSettings' : For global settings used by platform admin.
 */var components=['content','settings','global_settings'];// Whether the extension is public or not in the marketplace.
var isPublic=true;/**
 * The list of authorized customer ids.
 *
 * If your extension is not public only these customers will see and
 * will be able to install this extensions.
 */var whitelist=[];// do not change the following unless you know what you are doing
var config={availability:availability,category:'widget',components:components,description:description,extensionId:extensionId,icon:icon,links:links,name:name,oauth:oauth,partnerId:partnerId,public:isPublic,whitelist:whitelist};var _default=config;exports.default=_default;