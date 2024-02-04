import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import BgImage from "../Assets/Images/bgImage.avif";
import Knife1 from "../Assets/Images/knife1.jpg";
import Knife2 from "../Assets/Images/knife2.jpeg";
import Knife3 from "../Assets/Images/knife3.jpg";
import Knife4 from "../Assets/Images/knife4.jpg";
import Knife5 from "../Assets/Images/knife5.jpg";
import Knife6 from "../Assets/Images/knife6.jpg";
import LadyDevil from "../Assets/Images/ladyDevil.avif";
import GameSettings from "../Assets/Images/gameSettings.avif";
import StarRate from "../Assets/Images/starRate.jpeg";

import { ReactComponent as MenuFillIcon } from '../Assets/Icons/menuFill.svg';
import { ReactComponent as DartIcon } from '../Assets/Icons/ropeDart.svg';
import { ReactComponent as PencilIcon } from '../Assets/Icons/pencil.svg';
import { ReactComponent as CheckBoxCheckedIcon } from '../Assets/Icons/checkboxChecked.svg';
import { ReactComponent as CheckBoxIcon } from '../Assets/Icons/checkboxFill.svg';
import { ReactComponent as BowAndArrow } from '../Assets/Icons/bowAndArrow.svg';
import { ReactComponent as FilmOpen } from '../Assets/Icons/filmOpen.svg';
import { ReactComponent as KnifeMilitary } from '../Assets/Icons/knifeMilitary.svg';
import { ReactComponent as RedHeart } from '../Assets/Icons/red-Heart.svg';
import { ReactComponent as ShieldIcon } from '../Assets/Icons/shield.svg';
import { ReactComponent as SunriseIcon } from '../Assets/Icons/sunrise.svg';
import { ReactComponent as RightArrowIcon } from '../Assets/Icons/arrowRight.svg';
import { ReactComponent as SamuraiHelmet } from '../Assets/Icons/samuraiHelmet.svg';
import { ReactComponent as KnifeIcon } from '../Assets/Icons/weapon.svg';
import { ReactComponent as OfficerHead } from '../Assets/Icons/officerHead.svg';
import { ReactComponent as IconMan } from '../Assets/Icons/iconMan.svg';
import { ReactComponent as FireAce } from '../Assets/Icons/fireAce.svg';
import { ReactComponent as CardsIcon } from '../Assets/Icons/cards.svg';

const useStyles = makeStyles((theme) => ({
    dashboardContainer: {
        width: "100%",
        height: "100%",
    },
    topContainer: {
        width: "100%",
        height: "65%",
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBlock: 15,
        "& h3": {
            margin: 0,
            color: "#d9b68f",
        },
        "& span": {
            fontSize: 13,
        },
        "& .icon": {
            width: 30,
            height: 30,
        },
    },
    headerCenterDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        "& .levelText": {
            display: "flex",
            gap: 4,
        },
        "& .leftDart": {
            transform: "rotate(-90deg)"
        },
    },
    centerContainer: {
        display: "flex",
        margin: 15,
        gap: 15,
    },
    leftContainer: {
        width: "65%",
        display: "flex",
        flexDirection: "column",
    },
    leftContent: {
        backgroundColor: "#352e24",
        "& .images": {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
            border: "2px solid #534324",
            padding: 6,
            margin: 5,
            "& img": {
                width: "92px",
                height: "70px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                borderRadius: 8,
                boxShadow: "0px 0px 2px 2px rgb(81 73 73 / 70%)",
            },
            "& .unChecked": {
                position: "absolute",
                margin: "42px 0px 0px -28px",
                fill: "#352e24",
                border: "1px solid #f9ac66",
                "& path": {
                    fill: "#534324"
                },
            },
            "& .checked": {
                width: "24px",
                height: "24px",
                border: "none !important",
                position: "absolute",
                margin: "40px 0px 0px -29px",
                fill: "#352e24",
            },
        },
    },
    leftTopImage: {
        display: "flex",
        alignItems: "flex-end",
        "& .svgElement": {
            width: 80,
            height: 70,
            backgroundColor: "#352e24",
            borderTop: "4px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& svg": {
                width: 24,
                height: 24,
                "& path": {
                    fill: "#f9ac66",
                },
            }
        },
        "& img": {
            width: "80px",
            height: "65px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            borderRadius: "8px 8px 0 0",
            boxShadow: "0px 0px 2px 2px rgb(81 73 73 / 70%)",
        },
        "& .gameSettings": {
            borderRadius: "25px 25px 0 0",
        },
    },
    rightContent: {
        width: "35%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // overflow: "auto",
        "& img": {
            width: "100%",
            height: "185px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            borderRadius: "4px 4px 0 0",
        },
        "& .labels": {
            display: "flex",
            flexDirection: "column",
            gap: 4,
            backgroundColor: "#ddc376",
            color: "#352308",
            borderRadius: "0 0 4px 4px",
            padding: "20px 10px",
            maxHeight: 270,
            overflowY: "overlay",
            "& .label": {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #655111",
                padding: 2,
            },
        },
    },
    bottomContainer: {
        width: "100%",
        height: "30%",
    },
    bodyContainer: {
        width: "100%",
        "& .images": {
            display: "flex",
            gap: 10,
            margin: "10px 0",
            position: "relative",
            overflow: "auto",
            padding: 8,
            "& img": {
                width: "70px",
                height: "70px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
                borderRadius: 8,
                border: "2px solid #534324",
            },
            "& .unChecked": {
                position: "absolute",
                margin: "45px 0px 0px -30px",
                fill: "#352e24",
                border: "1px solid #f9ac66",
                "& path": {
                    fill: "#534324"
                },
            },
            "& .checked": {
                width: "24px",
                height: "24px",
                border: "none !important",
                position: "absolute",
                margin: "44px 0px 0px -31px",
                fill: "#352e24",
            },
        },
        "& .labelWrapper": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            paddingTop: 5,
            "& h4": {
                margin: 0,
            },
            "& .rightArrow": {
                display: "flex",
                position: "absolute",
                right: 16,
            },

        },
    },
    footerContainer: {
        width: "100%",
        height: 88,
        backgroundColor: "#313030",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        marginTop: 10,
        position: "fixed",
        bottom: 0,
        "& .icon": {
            width: 30,
            height: 30,
        },
        "& .manIcon": {
            width: 30,
            height: 30,
            filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
            "& path": {
                fill: "#e5b73c",
            },
        },
    },
}));


