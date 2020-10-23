import language from '../language.json';


function upSessionsStorage() {
    return language.language[JSON.parse(sessionStorage.getItem("language")).lang] == null ? 0 : JSON.parse(sessionStorage.getItem("language")).lang;
}

export default {

    //Allow to recover the list of all languages
    getListLang() {
        var allLang = [];
    
        for(let i = 0; i < language.language.length; i++) {
            allLang.push({label: language.language[i].label, value: language.language[i].label, id: i});
        }
    
        return allLang;
    },

    //Allow to recover the title of page
    getTitle(path) {
        switch (path) {
            case "/":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.home : language.language[language.language[JSON.parse(sessionStorage.getItem("language")).lang] == null ? 0 : JSON.parse(sessionStorage.getItem("language")).lang].sidebarTitle.home;
            case "/reverse":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.matrixReverse : language.language[language.language[JSON.parse(sessionStorage.getItem("language")).lang] == null ? 0 : JSON.parse(sessionStorage.getItem("language")).lang].sidebarTitle.matrixReverse;
            case "/encrypt":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.encrypt : language.language[language.language[JSON.parse(sessionStorage.getItem("language")).lang] == null ? 0 : JSON.parse(sessionStorage.getItem("language")).lang].sidebarTitle.encrypt;
            case "/decrypt":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.decrypt : language.language[language.language[JSON.parse(sessionStorage.getItem("language")).lang] == null ? 0 : JSON.parse(sessionStorage.getItem("language")).lang].sidebarTitle.decrypt;
            case "/about":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.about : language.language[language.language[JSON.parse(sessionStorage.getItem("language")).lang] == null ? 0 : JSON.parse(sessionStorage.getItem("language")).lang].sidebarTitle.about;
            default:
                break;
        }
    },

    //Allow to recover the title of menu
    getMenuTitle(menu) {
        switch(menu) {
            case "home":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.home : language.language[upSessionsStorage()].sidebarTitle.home;
            case "matrixReverse":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.matrixReverse : language.language[upSessionsStorage()].sidebarTitle.matrixReverse;
            case "encrypt":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.encrypt : language.language[upSessionsStorage()].sidebarTitle.encrypt;
            case "decrypt":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.decrypt : language.language[upSessionsStorage()].sidebarTitle.decrypt;
            case "about":
                return sessionStorage.getItem("language")  == null ? language.language[language.lang].sidebarTitle.about : language.language[upSessionsStorage()].sidebarTitle.about;
            default:
                break;
        }
    }
}