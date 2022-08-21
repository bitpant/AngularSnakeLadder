import { Ladder } from "./ladder";
import { Player } from "./player";
import { Snake } from "./snake";

export class Board {
    id!: string;
    size!: string;
    snakes!: Snake[];
    ladders!: Ladder[];
    players!: Player[];
}
