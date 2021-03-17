import React from 'react';

export default class Form extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      form: {
        errors: {}
      },
      selectValue: "",
      selectStatus: ""
    }
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  handleStatusChange(e) {
    this.setState({ selectStatus: e.target.value });
  }

  submitHandler(event) {
    event.preventDefault();

    const elements = event.target.elements;

    console.log(elements.username.value, this.state.selectValue, elements.winrate.value, this.state.selectStatus, elements.userphoto.value );

    if (elements.winrate.value.length < 3) {
      this.setState(prevState => {
        return {
          ...prevState,
          form: {
            ...prevState.form,
            errors: {
              ...prevState.form.errors,
              winrate: 'Length must be greater than 6 symbols',
            }
          }
        }
      })

      return null;
    }

    this.setState(prevState => {
      return {
        ...prevState,
        form: {
          ...prevState.form,
          errors: {}
        }
      }
    })
  }

  render() {
    return (
        <div className='form-wrapper'>
            <h2 className='form-header'>You can create your pro player here</h2>
      <form action="#" onSubmit={(event) => this.submitHandler(event)}>
        <label htmlFor="1">Pro player name</label>
        <input type="text" name="username" id="1" />
        <label htmlFor="2">Game</label>
        <select id="2" onChange={this.handleDropdownChange} name='game'>
            <option value="apex" key="9">Apex</option>
            <option value="cod" key="3">COD WZ</option>
        </select>
        <label htmlFor="3">Pro player winrate</label>
        <input type="number" name="winrate" id="3" />
        { this.state.form.errors.winrate && <p style={{color: 'purple'}}>Your winrate must be greater than 3</p> }
        <label htmlFor="online">Game</label>
        <select id="online" onChange={this.handleStatusChange} name='status'>
            <option value="online" key="7">Online</option>
            <option value="online" key="8">Offline</option>
        </select>
        <label htmlFor="5">Pro player photo</label>
        <input type="text" name="userphoto" id="5" />
        <button className="submit" type="submit">Submit</button>
      </form>
      </div>
    );
  }
}