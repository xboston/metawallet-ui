/**
 * Русская локализация
 * @type {Object<string, string>}
 */
window.appLang = {

    // errors

    "error.error": "Ошибка",
    "error.unknown": "Неизвестная ошибка",
    "error.connection": "Ошибка соединения",
    "error.connection.offline": "Автономный режим",
    "error.connection.online": "Онлайн режим",
    "error.notavailable": "Недоступно в текущей версии",
    "error.availableonlyinmetagate": "Доступно только в настольном MetaGate",
    "error.unknown.domain": "Unknown domain",
    "error.emptyfields": "Заполните все обязательные поля",
    "error.wrongqrcode": "No data found in scanned QR code",
    "error.wrongpassword": "Неправильный пароль",
    "error.wrongpasscode": "Неправильный код-пароль",
    "error.wrongfaceid": "Ошибка аутентификации",
    "error.passwordsdonotmatch": "Пароли не совпадают",
    "error.passwordshort": "Новый пароль слишком короткий. Минимальная длина:",
    "error.notenoughfunds": "Недостаточно средств",
    "error.pknotfound": "Закрытый ключ не найден на устройстве",
    "error.wrongname": "Wrong name",

    // success

    "success.success": "Success",
    "success.imported": "Импорт выполнен успешно",

    // common

    "common.version": "Interface ver. " + VERSION + "." + VERSION_BUILD + ". Application ver. " + VERSION_APP, // + metawallet.env.appVersion + "." + metawallet.env.build,
    "common.copyright": "© 2017-2019 #MetaHash.  Все права защищены",

    "common.enabled": "Включено",
    "common.disabled": "Отключено",
    "common.activated": "Активировано",
    "common.copied": "Скопировано",
    "common.saved": "Сохранено",

    "common.ok": "OK",
    "common.cancel": "Отмена",
    "common.yes": "Да",
    "common.no": "Нет",

    "common.pleasewait": "Выполняется...",

    "currency.tmh": "TMH",
    "currency.btc": "BTC",
    "currency.eth": "ETH",
    "currency.mhc": "MHC",
    "currency.usd": "USD",

    "action.continue": "Далее",

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

    "menu.home": "Главная",
    "menu.apps": "Приложения",
    "menu.settings": "Настройки",
    "menu.support": "Поддержка",
    "menu.logout": "Выход",

    // PasscodeAlertView

    "passcodemodalview.title": "Введите пароль",
    "passcodemodalview.title.new": "Введите новый пароль",
    "passcodemodalview.title.repeat": "Повторите новый пароль",
    "passcodemodalview.subtitle": "или используйте Face ID / Touch ID",

    "settings.passcode.changed": "Код-пароль изменен",
    "settings.passcode.turnedon": "Код-пароль включен",
    "settings.passcode.turnedoff": "Код-пароль выключен",

    // LoaderView

    "loaderview.message.connected": "Подключено!",
    "loaderview.message.connecting": "Соединение...",

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

    "auth.error.usernotfound": "Пользователь не найден",

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
    "currenciesview.tab.currencies": "Валюты",
    "currenciesview.tab.wallets": "Recent Wallets",

    // WalletsView

    "walletsview.tab.wallets": "Кошельки",
    "walletsview.tab.latesttransactions": "Latest Transactions",

    // WalletView

    "createwalletview.title": "Создать кошелёк",

    // TransferView

    "transferview.error.nodesoffline": "There are no nodes online now",
    "transferview.error.notaccepted": "Transaction was not accepted",

    // TransactionView

    "transactionview.status.0": "Unknown",
    "transactionview.status.10": "In Progress",
    "transactionview.status.20": "Done",
    "transactionview.status.40": "Not Accepted",

    // AppsView

    "appsview.action.get": "Get App",
    "appsview.action.open": "Open App",

    // SettingsView

    "settings.title": "Настройки",

    "settings.locale.en": "English",
    "settings.locale.ru": "Русский",

    "settings.cache.cleaned": "Кеш очищен",

    // PasswordSettingsView

    "settings.password.changed": "Password changed",
    "settings.password.error.emptyoldpassword": "Enter your current password",
    "settings.password.error.emptynewpassword": "Enter your new password",
    "settings.password.error.wrongpassword": "Wrong current password",

    // PasscodeSettingsView

    "settings.passcode.turnon": "Turn on passcode",
    "settings.passcode.turnoff": "Turn off passcode",
    "settings.passcode.error.donotmatch": "Passcodes do not match",

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

    "node.geo.us": "Америка",
    "node.geo.eu": "Европа",
    "node.geo.cn": "Азия",
    "node.geo.undefined": "не определено",

    // NodeView
    "nodeview.error.notenoghfunds": "Not enough funds for delegation",
};

/**
 * @param {number} time - UNIX timestamp (seconds)
 * @param {boolean} date - need date?
 * @return {string}
 */
window.timeToDateTime = function (time, date) {
    date = typeof date !== "undefined" ? date : false;
    let d = new Date();
    d.setTime(time * 1000);

    /**
     * @param {number} n
     * @return {string}
     */
    function addZero (n) {
        return n <= 9 ? "0" + n : "" + n;
    }

    let dateStr = [addZero(d.getDate()), addZero(d.getMonth() + 1), d.getFullYear()].join(".");
    let timeStr = [addZero(d.getHours()), addZero(d.getMinutes()), addZero(d.getSeconds())].join(":");

    return (date ? dateStr + " " : "") + timeStr;
};
