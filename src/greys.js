import React from 'react';
import { Link } from 'react-router-dom';

let greys = [
    {
        id: "1",
        href: <Link to="/greys/1"></Link>,
        name: "Noether",
        backgroundColor: "#fcfcfc",
    },
    {
        id: "2",
        href: <Link to="/greys/2"></Link>,
        name: "Mozart",
        backgroundColor: "#f7f7f7"
    },
    {
        id: "3",
        href: "/posts/franklin",
        name: "Franklin",
        backgroundColor: "#f0f0f0"
    },
    {
        id: "4",
        href: "/posts/hypatia",
        name: "Hypatia",
        backgroundColor: "#dbdbdb" 
    },
    {
        id: "5",
        href: "/posts/goodall",
        name: "Goodall",
        backgroundColor: "#c2c2c2"
    },
    {
        id: "6",
        href: "/posts/cannon",
        name: "Cannon",
        backgroundColor: "#bababa"
    },
    {
        id: "7",
        href: "/profiles",
        name: "Chopin",
        backgroundColor: "#797979"
    },
    {
        id: "8",
        href: "/profiles",
        name: "Hamilton",
        backgroundColor: "#737373"
    },
    {
        id: "9",
        href: "/profiles",
        name: "Germain",
        backgroundColor: "#696969"
    },
    {
        id: "10",
        href: "/profiles",
        name: "Keller",
        backgroundColor: "#686868"
    },
    {
        id: "11",
        href: "/profiles",
        name: "Nikolayeva",
        backgroundColor: "#656565"
    },
    {
        id: "12",
        href: "/profiles",
        name: "Schweitzer",
        backgroundColor: "#616161"
    },
    {
        id: "13",
        href: "/profiles",
        name: "Herschel",
        backgroundColor: "#383838"
    },
    {   
        id: "14",
        href: "/profiles",
        name: "Buber",
        backgroundColor: "#3f3f3f"
    },
    {
        id: "15",
        href: "/profiles",
        name: "Stroustrup",
        backgroundColor: "#444444"
    },
    {
        id: "16",
        href: "/profiles",
        name: "Cori",
        backgroundColor: "#4f4f4f"
    },
    {
        id: "17",
        href: "/profiles",
        name: "Sadat",
        backgroundColor: "#7f7f7f"
    },
    {
        id: "18",
        href: "/profiles",
        name: "Parks",
        backgroundColor: "#5e5e5e"
    },
    {
        id: "19",
        href: "/profiles",
        name: "Witten",
        backgroundColor: "#7c7c7c"
    },
    {
        id: "20",
        href: "/profiles",
        name: "Neuhaus",
        backgroundColor: "#7e7e7e"
    },
    {
        id: "21",
        href: "/profiles",
        name: "",
        backgroundColor: "#858585"
    },
    {
        id: "22",
        href: "/profiles",
        name: "",
        backgroundColor: "#c0c0c0"
    },
    {
        id: "23",
        href: "/profiles",
        name: "",
        backgroundColor: "#5d5d5d"
    },
    {
        id: "24",
        href: "/profiles",
        name: "Rubinstein",
        backgroundColor: "#d9d9d9"
    },
    {
        id: "25",
        href: "/profiles",
        name: "Newton",
        backgroundColor: "#3d3d3d"
    },
    {
        id: "26",
        href: "/profiles",
        name: "Ada",
        backgroundColor: "#c7c7c7"
    },
    {
        id: "27",
        href: "/profiles",
        name: "",
        backgroundColor: "#474747"
    },
    {
        id: "28",
        href: "/profiles",
        name: "",
        backgroundColor: "#525252"
    },
    {
        id: "29",
        href: "/profiles",
        name: "Liszt",
        backgroundColor: "#8c8c8c"
    },
    {
        id: "30",
        href: "/profiles",
        name: "Evans",
        backgroundColor: "#606060"
    },
    {
        id: "31",
        href: "/profiles",
        name: "Woolf",
        backgroundColor: "#7d7d7d"
    },
    {
        id: "32",
        href: "/profiles",
        name: "",
        backgroundColor: "#838383"
    },
    {
        id: "33",
        href: "/profiles",
        name: "",
        backgroundColor: "#878787"
    },
    {
        id: "34",
        href: "/profiles",
        name: "",
        backgroundColor: "#c6c6c6"
    },
    {
        id: "35",
        href: "/profiles",
        name: "",
        backgroundColor: "#545454"
    },
    {
        id: "36",
        href: "/profiles",
        name: "",
        backgroundColor: "#e3e3e3"
    },
    {
        id: "37",
        href: "/profiles",
        name: "",
        backgroundColor: "#404040"
    },
    {
        id: "38",
        href: "/profiles",
        name: "",
        backgroundColor: "#434343"
    },
    {
        id: "39",
        href: "/profiles",
        name: "",
        backgroundColor: "#4a4a4a"
    },
    {
        id: "40",
        href: "/profiles",
        name: "",
        backgroundColor: "#535353"
    },
    {
        id: "41",
        href: "/profiles",
        name: "",
        backgroundColor: "#969696"
    },
    {
        id: "42",
        href: "/profiles",
        name: "",
        backgroundColor: "#636363"
    },
    {
        id: "43",
        href: "/profiles",
        name: "Curie",
        backgroundColor: "#828282"
    },
    {
        id: "44",
        href: "/profiles",
        name: "",
        backgroundColor: "#6e6e6e"
    },
    {
        id: "45",
        href: "/profiles",
        name: "",
        backgroundColor: "#6d6d6d"
    },
    {
        id: "46",
        href: "/profiles",
        name: "",
        backgroundColor: "#d4d4d4"
    },
    {
        id: "47",
        href: "/profiles",
        name: "",
        backgroundColor: "#4f4f4f"
    },
    {
        id: "48",
        href: "/profiles",
        name: "Somerville",
        backgroundColor: "#f3f3f3"
    },
    {
        id: "49",
        href: "/profiles",
        name: "",
        backgroundColor: "#464646"
    },
    {
        id: "50",
        href: "/profiles",
        name: "",
        backgroundColor: "#d6d6d6"
    },
    {
        id: "51",
        href: "/profiles",
        name: "",
        backgroundColor: "#d1d1d1"
    },
    {
        id: "52",
        href: "/profiles",
        name: "",
        backgroundColor: "#595959"
    },
    {
        id: "53",
        href: "/profiles",
        name: "Bassi",
        backgroundColor: "#a1a1a1"
    },
    {
        id: "54",
        href: "/profiles",
        name: "",
        backgroundColor: "#646464"
    },
    {
        id: "55",
        href: "/profiles",
        name: "",
        backgroundColor: "#8c8c8c"
    },
    {
        id: "56",
        href: "/profiles",
        name: "",
        backgroundColor: "#919191"
    },
    {
        id: "57",
        href: "/profiles",
        name: "",
        backgroundColor: "#949494"
    },
    {
        id: "58",
        href: "/profiles",
        name: "",
        backgroundColor: "#e0e0e0"
    },
    {
        id: "59",
        href: "/profiles",
        name: "",
        backgroundColor: "#e8e8e8"
    },
    {
        id: "60",
        href: "/profiles",
        name: "Schumann",
        backgroundColor: "#f4f4f4"
    },
    {
        id: "61",
        href: "/profiles",
        name: "",
        backgroundColor: "#4d4d4d"
    },
    {
        id: "62",
        href: "/profiles",
        name: "",
        backgroundColor: "#c9c9c9"
    },
    {
        id: "63",
        href: "/profiles",
        name: "",
        backgroundColor: "#c4c4c4"
    },
    {
        id: "64",
        href: "/profiles",
        name: "",
        backgroundColor: "#5a5a5a"
    },
    {
        id: "65",
        href: "/profiles",
        name: "",
        backgroundColor: "#a6a6a6"
    },
    {
        id: "66",
        href: "/profiles",
        name: "",
        backgroundColor: "#666666"
    },
    {
        id: "67",
        href: "/profiles",
        name: "",
        backgroundColor: "#707070"
    },
    {
        id: "68",
        href: "/profiles",
        name: "",
        backgroundColor: "#999999"
    },
    {   
        id: "69",
        href: "/profiles",
        name: "",
        backgroundColor: "#9e9e9e"
    },
    {
        id: "70",
        href: "/profiles",
        name: "",
        backgroundColor: "#dedede"
    },
    {
        id: "71",
        href: "/profiles",
        name: "",
        backgroundColor: "#454545"
    },
    {
        id: "72",
        href: "/profiles",
        name: "Comnena",
        backgroundColor: "#f5f5f5"
    },
    {
        id: "73",
        href: "/profiles",
        name: "",
        backgroundColor: "#4e4e4e"
    },
    {
        id: "74",
        href: "/profiles",
        name: "",
        backgroundColor: "#bfbfbf"
    },
    {
        id: "75",
        href: "/profiles",
        name: "",
        backgroundColor: "#bbbbbb"
    },
    {
        id: "76",
        href: "/profiles",
        name: "",
        backgroundColor: "#5c5c5c"
    },
    {
        id: "77",
        href: "/profiles",
        name: "",
        backgroundColor: "#5f5f5f"
    },
    {
        id: "78",
        href: "/profiles",
        name: "",
        backgroundColor: "#676767"
    },
    {
        id: "79",
        href: "/profiles",
        name: "",
        backgroundColor: "#a3a3a3"
    },
    {
        id: "80",
        href: "/profiles",
        name: "",
        backgroundColor: "#ababab"
    },
    {
        id: "81",
        href: "/profiles",
        name: "",
        backgroundColor: "#b8b8b8"
    },
    {
        id: "82",
        href: "/profiles",
        name: "",
        backgroundColor: "#cfcfcf"
    },
    {
        id: "83",
        href: "/profiles",
        name: "",
        backgroundColor: "#424242"
    },
    {
        id: "84",
        href: "/profiles",
        name: "Prokofjew",
        backgroundColor: "#fafafa"
    },
    {
        id: "85",
        href: "/profiles",
        name: "",
        backgroundColor: "#bdbdbd"
    },
    {
        id: "86",
        href: "/profiles",
        name: "",
        backgroundColor: "#b5b5b5"
    },
    {
        id: "87",
        href: "/profiles",
        name: "",
        backgroundColor: "#a8a8a8"
    },
    {
        id: "88",
        href: "/profiles",
        name: "",
        backgroundColor: "#9c9c9c"
    },
    {
        id: "89",
        href: "/profiles",
        name: "",
        backgroundColor: "#8f8f8f"
    },
    {
        id: "90",
        href: "/profiles",
        name: "",
        backgroundColor: "#6b6b6b"
    },
    {
        id: "91",
        href: "/profiles",
        name: "",
        backgroundColor: "#626262"
    },
    {
        id: "92",
        href: "/profiles",
        name: "",
        backgroundColor: "#5b5b5b"
    },
    {
        id: "93",
        href: "/profiles",
        name: "",
        backgroundColor: "#4b4b4b"
    },
    {
        id: "94",
        href: "/profiles",
        name: "",
        backgroundColor: "#414141"
    },
    {
        id: "95",
        href: "/profiles",
        name: "",
        backgroundColor: "#3e3e3e"
    },
    {
        id: "96",
        href: "/profiles",
        name: "Cleopatra",
        backgroundColor: "#3b3b3b"
    },
    {
        id: "97",
        href: "/profiles",
        name: "Bach",
        backgroundColor: "#7b7b7b"
    },
    {
        id: "98",
        href: "/posts/Beethoven",
        name: "Beethoven",
        backgroundColor: "#7a7a7a"
    },
    {
        id: "99",
        href: "/profiles",
        name: "Brahms",
        backgroundColor: "#757575"
    }
];

export default greys;




