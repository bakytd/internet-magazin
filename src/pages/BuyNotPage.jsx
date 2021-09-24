import React from 'react';
import Cards from 'react-credit-cards';

import Cleave from 'cleave.js/react';
import 'react-credit-cards/es/styles-compiled.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


// const BuyNotPage = () => {
// const history = useHistory()
// }
export default class BuyNotPage1 extends React.Component {

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    constructor(props, context) {
        super(props, context);
        this.onCreditNumberCardChange = this.onCreditNumberCardChange.bind(this);
        this.onCreditCardNumberFocus = this.onCreditCardNumberFocus.bind(this);
        this.onCreditCardDateChange = this.onCreditCardDateChange.bind(this);
        this.onCreditCardDateFocus = this.onCreditCardDateFocus.bind(this);
        this.onCreditCardCvcChange = this.onCreditCardCvcChange.bind(this);
        this.onCreditCardCvcFocus = this.onCreditCardCvcFocus.bind(this);
        this.onCreditCardNameChange = this.onCreditCardNameChange.bind(this);
        this.onCreditCardNameFocus = this.onCreditCardNameFocus.bind(this);
    }

    onCreditNumberCardChange(e) {
        this.setState({ number: e.target.value })



    }
    onCreditCardDateChange(e) {
        this.setState({ expiry: e.target.value })
    }
    onCreditCardCvcChange(e) {
        this.setState({ cvc: e.target.value })
    }
    onCreditCardNameChange(e) {
        this.setState({ name: e.target.value })
    }

    onCreditCardNumberFocus(e) {
        // update some state
        this.setState({ focus: e.target.number });
    }
    onCreditCardDateFocus(e) {
        // update some state
        this.setState({ focus: e.target.date });
    }
    onCreditCardCvcFocus(e) {
        // update some state
        this.setState({ focus: e.target.cvc });
    }
    onCreditCardNameFocus(e) {
        // update some state
        this.setState({ focus: e.target.name });
    }


    render() {
        return (
            <div className="center-pos">
                <div id="PaymentForm">
                    <Cards

                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    {/* <form> */}

                    <Cleave
                        type="text"
                        style={{
                            width: "100%",
                            paddingLeft: "8px",
                            paddingTop: "6px",
                            paddingBottom: "6px",

                            border: this.state.error
                                ? "2px solid red"
                                : this.state.value
                                    ? "2px solid #2684ff"
                                    : "2px solid hsl(0, 0%, 80%)",
                            outline: "0px",

                            "&:hover": {
                                border: "2px solid green"
                            }
                        }}
                        placeholder={this.props.placeholder}
                        onChange={this.handleInput}
                        onFocus={this.checkErrors}
                        value={this.state.value}
                        onBlur={this.sendData}
                        type="email" placeholder="name@example.com"
                        className="input-1"
                        placeholder="Enter your credit card number"


                        options={{ creditCard: true }}
                        onFocus={this.onCreditCardNumberFocus}
                        onChange={this.onCreditNumberCardChange} />

                    <Cleave
                        type="text"
                        style={{
                            width: "100%",
                            paddingLeft: "8px",
                            paddingTop: "6px",
                            paddingBottom: "6px",

                            border: this.state.error
                                ? "2px solid red"
                                : this.state.value
                                    ? "2px solid #2684ff"
                                    : "2px solid hsl(0, 0%, 80%)",
                            outline: "0px",

                            "&:hover": {
                                border: "2px solid green"
                            }
                        }}
                        placeholder={this.props.placeholder}
                        onChange={this.handleInput}
                        onFocus={this.checkErrors}
                        value={this.state.value}
                        onBlur={this.sendData}

                        className="input-1"
                        placeholder="Date"

                        options={{ date: true }}
                        options={{ datePattern: ['m', 'y'] }}

                        onChange={this.onCreditCardDateChange}
                        onFocus={this.onCreditCardDataFocus}
                    />
                    <Cleave
                        type="text"
                        style={{
                            width: "100%",
                            paddingLeft: "8px",
                            paddingTop: "6px",
                            paddingBottom: "6px",

                            border: this.state.error
                                ? "2px solid red"
                                : this.state.value
                                    ? "2px solid #2684ff"
                                    : "2px solid hsl(0, 0%, 80%)",
                            outline: "0px",

                            "&:hover": {
                                border: "2px solid green"
                            }
                        }}
                        placeholder={this.props.placeholder}
                        onChange={this.handleInput}
                        onFocus={this.checkErrors}
                        value={this.state.value}
                        onBlur={this.sendData}

                        className="input-1"
                        placeholder="Name"
                        options={{ date: true }}
                        options={{ datePattern: ['m', 'y'] }}

                        onChange={this.onCreditCardNameChange}

                        onFocus={this.onCreditCardNameFocus}
                    />


                    {/* </form> */}



                    <Link to="/">
                        <Button>Оплатить</Button>
                    </Link>
                </div>
            </div>
        );
    }
}