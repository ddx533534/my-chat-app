import './App.css';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { useState } from 'react';
import Chat from './function/chat';




function App() {
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [duration, setDuration] = useState(0);

  const onChange = (value) => {
    setValue(value)
    console.log(value)
  }

  return (
    <div >
      <InputGroup>
        <Input style={inputStyle} defaultValue={"请输入您的问题"} value={value} onChange={onChange} />
        <InputGroup.Button onClick={() => {
          setAnswer("答案正在生成，请稍候")
          var preTime = Date.parse(new Date());
          setDuration(0)
          Chat(value)
            .then((res) => {
              setAnswer("答案已生成：" + res.text)
              var currentTime = Date.parse(new Date());
              setDuration(((currentTime - preTime) / 1000.0).toFixed(3));
              console.log(res.text);
              console.log(currentTime);
              console.log(preTime);
              return res.text;
            })
            .catch((err) => {
              setAnswer("答案生成失败")
              console.log(err)
              return err;
            });
        }}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>

      <p style={styles}>{answer} </p>
      <p>耗时:{duration}s</p>
    </div>
  );
}
const inputStyle = {
  width: '620px',
  marginBottom: 10
};

const styles = {
  width: "100%",
  innerHeight: 300,
  backgroundColor: "coral",
  marginBottom: 10
};

export default App;
