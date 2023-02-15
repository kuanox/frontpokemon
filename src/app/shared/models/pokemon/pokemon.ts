import { Abilities } from "./Abilities";

export class Pokemon {
    id: number;
    name!: string;
    types: [] = [];
    species!: string;
    height!: string;
    weight!: string;
    abilities: Abilities[] = [];
    url_image_dream_worl!: string;
    url_image_home!: string;
    hp!: string;
    attack!: string;
    defense!: string;
    special_attack!: string;
    special_defense!: string;
    speed!: string;
    chains: [] = [];
    chain_group!: string;
    national!: string;
    constructor(id: number,
                name: string,
                types: [] = [],
                species: string,
                height: string,
                weight: string,
                abilities: Abilities[] = [],
                url_image_dream_worl: string,
                url_image_home: string,
                hp: string,
                attack: string,
                defense: string,
                special_attack: string,
                special_defense: string,
                speed: string,
                chains: [] = [],
                chain_group: string,
                national: string) {
                                    this.id = id;
                                    this.name = name;
                                    this.types = types;
                                    this.species = species;
                                    this.height = height;
                                    this.weight = weight;
                                    this.abilities = abilities;
                                    this.url_image_dream_worl = url_image_dream_worl;
                                    this.url_image_home = url_image_home;
                                    this.hp = hp;
                                    this.attack = attack;
                                    this.defense = defense;
                                    this.special_attack = special_attack;
                                    this.special_defense = special_defense;
                                    this.speed = speed;
                                    this.chains = chains;
                                    this.chain_group = chain_group;
                                    this.national = national;
                                }
}
