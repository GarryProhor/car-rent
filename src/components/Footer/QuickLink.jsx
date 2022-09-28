import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {quickLinks} from "../../assets/data/quickLinks";
import {Link} from "react-router-dom";

const QuickLink = () => {
    return (
        <div className='mb-4'>
            <h5 className='footer__link-title'>Быстрые ссылки</h5>
            <ListGroup>
                {
                    quickLinks.map(({path, display}) =>
                        <ListGroupItem key={path} className='p-0 mt-3 quick__link'>
                            <Link to={path}>{display}</Link>
                        </ListGroupItem>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default QuickLink;