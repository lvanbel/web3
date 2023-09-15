import LogoVinci from "components/Header/LOGO HE VINCI.png";

const Header = (props) => {
    console.log(props);
    return (
        <>
            <img src={LogoVinci} width="128"></img>
            <h1>{props.course}</h1>
        </>
    );
};

export default Header;