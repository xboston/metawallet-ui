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
    "error.unknown.domain": "Неизвестный домен",
    "error.emptyfields": "Заполните все обязательные поля",
    "error.wrongqrcode": "В отсканированном QR-коде не найдены данные",
    "error.wrongpassword": "Неправильный пароль",
    "error.wrongpasscode": "Неправильный код-пароль",
    "error.wrongfaceid": "Ошибка аутентификации",
    "error.passwordsdonotmatch": "Пароли не совпадают",
    "error.passwordshort": "Новый пароль слишком короткий. Минимальная длина:",
    "error.notenoughfunds": "Недостаточно средств",
    "error.pknotfound": "Закрытый ключ не найден на устройстве",
    "error.wrongname": "Неправильное имя",

    // success

    "success.success": "Успешно",
    "success.imported": "Импорт выполнен успешно",

    // common

    "common.version": "Версия интерфейса. " + VERSION + "." + VERSION_BUILD + ". Версия приложения. " + VERSION_APP, // + metawallet.env.appVersion + "." + metawallet.env.build,
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

    "transaction.metahash.name.1": "Подтвердить",
    "transaction.metahash.name.20": "Перевод",
    "transaction.metahash.name.101": "Фиксированная награда (за пассивный форджинг)",
    "transaction.metahash.name.102": "Награда за сервер",
    "transaction.metahash.name.103": "Награда за делегирование",
    "transaction.metahash.name.104": "Рандомная награда (за активный форджинг)",
    "transaction.metahash.name.forging": "Начать форджинг",
    "transaction.metahash.name.forging.active": "Начать активный форджинг",
    "transaction.metahash.name.forging.stop": "Остановить форджинг",

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
    "loaderview.tips.tip1": "Не забудьте сохранить пароль!",
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

    "resetpassword.ok": "На ваш e-mail отправлена ссылка для сброса пароля",

    // TermsView

    "termsview.needagree": "Прочитайте и согласитесь с условиями, чтобы продолжить",

    // CreateAccountView

    "register.error.emailexists": "Учетная запись с этим e-mail уже существует",

    // CurrenciesView

    "wallets.settings.base.period.day": "24 часа",
    "wallets.settings.base.period.week": "7 дней",
    "wallets.settings.base.period.month": "1 месяц",
    "wallets.settings.base.currency.1": "TMH",
    "wallets.settings.base.currency.2": "BTC",
    "wallets.settings.base.currency.3": "ETH",
    "wallets.settings.base.currency.4": "MHC",
    "wallets.settings.base.currency.1000": "USD",

    "currenciesview.totalassetsvalue": "Общая стоимость",
    "currenciesview.tab.currencies": "Валюты",
    "currenciesview.tab.wallets": "Недавние кошельки",

    // WalletsView

    "walletsview.tab.wallets": "Кошельки",
    "walletsview.tab.latesttransactions": "Недавние транзакции",

    // WalletView

    "createwalletview.title": "Создать кошелёк",

    // TransferView

    "transferview.error.nodesoffline": "На текущий момент в сети нет активных серверов",
    "transferview.error.notaccepted": "Тразакция не принята",

    // TransactionView

    "transactionview.status.0": "Статус не известен",
    "transactionview.status.10": "В процессе",
    "transactionview.status.20": "Выполнена",
    "transactionview.status.40": "Не принята",

    // AppsView

    "appsview.action.get": "Загрузить приложение",
    "appsview.action.open": "Открыть приложение",

    // SettingsView

    "settings.title": "Настройки",

    "settings.locale.en": "English",
    "settings.locale.ru": "Русский",

    "settings.cache.cleaned": "Кеш очищен",

    // PasswordSettingsView

    "settings.password.changed": "Пароль изменен",
    "settings.password.error.emptyoldpassword": "Введите текущий пароль",
    "settings.password.error.emptynewpassword": "Введите новый пароль",
    "settings.password.error.wrongpassword": "Неверный текущий пароль",

    // PasscodeSettingsView

    "settings.passcode.turnon": "Включить код-пароль",
    "settings.passcode.turnoff": "Отключить код-пароль",
    "settings.passcode.error.donotmatch": "Код-пароли не совпадают",

    // QrCodeAlertView

    "qrcodealertview.title.address": "QR-код с адресом кошелька",
    "qrcodealertview.title.pk": "QR-код с закрытым ключем",
    "qrcodealertview.comment.address": "Поделитесь этим QR-кодом с отправителем",
    "qrcodealertview.comment.pk": "Этот QR-код содержит выш закрытый ключ. Он обеспечивает доступ к вашим средствам без пароля и может быть использован для восстановления потерянного кошелька. Держите его в безопасности!",
    "qrcodealertview.comment.pknotexists": "На устройстве не найден закрытый ключ соответствующий этому кошельку.",
    "qrcodealertview.actions.saveqr": "Сохранить изображение QR-кода",
    "qrcodealertview.actions.showpkqr": "Показать QR-код для закрытого ключа",
    "qrcodealertview.hint": "Выполните свайп слева направо или наоборот для переключения между кошельком <br> и закрытым ключем",

    // WalletCreatedAlertView

    "walletcreatedalertview.notice": "Пароль и ключевой файл <i>не подлежат восстановлению</i> в случае потери. Держите их в безопасности и сделайте резервные копии!",

    // WalletCreateAlertView

    "walletcreatealertview.error.unknowncode": "Неизвестный QR-код",
    "walletcreatealertview.title.address": "Адрес",
    "walletcreatealertview.title.key.public": "Открытый ключ",
    "walletcreatealertview.title.key.enc": "Ключевой файл зашифрован",
    "walletcreatealertview.title.key.open": "Ключевой файл открыт",
    "walletcreatealertview.address.unknown": "Неизвестный адрес",

    // WalletImportEncryptedAlertView

    "walletimportview.error.unknowncode": "Неизвестный QR-код"",
    "walletimportview.title.address": "Адрес",
    "walletimportview.title.key.public": "Открытый ключ",
    "walletimportview.title.key.enc": "Ключевой файл зашифрован",
    "walletimportview.title.key.open": "Ключевой файл открыт",
    "walletimportview.address.unknown": "Неизвестный адрес",

    // MetaPayAlertView

    "metapayalertview.error.nowallets": "Подходящих кошельков не найдено",
    "metapayalertview.error.notenoghfunds": "Недостаточно средств. Выберите другой кошелек или пополнить текуший",

    // iCloudSyncAlertView

    "icloudsyncalertview.title": "Синхронизация iCloud",
    "icloudsyncalertview.warning": "Предупреждение!",
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
