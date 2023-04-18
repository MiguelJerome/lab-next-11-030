import {readFile} from 'fs/promises'
import { join } from 'path';

/**
 * @typedef Item
 * @type {object}
 * @property {string} slug
 * @property {string} nom
 * @property {string} description
 * @property {string} image
 */

/**
 * @type {Array<Item>}
 */
let inventaire = null;

const loadInventaire = async () => {
    let inventaireData = await readFile(join(process.cwd(), 'model/inventaire.json'));
    inventaire = JSON.parse(inventaireData);
}

export const getInventaire = async () => {
    if(!inventaire) {
        await loadInventaire();
    }

    return inventaire;
}

export const getItem = async (slug) => {
    if(!inventaire) {
        await loadInventaire();
    }

    for(let item of inventaire) {
        if(item.slug === slug) {
            return item;
        }
    }

    return null;
}
