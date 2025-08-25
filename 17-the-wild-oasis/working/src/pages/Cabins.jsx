import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {useEffect, useState} from "react";
import {getCabins} from "../services/apiCabins.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Button from "../ui/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import AddCabin from "../features/cabins/AddCabin.jsx";

function Cabins() {


    return (
        <>

            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / sort</p>

            </Row>
            <Row>
                <CabinTable/>
                <AddCabin/>
            </Row>

        </>
    );
}

export default Cabins;
