import React from 'react';
import './ServicesList.css';
import serviceData from "../../../assets/data/serviceData";
import ServiceItem from "./ServiceItem";

const ServicesList = () => {
    return (
        <>
            {
                serviceData.map(item => <ServiceItem item={item} key={item.id}/>)
            }
        </>
    );
};

export default ServicesList;
