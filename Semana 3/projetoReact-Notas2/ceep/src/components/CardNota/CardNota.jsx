import React, { Component } from "react";
import "./estilo.css";
// import deleteSVG from "../../assets/img/delete.svg" //importar como imagem
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg"; //como componente

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/* <img src={deleteSVG}></img> */}
          <DeleteSVG onClick={this.apagar.bind(this)}></DeleteSVG>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
