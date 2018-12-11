import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: "Eggs" },
            { id: uuid(), name: "Milk" },
            { id: uuid(), name: "Streak" },
            { id: uuid(), name: "Water" },
        ]
    }
    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ margin: '20px 0 20px 0' }}
                    onClick={() => {
                        const name = prompt("Enter name");
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));

                        }
                    }}
                >
                    Add Item
                </Button>
                <ListGroup>
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                {name} 
                                <Button 
                                    classNames="remove-btn"
                                    style={{ margin: '20px ' }}
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                                >
                                    x
                                </Button>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;