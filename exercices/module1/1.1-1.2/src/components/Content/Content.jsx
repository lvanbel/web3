import Part from "components/Part/Part";

const Content = (props) => {
    console.log(props);
    return (
        <>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </>
    );
};

export default Content;