/**
 *  Create-LumApps-Widget config file
 *  update the following to fit your needs
 */

/**
 * The ids of your partner and extension
 */
const partnerId = {
    beta: '2faa6561-a07d-4a8b-8ebb-e9f55b616ee2',
    production: '',
};

const extensionId = {
    beta: '194713396028935666177751391327792956924',
    production: '',
};

const description = {
    en: 'coba widget buat dana',
};

const name = {
    en: 'test',
};

const icon = {
    en:
        'https://www.point-star.com/wp-content/uploads/2021/06/ps-logo.png', // a working link to your widget icon
};

const oauth = false;

/**
 * Define the availability of your extension :
 * - open : available for everyone
 * - marketplace : the customer need to have access to the marketplace
 */

const availability = 'marketplace';

/**
 * Define if your extension needs to connect to external service through an application declare on provider side.
 *
 * Uncomment the following block to declare application usage for your extension.
 * Do not forget to add the application attribute in the config object.
 */
/*const application = {
    providerType: '',
};*/

/**
 * The documentation's url of the extension.
 */
const links = {
    documentation: null,
};

/**
 * The components available for your extensions
 * 'content' : For the Widget content itself (required)
 * 'settings' : For your widget settings
 * 'globalSettings' : For global settings used by platform admin.
 */
const components = ['content', 'settings', 'global_settings'];

// Whether the extension is public or not in the marketplace.
const isPublic = true;

/**
 * The list of authorized customer ids.
 *
 * If your extension is not public only these customers will see and
 * will be able to install this extensions.
 */
const whitelist = [];

// do not change the following unless you know what you are doing
const config = {
    availability,
    category: 'widget',
    components,
    description,
    extensionId,
    icon,
    links,
    name,
    oauth,
    partnerId,
    public: isPublic,
    whitelist,
};

export default config;
