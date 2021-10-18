import { Component } from 'react';
import { v4 as uid } from 'uuid';
// import dotenv from 'dotenv'

import {
  ContactFilter,
  Section,
  ContactInputForm,
  ContactsList,
  Container,
} from './components/';

import localStorage from 'utils/localStorage';
import pixabayAPI from './utils/pixabayAPI';
import { Searchbar } from './components/Searchbar/Searchbar';
import { StyledApp } from './App.styled';

// if (!localStorage.load('contacts')) {
//   localStorage.save('contacts', initialContacts);
// }

class App extends Component {
  state = {
    contacts: localStorage.load('contacts'),
    filter: '',
    page: 1,
  };

  searchPhotos = query => {
    pixabayAPI.search({
      query,
      page: this.state.page,
    });
  };

  // addNewContact = newContact => {
  //   this.setState(prevState => {
  //     const contactNameAlreadyExist = this.state.contacts.find(
  //       contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
  //     );
  //
  //     if (contactNameAlreadyExist) {
  //       alert(`${newContact.name} is already in contacts!`);
  //       return;
  //     }
  //
  //     const newContactWithId = { ...newContact, id: uid() };
  //
  //     const newContactList = {
  //       contacts: [...prevState.contacts, newContactWithId],
  //     };
  //
  //     return { ...prevState, ...newContactList };
  //   });
  // };
  //
  // setFilter = nameToFilter => {
  //   this.setState(prevState => {
  //     return { ...prevState, filter: nameToFilter };
  //   });
  // };
  //
  // deleteContact = contactId => {
  //   const filteredArray = this.state.contacts.filter(
  //     contact => contact.id !== contactId,
  //   );
  //   this.setState(prevState => {
  //     return { ...prevState, contacts: filteredArray };
  //   });
  // };
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   localStorage.save('contacts', this.state.contacts);
  // }

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={this.searchPhotos} />
      </StyledApp>
    );
  }
}

export default App;

// <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal>

// <Section title="Phonebook">
//   <Container>
//     <ContactInputForm onSubmit={this.addNewContact} />
//   </Container>
// </Section>
//
// <Section title="Contacts">
//   <Container>
//     <ContactFilter
//       filter={this.state.filter}
//       onFilter={this.setFilter}
//     />
//
//     <ContactsList
//       contacts={filteredContacts}
//       handleDel={this.deleteContact}
//     />
//   </Container>
// </Section>
