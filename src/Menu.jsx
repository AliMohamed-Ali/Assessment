import React , {useState} from "react";
import "./menu.css";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

const Menu = (props) => {
  const [productOpen, setProductOpen] = useState(false);
  const [statueOpen, setStatueOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleClick = (listName) => {
    switch (listName) {
      case "product":
        setProductOpen(!productOpen);
        break;
      case "statue":
        setStatueOpen(!statueOpen);
        break;
      case "city":
        setCityOpen(!cityOpen);
        break;
    }
  };

  const pnameHandleClick = (pname) => {
    let filterdItems = props.items.filter(
      (item) => item.product_name === pname
    );
    let statesSet = new Set();
    for (let item of filterdItems) {
      statesSet.add(item.address.state);
    }
    setStates([...statesSet]);
    if (!statueOpen) setStatueOpen(!statueOpen);
  };

  const stateHandleClick = (state) => {
    let filterdItems = props.items.filter(
      (item) => item.address.state === state
    );
    let citiesSet = new Set();
    for (let item of filterdItems) {
      citiesSet.add(item.address.city);
    }
    setCities([...citiesSet]);
    if (!cityOpen) setCityOpen(!cityOpen);
  };

  return (
    <div>
      <List
        className="list"
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <div>
            <ListSubheader
              className="list-sub"
              component="div"
              id="nested-list-subheader"
            >
              Filters
            </ListSubheader>
            <hr
              style={{ color: "#CBCBCB", margin: "0 auto 2rem", width: "96%" }}
            />
          </div>
        }
      >
        <ListItemButton
          className="list-btn"
          onClick={() => handleClick("product")}
        >
          <ListItemText primary="Products" />
          {productOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={productOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.pnames.map((pname,index) => {
              return (
                <ListItemButton key={index}
                  onClick={() => pnameHandleClick(pname)}
                  className="list-child"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={pname} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          className="list-btn"
          onClick={() => handleClick("statue")}
        >
          <ListItemText primary="Statue" />
          {statueOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={statueOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {states.map((state,index) => {
              return (
                <ListItemButton
                  onClick={() => stateHandleClick(state)}
                  className="list-child"
                  sx={{ pl: 4 }} 
                  key={index}
                >
                  <ListItemText primary={state} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          className="list-btn"
          onClick={() => handleClick("city")}
        >
          <ListItemText primary="City" />
          {cityOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={cityOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {cities.map((city,index) => {
              return (
                <ListItemButton key={index} className="list-child" sx={{ pl: 4 }}>
                  <ListItemText primary={city} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Menu;
