export interface SingleType {
    key: number;
    letter: string;
    guessed: boolean;
}

export interface MetadataPassword {
    category: string;
    hint: string;
}

export interface ItemScore {
    name: string;
    time: number;
}

export interface CategoryItem extends MetadataPassword {
    id: number;
    title: string;
}

/*
    Interfaces for components-styled
*/
export interface IBackgroundProps {
    backgroundColor: string;
}

export interface IFontSize {
    fontSize: string;
}