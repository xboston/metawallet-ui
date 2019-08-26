/**
 * English locale
 * @type {Object<string, string>}
 */
window.appLang = {

    // errors

    "error.error": "Error",
    "error.unknown": "Unknown error",
    "error.connection": "Connection problem",
    "error.connection.offline": "Offline mode",
    "error.connection.online": "Online mode",
    "error.notavailable": "Not available in current version",
    "error.availableonlyinmetagate": "Available only in desktop MetaGate",
    "error.unknown.domain": "Unknown domain",
    "error.emptyfields": "Fill in all required fields",
    "error.wrongqrcode": "No data found in scanned QR code",
    "error.wrongpassword": "Wrong password",
    "error.wrongpasscode": "Wrong passcode",
    "error.wrongfaceid": "Authentication error",
    "error.passwordsdonotmatch": "Passwords do not match",
    "error.passwordshort": "New password too simple. Minimum length: ",
    "error.notenoughfunds": "Not enough funds",
    "error.pknotfound": "Private key not found on the device",
    "error.wrongname": "Wrong name",

    // success

    "success.success": "Success",
    "success.imported": "Import successful",

    // common

    "common.version": "Interface ver. " + VERSION + "." + VERSION_BUILD + ". Application ver. " + VERSION_APP, // + metawallet.env.appVersion + "." + metawallet.env.build,
    "common.copyright": "Copyright © 2017-2019 #MetaHash.  All Rights Reserved",

    "common.enabled": "Enabled",
    "common.disabled": "Disabled",
    "common.activated": "Activated",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "common.saved": "Saved",

    "common.ok": "OK",
    "common.cancel": "Cancel",
    "common.yes": "Yes",
    "common.no": "No",

    "common.pleasewait": "Action in progress...",

    "currency.tmh": "TMH",
    "currency.btc": "BTC",
    "currency.eth": "ETH",
    "currency.mhc": "MHC",
    "currency.usd": "USD",

    "action.continue": "Continue",

    // Transaction

    "transaction.metahash.name.1": "Approve",
    "transaction.metahash.name.20": "Transfer to address",
    "transaction.metahash.name.101": "Wallet reward",
    "transaction.metahash.name.102": "Node reward",
    "transaction.metahash.name.103": "Coin reward",
    "transaction.metahash.name.104": "Random reward",
    "transaction.metahash.name.forging": "Start Forging",
    "transaction.metahash.name.forging.active": "Start Active Forging",
    "transaction.metahash.name.forging.stop": "Stop Forging",

    // System wallets
    "wallets.metahash.name.0x666174686572206f662077616c6c65747320666f7267696e67": "#MetaForging",

    // MenuView

    "menu.home": "Home",
    "menu.apps": "Apps",
    "menu.settings": "Settings",
    "menu.support": "Support",
    "menu.logout": "Log out",
    "menu.coindelegation": "Coin Delegation",

    // PasscodeAlertView

    "passcodemodalview.title": "Enter Passcode",
    "passcodemodalview.title.new": "Enter New Passcode",
    "passcodemodalview.title.repeat": "Repeat New Passcode",
    "passcodemodalview.subtitle": "or use Face ID / Touch ID",

    "settings.passcode.changed": "Passcode changed",
    "settings.passcode.turnedon": "Passcode turned on",
    "settings.passcode.turnedoff": "Passcode turned off",

    // LoaderView

    "loaderview.message.connected": "Connected!",
    "loaderview.message.connecting": "Connecting...",

    "loaderview.tips.header": "TIP ",
    "loaderview.tips.tip1": "Remember to keep the password yourself!",
    "loaderview.tips.tip2": "We never save your password anywhere.",
    "loaderview.tips.tip3": "Please keep your keys safely. Keep in mind that if you lose them, your keys cannot be recovered.",
    "loaderview.tips.tip4": "Don\u2019t delete the app in order not to lose all of its data.",
    "loaderview.tips.tip5": "Please note: the confirmation of Ethereum/Bitcoin transactions can take a long time.",
    "loaderview.tips.tip6": "You may create unlimited number of wallets.",
    "loaderview.tips.tip7": "You can select the preferred language in the menu.",
    "loaderview.tips.tip8": "You can import existing #MetaHash wallets using QR code.",
    "loaderview.tips.tip9": "Please keep the key password safely. If you lose it, you will not be able to manage your money. Make sure  you will not forget it.",
    "loaderview.tips.tip10": "We never save your password anywhere.",

    // AuthView

    "auth.title.welcome": "Welcome back",
    "auth.button.login": "Login",
    "auth.button.createaccount": "Create account",
    "auth.placeholder.login": "E-mail",
    "auth.placeholder.password": "Password",
    "auth.link.resetpassword": " Forgot password?",
    "auth.error.usernotfound": "User not found",

    // ResetPasswordView

    "resetpassword.ok": "Password reset link has been sent to your e-mail address",

    // TermsView

    "termsview.needagree": "Please read and agree with terms and conditions to continue",

    // CreateAccountView

    "register.error.emailexists": "Account with this e-mail address already exists",

    // CurrenciesView

    "wallets.settings.base.period.day": "24H",
    "wallets.settings.base.period.week": "7 DAYS",
    "wallets.settings.base.period.month": "1 MONTH",
    "wallets.settings.base.currency.1": "TMH",
    "wallets.settings.base.currency.2": "BTC",
    "wallets.settings.base.currency.3": "ETH",
    "wallets.settings.base.currency.4": "MHC",
    "wallets.settings.base.currency.1000": "USD",

    "currenciesview.totalassetsvalue": "Total Assets Value",
    "currenciesview.tab.currencies": "Currencies",
    "currenciesview.tab.wallets": "Recent Wallets",
    "currenciesview.card.wallets": "<b><!--XX--></b> wallets",
    "currenciesview.card.currencyrate": "Currency rate",

    // WalletsView

    "walletsview.tab.wallets": "Wallets",
    "walletsview.tab.latesttransactions": "Latest Transactions",
    "walletsview.button.importpk": "Import PK",
    "walletsview.button.editwallet": "Edit Wallet",
    "walletsview.button.transfer": "Transfer",
    "walletsview.button.forging": "Forging",
    "walletsview.button.copyaddress": "Copy Address",
    "walletsview.button.showqr": "Show QR",
    "walletsview.button.savepk": "Save PK",
    "walletsview.button.transactions": "Transactions",
    "walletsview.button.delegations": "Delegations",
    

    // WalletView

    "createwalletview.navtitle": "Add #MHC wallet",
    "createwalletview.title": "Create new wallet",
    "createwalletview.button.add": "Add wallet",
    "createwalletview.button.addtip": "Create new or import from QR code",
    "createwalletview.placeholder.walletname": "Wallet Name",
    "createwalletview.placeholder.walletpassword": "Wallet Password",
    "createwalletview.button.generate": "Generate",
    "createwalletview.button.copy": "Copy",
    "createwalletview.button.scanqr": "Scan Qr code",
    "createwalletview.button.openfileqr": "Open file with qr code",

    // EditWalletView

    "editwalletview.title": "Edit Wallet",
    "editwalletview.tip": "You can rename or delete wallet.",
    "editwalletview.walletname": "Wallet name",
    "editwalletview.button.savechanges": "Save changes",
    "editwalletview.button.deletewallet": "Delete wallet",

    // TransferView

    "transferview.error.nodesoffline": "There are no nodes online now",
    "transferview.error.notaccepted": "Transaction was not accepted",

    // TransactionView

    "transactionview.title": "transaction information",
    "transactionview.repeattransfer": "Repeat Transfer",
    "transactionview.operation.type": "Operation Type",
    "transactionview.operation.datetime": "Date and Time",
    "transactionview.operation.from": "From Wallet",
    "transactionview.operation.to": "Recipient",
    "transactionview.operation.amount": "Transfer Amount",
    "transactionview.operation.status": "Status",
    "transactionview.operation.data": "Data",
    "transactionview.status.0": "Unknown",
    "transactionview.status.10": "In Progress",
    "transactionview.status.20": "Done",
    "transactionview.status.40": "Not Accepted",
    "transactionview.button.copyhash": "Copy<br/>Hash",
    "transactionview.button.checkinfo": "Check<br/>Info",
    "transactionview.button.repeattrans": "Repeat<br/>Trans.",

    // AppsView

    "appsview.action.get": "Get App",
    "appsview.action.open": "Open App",
    "appsview.title": "#MetaApps",
    "appsview.subtitle": "Collection of Apps, based on<br>blockchain technology",
    "appsview.search.dapps": "Search DApps",

    // SettingsView
    
    "settings.title": "Settings",

    "settings.menu.locale": "Locale",
    "settings.menu.wallets": "Wallets settings",
    "settings.menu.security": "Security",
    "settings.menu.password": "Account password",
    "settings.menu.passcode": "Passcode",
    "settings.menu.account": "Account settings",
    "settings.menu.deleteaccount": "Delete Account",
    "settings.menu.system": "System",
    "settings.menu.cacheclear": "Clear cache",
    "settings.menu.logout": "Выход",
    
    "settings.cache.cleaned": "Cache cleaned",
    
    // LocaleSettingsView
    
    "settings.locale.title": "Locale Settings",
    "settings.locale.language": "Language",
    "settings.locale.en": "English",
    "settings.locale.ru": "Русский",
    
    // WalletsSettingsView
    "settings.wallets.title": "Wallets settings",    
    "settings.wallets.display": "Display settings",
    "settings.wallets.display.all": "Display all wallets",
    "settings.wallets.display.onlydevice": "Show wallets on the device only",
    "settings.wallets.storepkinicloud": "Store private keys in iCloud",
    "settings.wallets.display.hint": "You can choose one of the display’s options to see all wallets even some of them are not on your current device or see only the wallets located on your device. If you select to display all wallets, the wallets not located on your device will be displayed as grey. You will not be allowed to perform transactions and check status and balance of such a wallet.",
    "settings.wallets.icloud.hint": "If  your device is lost or damaged you can restore wallets from iCloud to your new device. If turned off, please make sure you have secure backup of your private keys and passwords elswhere. They can not be restored or reset.<br><b>If lost, they are gone.</b>",

    // PasswordSettingsView

    "settings.password.title": "Account password",
    "settings.password.change": "Change password",
    "settings.password.change.button": "Change password",
    "settings.password.oldpassword": "Current password",
    "settings.password.newpassword": "Password",
    "settings.password.repeatnewpassword": "Repeat password",
    "settings.password.tupeoldpassword": "Type your current password",
    "settings.password.tupenewpassword": "Type new password",
    "settings.password.tupenewpasswordagain": "Type new password again",
    "settings.password.changed": "Password changed",
    "settings.password.error.emptyoldpassword": "Enter your current password",
    "settings.password.error.emptynewpassword": "Enter your new password",
    "settings.password.error.wrongpassword": "Wrong current password",
    "settings.password.hint": "Please keep the key password safely. If you lose it, you will not be able to manage your money. Make sure  you will not forget it.",

    // PasscodeSettingsView
    
    "settings.passcode.title": "Passcode Settings",
    "settings.passcode.change.button": "Change passcode",
    "settings.passcode.turnon": "Turn on passcode",
    "settings.passcode.turnoff": "Turn off passcode",
    "settings.passcode.error.donotmatch": "Passcodes do not match",
    "settings.passcode.options": "Options",
    "settings.passcode.biometricsID": "Face ID / Touch ID",
     "settings.passcode.hint": "Passcode is needed if you want to protect your account from unauthorized access by others.",

    // QrCodeAlertView

    "qrcodealertview.title.address": "Wallet Address QR Code",
    "qrcodealertview.title.pk": "Private Key QR Code",
    "qrcodealertview.comment.address": "Use this QR code to scan, when someone needs to send you coins.",
    "qrcodealertview.comment.pk": "This QR code has your private key. It gives access to your funds without password and can be used to restore lost wallet. Keep it secure!",
    "qrcodealertview.comment.pknotexists": "Private key for this wallet was not found on the device.",
    "qrcodealertview.actions.saveqr": "Save QR Code Image",
    "qrcodealertview.actions.showpkqr": "Show PK QR Code",
    "qrcodealertview.hint": "Swipe cards to switch between Wallet<br>and Private Key QR codes",

    // WalletCreatedAlertView

    "walletcreatedalertview.notice": "Password and key file are <i>non-recoverable</i> if lost. Keep them save and make backups!",

    // WalletCreateAlertView

    "walletcreatealertview.error.unknowncode": "Unknown QRcode",
    "walletcreatealertview.title.address": "Address",
    "walletcreatealertview.title.key.public": "Public Key",
    "walletcreatealertview.title.key.enc": "Key file is encrypted",
    "walletcreatealertview.title.key.open": "Key file is open",
    "walletcreatealertview.address.unknown": "Address unknown",

    // WalletImportEncryptedAlertView

    "walletimportview.error.unknowncode": "Unknown QRcode",
    "walletimportview.title.address": "Address",
    "walletimportview.title.key.public": "Public Key",
    "walletimportview.title.key.enc": "Key file is encrypted",
    "walletimportview.title.key.open": "Key file is open",
    "walletimportview.address.unknown": "Address unknown",

   // MetaPayView

    "metapaview.amount": "Amount:",
    "metapaview.wallet": "Wallet:",
    "metapaview.toaddress": "To Address:",
    "metapaview.data": "Data:",
    "metapaview.password": "Password:",
    "metapaview.maxfee": "Max fee:",
    "metapaview.button.signandsend": "Sign & Send:",
    "metapaview.button.continue": "Continue",
    
    // MetaPaySelectWalletAlertView

    "selectwalletalertview.title": "Select wallet",
    
    // MetaPayAlertView

    "metapayalertview.error.nowallets": "No suitable wallets found",
    "metapayalertview.error.notenoghfunds": "Not enough funds. Select different wallet or add funds",

    // iCloudSyncAlertView

    "icloudsyncalertview.title": "iCloud synchronization",
    "icloudsyncalertview.warning": "WARNING!",
    "icloudsyncalertview.text1": "Wallets private keys will be stored in iCloud by default. You can change this in settings later.",
    "icloudsyncalertview.text2": "Storing passwords and private keys is your responsibility. They can not be restored. <b>If lost, they are gone.</b>",

    // OfferPasscodeAlertView

    "offerpasscodealertview.title": "Make it easier!",
    "offerpasscodealertview.text": "You can set up a 4-digit passcode and simplify your login to the application.",
    "offerpasscodealertview.actions.yes": "Set up a passcode",
    "offerpasscodealertview.actions.no": "No, thanks, just let me in",

    // NoPkAlertView

    "nopkalertview.text1": "There is no private key<br>available on your device",
    "nopkalertview.text2": "Unfortunately, you can’t make a transfer before you place this wallet’s private key to the memory storage of your phone/tablet. You can view the history of transactions, information about the wallet and cryptocurrency balance.",
    "nopkalertview.actions.import": "Import key from QR code",
    "nopkalertview.actions.cancel": "cancel and return",

    // importpk

    "importpk.wrongcurrency": "Scaned QR does not contain $currency wallet",

    // GEO

    "node.geo.us": "America",
    "node.geo.eu": "Europe",
    "node.geo.cn": "Asia",
    "node.geo.undefined": "undefined",

    // NodeView
    "nodeview.error.notenoghfunds": "Not enough funds for delegation",
    "nodeview.filter.recommended": "Recommended",
    "nodeview.filter.allnodes": "All nodes",
    "nodeview.sort.balanceup": "Balance up",
    "nodeview.title": "Nodes",
    "nodeview.trust": "Node trust",
    "nodeview.roi": "ROI",
    "nodeview.geo": "Geo",
    "nodeview.avgrps": "Avg RPS",
    "nodeview.lastcheck": "Last check",
    "nodeview.search.node": "Search node",
    "nodeview.button.delegate": "Delegate",
    "nodeview.button.undelegateall": "Undelegate all",
    "nodeview.button.moreinfo": "More Info",
    "nodeview.button.undelegate": "Undelegate",

};

/**
 * @param {number} time - UNIX timestamp (seconds)
 * @param {boolean} date - need date?
 * @param {boolean} hideTime - need time?
 * @return {string}
 */
window.timeToDateTime = function (time, date, hideTime) {
    date = typeof date !== "undefined" ? date : false;
    hideTime = typeof hideTime !== "undefined" ? hideTime : false;
    let d = new Date();
    d.setTime(time * 1000);

    let dateStr = [(d.getMonth() + 1), d.getDate(), d.getFullYear()].join("/");

    if (hideTime) {
        return dateStr;
    }

    /**
     * @param {number} n
     * @return {string}
     */
    function addZero (n) {
        return n <= 9 ? "0" + n : "" + n;
    }

    let h = d.getHours();
    let hour = h === 0 ? 12 : h % 12;
    let suffix = h < 12 ? "AM" : "PM";
    let timeStr = [hour, addZero(d.getMinutes()), addZero(d.getSeconds())].join(":") + " " + suffix;

    return (date ? dateStr + " " : "") + timeStr;
};

window.pluralize = (count, noun, suffix = "s") => `${count} ${noun}${count !== 1 ? suffix : ""}`;
