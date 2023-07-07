import { Input, Button, Container, Row, Col } from "rsuite";
import { useState } from "react";
import Chat from "../../function/chat";
import SearchIcon from '@rsuite/icons/Search';
import AutoPrinter from "../Border/Typewriter";



function ChatArea() {
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [duration, setDuration] = useState(0);

  const onChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }

  const handleChatProcess = () => {
    Chat(value)
      .then((res) => {
        setAnswer("答案已生成：" + res.text)
        // var currentTime = Date.parse(new Date());
        // // setDuration(((currentTime - preTime) / 1000.0).toFixed(3));
        console.log(res.text);
        return res.text;
      })
      .catch((err) => {
        setAnswer("答案生成失败")
        console.log(err)
        return err;
      });
  }

  return (
    <div style={{ width: "80%" }}>
      <Row style={{
        marginTop: "200px",
        display: "flex", marginRight: "200px", padding: "10px"
      }}>
        请输入您想提问的问题：
      </Row>
      <Row>
        <textarea style={{
          width: "100%",
          whiteSpace: 'pre-wrap',
          fontSize: "20px",
          fontWeight: "bold"
        }} autoFocus
          onChange={onChange} />
      </Row>

      <Row style={{ textAlign: "end" }} >
        <Button style={{ height: "30px", marginTop: "30px", marginBottom: "30px" }} onClick={() => {
          var preTime = Date.parse(new Date());
          setDuration(0)
          setAnswer("答案正在生成，请稍候。。。")
          if (value.length === 0 || (value.trim()).length === 0) {
            return
          }
          handleChatProcess();
        }}>
          Enter
        </Button>
      </Row>


      <Row style={{ display: "flex", backgroundColor: "#aaaaaa" }}>
        <AutoPrinter value={answer} />
      </Row>

      <p>耗时:{duration}s</p>
    </div>

  );
}

function Home() {
  return (
    <ChatArea />
  );
}
export default Home;


const textareaStyle = {
  minHeight: "25px",
  marginTop: "200px",
  width: "80%",
  whiteSpace: 'pre-wrap',
  fontSize: "20px",
  fontFamily: "bold"
}

const styles = {
  width: "100%",
  innerHeight: 300,
  backgroundColor: "coral",
  marginBottom: 10
};
