import {pause, start} from "../../data/data.js";

export function SettingsPanel() {
    const container = document.createElement('div');
    container.id = 'settings';
    container.append('Settings')

    const buttonStartElement = document.createElement('button');
    buttonStartElement.append('Start');
    container.append(buttonStartElement)

    buttonStartElement.addEventListener('click', () => {
        start();
    })

    const buttonPauseElement = document.createElement('button');
    buttonPauseElement.append('Pause');
    container.append(buttonPauseElement);

    buttonPauseElement.addEventListener('click', () => {
        pause();
    })

    return container
}
