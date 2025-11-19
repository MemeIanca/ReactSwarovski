import type { ReactNode } from "react";

export interface CardProdutoProps {
    parcelamento: ReactNode;
    id: string | undefined;
    nome: string;
    descricao: string;
    preco: number;
    categorias: string[];
    imagem: string;
}
