
    import React from "react";

    import ReactDOM from "react-dom";

    window.Components = {};


    import Wrapper from '../node_modules/better-docs/lib/wrapper.js';

    window.React = React;

    window.ReactDOM = ReactDOM;

    window.Wrapper = Wrapper;

  
      import _CustomWrapper from '../src/wrapper/Component.js';

      Components._CustomWrapper = _CustomWrapper;

      import Accordion from '../src/components/Accordion.js';
Components.Accordion = Accordion;

import Footer from '../src/components/Footer.js';
Components.Footer = Footer;

import Nav from '../src/components/Nav.js';
Components.Nav = Nav;

import HeaderProfile from '../src/components/HeaderProfile.js';
Components.HeaderProfile = HeaderProfile;

import HeaderTransaction from '../src/components/HeaderTransaction.js';
Components.HeaderTransaction = HeaderTransaction;

import InputText from '../src/components/InputText.js';
Components.InputText = InputText;

import ItemListTransaction from '../src/components/ItemListTransaction.js';
Components.ItemListTransaction = ItemListTransaction;

import ItemTransaction from '../src/components/ItemTransaction.js';
Components.ItemTransaction = ItemTransaction;

import Home from '../src/Views/Home.js';
Components.Home = Home;

import Routes from '../src/routes/index.js';
Components.Routes = Routes;

import SelectCat from '../src/components/SelectCat.js';
Components.SelectCat = SelectCat;

import SignIn from '../src/Views/SignIn.js';
Components.SignIn = SignIn;

import Transactions from '../src/Views/Transactions.js';
Components.Transactions = Transactions;

import User from '../src/Views/User.js';
Components.User = User;