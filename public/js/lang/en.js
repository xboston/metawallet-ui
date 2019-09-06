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
    "error.availableonlyinmetagate": "Available only in desktop #MetaGate",
    "error.unknown.domain": "Unknown domain",
    "error.emptyfields": "Fill in all required fields",
    "error.wrongqrcode": "No data found in scanned QR code",
    "error.wrongpassword": "Wrong password",
    "error.wrongpasscode": "Wrong passcode",
    "error.wrongfaceid": "Authentication error",
    "error.passwordsdonotmatch": "Passwords do not match",
    "error.passwordshort": "New password too simple. Minimum length:",
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

    "loaderview.tips.header": "TIP",
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
    "termsview.title": "Terms of Services",
    "termsview.agree": "I agree to the<br>Terms of Services",
    "termsview.rules": "<p>These Terms of Use (hereinaſter “Terms”) were created by MetaHash AG, registered address<br/>at Gartenshtrasse 6, 6300 Zug, Switzerland (hereinaſter referred as “the Company”, “we”,<br/>“us”, “our”) and govern your use of https://metahash.org/ (hereinaſter referred as “this<br/>Website” or “our Website”).<br/></p><br/><p><br/>By accessing and using the Website, you agree to the following Terms, as they may be<br/>modified, changed, supplemented or updated from time to time, as well as all applicable laws<br/>and regulations. Please, read the following Terms carefully. If you do not agree to all of these<br/>Terms, please do not use this Website or any information, links or content contained on this<br/>Website. Your access to and use of this Website constitutes your acceptance of and agreement to abide by each of the<br/>terms set forth below including our Privacy Policy which is hereby<br/>incorporated in these Terms by reference. If you are using our Website on behalf of your<br/>organization, that organization accepts these Terms.<br/></p><br/><p><br/>These Terms may be modified, changed, supplemented or updated by the Company in its sole<br/>discretion at any time without advance notice. We suggest that you visit this page regularly to<br/>keep up to date with any changes. Your continued use of this Website will confirm your acceptance of these Terms as<br/>modified, changed, supplemented or updated by us. If you do not<br/>agree to such revised Terms, you must stop using this Website and any information, links or<br/>content contained on this Website.<br/></p><br/><p><br/>This English version of these Terms is the Official version. If you do not speak English, you can<br/>use translation services or translated versions of these Terms available on our Website.<br/>However, please, note that in case of any discrepancies the English version shall always<br/>prevail.<br/></p><br/><br/><h4>General</h4><br/><p><br/>The purpose of our Website is to provide you with some general information about the project,<br/>soſtware and technology being developed by us and to give you an access to the developed<br/>soſtware, including testing, collecting feedback about soſtware and its testing, downloading<br/>of provided applications on our Website. These Terms also apply to applications downloaded<br/>from our Website unless otherwise specified in separate terms of use for these applications.<br/>Compliance with these Terms is mandatory regardless of whether the Website and applications are being used on a<br/>computer or mobile device. You must not breach any of the following<br/>terms or our Acceptable Use Policy set out below.</p><br/><br/><h4>Use of Website</h4><br/><br/><p><br/>We may make (but are not obligated to make) the source code for the soſtware we develop<br/>available for download as open source soſtware. You agree to be bound by, and comply with,<br/>any license agreement that applies to this open source soſtware. You will not indicate that you<br/>are associated with us in connection with your use, modifications or distributions of this open<br/>source soſtware.</p><br/><p><br/>When we host any soſtware and enable you to access and use such soſtware through our<br/>websites including this Website, then these Terms will apply to such access and use, as well<br/>as any license agreements that we may enter into with you.<br/>Open Source Soſtware</p><br/><br/><h4>TERMS OF SERVICES</h4><br/><br/><p><br/>If you post, upload, input, provide or submit your personal data to us, including without<br/>limitation, your name, email address, IP address, cryptocurrency address, text, code or other<br/>information and materials, sign up to our mailing list or create an account on our Website<br/>(collectively, your “User Content”), you must ensure that the User Content provided by you at<br/>that or at any other time is true, accurate, up to date and complete and that any User Content<br/>you post, upload, input, provide or submit to us or via our Website do not breach or infringe the<br/>intellectual property rights of any third party. We do not own, control or endorse any User<br/>Content that is transmitted, stored or processed via our Website or sent to us and we are not<br/>responsible or liable for any User Content. You are solely responsible and liable for all of your<br/>User Content and for your use of any interactive features, links or information or content on<br/>our Website, and you represent and warrant that (i) you own all intellectual property rights (or<br/>have obtained all necessary permissions) to provide your User Content and to grant the<br/>licenses in these terms; (ii) your User Content will not violate any agreements or confidentiality<br/>obligations; and (iii) your User Content will not violate, infringe or misappropriate any<br/>intellectual property right or other proprietary right, including the right of publicity or privacy,<br/>of any person or entity.<br/></p><br/><p><br/>You are entirely responsible for maintaining the confidentiality of your User Content and any<br/>of your non-public information. Furthermore, you are entirely responsible for any and all<br/>activities that occur under your account (if any). You agree to notify us immediately of any<br/>unauthorized use of your User Content, account or any other breach of security. We will not be<br/>liable for any loss or damages that you may incur as a result of someone else using your User<br/>Content or account, either with or without your knowledge. However, you could be held liable<br/>for losses incurred by our Parties (as defined below) or another party due to someone else<br/>using your User Content or account. You may not use anyone else’s User Content or account at<br/>any time without the permission of such person or entity.<br/></p><br/><p><br/>By posting, uploading, inputting, providing or submitting your User Content to us, you grant us,<br/>our affiliates any necessary sub-licensees a non-exclusive, worldwide, perpetual, right and<br/>permission to use, publicly perform and publicly display your User Content for the purposes of<br/>our Website using.<br/></p><br/><p><br/>You must immediately update and inform us of any changes to your User Content by updating<br/>your personal data by contacting us at support@metahash.org, so that we can communicate<br/>with you effectively and provide accurate and up to date information to you.</p><br/><br/><h4>User Content</h4><br/><p><br/>We may display third-party content, advertisements, links, promotions, logos and other materials on our Website<br/>(collectively, the “Third-Party Content”) for your convenience only. We<br/>do not approve of, control, endorse or sponsor any third parties or Third-Party Content, and we<br/>make no representations or warranties of any kind regarding such Third-Party Content, including, without limitation,<br/>the accuracy, validity, legality, copyright compliance, or decency of<br/>such content. Your use of or interactions with any Third-Party Content, and any third party that<br/>provides Third-Party Content, are solely between you and such third parties and we are not<br/>responsible or liable in any manner for such use or interactions. We are not responsible for any<br/>of the content on third party sites linked to our Website nor can it be assumed that we have<br/>reviewed or approved of such sites or their content, nor do we warrant that the links to these<br/>sites work or are up to date. Our Privacy Policy does not apply to Third-Party Content. You shall<br/>consult the terms and conditions and privacy policy of those third party websites to find out<br/>how they collect and use your personal data and to establish whether and for what purpose<br/>they use cookies.</p><br/><br/><h4>Third Party Content</h4><br/><p><br/>If you decide to submit questions, comments, suggestions, ideas, original or creative materials<br/>or other information to us (collectively, “Feedback”), you do so on your own accord and not<br/>based on any request or solicitation from us. Feedback does not include User Content. We<br/>reserve the right to use Feedback for any purpose at no charge and without compensation to<br/>you. Do not send us Feedback if you expect to be paid or want to continue to own or claim<br/>rights to your Feedback. The purpose of these Terms is to avoid potential misunderstandings<br/>or disputes if our products, services, business ideas or business strategies might seem similar<br/>to ideas submitted to us as Feedback. If you decide to send us Feedback, you acknowledge<br/>and understand that we make no assurances that your Feedback will be treated as<br/>confidential or proprietary.<br/></p><br/><p><br/>Although we have no obligation to screen, edit or monitor User Content, we reserve the right,<br/>and have absolute discretion, to remove, screen or edit User Content if it violates these Terms<br/>or provisions of applicable law. Furthermore, if we have reason to believe that there is likely<br/>to be a breach of security, breach or misuse of our Website or if you breach any of your<br/>obligations under these Terms or the Privacy Policy, we may suspend your use of this Website<br/>at any time and for any reason.<br/></p><br/><p><br/>Any User Content submitted by you on this Website may be accessed by us globally.<br/></p><br/><h4>Feedback</h4><br/><p><br/>We may gather information and statistics collectively about all visitors to this Website which<br/>may include the information supplied by you. This information helps us to design and arrange<br/>our Web pages in a user-friendly manner and to continually improve our Website to better<br/>meet the needs of our Website users. We may share this kind of aggregate data with selected<br/>third parties to assist with these purposes. Personal data is processed by us in accordance<br/>with our Privacy Policy.</p><br/><br/><h4>Aggregate Information</h4><br/><p><br/>We and our licensors retain all right, title and interest in and to this Website and its products<br/>and services, including all copyrights, patents, trade secrets, trademarks, other intellectual<br/>property rights, trade names, logos, slogans, custom graphics, button icons, scripts, videos,<br/>text, images, soſtware, code, files, content, information and other material available on our<br/>Website and nothing on this Website may be copied, imitated or used, in whole or in part,<br/>without our or the applicable licensor’s prior written permission. The Company reserves all<br/>rights not expressly granted.</p><br/><p><br/>Any unauthorized reproduction is prohibited.<br/></p><br/><p><br/>You may only access, use and print the information and material on this Website for<br/>non-commercial or personal use provided that you are authorized to access such information<br/>or material and keep intact all copyright and proprietary notices.<br/>You must not otherwise reproduce, adapt, store, transmit, distribute, print, display,<br/>commercialize, publish or create derivative works from any part of the content, format or<br/>design of this Website.<br/></p><br/><p><br/>If you seek to reproduce or otherwise use the content on this Website in any way it is your<br/>responsibility to obtain approval from us for such use. Nothing in these Terms will be<br/>construed as conferring any our right or license to any patent, trademark, copyright or other<br/>our proprietary rights or any third party, whether by estoppel, implication or otherwise.<br/></p><br/><h4>Intellectual Property</h4><br/><p><br/>You must only use the content or services provided through this Website for their stated<br/>purpose. You must not use this Website to:<br/><br />(a) publish, post, send, upload, submit, display or disseminate any information or material<br/>and/or otherwise make available or engage in any conduct that is unlawful, discriminatory,<br/>harassing, libelous, defamatory, abusive, threatening, harmful, offensive, obscene, tortious or<br/>otherwise objectionable;<br/>(b) display, upload or transmit material that encourages conduct that may constitute a<br/>criminal offence, result in civil liability or otherwise violate or breach any applicable laws,<br/>regulations or code of practice;<br /><br/>(c) interfere or violate the legal rights (such as rights of privacy and publicity) of others or<br/>violate others use or enjoyment of this Website;<br/><br />(d) violate any applicable laws or regulations;<br/><br /> (e) use this Website or links on this Website in any manner that could interfere with, disrupt,<br/>negatively affect or inhibit other users from using this Website or links on this Website or that<br/>could damage, disable, overburden or impair the functioning of this Website or our servers or<br/>any networks connected to any of our servers in any manner;<br/><br />(f) create a false identity for the purpose of misleading others or fraudulently or otherwise<br/>misrepresent yourself to be another person or a representative of another entity including, but<br/>not limited to, an authorized user of this Website or our representative, or fraudulently or<br/>otherwise misrepresent that you have an affiliation with a person, entity or group;<br/><br />(g) mislead or deceive us, our representatives and any third parties who may rely on the<br/>information provided by you, by providing inaccurate or false information, which includes<br/>omissions of information;<br/><br />(h) disguise the origin of any material transmitted through the services provided by this<br/>Website (whether by forging message/packet headers or otherwise manipulating normal<br/>identification information);<br/><br />(i) violate, infringe or misappropriate any intellectual or industrial property right of any person<br/>(such as copyright, trademarks, patents, or trade secrets, or other proprietary rights of any<br/>party) or commit a tort;<br/><br />(j) upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted<br/>files, or any other similar soſtware or programs that may damage the operation of another’s<br/>computer or property;<br/><br />(k) send, upload, display or disseminate or otherwise make available material containing or<br/>associated with spam, junk mail, advertising for pyramid schemes, chain letters, virus<br/>warnings (without first confirming the authenticity of the warning), or any other form of<br/>unauthorized advertising or promotional material;<br/><br />(l) access any content, area or functionality of this Website that you are prohibited or restricted from<br/>accessing<br/>or attempt to bypass or circumvent measures employed to prevent or limit<br/>your access to any content, area or functionality of this Website;<br/><br />(m) obtain unauthorized access to or interfere with the performance of the servers which host<br/>this Website or provide the services on this Website or any servers on any associated networks<br/>or otherwise fail to comply with any policies or procedures relating to the use of those servers;<br/></p><br/><h4>Acceptable Use Policy</h4><br/><p><br/>(n) attempt to gain unauthorized access to any services or products, other accounts, computer<br/>systems, or networks connected to any of our servers through hacking, password mining, or<br/>any other means;<br/>(o) obtain or attempt to obtain any materials or information through any means not intentionally made available<br/>through this Website or its services;<br/>(p) harvest or otherwise collect, whether aggregated or otherwise, data about others including<br/>e-mail addresses and/or distribute or sell such data in any manner;<br/>(q) use any part of this Website other than for its intended purpose; or<br/>(r) use this Website to engage in or promote any activity that violates these Terms.<br/>To the fullest extent permitted by applicable law, you will indemnify, defend and hold<br/>harmless us and our respective past, present and future employees, officers, directors,<br/>contractors, consultants, advisers, equity holders, suppliers, vendors, service providers, parent<br/>companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and<br/>assigns (collectively, the “our Parties”) from and against all claims, damages, liabilities,<br/>losses, costs and expenses (including attorneys’ fees) that arise from or relate to: (i) your<br/>access to or use of our Website, products or services; (ii) your User Content; (iii) any Feedback<br/>you provide; or (iv) your violation of these Terms.<br/></p><br/><p><br/>We reserve the right to exercise sole control over the defense, at your expense, of any claim<br/>subject to indemnification pursuant to these terms. This indemnity is in addition to, and not in<br/>lieu of, any other indemnities set forth in a written agreement between you and us.<br/></p><br/><h4>Indemnification</h4><br/><p><br/>THIS WEBSITE AND ALL INFORMATION, PRODUCTS AND SERVICES PROVIDED THROUGH THIS<br/>WEBSITE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS WITHOUT ANY<br/>REPRESENTATIONS, WARRANTIES, PROMISES OR GUARANTEES WHATSOEVER OF ANY KIND<br/>INCLUDING, WITHOUT LIMITATION, ANY REPRESENTATIONS, WARRANTIES, PROMISES OR<br/>GUARANTEES REGARDING THE ACCURACY, CURRENCY, COMPLETENESS, ADEQUACY,<br/>AVAILBILITY, SUITABLITY OR OPERATION OF THIS WEBSITE, ANY PRODUCTS OR SERVICES WE<br/>MAY PROVIDE THROUGH IT OR THE INFORMATION OR MATERIAL IT CONTAINS.<br/>EACH OF OUR PARTIES DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, WHETHER<br/>EXPRESS, IMPLIED OR STATUTORY, WITH REGARD TO THE FOREGOING, INCLUDING, WITHOUT<br/>LIMITATION: (A) ANY WARRANTY WITH RESPECT TO THE CONTENT, INFORMATION, DATA,<br/>SERVICES, AVAILABLITY, UNINTERRUPTED ACCESS, OR SERVICES OR PRODUCTS PROVIDED<br/>THROUGH OR IN CONNECTION WITH THIS WEBSITE; (B) ANY WARRANTIES THAT THIS<br/>WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES, WORMS,<br/>TROJAN HORSES OR OTHER HARMFUL COMPONENTS; (C) ANY WARRANTIES THAT THIS<br/>WEBSITE, ITS CONTENT AND ANY SERVICES OR PRODUCTS PROVIDED THROUGH IT ARE<br/>ERROR-FREE OR THAT DEFECTS IN THIS WEBSITE, ITS CONTENT OR SUCH SERVICES OR<br/>PRODUCTS WILL BE CORRECTED; (D) ANY WARRANTIES OF TITLE OR IMPLIED WARRANTIES<br/>OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE; (E) ANY WARRANTIES THAT<br/>THIS WEBSITE WILL BE COMPATIBLE WITH YOUR COMPUTER OR OTHER ELECTRONIC<br/>EQUIPMENT; AND (F) ANY WARRANTIES OF NON-INFRINGEMENT. THE MATERIALS AND<br/>RELATED GRAPHICS PUBLISHED ON THIS WEBSITE COULD INCLUDE TECHNICAL<br/>INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE<br/>INFORMATION CONTAINED ON THIS WEBSITE. OUR PARTIES MAY MAKE IMPROVEMENTS<br/>AND/OR CHANGES TO THE WEBSITE, ITS PRODUCTS, SERVICES AND/OR THE MATERIALS<br/>DESCRIBED ON THIS WEBSITE AT ANY TIME.<br/></p><br/><h4>Disclaimer</h4><br/><p><br/>In addition, to the maximum extent permitted by law, none of our Parties shall be responsible<br/>or liable for:<br/><br />(a) any loss, liability, cost, expense or damage suffered or incurred arising out of or in connection with any<br/>access to or use of this Website or any of its content;<br/><br />(b) any reliance on, or decision made on the basis of, information or material shown on or<br/>omitted from this Website;<br/><br />(c) any representation or otherwise in respect of the existence or availability of any job, vacancy,<br/>assignment or<br/>other engagement or appointment advertised on this Website (if any) and<br/>any representation or otherwise that we have or will ask for a candidate’s information, will or<br/>have asked to interview or hire a candidate, or that any candidates will meet our needs;<br/><br />(d) any matter affecting this Website or any of its content caused by circumstances beyond<br/>our reasonable control;<br/><br />(e) the performance of this Website and any fault, delays, interruptions or lack of availability<br/>of this Website and any of the services or products provided through this Website, which may<br/>occur due to increased usage of this Website, intermittent failures of this Website or the need<br/>for repairs, maintenance or the introduction of new facilities, products or services; and<br/><br />(f) any information or material on any website operated by a third party which may be<br/>accessed from this Website.<br/></p><br/><p><br/>IN NO EVENT WILL OUR PARTIES BE RESPONSIBLE OR LIABLE FOR ANY CLAIMS, DAMAGES,<br/>LIABILITIES, LOSSES, COSTS OR EXPENSES OF ANY KIND, WHETHER DIRECT OR INDIRECT,<br/>CONSEQUENTIAL, COMPENSATORY, INCIDENTAL, ACTUAL, EXEMPLARY, PUNITIVE OR<br/>SPECIAL (INCLUDING DAMAGES FOR LOSS OF BUSINESS, REVENUES, PROFITS, DATA, USE,<br/>GOODWILL OR OTHER INTANGIBLE LOSSES) REGARDLESS OF WHETHER OUR PARTIES HAVE<br/>BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, LIABILITIES, LOSSES, COSTS OR<br/>EXPENSES, ARISING OUT OF OR IN CONNECTION WITH: (A) THE USE OR PERFORMANCE OF<br/>THIS WEBSITE; (B) ANY PROVISION OF OR FAILURE TO PROVIDE THIS WEBSITE OR ITS<br/>SERVICES (INCLUDING WITHOUT LIMITATION ANY LINKS ON OUR WEBSITE); (C) ANY INFORMATION AVAILABLE FROM THIS WEBSITE;<br/>(D) ANY CONDUCT OR CONTENT OF ANY THIRD<br/>PARTY; (E) UNAUTHORIZED ACCESS, USE OR ALTERATION OF THE TRANSMISSION OF DATA OR<br/>CONTENT TO OR FROM US; OR (F) THE FAILURE TO RECEIVE IN ANY WAY THE TRANSMISSION<br/>OF ANY DATA, CONTENT, FUNDS OR PROPERTY FROM YOU. IN NO CIRCUMSTANCES WILL THE<br/>AGGREGATE LIABILITY OF OUR PARTIES ARISING UNDER THESE TERMS EXCEED $1000.00<br/>CHF.<br/></p><br/><p><br/>Without prejudice to our other rights under these Terms, if you breach these Terms in any way,<br/>we may take such action as we deem appropriate to deal with the breach, including<br/>suspending your access to the Website, prohibiting you from accessing the Website, blocking<br/>computers using your IP address from accessing the Website, contacting your internet service<br/>provider to request that they block your access to the Website and/or bringing court<br/>proceedings against you.<br/></p><br/><h4>Breaches of these Terms</h4><br/><p><br/>These Terms are governed by the laws of Switzerland. All claims arising out of or relating to<br/>these Terms will be litigated exclusively in the courts of the Switzerland and we and you<br/>consent to personal jurisdiction in those courts.<br/></p><br/><h4>Final Provisions</h4><br/><br/><p><br/>These Terms control the relationship between us and you. They do not create any third-party<br/>beneficiary rights.</p><br/><p><br/>If you do not comply with these Terms, and we don’t take action right away, this doesn’t<br/>mean that we are giving up any rights that we may have (such as taking action in the<br/>future).</p><br/><p><br/>If a provision of these Terms is determined by any court or other competent authority to be<br/>unlawful and/or unenforceable, the other provisions will continue in effect.<br/>We may revise these Terms from time-to-time. Revised Terms will apply to the use of this<br/>Website from the date of the publication of the revised Terms on this Website. You shall<br/>check this page regularly to ensure that you are familiar with the current version.<br/>If you have any questions regarding these Terms, please contact us at legal@metahash.org<br/></p><br/><p>This Terms are effective as of April 12, 2018</p>",


    // CreateAccountView

    "register.error.emailexists": "Account with this e-mail address already exists",
    "createaccountview.title": "Create Account",
    "createaccountview.login": "E-mail",
    "createaccountview.password": "Password",
    "createaccountview.password2": "Confirm Password",

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
    "walletsview.tab.wallet": "Wallet",
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
    "walletsview.walletdelegations": "Wallet Delegations",
    "walletsview.notransactions.title": "There were no transactions",
    "walletsview.notransactions.text": "You don’t have any<br>transactions to display",
    "walletsview.nodelegations.title": "There were no delegations",
    "walletsview.nodelegations.text": "You don’t have any<br>delegations to display",

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
    "createwalletview.alert.added": "#MHC Wallet added",
    "createwalletview.alert.address": "Address",
    "createwalletview.alert.password": "Password",
    "createwalletview.alert.savepkqrcode": "Save private key qr code",
    "createwalletview.alert.savepkfile": "Save encrypted private key file",

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
    "settings.menu.locale": "<i class=\"setting-btn-icon icon icon-round-language\"></i>Locale",
    "settings.menu.wallets": "Wallets settings",
    "settings.menu.security": "Security",
    "settings.menu.password": "Account password",
    "settings.menu.passcode": "Passcode",
    "settings.menu.account": "Account settings",
    "settings.menu.deleteaccount": "Delete Account",
    "settings.menu.system": "System",
    "settings.menu.cacheclear": "Clear cache",
    "settings.menu.logout": "Log out",

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
    "metapaview.placeholder.amount": "Amount",
    "metapaview.wallet": "Wallet:",
    "metapaview.toaddress": "To Address:",
    "metapaview.placeholder.address": "Address",
    "metapaview.data": "Data:",
    "metapaview.placeholder.data": "Data",
    "metapaview.password": "Password:",
    "metapaview.placeholder.password": "Wallet password",
    "metapaview.maxfee": "Max fee:",
    "metapaview.button.signandsend": "Sign & Send",
    "metapaview.button.continue": "Continue",
    "metapaview.transfer": "Transfer",
    "metapaview.allavailable": "All available",
    "metapaview.node": "Node:",
    "metapaview.delegation":"Delegation",
    "metapaview.delegationrequest": "Delegation Request",
    "metapaview.delegationrequestpleasecheck": "Please check your delegation details before proceeding",
    "metapaview.undelegation": "Undelegation",
    "metapaview.undelegationrequest": "Undelegation Request",
    "metapaview.undelegationrequestpleasecheck": "Please check your undelegation details before proceeding",

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

    "node.type.Proxy": "Proxy",
    "node.type.InfrastructureTorrent": "Infrastructure Torrent",

    "node.delegation": "delegation",

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
    "nodeview.button.showallnodes": "Show All Nodes",

    // SupportView
    "supportview.title": "#MetaWallet Support",
    "supportview.software.info": "Software information",
    "supportview.software.appversion": "App version:",
    "supportview.software.uiversion": "UI version:",
    "supportview.sendlogs": "send logs to support team",
    "supportview.hint": "Your request will been sent to support team.<br>Requests are processed within 24 hours on the average.<br><br>If you have any questions, please don’t hesitate to contact us:",
    "supportview.disclaimer.title": "Public information",
    "supportview.disclaimer.subtitle": "This is the first public release of #MetaWallet",
    "supportview.disclaimer.text": "We know it’s not perfect, but we focus on making it the best browser for decentralized applications built on #MetaHash platform and other chains and we want to make it the best cryptocurrency wallet for #MetaHash Coins, Tokens and other currencies.",
    "supportview.linkmetagete.title": "Visit #MetaGate",
    "supportview.linkmetagete.text": "download page",
    "supportview.linkgithub.title": "All versions and source code",
    "supportview.linkgithub.text": "on GitHub",
    "supportview.linkmetahash.title": "#MetaWallet is a project by",
    "supportview.linkmetahash.text": "metahash.org",
    "supportview.releasenote.title": "Please keep in mind this is the first release",
    "supportview.releasenote.text": "Bugs happen, but early launches make Apps better. So please understand it’s the first release and be careful with your funds. #MetaGate has a long way ahead to pass public security bounties and public tests.",
    "supportview.releasenote.title2": "We need your Help!",
    "supportview.releasenote.text2.link": "If you have ideas on how to make #MetaGate better please e-mail at: ",
    "supportview.releasenote.text2.link2": "If something doesn’t work please e-mail to: ",
    "supportview.releasenote.title3": "Idea behind #MetaGate",
    "supportview.releasenote.text3": "It’s not a Wallet, it’s a browser, that is able to download user interface or directly access decentralized Apps via mh:// (#MetaHash protocol). The Wallet itself will be a decentralized open source application. At the current stage we allow UI to be written in HTML/JS, but later it will be possible on more complex UIs to require explicit user’s “yes” to be installed<br>#MH protocol means that an App always changes IP addresses where it is hosted and you are working with a random decentralized Node. Data that needs verification is downloaded from multiple sources or #MetaHash DataChain and data that needs synchronisation is uploaded encrypted or public in DataChain.<br><br>",
    "supportview.releasenote.big": " It’s not perfect now, but we believe that this approach will allow decentrilized Applications to be born that were impossible to make before #MetaHash project started.",
    "supportview.discussion.title": "Join discussion",
    "supportview.discussion.linkwebsite": "Our website:",
    "supportview.discussion.linktelegram": "Telegram:",
    "supportview.discussion.linktwitter": "Twitter:",
    "supportview.share.title": "Share this article:",
    "supportview.faq.aboutmetahash": "What is #MetaHash?",
    "supportview.faq.terms": "Terms of Use",
    "supportview.faq.privacypolicy": "Privacy Policy",
    "supportview.faq.antispampolicy": "Anti-Spam Policy",
    "supportview.faq.riskda": "Risk Disclosure Agreement",
    "supportview.contact.title": "Contact Us",
    "supportview.contact.feedback": "Feedback at",
    "supportview.contact.support": "Support at",
    "supportview.contact.pressenquiries": "Press enquiries",
    "supportview.contact.pressoffice": "Press office",
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
