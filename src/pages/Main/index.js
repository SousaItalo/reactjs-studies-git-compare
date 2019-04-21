import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false,
  };

  handleAddRepository = async (event) => {
    event.preventDefault();

    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({
        repositoryError: true,
      });
    }
  };

  render() {
    const { repositoryInput, repositories, repositoryError } = this.state;

    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form error={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repo"
            value={repositoryInput}
            onChange={event => this.setState({ repositoryInput: event.target.value })}
          />
          <button type="submit"> Ok </button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
