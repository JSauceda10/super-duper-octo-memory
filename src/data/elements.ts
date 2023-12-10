import { faTableColumns } from "@fortawesome/free-solid-svg-icons";

import { FormItemType } from './enums';
//Export an array of input types called ELEMENTS. This will be an array of objects with one field : name
//List all the input types here.
export const ELEMENTS = [
    {
        name: 'button',
        draggable: true,
        icon: 'fa-solid fa-stop',
        type: FormItemType.ELEMENT
    },
    {
        name: 'input',
        draggable: true,
        icon: 'fa-regular fa-square',
        type: FormItemType.ELEMENT
    },
    {
        name: 'textarea',
        draggable: true,
        icon: 'fa-regular fa-window-maximize',
        type: FormItemType.ELEMENT
    },
    {
        name: 'dropdown',
        draggable: true,
        icon: 'fa-regular fa-square-caret-down',
        type: FormItemType.ELEMENT
    },
    {
        name: 'radio',
        draggable: true,
        icon: 'fa-solid fa-list-ul',
        type: FormItemType.ELEMENT
    },
    {
        name: 'checkbox',
        draggable: true,
        icon: 'fa-regular fa-square-check',
        type: FormItemType.ELEMENT
    },
    {
        name: 'text',
        draggable: true,
        icon: 'fa-solid fa-language',
        type: FormItemType.ELEMENT
    },
    {
        name: 'image',
        draggable: true,
        icon: 'fa-regular fa-image',
        type: FormItemType.ELEMENT
    },
    {
        name: 'space',
        draggable: true,
        icon: 'fa-solid fa-up-down',
        type: FormItemType.ELEMENT
    },
    {
        name: 'divider',
        draggable: true,
        icon: 'fa-solid fa-grip-lines',
        type: FormItemType.ELEMENT
    },
    {
        name: 'share',
        draggable: true,
        icon: 'fa-solid fa-share-nodes',
        type: FormItemType.ELEMENT
    },
    {
        name: 'uploader',
        draggable: true,
        icon: 'fa-solid fa-upload',
        type: FormItemType.ELEMENT
    },
].map(element => ({ ...element, type: FormItemType.ELEMENT }));
