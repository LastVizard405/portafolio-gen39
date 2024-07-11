import activeMenu from './components/selected_menu.js';
import updateCopyrightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import languageChanger from './components/language_changer.js';

loader();

activeMenu();

resetToHome();

updateCopyrightYear();

sendEmail();

languageChanger();
