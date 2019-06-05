import React, { Component } from "react";

import axios from "axios";

import {
  Wrapper,
  Container,
  Form,
  Header,
  Button,
  Input,
  Response,
  Footer
} from "./styles";

import { formatData } from "../../utils";

import Spinner from "../Spinner";

class Home extends Component {
  state = {
    inputValue: "",
    loading: false,
    hasResponse: false,
    watsonData: null
  };

  handleText = inputValue => {
    this.setState({ inputValue });
  };

  handleWatsonData = watsonData => {
    const data = formatData(watsonData);
    return data;
  };

  submitForm = (e, formData) => {
    e.preventDefault();
    this.setState({ loading: true });

    const body = {
      message: formData
    };

    axios
      .post("http://localhost:3001/message", body)
      .then(response => {
        console.log(response.data.response);
        const watsonData = this.handleWatsonData(response.data.response);
        this.setState({ loading: false, watsonData });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { inputValue, watsonData, loading } = this.state;

    return (
      // <Wrapper>
      <Container>
        <Header>
          Oi, eu sou o Watson. <br /> Escreva uma frase e eu adivinho sobre o
          que você está falando
        </Header>
        <Form onSubmit={e => this.submitForm(e, inputValue)}>
          <Input
            name=""
            cols="15"
            rows="5"
            placeholder="Escreva aqui sua frase aqui"
            onChange={e => this.handleText(e.target.value)}
            value={inputValue}
          />
          <Button>Enviar</Button>
        </Form>
        <Wrapper>
          <Response loading={loading}>
            {loading ? <Spinner /> : watsonData}
          </Response>
        </Wrapper>
        <Footer>
          Desenvolvido por: Gustavo Guterres Leite | Luís Fernando Volkweis
          Filho | Leonardo Redin Figueiró
        </Footer>
      </Container>
      // </Wrapper>
    );
  }
}

export default Home;
