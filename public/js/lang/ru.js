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

    "common.version": "Версия интерфейса: " + VERSION + "." + VERSION_BUILD + ". Версия приложения: " + VERSION_APP, // + metawallet.env.appVersion + "." + metawallet.env.build,
    "common.copyright": "© 2017-2019 #MetaHash.  Все права защищены",

    "common.enabled": "Включено",
    "common.disabled": "Отключено",
    "common.activated": "Активировано",
    "common.copy": "Копировать",
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
    "transaction.metahash.name.101": "Фиксированная награда",
    "transaction.metahash.name.102": "Награда за ноду",
    "transaction.metahash.name.103": "Награда за делегирование",
    "transaction.metahash.name.104": "Рандомная награда",
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
    "menu.coindelegation": "Делегирование",

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

    "loaderview.tips.header": "Советы и подсказки",
    "loaderview.tips.tip1": "Не забудьте сохранить пароль!",
    "loaderview.tips.tip2": "Мы не храним ваши пароли.",
    "loaderview.tips.tip3": "Надежно храните свои ключи. При утере восстановить их будет невозможно.",
    "loaderview.tips.tip4": "Не удаляйте приложение MetaWallet, чтобы не потерять все свои данные.",
    "loaderview.tips.tip5": "Обращаем внимание, что подтверждение транзакций Ethereum и Bitcoin может занимать много времени.",
    "loaderview.tips.tip6": "Вы можете создать неограниченное количество кошельков.",
    "loaderview.tips.tip7": "Вы можете изменить язык интерфейса приложения в настройках.",
    "loaderview.tips.tip8": "Вы можете импортировать кошельки #MetaHash с помощью QR-кода.",
    "loaderview.tips.tip9": "Надежно храните свой пароль. Если вы его потеряете, то вы не сможете управлять своими средствами.",
    "loaderview.tips.tip10": "Мы не храним ваши пароли.",

    // AuthView

    "auth.title.welcome": "Здравствуйте",
    "auth.button.login": "Войти",
    "auth.button.createaccount": "Создать учетную запись",
    "auth.placeholder.login": "E-mail",
    "auth.placeholder.password": "Пароль",
    "auth.link.resetpassword": "Забыли пароль?",
    "auth.error.usernotfound": "Пользователь не найден",

    // ResetPasswordView

    "resetpassword.ok": "На ваш e-mail отправлена ссылка для сброса пароля",

    // TermsView

    "termsview.needagree": "Прочитайте и согласитесь с условиями, чтобы продолжить",
    "termsview.title": "Условиями предоставления услуг",
    "termsview.agree": "Я согласен с условиями<br>предоставления услуг",

    // CreateAccountView

    "register.error.emailexists": "Учетная запись с этим e-mail уже существует",
    "createaccountview.title": "Создание учетной записи",
    "createaccountview.login": "E-mail",
    "createaccountview.password": "Пароль",
    "createaccountview.password2": "Подтвердите пароль",

    // CurrenciesView

    "wallets.settings.base.period.day": "24 часа",
    "wallets.settings.base.period.week": "7 дней",
    "wallets.settings.base.period.month": "1 месяц",
    "wallets.settings.base.currency.1": "TMH",
    "wallets.settings.base.currency.2": "BTC",
    "wallets.settings.base.currency.3": "ETH",
    "wallets.settings.base.currency.4": "MHC",
    "wallets.settings.base.currency.1000": "USD",

    "currenciesview.totalassetsvalue": "Доступный баланс",
    "currenciesview.tab.currencies": "Валюты",
    "currenciesview.tab.wallets": "Недавние кошельки",
    "currenciesview.card.wallets": "Кошельков: <b><!--XX--></b>",
    "currenciesview.card.currencyrate": "Курс",

    // WalletsView

    "walletsview.tab.wallets": "Кошельки",
    "walletsview.tab.wallet": "Кошелек",
    "walletsview.tab.latesttransactions": "История операций",
    "walletsview.button.importpk": "Импортировать ключ",
    "walletsview.button.editwallet": "Редактировать",
    "walletsview.button.transfer": "Перевод",
    "walletsview.button.forging": "Форжинг",
    "walletsview.button.copyaddress": "Копировать&nbsp;адрес",
    "walletsview.button.showqr": "Показать QR-код",
    "walletsview.button.savepk": "Созранить закрытый ключ",
    "walletsview.button.transactions": "Операции",
    "walletsview.button.delegations": "Делегирование",
    "walletsview.walletdelegations": "Делегирование",

    // WalletView

    "createwalletview.navtitle": "Добавить #MHC кошелёк",
    "createwalletview.title": "Создать кошелёк",
    "createwalletview.button.add": "Добавить кошелёк",
    "createwalletview.button.addtip": "Добавить новый или импортировать из QR-кода",
    "createwalletview.placeholder.walletname": "Название кошелька",
    "createwalletview.placeholder.walletpassword": "Пароль для кошелька",
    "createwalletview.button.generate": "Генерировать",
    "createwalletview.button.copy": "Копировать",
    "createwalletview.button.scanqr": "Отсканировать QR-код",
    "createwalletview.button.openfileqr": "Открыть файл с QR-кодом",

    // EditWalletView

    "editwalletview.title": "Редактирование кошелька",
    "editwalletview.tip": "Вы можете переименовать или удалить кошелек",
    "editwalletview.walletname": "Наименование кошелька",
    "editwalletview.button.savechanges": "Сохранить",
    "editwalletview.button.deletewallet": "Удалить кошелек",

    // TransferView

    "transferview.error.nodesoffline": "На текущий момент в сети нет активных нод",
    "transferview.error.notaccepted": "Тразакция не принята",

    // TransactionView

    "transactionview.title": "Информация об операции",
    "transactionview.repeattransfer": "Повторить перевод",
    "transactionview.operation.type": "Тип операции",
    "transactionview.operation.datetime": "Дата и время",
    "transactionview.operation.from": "Отправитель",
    "transactionview.operation.to": "Получатель",
    "transactionview.operation.amount": "Сумма операции",
    "transactionview.operation.status": "Статус операции",
    "transactionview.operation.data": "Данные",
    "transactionview.status.0": "Статус не известен",
    "transactionview.status.10": "В процессе",
    "transactionview.status.20": "Выполнена",
    "transactionview.status.40": "Не принята",
    "transactionview.button.copyhash": "Копировать<br/>хэш",
    "transactionview.button.checkinfo": "Детальная<br/>информация",
    "transactionview.button.repeattrans": "Повторить<br/>операцию",

    // AppsView

    "appsview.action.get": "Загрузить приложение",
    "appsview.action.open": "Открыть приложение",
    "appsview.title": "#MetaApps",
    "appsview.subtitle": "Приложения, основанные на технологии блокчейн",
    "appsview.search.dapps": "Поиск приложений",

    // SettingsView

    "settings.title": "Настройки",

    "settings.menu.locale": "Язык",
    "settings.menu.wallets": "Кошельки",
    "settings.menu.security": "Безопасность",
    "settings.menu.password": "Пароль",
    "settings.menu.passcode": "Код-пароль",
    "settings.menu.account": "Настройки учетной записи",
    "settings.menu.deleteaccount": "Удалить учетную запись",
    "settings.menu.system": "Системные",
    "settings.menu.cacheclear": "Очистить кэш",
    "settings.menu.logout": "Выход",

    "settings.cache.cleaned": "Кеш очищен",

    // LocaleSettingsView

    "settings.locale.title": "Языковые настройки ",
    "settings.locale.language": "Язык",
    "settings.locale.en": "English",
    "settings.locale.ru": "Русский",

    // WalletsSettingsView
    "settings.wallets.title": "Кошельки",
    "settings.wallets.display": "Настройки отображения",
    "settings.wallets.display.all": "Отображать все кошельки",
    "settings.wallets.display.onlydevice": "Отображать кошельки расположенные на устройстве",
    "settings.wallets.storepkinicloud": "Хранить закрытые ключи в iCloud",
    "settings.wallets.display.hint": "Если вы выберете отображение всех кошельков, кошельки, которые отсутствуют на вашем устройстве, будут отображаться серым цветом. Вам будет не доступна возможность просмотра баланса и выполнения операций для кошельков, отсутствующих на устройстве.",
    "settings.wallets.icloud.hint": "Если ваше устройство будет потеряно или повреждено, то при переходе на новое устройство вы сможте восстановить кошельки из iCloud. Если вы не хотите хранить закрытые ключи в iCloud, то обязательно храниете резервную копию ваших закрытых ключей в другом месте.<br><b>При утере восстановить их будет невозможно.</b>",

    // PasswordSettingsView

    "settings.password.title": "Пароль",
    "settings.password.change": "Изменить пароль",
    "settings.password.change.button": "Изменить пароль",
    "settings.password.changed": "Пароль изменен",
    "settings.password.oldpassword": "Текущий пароль",
    "settings.password.newpassword": "Пароль",
    "settings.password.repeatnewpassword": "Повторите  пароль",
    "settings.password.tupeoldpassword": "Введите текущий пароль",
    "settings.password.tupenewpassword": "Введите новый пароль",
    "settings.password.tupenewpasswordagain": "Введите новый пароль еще раз",
    "settings.password.error.emptyoldpassword": "Введите текущий пароль",
    "settings.password.error.emptynewpassword": "Введите новый пароль",
    "settings.password.error.wrongpassword": "Неверный текущий пароль",
    "settings.password.hint": "Надежно храните свой пароль. Если вы его потеряете, то вы не сможете управлять своими средствами.",

    // PasscodeSettingsView

    "settings.passcode.title": "Код-пароль",
    "settings.passcode.change.button": "Изменить код-пароль",
    "settings.passcode.turnon": "Включить код-пароль",
    "settings.passcode.turnoff": "Отключить код-пароль",
    "settings.passcode.error.donotmatch": "Код-пароли не совпадают",
    "settings.passcode.options": "Дополнительные настройки",
    "settings.passcode.biometricsID": "Разблокировка по Face ID или Touch ID",
    "settings.passcode.hint": "Используйте код-пароль, чтобы свести к минимуму риск несанкционированного доступа к вашим данным",

    // QrCodeAlertView

    "qrcodealertview.title.address": "QR-код с адресом кошелька",
    "qrcodealertview.title.pk": "QR-код с закрытым ключем",
    "qrcodealertview.comment.address": "Поделитесь этим QR-кодом с отправителем",
    "qrcodealertview.comment.pk": "Этот QR-код содержит выш закрытый ключ. Он обеспечивает доступ к вашим средствам без пароля и может быть использован для восстановления потерянного кошелька. Держите его в безопасности!",
    "qrcodealertview.comment.pknotexists": "На устройстве не найден закрытый ключ соответствующий этому кошельку.",
    "qrcodealertview.actions.saveqr": "Сохранить изображение QR-кода",
    "qrcodealertview.actions.showpkqr": "Показать QR-код для закрытого ключа",
    "qrcodealertview.hint": "Выполните свайп слева направо или наоборот для переключения<br> между публичным адресом и закрытым ключём",

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

    "walletimportview.error.unknowncode": "Неизвестный QR-код",
    "walletimportview.title.address": "Адрес",
    "walletimportview.title.key.public": "Открытый ключ",
    "walletimportview.title.key.enc": "Ключевой файл зашифрован",
    "walletimportview.title.key.open": "Ключевой файл открыт",
    "walletimportview.address.unknown": "Неизвестный адрес",

    // MetaPayView

    "metapaview.amount": "Количество:",
    "metapaview.wallet": "Кошелек:",
    "metapaview.toaddress": "Получатель:",
    "metapaview.data": "Информация:",
    "metapaview.password": "Пароль:",
    "metapaview.maxfee": "Максимальная комиссия:",
    "metapaview.button.signandsend": "Подписать и отправить",
    "metapaview.button.continue": "Далее",


    // MetaPaySelectWalletAlertView

    "selectwalletalertview.title": "Выбор кошелька",

    // MetaPayAlertView

    "metapayalertview.error.nowallets": "Подходящих кошельков не найдено",
    "metapayalertview.error.notenoghfunds": "Недостаточно средств. Выберите другой кошелек или пополнить текуший",

    // iCloudSyncAlertView

    "icloudsyncalertview.title": "Синхронизация iCloud",
    "icloudsyncalertview.warning": "Предупреждение!",
    "icloudsyncalertview.text1": "По умолчанию закрытые ключи будут храниться в iCloud. Вы можете изменить параметры синхронизации в настройках.",
    "icloudsyncalertview.text2": "Надежно храните ваши пароли и закрытые ключи. При утере восстановить их будет невозможно.",

    // OfferPasscodeAlertView

    "offerpasscodealertview.title": "Установите код-доступа",
    "offerpasscodealertview.text": "Установите 4-значный код-доступа, чтобы упростить вход в приложение.",
    "offerpasscodealertview.actions.yes": "Установить код-пароль",
    "offerpasscodealertview.actions.no": "Пропустить",

    // NoPkAlertView

    "nopkalertview.text1": "Отсутствует закрытый ключ",
    "nopkalertview.text2": "Перевод средств без закрытого ключа невозможен. Импортируйте закрытый ключ, чтобы получить возможность переводить средства. Без закрытого ключа доступен просмотр информации о балансе кошелька и просмотр истории транзакций.",
    "nopkalertview.actions.import": "Импорт ключа из QR-кода",
    "nopkalertview.actions.cancel": "Назад",

    // importpk

    "importpk.wrongcurrency": "QR-код не содержит $currency кошелек",

    // GEO

    "node.geo.us": "Америка",
    "node.geo.eu": "Европа",
    "node.geo.cn": "Азия",
    "node.geo.undefined": "не определено",

    // NodeView
    "nodeview.error.notenoghfunds": "Недостаточно средств для делегирования",
    "nodeview.filter.recommended": "Рекомендуемые",
    "nodeview.filter.allnodes": "Все ноды",
    "nodeview.sort.balanceup": "Баланс",
    "nodeview.title": "Ноды",
    "nodeview.trust": "Уровень доверия",
    "nodeview.roi": "ROI",
    "nodeview.geo": "Местоположение",
    "nodeview.avgrps": "Avg RPS",
    "nodeview.lastcheck": "Последняя проверка",
    "nodeview.search.node": "Поиск ноды",
    "nodeview.button.delegate": "Делегировать",
    "nodeview.button.undelegateall": "Разделегировать все",
    "nodeview.button.moreinfo": "Больше информации",
    "nodeview.button.undelegate": "Разделегировать",
    "nodeview.button.showallnodes": "Показать все ноды",
    
    // SupportView
    "supportview.title": "#MetaWallet поддержка",
    "supportview.software.info": "Информация о приложении",
    "supportview.software.appversion": "Версия приложения:",
    "supportview.software.uiversion": "Версия интерфейса:",
    "supportview.sendlogs": "Отправить логи в службу поддержки",
    "supportview.hint": "Ваш запрос был успешно отправлен в службу поддержки.<br>Запросы обрабатываются в среднем в течение 24 часов.<br><br>Напишите нам, если у Вас остались вопросы. Мы с удовольствием на них ответим. ",
    "supportview.disclaimer.title": "Публичная информация",
    "supportview.disclaimer.subtitle": "Это первый публичный релиз #MetaGate.",
    "supportview.disclaimer.text": "Мы понимаем, что данное приложение не идеально и мы продалжаем работать над его улучшением, чтобы сделать его лучшим браузером для децентрализованных приложений, разработанных на платформе #MetaHash, и мы планируем сделать его лучшим криптовалютным кошельком для монет #MetaHash, токенов и других валют.",
    "supportview.linkmetagete.title": "Посетите #MetaGate ",
    "supportview.linkmetagete.text": "Страница загрузки",
    "supportview.linkgithub.title": "Все версии и исходный код ",
    "supportview.linkgithub.text": "на GitHub",
    "supportview.linkmetahash.title": "#MetaGate это проект ",
    "supportview.linkmetahash.text": "metahash.org",
    "supportview.releasenote.title": "Обратите внимание, что это один из первых релизов приложения",
    "supportview.releasenote.text": "Это один из первых релизов приложения и в нем могут возникать ошибки. Приложение находится на стадии тестирования и ему еще далеко до перехода в промышленную эксплуатацию, поэтому будьте осторожны при его использовании.",
    "supportview.releasenote.title2": "Нам нужна Ваша помощь!",
    "supportview.releasenote.text2.link": "Если у вас есть идеи о том, как сделать приложение #MetaGate лучше, то пишите на E-mail:",
    "supportview.releasenote.text2.link2": "Если что-то не работает, пожалуйста, напишите:",
    "supportview.releasenote.title3": "Идея #MetaGate",
    "supportview.releasenote.text3": "MetaGate это не кошелек, это каталог децентрализованных приложений и браузер, который может загружать пользовательский интерфейс приложений или напрямую обращаться к децентрализованным приложениям через mh: // (протокол #MetaHash), в том числе с кошельком, являющимся децентрализованным приложением с открытым исходным кодом. На текущем момент в MetaGate обеспечена возможность работы приложений, пользовательский интерфейс которых разработан с использованием HTML и JS.<br>",
     "supportview.releasenote.big": " #MetaHash находится в стадии разработки и нам потребуется проделать еще много работы, чтобы сделать из него идеальную платформу для создания  работающих в в режиме реального времени децентрализованных приложений. Мы считаем, что #MetaHash позволит создавать децентрализованные приложения, разработка которых была не возможна до его запуска.",
    "supportview.discussion.title": "Присоединяйтесь",
    
    
    "supportview.discussion.linkwebsite": "Наш веб-сайт: ",
    "supportview.discussion.linktelegram": "Telegram: ",
    "supportview.discussion.linktwitter": "Twitter: ",
    "supportview.share.title": "Поделиться ссылкой: ",
    "supportview.faq.aboutmetahash": "Что такое #MetaHash?",
    "supportview.faq.terms": "Условия использования",
    "supportview.faq.privacypolicy": "Политика конфиденциальности",
    "supportview.faq.antispampolicy": "Анти-Спам политика",
    "supportview.faq.riskda": "Соглашение о раскрытии рисков",
    
    "supportview.contact.title": "Контакты",
    "supportview.contact.feedback": "Обратная связь ",
    "supportview.contact.support": "Служба поддержки  ",
    "supportview.contact.pressenquiries": "Электронный адрес для пресс-запросов ",
    "supportview.contact.pressoffice": "Телефон пресс-службы ",

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
