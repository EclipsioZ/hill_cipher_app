import React, { useState } from 'react';
import '../css/Titlebar.css';
import minimize_icon from "../img/iconTitleBar/min-w-12.png";
import restore_icon from "../img/iconTitleBar/restore-w-12.png";
import close_icon from "../img/iconTitleBar/close-w-12.png";
import max_icon from "../img/iconTitleBar/max-w-12.png";
import appIcon from "../img/LogoHC.png";
import language from './language.jsx';

const ipcRenderer = window.require('electron').ipcRenderer;

//Get the list of all language
var listLang = language.getListLang();


const Titlebar = () => {

    //Value of if the windows button is hover
    const [isActive, setIsActive] = useState();

    //Check if the page is in fullscreen
    const [isMaximized, setIsMaximized] = useState();

    //Get the parameter of each language
    const [langs] = useState(listLang);

    //Props of title of the page
    var [title, setTitle] = useState(language.getTitle(window.location.pathname));

    //Props to check if the options value is selected
    var [selected] = useState( sessionStorage.getItem("language")  == null ? { "label": language.language[language.lang].label, "lang": language.lang } : JSON.parse(sessionStorage.getItem('language')));
    

    //Function to update the value "selected" and the language of the application
    const handleSelectedChange = (e) => {
        selected = {"label": e.target.value, "lang": e.target.options.selectedIndex};
        sessionStorage.setItem('language', JSON.stringify(selected));
        setTitle(language.getTitle(window.location.pathname));
        window.location.reload(false);
    };

    ipcRenderer.on('focused', () => {
        setIsActive(true)
    })

    ipcRenderer.on('blurred', () => {
        setIsActive(false)
    })

    ipcRenderer.on('maximized', () => {
        setIsMaximized(true);
    })

    ipcRenderer.on('unmaximized', () => {
        setIsMaximized(false);
    })

    const minimizeHandler = () => {
        ipcRenderer.invoke('minimize-event')
    }

    const maximizeHandler = () => {
        ipcRenderer.invoke('maximize-event')
    }

    const unmaximizeHandler = () => {
        ipcRenderer.invoke('unmaximize-event')
    }

    const closeHandler = () => {
        ipcRenderer.invoke('close-event')
    }

    return (
        <div className="Titlebar">
            <div
                className={isActive ? 'Title-Bar' : 'Title-Bar-inactive'}
            >
                <div className="Titlebar-drag-region"></div>
                <div className="Title-Bar__section-icon">
                    <img className="section-icon__logo" src={appIcon} alt="logo"></img>
                    <h1 className="section-icon__title">Hill Cipher</h1>
                </div>
                <div className="Title-Bar__section-center">
                    <p className="Title">{title}</p>
                </div>
                <div className="Title-Bar__section-windows-control">
                    <div>
                        <select defaultValue={selected.label} name="lang" style={{marginRight: "10px"}} onChange={e => handleSelectedChange(e)}>
                            { langs.map(({label, id}) => (
                           <option key={id} value={label}>{label}</option>     
                            )) }
                        </select>
                    </div>
                    <div
                        className="section-windows-control_box minimize-logo" onClick={minimizeHandler}>
                        <img src={minimize_icon} alt='minimize-icon' className={isActive ? 'minimize-active_logo' : 'minimize-inactive_logo'} draggable="false"/>
                    </div>
                    {isMaximized ?
                        <div
                            className="section-windows-control_box restore-logo" onClick={unmaximizeHandler}>
                           <img src={restore_icon} alt='restore-icon' onClick={unmaximizeHandler} className={isActive ? 'unmaximize-active_logo' : 'unmaximize-inactive_logo'} draggable="false"/>
                        </div>
                        :
                        <div
                            className="section-windows-control_box maximize-logo" onClick={maximizeHandler}>
                            <img src={max_icon} alt='maximize-icon' className={isActive ? 'maximize-active_logo' : 'maximize-inactive_logo'} draggable="false"/>
                        </div>
                    }
                    <div
                        className="section-windows-control_box close-logo" onClick={closeHandler}>
                        <img src={close_icon} alt='close-icon' className={isActive ? 'close-active_logo' : 'close-inactive_logo'} draggable="false"/>
                    </div>
                </div>
                <div
                    style={isMaximized ? { display: 'none' } : {}}
                    className="resizer">
                </div>
            </div>
        </div >
    )
}

export default Titlebar