const HomePage = () => {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);
    const [knifeToggle, setKnifeToggle] = useState(false);
    const [selected, setSelected] = useState(null);
    const [knifeSelected, setKnifeSelected] = useState(null);
    console.log(selected, "selected");
    console.log(knifeSelected, "knifeSelected");

    const handleUpperCheckboxClick = (index) => {
        setSelected(index);
        setToggle(!toggle);
    };

    const handleLowerCheckboxClick = (index) => {
        setKnifeSelected(index);
        setKnifeToggle(!knifeToggle);
    };

    const images = [{
        knife: Knife1
    },
    {
        knife: Knife2
    },
    {
        knife: Knife3
    },
    {
        knife: Knife4
    },
    {
        knife: Knife5
    },
    {
        knife: Knife6
    },
    ]
    return (
        <div className={classes.dashboardContainer}>
            <div className={classes.topContainer}>
                <div className={classes.header}>
                    <div>
                        <MenuFillIcon className='icon' />
                    </div>
                    <div className={classes.headerCenterDiv}>
                        <h3>Roua SplinterHeart</h3>
                        <div className="levelText">
                            <DartIcon className="leftDart" />
                            <span>LEVEL 12</span>
                            <DartIcon />
                        </div>
                    </div>
                    <div>
                        <PencilIcon className='icon' />
                    </div>
                </div>
                <div className={classes.centerContainer}>
                    <div className={classes.leftContainer}>
                        <div className={classes.leftTopImage}>
                            <div className="svgElement">
                                <SamuraiHelmet />
                                <KnifeIcon />
                            </div>
                            <img src={GameSettings} alt="gameSettings" className='gameSettings' />
                            <img src={StarRate} alt="star" />
                        </div>
                        <div className={classes.leftContent}>
                            <div className="images" >
                                {images?.map((item, index) => {
                                    return (
                                        <div key={index} onClick={() => handleUpperCheckboxClick(index)}>
                                            <img src={item.knife} alt='Knife' />
                                            {selected === index ? (
                                                <CheckBoxCheckedIcon className='checked' />
                                            ) : (
                                                <CheckBoxIcon className='unChecked' />
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightContent}>
                        <img src={LadyDevil} alt='ladyDevil' />
                        <div className="labels">
                            <div className='label'>
                                <RedHeart />
                                <span>260</span>
                            </div>
                            <div className='label'>
                                <FilmOpen />
                                <span>127</span>
                            </div>
                            <div className='label'>
                                <ShieldIcon />
                                <span>190</span>
                            </div>
                            <div className='label'>
                                <BowAndArrow />
                                <span>427</span>
                            </div>
                            <div className='label'>
                                <KnifeMilitary />
                                <span>200</span>
                            </div>
                            <div className='label'>
                                <SunriseIcon />
                                <span>400</span>
                            </div>
                            <div className='label'>
                                <BowAndArrow />
                                <span>300</span>
                            </div>
                            <div className='label'>
                                <ShieldIcon />
                                <span>330</span>
                            </div>
                            <div className='label'>
                                <RedHeart />
                                <span>260</span>
                            </div>
                            <div className='label'>
                                <FilmOpen />
                                <span>280</span>
                            </div>
                            <div className='label'>
                                <FilmOpen />
                                <span>280</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomContainer}>
                <div className={classes.bodyContainer}>
                    <div className="images">
                        {images?.map((item, index) => {
                            return (
                                <div key={index} onClick={() => handleLowerCheckboxClick(index)}>
                                    <img src={item.knife} alt='Knife' />
                                    {knifeSelected === index ? (
                                        <CheckBoxCheckedIcon className='checked' />
                                    ) : (
                                        <CheckBoxIcon className='unChecked' />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <div className='labelWrapper'><h4>Glttering Edge |</h4><span>short sword</span><div className='rightArrow'><RightArrowIcon /></div></div>
                </div>
                <div className={classes.footerContainer}>
                    <FireAce className='icon' />
                    <OfficerHead className='icon' />
                    <CardsIcon className='icon' />
                    <IconMan className='manIcon' />
                </div>
            </div>
        </div >
    )
}

export default HomePage