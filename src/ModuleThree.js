import ReactPlayer from "react-player/youtube";

export const MyVideo = (props) => {
    return (
        <div>
            <hr />
            <ReactPlayer url={props.url} playing={true} volume={0.12} controls />
            <hr />
        </div>
    );
};

export function Audio() {

    const bird1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    function toggle1() {
        if (bird1.paused) {
            bird1.play();
        } else {
            bird1.pause();
        }
    };


    return (
        <div>
            <button onClick={toggle1}>Caspian Tern 1</button>
        </div>
    );
} 