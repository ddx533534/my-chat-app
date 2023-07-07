import React from "react";
import Typewriter from "typewriter-effect";

// 打字机式输出指定内容
function AutoPrinter(props) {
    console.log(props.value);
    return (<Typewriter
        options={{
            strings: props.value,
            autoStart: true,
            loop: false,
        }}
    />);
}

export default AutoPrinter;