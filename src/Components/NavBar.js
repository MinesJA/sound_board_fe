import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Route, Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu stackable>

        <Menu.Item name='myboardscontainer' as={NavLink} exact to="/users/:id/boards" active={activeItem === 'myboardscontainer'} onClick={this.handleItemClick} />
        <Menu.Item name='interfacecontainer' as={NavLink} exact to="/boards/:id" active={activeItem === 'interfacecontainer'} onClick={this.handleItemClick} />


      </Menu>
    )
  }
}

// <Route path="/something/:id" render={ (renderProps) => {
//    console.log(renderProps.match.params.id); => This will return whatever the user types in after "something/"
//
//    Use this slug to find matching data to render. Return it and it will render.
//    <BetCard info={info} />
// }}

export default NavBar
