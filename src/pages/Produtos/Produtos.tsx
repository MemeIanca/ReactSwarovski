import Ariana_Grande from '../../assets/imgs/transferir (1) (1) (1).png'
import './Produtos.css';
import { useEffect, useState } from 'react'
import { getJoias } from '../../Services/joiasService'
import type { Joias } from '../../types/Joias'
import CardProduto from '../../components/CardProduto/CardProduto';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Produtos() {

  const [joias, setJoias] = useState<Joias[]>([]);

  const fetchJoias = async () => {
    try {
      const dados = await getJoias(); // aguarde getJoias
      console.log("Dados retornados da API: ", dados);
      setJoias(dados);
    } catch (error) {
      console.error("Erro ao executar getJoias:", error);
    }
  }

  useEffect(() => {
    fetchJoias();
  }, [])


  return (
    <>
    <Header/>
    <main>

      <img className="Ariana" src={Ariana_Grande} alt="" />

      <section className="cards">
        {
          joias.map((j: Joias) => (
            <CardProduto
              id={j.id}
              nome={j.nome}
              descricao={j.descricao}
              preco={j.preco}
              imagem={j.imagens[0]}
              parcelamento={j.parcelamento}
              categorias={j.categorias}
            />
          ))
        }

      </section>
    </main>
      <Footer />
    </>
  )
}